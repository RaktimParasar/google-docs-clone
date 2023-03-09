"use client";

import { Button, IconButton } from "@material-tailwind/react";

const Navbar: React.FC = () => {
  return (
    <>
      <IconButton ripple={true}>
        <i className="fas fa-sharp fa-regular fa-bars" />
      </IconButton>
    </>
  );
};

export default Navbar;
