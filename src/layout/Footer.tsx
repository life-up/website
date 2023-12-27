import { FC, useState } from 'react';
import { Restore, Favorite, LocationOn } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Footer: FC = () => {
  const [value, setValue] = useState('/');
  const navigate = useNavigate();

  // 根据当前页面路径设置底部导航栏的选中项
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log('newValue',event,newValue);    
    setValue(newValue);
    navigate(newValue)
  };  
  return (
    <BottomNavigation showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction label="任务" value="/" icon={<Restore />} />
      <BottomNavigationAction label="商店" value="shop" icon={<Favorite />} />
      <BottomNavigationAction label="我的" value="profile" icon={<LocationOn />} />
    </BottomNavigation>
  );
};
Footer.displayName = 'FooterComponent';

export default Footer;
