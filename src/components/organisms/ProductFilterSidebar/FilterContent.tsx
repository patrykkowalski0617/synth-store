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

import { ProductFilterSidebarProps } from './ProductFilterSidebar';

const FilterContent: FC<ProductFilterSidebarProps> = ({
  filters,
  onFilterChange,
}) => {
  const { brands, priceRange } = filters;
  const [selectedBrands, setSelectedBrands] = useState<string[]>(brands);
  const [selectedPriceRange, setPriceRange] = useState<number[]>(priceRange);

  const handleBrandChange = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
    onFilterChange({ brands: updatedBrands, priceRange: selectedPriceRange });
  };

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);

    onFilterChange({ brands: selectedBrands, priceRange: selectedPriceRange });
  };

  const applyFilters = () => {
    onFilterChange({ brands: selectedBrands, priceRange: selectedPriceRange });
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
          value={selectedPriceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={priceRange[0]}
          max={priceRange[1]}
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
                checked={brands.includes(brand)}
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
