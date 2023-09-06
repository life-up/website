import { Component } from "solid-js";

const attrs = {
  intelligence: 100,
  power: 100,
};
const AttrInfo: Component = () => {
  return (
    <>
      <div class="h48">
        <h1>个人属性</h1>
        <ul>
          <li>
            <span>智力:&nbsp;</span>
            <span>100</span>
          </li>
          <li>
            <span>体力:&nbsp;</span>
            <span>100</span>
          </li>
          <li>
            <span>金币:&nbsp;</span>
            <span>500</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AttrInfo;
