// src/components/common/Resume/UserInfo.tsx
import React from 'react';

interface UserInfoProps {
  address: string;
  email: string;
  phone: string;
  name: string;
  linkedin: string;
  github: string;
  codepen: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ address, email, phone, name, linkedin, github, codepen }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div>
        <h1>{name}</h1>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p><a href={linkedin}>{ linkedin }</a></p>
        <p><a href={github}>{ github }</a></p>
        <p><a href={codepen}>{ codepen }</a></p>
      </div>
    </div>
  );
};

export default UserInfo;