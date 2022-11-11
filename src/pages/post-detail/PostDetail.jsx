import React from 'react'
import { useLoaderData } from 'react-router-dom'
const PostDetail = () => {
    const post = useLoaderData()
  return (
    <div>
        <h1>{post.title}</h1>
        <div>{post.body}</div>
    </div>
  )
}

PostDetail.loader = async ({params}) => {
    return fetch("https://jsonplaceholder.typicode.com/posts/" + params.postId).then((res) =>
        res.json()
    );
}

export default PostDetail