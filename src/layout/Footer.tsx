import { FC, useState } from 'react';
import { Restore, Favorite, LocationOn } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Footer: FC = () => {
  const [value, setValue] = useState('任务');
  const navigate=useNavigate()

  // 根据当前页面路径设置底部导航栏的选中项
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate('/shop')
  };

  return (
    <BottomNavigation showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction label="任务" value="任务" icon={<Restore />} />
      <BottomNavigationAction label="商店" value="商店" icon={<Favorite />} />
      <BottomNavigationAction label="我的" value="我的" icon={<LocationOn />} />
    </BottomNavigation>
  );
};
Footer.displayName = 'FooterComponent';

export default Footer;
