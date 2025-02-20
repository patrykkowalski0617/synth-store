import { FC } from 'react';
import { ListItem, FormControlLabel, Checkbox } from '@mui/material';

type BrandListItemProps = {
  brand: string;
  count: number;
  checked: boolean;
  onChange: (brand: string) => void;
};

const BrandListItem: FC<BrandListItemProps> = ({
  brand,
  count,
  checked,
  onChange,
}) => {
  return (
    <ListItem key={brand} disablePadding>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={() => onChange(brand)} />
        }
        label={`${brand} (${count})`}
      />
    </ListItem>
  );
};

export default BrandListItem;
