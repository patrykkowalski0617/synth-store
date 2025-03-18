import { FC } from 'react';
import { Chip, Box, Typography } from '@mui/material';

export type NowShoppingByProps = {
  appliedFilters: string[];
  onRemoveFilter: (value: string) => void;
  onClearAll: () => void;
};

const NowShoppingBy: FC<NowShoppingByProps> = ({
  appliedFilters,
  onRemoveFilter,
  onClearAll,
}) => {
  if (appliedFilters.length === 0) return null; // Hide if no filters applied

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
        Now Shopping By:
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {appliedFilters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            onDelete={() => onRemoveFilter(filter)}
            size="small"
            variant="outlined"
          />
        ))}
        <Chip
          label="Clear All"
          onClick={onClearAll}
          size="small"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default NowShoppingBy;
