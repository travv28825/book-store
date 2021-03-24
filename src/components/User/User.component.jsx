import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './User.style.css';

function Username({ username }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="link-user">
      {isShow && (
        <InformationUser leaveFocus={setIsShow} setShow={setIsShow} />
      )}
      <Link
        onMouseEnter={() => setIsShow(true)}
        // onMouseLeave={() => setIsShow(false)}

        to={username}>{username}</Link>
    </div>
  );
}

function UserAvatar({ url, username }) {
  return (
    <div className="user-avatar">
      <img src={url} alt={username} />
    </div>
  )
}

function InformationUser({ leaveFocus }) {
  return (
    <div
      onMouseLeave={() => leaveFocus(false)}
      className="info-user">
    </div>
  )
}


export { UserAvatar, Username, InformationUser };
