import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageName: string;
  onAddToCart: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  imageName,
  onAddToCart,
}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://raw.githubusercontent.com/patrykkowalski0617/synth-store-storage/refs/heads/main/img/cables/1010Music_3-5mm-1-4-Breakout_01_2.jpg"
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" color="primary">
            ${price.toFixed(2)}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => onAddToCart(id)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
