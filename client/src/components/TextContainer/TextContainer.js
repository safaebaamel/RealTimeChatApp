import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>This is my first time Chat App <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with Socket.io, React, Node and express <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>I made it with love &#10084;</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Join these people!!</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;