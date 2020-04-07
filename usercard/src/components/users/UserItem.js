import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UserItem = ({ user: { login, avatar_url, html_url, followers } }) => {
  const [followerss, setFollowers] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}/followers`).then((res) => {
      setFollowers(res.data.length);
    });
  });

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <p>Followers: {followerss}</p>
      </div>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
