import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
import { userData } from "../../store/user/userTypes";
import { Card, Avatar, Descriptions, DescriptionsProps, Button } from "antd";
import "./Profile.scss"
function Profile() {
  const { profileId } = useParams();
  const dispatch = useAppDispatch()
  const { curUser } = useAppSelector((state) => state.user)

  const [profileUser, setProfileUser] = useState<userData>({})

  useEffect(() => {
    document.title = profileId!;

    if (profileId == curUser.username) {
      setProfileUser(curUser);
    }
    // else dispatch(getUserByUsername(profileId))
  }, [profileId, curUser])

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
    <div className="profile">

      <Card
        style={{ width: 600 }}
        className="profile-card">
        <div className="profile-avatar">
          <Avatar size={256} src={profileUser.image} />
        </div>
        <Descriptions title="User Info" items={items} />
        <Link to={`/logout`}><Button>Logout</Button></Link>
      </Card>
    </div>
  )
}

export default Profile