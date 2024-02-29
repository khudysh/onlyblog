import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
<<<<<<< HEAD
import { userType } from "../../store/user/userTypes";
=======
import { Card, Avatar, Descriptions, DescriptionsProps, Button, Badge } from "antd";
import "./Profile.scss"
import { userType } from "../../store/user/userTypes";
import { getUserProfile } from "../../store/blog/blogActions";
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
function Profile() {
  const { profileId } = useParams();
  const dispatch = useAppDispatch();
  const { curUser } = useAppSelector((state) => state.user);
  const { profileUser, posts } = useAppSelector((state) => state.blog);

  useEffect(() => {
    document.title = profileId!;
<<<<<<< HEAD
    if (profileId == curUser.username) setProfileUser(curUser)
    console.log(profileUser)
    // else dispatch(getUserByUsername(profileId))
=======
    dispatch(getUserProfile(profileId!))
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
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
<<<<<<< HEAD
    <div> 
      <h1>Profile {profileUser.firstName}</h1>
    <img src={profileUser.image} /></div>
=======
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

      <div className="profile-posts">
        {posts.map((post) => {
          return <Card className="profile-posts-post" key={post.id} title={post.title} extra={<a href="#">More</a>} >
            <p>{post.body}</p>
            <hr />
            {post.tags.map((tag) => {
              return <Badge key={tag} count={tag} color='#faad14' />
            })}
            <p>👍 {post.reactions}</p>
          </Card>
        })}
      </div>
    </div>
>>>>>>> 5476a8fc10c3fb40c9ebb56325b91453387c367b
  )
}

export default Profile