import React from 'react';

const Nav = (props) => {
  return (
    <>
      <ul>
        <li>
          <span style={{ fontSize: "20px" }}>You First!</span>
        </li>
        <button onClick={props.getUserData}>Get Users</button>
      </ul>
    </>
  );
};

export default Nav;
