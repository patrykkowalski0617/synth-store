import { FC, useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
  Button,
  Box,
  IconButton,
  Toolbar,
} from '@mui/material';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import FilterBtnForMobile from '../../molecules/FilterBtnForMobile/FilterBtnForMobile';

export type FilterOptions = {
  brands: string[];
  priceRange: number[];
};

type ProductFilterSidebarProps = {
  brands: string[];
  filters: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
};

const drawerWidth = 240;

const ProductFilterSidebar: FC<ProductFilterSidebarProps> = ({
  brands,
  filters,
  onFilterChange,
}) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    filters.brands
  );
  const [priceRange, setPriceRange] = useState<number[]>(filters.priceRange);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerContent = (
    <List sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      {/* Price Range Filter */}
      <Typography variant="subtitle1">Price Range</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={5000}
        step={100}
      />

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
        sx={{ marginTop: 2, width: '100%' }}
        onClick={applyFilters}
      >
        Apply Filters
      </Button>
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mobile Filter Button */}
      <FilterBtnForMobile onClick={handleDrawerToggle} />

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MiscellaneousServicesRoundedIcon />
        </IconButton>
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: 'static',
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            position: 'relative',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default ProductFilterSidebar;
