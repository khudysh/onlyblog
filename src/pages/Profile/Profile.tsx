import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooksState";
import { Card, Avatar, Descriptions, DescriptionsProps, Button, Badge, Divider, List, Modal } from "antd";
import "./Profile.scss"
import { getPostComments, getSubs, getUserProfile } from "../../store/blog/blogActions";
import { subscriptionType } from "../../store/blog/blogTypes";
function Profile() {
  const { profileId } = useParams();
  const dispatch = useAppDispatch();
  const { curUser } = useAppSelector((state) => state.user);
  const { profileUser, posts, subs } = useAppSelector((state) => state.blog);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<subscriptionType>();

  const showModal = (sub: subscriptionType) => {
    setIsModalOpen(true);
    setModalContent(sub);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.title = profileId!;
    dispatch(getUserProfile(profileId!));
    
  }, [profileId, curUser])

  useEffect(() => {
    dispatch(getSubs(profileUser.id!));
  }, [profileUser])

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

      <div className="profile-posts">
        {posts.map((post) => {
          return <Card
            className="profile-posts-post"
            key={post.id}
            title={post.title}
            extra={<a href="#">More</a>}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          >
            <p>{post.body}</p>
            <Divider />
            {post.tags.map((tag) => {
              return <><Badge key={tag} count={tag} color='#faad14' />  </>
            })}
            <p>
              👍 {post.reactions}
              <span className="comments-icon" onClick={() => dispatch(getPostComments(post.id))}>
                💬
              </span>
            </p>
            <hr />
            <div className="profile-comments">
              {post.comments?.map((comment) => {
                return <>
                  <div className="comment">
                    <p>
                      <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                      {comment.user.username}</p>
                    <p className="comment-body">{comment.body}</p>
                  </div>
                </>
              })}
            </div>
          </Card>
        })}
      </div>

      <div className="subs">
        {subs.map((sub) => {
          return <>
            <Button key={sub.id} type="primary" onClick={() => showModal(sub)}>
              {sub.title}
            </Button>

          </>
        })}
        {modalContent && <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
          <p>{modalContent.title}</p>
          <p>{modalContent.description}</p>
          <p>{modalContent.price}</p>
        </Modal>}

      </div>
    </div>
  )
}

export default Profile