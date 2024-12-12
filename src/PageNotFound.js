import { Link } from "react-router-dom";
const PageNotFound = () => {
    return ( 
        <div className="not-found">

            <h2>Page Not Found</h2>
            <p>The specified url does not exist.</p>
            <Link to="/">Return home</Link>
        </div>
     );
}
 
export default PageNotFound;