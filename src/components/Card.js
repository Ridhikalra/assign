import React from 'react';

const Card = ({ users }) => {
  return (
    <>
      <div className="column">
        <div className="card">
          <img src={users.avatar} alt="Avatar" />
          <div className="container">
            <h4>
              <b>
                {users.first_name} {users.last_name}
              </b>
            </h4>
            <p>{users.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
