import { FC } from 'react';
import { Button, Box } from '@mui/material';

type FilterBtnForMobileProps = {
  onClick: () => void;
};

const FilterBtnForMobile: FC<FilterBtnForMobileProps> = ({ onClick }) => {
  return (
    <Box
      className="cos"
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      <Button variant="contained" color="primary" onClick={onClick}>
        Filters
      </Button>
    </Box>
  );
};

export default FilterBtnForMobile;
