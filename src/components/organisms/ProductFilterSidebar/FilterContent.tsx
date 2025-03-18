import { FC, useEffect, useState } from 'react';
import { List, Slider, Typography, Button } from '@mui/material';
import {
  filterContainerStyles,
  sliderContainerStyles,
  applyButtonStyles,
} from './ProductFilterSidebar.style';
import { brand, ProductFilterSidebarProps } from './ProductFilterSidebar';
import { ListItem, FormControlLabel, Checkbox } from '@mui/material';
import NowShoppingBy from './NowShoppingBy/NowShoppingBy';

const FilterContent: FC<ProductFilterSidebarProps> = ({
  filterOptions,
  applyFilters,
}) => {
  const { brands, priceRange } = filterOptions;
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<number[]>(priceRange);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortedBrands, setSortedBrands] = useState<brand[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    setSelectedPriceRange(newValue as number[]);
  };

  const handleBrandChange = (name: string) => {
    if (selectedBrands.includes(name)) {
      setSelectedBrands(selectedBrands.filter((el) => el !== name));
    } else {
      setSelectedBrands(Array.from(new Set([...selectedBrands, name])));
    }
  };

  useEffect(() => {
    const sortedBrands = [...brands].sort((a, b) => {
      const isASelected = selectedBrands.includes(a.name) ? -1 : 1;
      const isBSelected = selectedBrands.includes(b.name) ? -1 : 1;

      if (isASelected !== isBSelected) {
        return isASelected - isBSelected; // Checked brands first
      }

      if (b.count !== a.count) {
        return b.count - a.count; // Higher count first
      }

      return a.name.localeCompare(b.name); // Alphabetical as last criteria
    });
    setSortedBrands(sortedBrands);
  }, [brands]);

  const handleApplyFilters = () => {
    applyFilters({
      selectedBrans: selectedBrands,
      selectedPriceRange: selectedPriceRange,
    });

    const appliedFilters = [];

    const priceRangeFilter =
      selectedPriceRange[0] !== priceRange[0] ||
      selectedPriceRange[1] !== priceRange[1]
        ? `Price range: $${selectedPriceRange[0]} - $${selectedPriceRange[1]}`
        : null;

    if (priceRangeFilter) {
      appliedFilters.push(priceRangeFilter);
    }
    if (selectedBrands.length) {
      selectedBrands.forEach((brand) => {
        appliedFilters.push(`Brand: ${brand}`);
      });
    }
    setAppliedFilters(appliedFilters);
  };

  return (
    <List sx={filterContainerStyles}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <NowShoppingBy
        appliedFilters={appliedFilters}
        onRemoveFilter={() => {}}
        onClearAll={() => {}}
      />
      {/* Price Range Filter */}
      <Typography variant="subtitle1">Price Range</Typography>
      <div style={sliderContainerStyles}>
        <Slider
          value={selectedPriceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={priceRange[0]}
          max={priceRange[1]}
          step={50}
        />
      </div>

      {/* Brand Filter */}
      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        Brand
      </Typography>
      {sortedBrands.map(({ name, count }) => (
        <ListItem key={name} disablePadding>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedBrands.includes(name)}
                onChange={() => {
                  handleBrandChange(name);
                }}
                disabled={!count}
              />
            }
            label={`${name} (${count})`}
          />
        </ListItem>
      ))}

      <Button
        variant="contained"
        color="primary"
        sx={applyButtonStyles}
        onClick={handleApplyFilters}
      >
        Apply Filters
      </Button>
    </List>
  );
};

export default FilterContent;
