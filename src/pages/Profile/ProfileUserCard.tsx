import { memo } from 'react';
import { Card, Avatar, Descriptions, Button } from 'antd';
import { Link } from 'react-router-dom';
import { userType } from '../../store/user/userTypes';
import { DescriptionsProps } from 'antd/es/descriptions';

const UserProfileCard = memo(({ profileUser }: {profileUser: userType}) => {

  console.log("Rednder Profile Card")

    const items: DescriptionsProps['items'] = [
        {
          key: '1',
          label: 'UserName',
          children: profileUser.username,
        },
        {
          key: '2',
          label: 'Email',
          children: profileUser.email,
        },
        {
          key: '3',
          label: 'First name',
          children: profileUser.firstName,
        },
        {
          key: '4',
          label: 'Last name',
          children: profileUser.lastName,
        },
        {
          key: '5',
          label: 'Gender',
          children: profileUser.gender,
        },
      ];

  return (
    <Card style={{ width: 600 }} className="profile-card">
      <div className="profile-avatar">
        <Avatar size={256} src={profileUser.image} />
      </div>
      <Descriptions title="User Info" items={items} />
      <Link to={`/logout`}><Button>Logout</Button></Link>
    </Card>
  );
});

export default UserProfileCard;
