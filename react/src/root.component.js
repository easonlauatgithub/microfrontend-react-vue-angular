import React from "react";
import logo from '/assets/1.png';

export default function Root(props) {
  return (
    <view>
      <img src={logo} alt="Logo" />
      <section>{props.name} is mounted!!</section>
    </view>
  );
}
