import { FC, useState } from 'react';
import { Drawer, Box, IconButton, Toolbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterBtnForMobile from './FilterBtnForMobile/FilterBtnForMobile';
import FilterContent from './FilterContent';
import {
  drawerStyles,
  mobileDrawerStyles,
  desktopDrawerStyles,
  closeIconStyles,
} from './ProductFilterSidebar.style';

export type brand = {
  name: string;
  count: number;
};

export type FilterOptions = {
  brands: brand[];
  priceRange: number[];
};

export type filterSelectedOptions = {
  selectedBrans: string[];
  selectedPriceRange: number[];
};

export type ProductFilterSidebarProps = {
  filterOptions: FilterOptions;
  applyFilters: (filterSelectedOptions: filterSelectedOptions) => void;
};

const ProductFilterSidebar: FC<ProductFilterSidebarProps> = ({
  filterOptions,
  applyFilters,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <Box sx={drawerStyles}>
      {/* Mobile Filter Button */}
      <FilterBtnForMobile onClick={handleDrawerToggle} />

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={mobileDrawerStyles}
      >
        <Toolbar />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={closeIconStyles}
        >
          <CloseIcon />
        </IconButton>
        <FilterContent
          filterOptions={filterOptions}
          applyFilters={applyFilters}
        />
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer variant="permanent" sx={desktopDrawerStyles} open>
        <FilterContent
          filterOptions={filterOptions}
          applyFilters={applyFilters}
        />
      </Drawer>
    </Box>
  );
};

export default ProductFilterSidebar;
