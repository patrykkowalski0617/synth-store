import { FC, useState } from 'react';
import {
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
  Button,
} from '@mui/material';
import {
  filterContainerStyles,
  sliderContainerStyles,
  applyButtonStyles,
} from './ProductFilterSidebar.style';

export type FilterOptions = {
  brands: string[];
  priceRange: number[];
};

type FilterContentProps = {
  brands: string[];
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
};

const FilterContent: FC<FilterContentProps> = ({
  brands,
  filters,
  onFilterChange,
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    filters.brands
  );
  const [priceRange, setPriceRange] = useState<number[]>(filters.priceRange);

  const handleBrandChange = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    onFilterChange({ brands: updatedBrands, priceRange });
  };

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    onFilterChange({
      brands: selectedBrands,
      priceRange: newValue as number[],
    });
  };

  const applyFilters = () => {
    onFilterChange({ brands: selectedBrands, priceRange });
  };

  return (
    <List sx={filterContainerStyles}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      {/* Price Range Filter */}
      <Typography variant="subtitle1">Price Range</Typography>
      <div style={sliderContainerStyles}>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          step={100}
        />
      </div>

      {/* Brand Filter */}
      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        Brand
      </Typography>
      {brands.map((brand) => (
        <ListItem key={brand} disablePadding>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
            }
            label={brand}
          />
        </ListItem>
      ))}

      {/* Apply Filters Button */}
      <Button
        variant="contained"
        color="primary"
        sx={applyButtonStyles}
        onClick={applyFilters}
      >
        Apply Filters
      </Button>
    </List>
  );
};

export default FilterContent;
