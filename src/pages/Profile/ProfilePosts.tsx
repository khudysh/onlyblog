import { Card, Divider, Badge } from 'antd';
import { postType } from '../../store/blog/blogTypes';
import { getPostComments } from "../../store/blog/blogActions";
import { useAppDispatch } from '../../hooks/hooksState';
import { memo } from 'react';
import ProfilePostComments from './ProfilePostsComments';

const UserPosts = memo(({ posts }: { posts: postType[] }) => {
    const dispatch = useAppDispatch();
    console.log("Rednder Profile Post")

    return (
        <div className="profile-posts">
            {posts.map((post) => (
                <Card
                    className="profile-posts-post"
                    key={post.id}
                    title={post.title}
                    extra={<a href="#">More</a>}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >
                    <p>{post.body}</p>
                    <Divider />
                    {post.tags.map((tag) => (
                        <Badge key={tag} count={tag} color='#faad14' />
                    ))}
                    <p>
                        👍 {post.reactions}
                        <span className="comments-icon" onClick={() => dispatch(getPostComments(post.id))}>
                            💬
                        </span>
                    </p>
                    <hr />
                    <div className="profile-comments">
                        {post.comments?.map((comment) => (
                            <ProfilePostComments key={comment.id} comment={comment} />
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    );
});

export default UserPosts;
