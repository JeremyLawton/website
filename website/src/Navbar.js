import {Link, useHistory} from 'react-router-dom';
const Navbar = () => {
    const title = "Hello World!"
    const history = useHistory();
    const handleClick = () =>{
        history.push("/")
    }

    return ( 
        <nav className="navbar">
            <h1 onClick={handleClick}>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/clickergame">Clicker Game</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;