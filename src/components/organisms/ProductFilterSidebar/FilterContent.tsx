import { FC, useEffect, useState } from 'react';
import { List, Slider, Typography, Button } from '@mui/material';
import {
  filterContainerStyles,
  sliderContainerStyles,
  applyButtonStyles,
} from './ProductFilterSidebar.style';
import { ProductFilterSidebarProps } from './ProductFilterSidebar';
import { ListItem, FormControlLabel, Checkbox } from '@mui/material';

const FilterContent: FC<ProductFilterSidebarProps> = ({
  filterOptions,
  applyFilters,
}) => {
  const { brands, priceRange } = filterOptions;
  const [selectedPriceRange, setSelectedPriceRange] =
    useState<number[]>(priceRange);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

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
    console.log('filterOptions', filterOptions);
  }, []);

  return (
    <List sx={filterContainerStyles}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

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
      {brands
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => b.count - a.count)
        .map(({ name, count }) => (
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
        onClick={() => {
          applyFilters({
            selectedBrans: selectedBrands,
            selectedPriceRange: selectedPriceRange,
          });
        }}
      >
        Apply Filters
      </Button>
    </List>
  );
};

export default FilterContent;
