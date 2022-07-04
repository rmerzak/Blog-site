import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSbmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false)
        })
        navigate('/');
    }

    return (
        <div className="create">
            <h2>Add a New Blog </h2>
            <form onSubmit={handleSbmit}>
                <label>blog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> {setBody(e.target.value)}}
                >
                </textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e) => {setAuthor(e.target.value)}}
                >
                    <option value="mario">mario</option>
                    <option value="youshi">youshi</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog</button> }

            </form>
        </div>
    );
}

export default Create