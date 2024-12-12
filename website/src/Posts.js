import PostsList from './PostsList';
import useFetch from './useFetch';
import postsDbLink from './postsDbLink';
import CreatePost from './CreatePost';
const Posts = () => {
    const {data: posts, isPending, error} = useFetch(postsDbLink);

    return ( 
        <div className="posts">
            <CreatePost/>

            {isPending && <div>Loading...</div>}
            {posts !== null && <PostsList posts={posts} title="All Posts"/>}
            {error && <div>{error.message}</div>}
        </div>
     );
}
 
export default Posts;