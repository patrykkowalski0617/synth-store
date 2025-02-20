import { FC, useEffect, useState } from 'react';
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
import BrandListItem from './BrandListItem/BrandListItem';

const FilterContent: FC<ProductFilterSidebarProps> = ({
  filterAvailableOptions,
  onFilterChange,
}) => {
  const { brands, priceRange } = filterAvailableOptions;

  const [selectedPriceRange, setSelectedPriceRange] =
    useState<number[]>(priceRange);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    setSelectedPriceRange(() => {
      const updatedPriceRange = newValue as number[];

      return updatedPriceRange;
    });
  };

  const handleBrandChange = (brand: string) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
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
      {brands.map(({ brand, count }) => (
        <BrandListItem
          key={brand}
          brand={brand}
          count={count}
          checked={selectedBrands.includes(brand)}
          onChange={handleBrandChange}
        />
      ))}

      <Button
        variant="contained"
        color="primary"
        sx={applyButtonStyles}
        onClick={() => {}}
      >
        Apply Filters
      </Button>
    </List>
  );
};

export default FilterContent;
