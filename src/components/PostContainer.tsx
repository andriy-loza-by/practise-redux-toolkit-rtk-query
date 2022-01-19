import React, {useEffect, useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(2)
    //     }, 5000)
    // }, []);

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreate}>Add new post</button>
            <div style={{border: '1px solid #efefef', padding: '20px'}}>
                {isLoading && <h1>Loading posts...</h1>}
                {error && <h2>Error Loading posts</h2>}
                {posts && posts.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id}></PostItem>
                )}
            </div>
        </div>
    );
};

export default PostContainer;