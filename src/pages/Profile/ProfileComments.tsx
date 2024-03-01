import { Avatar } from 'antd'
import React from 'react'
import { commentType } from '../../store/blog/blogTypes'

function ProfileComments(props: commentType) {
    return (
        <div className="comment">
            <p>
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
                {props.user.username}</p>
            <p className="comment-body">{props.body}</p>
        </div>
    )
}

export default ProfileComments