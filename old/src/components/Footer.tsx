import { Component, createSignal } from "solid-js";
import { Favorite, LocationOn, Restore } from "@suid/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@suid/material";
const nav = [{ label: "" }, { label: "" }, { label: "" }];

const navRender = () => {
  return nav.map((element) => {
    return (
      <div className="flex-1">
        <span>{element.label}</span>
      </div>
    );
  });
};
const [value, setValue] = createSignal('委托');

const Footer: Component = () => {
  return (
    <BottomNavigation
      showLabels
      value={value()}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="委托" icon={<Restore />} />
      <BottomNavigationAction label="状态" icon={<Favorite />} />
      <BottomNavigationAction label="我的" icon={<LocationOn />} />
    </BottomNavigation>

    // <div className="h-14 absolute w-full flex bottom-0 justify-items-center	items-center text-center">

    // </div>
  );
};

export default Footer;
