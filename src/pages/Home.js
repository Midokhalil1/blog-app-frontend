import { useEffect, useState } from "react"


export default function Home() {
   const [posts,setPosts] = useState([])
    useEffect(() => {
    fetch('http://localhost:3030/')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => console.error(err))
}, [])

console.log(posts)

const AllPosts = () => {
    return (

        <div className="post">
                {posts.map((item, index) => {
                    return(
                        <div className="post-item" key={item.id}>
                        <img src={`https://source.unsplash.com/random?sig=${index}` }alt="" />
                        <h4> {item.auther}</h4>
                        <p>{item.text}</p>
                        <p> {item.data}</p>
                        </div>
                    )
                })}</div>
    )
}





    
return(
        <div className="container">
            <h1> Home Component </h1>

            <AllPosts />
           
              
            
            </div>
    )
}