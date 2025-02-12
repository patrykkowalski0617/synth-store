import { FC } from 'react';
import { Button, Box } from '@mui/material';

type FilterBtnForMobileProps = {
  onClick: () => void; // ✅ Accepts a click handler as a prop
};

const FilterBtnForMobile: FC<FilterBtnForMobileProps> = ({ onClick }) => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' }, // ✅ Visible on mobile, hidden on larger screens
        gap: 2,
        justifyContent: 'center',
        mt: 2,
      }}
    >
      <Button variant="contained" color="primary" onClick={onClick}>
        Filters
      </Button>
    </Box>
  );
};

export default FilterBtnForMobile;
