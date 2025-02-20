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

type brand = {
  brand: string;
  count: number;
};

export type FilterOptions = {
  brands: brand[];
  priceRange: number[];
};

export type ProductFilterSidebarProps = {
  filterAvailableOptions: FilterOptions;
  onFilterChange: (newFilters: FilterOptions) => void;
};

const ProductFilterSidebar: FC<ProductFilterSidebarProps> = ({
  filterAvailableOptions,
  onFilterChange,
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
          filterAvailableOptions={filterAvailableOptions}
          onFilterChange={onFilterChange}
        />
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer variant="permanent" sx={desktopDrawerStyles} open>
        <FilterContent
          filterAvailableOptions={filterAvailableOptions}
          onFilterChange={onFilterChange}
        />
      </Drawer>
    </Box>
  );
};

export default ProductFilterSidebar;
