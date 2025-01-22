import { useLocation, Link as RouterLink } from 'react-router-dom';
import BreadcrumbsMUI from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the current path into an array
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <BreadcrumbsMUI aria-label="breadcrumb">
      <Link component={RouterLink} underline="hover" color="inherit" to="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        // If it's the last breadcrumb, render it as text
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={to} color="text.primary">
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={to}
            key={to}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </BreadcrumbsMUI>
  );
};

export default Breadcrumbs;
