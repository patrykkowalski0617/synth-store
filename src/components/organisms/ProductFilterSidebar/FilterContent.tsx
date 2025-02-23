import { FC, useEffect, useState } from 'react';
import { List, Slider, Typography, Button } from '@mui/material';
import {
  filterContainerStyles,
  sliderContainerStyles,
  applyButtonStyles,
} from './ProductFilterSidebar.style';
import { ProductFilterSidebarProps, brand } from './ProductFilterSidebar';
import BrandListItem from './BrandListItem/BrandListItem';

const FilterContent: FC<ProductFilterSidebarProps> = ({
  filterAllOptions,
  onFilterChange,
}) => {
  const { brands, priceRange } = filterAllOptions;

  const [selectedPriceRange, setSelectedPriceRange] =
    useState<number[]>(priceRange);
  const [selectedBrands, setSelectedBrands] = useState<brand[]>([]);

  useEffect(() => {
    setSelectedBrands([]);
    setSelectedPriceRange(selectedPriceRange);
  }, [filterAllOptions]);

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    setSelectedPriceRange(() => {
      const updatedPriceRange = newValue as number[];

      return updatedPriceRange;
    });
  };

  const handleBrandChange = (brandItem: brand) => {
    const isSelected = selectedBrands.some(
      (el) => el.brand === brandItem.brand
    );
    const updatedBrands = isSelected
      ? selectedBrands.filter((el) => el.brand !== brandItem.brand)
      : [...selectedBrands, brandItem];
    setSelectedBrands(updatedBrands);
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
      {brands.map(({ brand, count }) => (
        <BrandListItem
          key={brand}
          brand={brand}
          count={count}
          checked={selectedBrands.some((e) => e.brand === brand)}
          onChange={handleBrandChange}
        />
      ))}

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
