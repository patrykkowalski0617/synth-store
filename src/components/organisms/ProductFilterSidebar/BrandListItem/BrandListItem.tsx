import { FC } from 'react';
import { ListItem, FormControlLabel, Checkbox } from '@mui/material';
import { brand } from '../ProductFilterSidebar';

type BrandListItemProps = {
  brand: string;
  count: number;
  checked: boolean;
  onChange: (brand: brand) => void;
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
          <Checkbox
            checked={checked}
            onChange={() => onChange({ brand, count })}
            disabled={!count}
          />
        }
        label={`${brand} (${count})`}
      />
    </ListItem>
  );
};

export default BrandListItem;
