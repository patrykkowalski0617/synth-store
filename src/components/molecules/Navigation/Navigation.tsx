import { FC } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useHeader } from '../../organisms/Header/HeaderContext';

type navigationItem = {
  text: string;
  url: string;
};

const navigationList: navigationItem[] = [
  { text: 'Home', url: '/' },
  { text: 'Desktop synts', url: '/products/desktop-synthesizers' },
  {
    text: 'Keyboard Synthesizers',
    url: '/products/keyboard-synthesizers',
  },
];

const Navigation: FC = () => {
  const { header, toggleHeader } = useHeader();

  const toggleDrawer = () => {
    toggleHeader();
  };

  const DrawerList = (
    <nav>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
        <List>
          {navigationList.map(({ text, url }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <Link to={url}>{text}</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </nav>
  );

  return (
    <div>
      <Drawer open={header} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Navigation;
