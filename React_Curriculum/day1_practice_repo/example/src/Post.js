import './App.css'

const Post = (props) => {
    const {name, status, time, likes} = props.post
    console.log(name)
    return (
        <>
            <h4>{name}</h4>
            <h5>{time}</h5>
            <p>{status}</p>
            <button>💙 {likes}</button>
            <hr />
        </>
    )
}

export default Post;