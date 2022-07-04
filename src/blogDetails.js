import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
const BlogDetail = () => {
    const {id} = useParams();
    const {data : blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id,
            {method : 'DELETE',
    }).then(() => {
        navigate('/');
    })

    }
    return (
        <div className="blog-details">

            <h2>Blog details {id}</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading... </div>}
            {
                blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
                )
            }
            <button onClick={handleClick}>Delete Blog</button>
        </div>
    );
}

export default BlogDetail;