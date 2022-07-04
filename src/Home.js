
import BlogList from './BlogList';
import userFetch from './useFetch.js'
const Home = () => {
    const {data,isPending, error} = userFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading... </div>}
           { data && <BlogList blogs={data} title = "All the blogs"/>}
        </div>
     );
}
 
export default Home;