import { Avatar } from 'antd'
import { commentType } from '../../store/blog/blogTypes'
import { memo } from 'react'

const ProfilePostComments = memo(function ({comment}: {comment: commentType}) {
    return (
        <div className="comment">
            <p>
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                {comment.user.username}</p>
            <p className="comment-body">{comment.body}</p>
        </div>
    )
})

export default ProfilePostComments