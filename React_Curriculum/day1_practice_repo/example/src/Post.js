import './App.css'
import { useState } from 'react'

const Post = (props) => {
    const {name, status, time, likes} = props.post
    const [hearts, setHearts] = useState(likes)

    const handleLikes = () => {
        setHearts(hearts + 1)
    }

    return (
        <>
            <h4>{name}</h4>
            <h5>{time}</h5>
            <p>{status}</p>
            {/* <button onClick={() => setHearts(hearts+1)}>💙 {hearts}</button> */}
            <button onClick={() => handleLikes()}>💙 {hearts}</button>
            <hr />
        </>
    )
}

export default Post;