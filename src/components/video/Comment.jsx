import React from 'react'
import Avatar from '@mui/material/Avatar';
import DOMPurify from 'dompurify'
export function AddComment(props){
    return(
        <div className="addcomment__container">
            <div className="addcomment__avatar">
                <Avatar>S</Avatar>
            </div>
            <div className="comment__input">
                <input placeholder="Enter your comment" type="text" required autoComplete="off" />

            </div>
            <div className="comment__button">
                Comment
            </div>

        </div>
    )
}

export const DisplayComment = (props) => {
    return(
        <div className="displayComment__container">
            <div className="displayComment__avatar">
                <Avatar>S</Avatar>
            </div>
            <div className="displayComment__right">
                <div className="displayComment__top">
                    <div className="displayComment__name">
                        {props.username}
                    </div>
                    <div className="displayComment__time">
                        {props.timestamp}
                    </div>
                </div>
                <div className="displayComment__bottom">
                    {props.comment}
                </div>
            </div>
        </div>
    )
}

