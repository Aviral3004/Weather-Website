import React, { Fragment } from "react";

const NavButton = ({ text }) => {
  return (
    <Fragment>
      <button className="hidden sm:flex font-spacegrotesk text-textColor font-medium text-md px-2 py-2 rounded-md">
        {text}
      </button>
    </Fragment>
  );
};

export default NavButton;
