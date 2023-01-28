import { useState, useEffect } from 'react';
import state from '../state/state';
import NavLink from './navLink';
const Navbar = ({ data, setState }) => {
  return (
    <>
      {data.map((item, index) => {
        return <NavLink item={item} state={state} index={index} setState={setState} />;
      })}
    </>
  );
};

export default Navbar;
