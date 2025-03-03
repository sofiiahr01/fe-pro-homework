import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = searchParams.get('_limit') || 10;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, [limit]);

    const handleLimitChange = (e) => {
        e.preventDefault();
        const newLimit = e.target.limit.value;
        setSearchParams({ _limit: newLimit });
    };

    return (
        <div>
            <h1>Blog</h1>
            <form onSubmit={handleLimitChange}>
                <input type="number" name="limit" defaultValue={limit} />
                <button type="submit">Set Limit</button>
            </form>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;