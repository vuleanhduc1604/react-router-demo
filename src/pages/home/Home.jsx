import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Home = () => {
    const posts = useLoaderData();
    return (
        <main>
            <div>
                {posts.map((post) => <Link key={post.id} to={"/post/" + post.id}>
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </Link>)}
            </div>
        </main>  
        
    );
};



Home.loader = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
    );
};

export default Home;