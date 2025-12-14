import notFound from './assets/communication.png';
import error404 from './assets/error404.jpg';
import './NoFound.css';

export default function NotFound({type, searchQuery}){
    return (
        <div className='not-found'>
            <img src={type === "error"?error404:notFound} alt="not found" loading="lazy" style={type === "error"?{width: "500px"}:{}}/>
            <h3 style={type === "error"?{fontSize: "50px"}:{}}>{type === "error"?"404 Error":"No results found"}</h3>
            {type === "error"?<p>The page you are looking for doesn't exist!"</p>:<p>Sorry we couldn't find any matches for <span>{searchQuery}</span> books</p>}
        </div>
    )
}