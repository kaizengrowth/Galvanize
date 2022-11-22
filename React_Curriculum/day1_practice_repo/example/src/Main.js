import Post from "./Post.js"

export default function Main() {
    const posts = [
        {
            "name": "Mark Zuckerberg",
            "status": "I'm dreaming of a Metaverse.",
            "time": "Nov. 22, 2005",
            "likes": 0
        },
        {
            "name": "Bill Gates",
            "status": "I'm dreaming of a cure for malaria.",
            "time": "Nov. 22, 2005",
            "likes": 0
        },
        {
            "name": "Elon Musk",
            "status": "I'm dreaming of not being a public idiot.",
            "time": "Nov. 22, 2005",
            "likes": 0
        },
    ]

    return (
        <div className="post">
            {/* <Post post={posts[0]}/>
            <Post post={posts[1]}/>
            <Post post={posts[2]}/> */}
            
            {posts.map( (post, key) => 
                <Post post={post} key={key} />
            )}
        </div>
    )
}