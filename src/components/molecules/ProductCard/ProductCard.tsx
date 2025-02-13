import { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  productCardContainer,
  cardStyles,
  cardTitle,
  cardBox,
  cardActions,
} from './ProductCard.style';

export type ProductCardProps = {
  id: string;
  name: string;
  brand: string;
  price: number;
  imgName: string;
  category: string;
  onAddToCart: (id: string) => void;
};

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  brand,
  price,
  imgName,
  category,
  onAddToCart,
}) => {
  return (
    <Box sx={productCardContainer}>
      <Card sx={cardStyles}>
        <CardMedia
          component="img"
          image={`https://raw.githubusercontent.com/patrykkowalski0617/synth-store-storage/refs/heads/main/img/${category}/${imgName}`}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" sx={cardTitle}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brand}
          </Typography>
          <Box sx={cardBox}>
            <Typography variant="h6" color="primary">
              ${price.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={cardActions}>
          <Button
            size="small"
            variant="contained"
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProductCard;
