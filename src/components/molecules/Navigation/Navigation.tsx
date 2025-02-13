import { FC } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Toolbar } from '@mui/material';

type NavigationProps = {
  isMenuOpen: boolean;
  toggleDrawer: () => void;
};

type NavigationItem = {
  text: string;
  url: string;
};

export const navigationList: NavigationItem[] = [
  { text: 'Home', url: '/' },
  { text: 'Desktop Synths', url: '/synthesizers/desktop-synthesizers' },
  { text: 'Keyboard Synthesizers', url: '/synthesizers/keyboard-synthesizers' },
];

const Navigation: FC<NavigationProps> = ({ isMenuOpen, toggleDrawer }) => {
  const DrawerList = (
    <nav>
      <Toolbar />
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
        <List>
          {navigationList.map(({ text, url }) => (
            <ListItem key={url}>
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
    <Drawer open={isMenuOpen} onClose={toggleDrawer}>
      {DrawerList}
    </Drawer>
  );
};

export default Navigation;
