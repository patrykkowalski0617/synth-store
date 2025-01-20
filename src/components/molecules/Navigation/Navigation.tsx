import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav style={styles.navigation}>
      <ul style={styles.ul}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products/desktop-synthesizers" style={styles.link}>
            Desktop synts
          </Link>
        </li>
        <li>
          <Link to="/products/keyboard-synthesizers " style={styles.link}>
            Keyboard Synthesizers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles for demonstration
const styles = {
  navigation: {
    background: '#333',
    padding: '20px',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navigation;
