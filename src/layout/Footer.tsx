import { FC, useState } from 'react';
import {Restore,Favorite,LocationOn} from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const Footer: FC = () => {
  const [value, setValue] = useState('委托');
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="委托" icon={<Restore />} />
      <BottomNavigationAction label="状态" icon={<Favorite />} />
      <BottomNavigationAction label="我的" icon={<LocationOn />} />
    </BottomNavigation>
  );
};

export default Footer;