import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import postsDbLink from "./postsDbLink";
import {useHistory} from 'react-router-dom';

const PostDetails = () => {
    const {id} = useParams();
    const {data: post, error, isPending} = useFetch(postsDbLink+"/"+id);
    const history = useHistory();
    const handleReturnClick = () =>{
        history.push("/posts");
    }
    const handleDeleteClick = () =>{
        fetch(postsDbLink+"/"+post.id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/posts");
            console.log("Deleted post "+post.id);
        })
    }


    return ( 
        <div className="post-details">
            <button onClick={handleReturnClick}>Return</button>
            
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>by {post.author}</p>
                    <div>{post.body}</div>
                </article>
            )}

            <button onClick={handleDeleteClick}>Delete Post</button>


        </div>
    );
}
 
export default PostDetails;