import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit
        // ,{pollingInterval: 2000}
        );

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(2)
    //     }, 5000)
    // }, []);

    return (
        <div>
            <div style={{border: '1px solid #efefef', padding: '20px'}}>
                {/*<button onClick={() => refetch()}>RE-FETCH</button>*/}
                {isLoading && <h1>Loading posts...</h1>}
                {error && <h2>Error Loading posts</h2>}
                {posts && posts.map(post =>
                    <PostItem post={post} key={post.id}></PostItem>
                )}
            </div>
        </div>
    );
};

export default PostContainer;