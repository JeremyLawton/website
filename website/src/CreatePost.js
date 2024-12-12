import { useState } from "react";
import postsDbLink from "./postsDbLink";

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Jeremy");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) =>{
        setIsPending(true);
        const post = {title, body, author};

        fetch(postsDbLink, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(()=>{
            console.log("New post added.");
            console.log(post);
            setIsPending(false);
        })


    }

    return ( 
        <div className="createPost">
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>
                <label>Post body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}/>
                <label>Post author:</label>
                <select 
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)
                    console.log(e.target.value);
                 }}>
                    <option value="Jeremy">Jeremy</option>
                    <option value="Lawton">Lawton</option>
                </select>
                {!isPending && <button>Add Post</button>}
                {isPending && <button disabled>Adding Post...</button>}
            </form>
        </div>
     );
}
 
export default CreatePost;