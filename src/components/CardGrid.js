import React from 'react';
import Card from "./Card";

const CardGrid = ({ users }) => {
  return (
    <div className="row">
      {users.map((users, id) => {
        return <Card users={users} key={id} />;
      })}
    </div>
  );
};
export default CardGrid;
