import{Link} from "react-router"
const PageNotFound=()=>{
  return(
    <div style={{textAlign:"center"}}>
<h1>Page Not Found</h1>
<div>
<Link to ="/">Go to home page</Link>
</div>
<img src="https://png.pngtree.com/png-vector/20210827/ourmid/pngtree-error-404-page-not-found-png-image_3832696.jpg" alt="404 Not Found"/>
</div>
  );
 }
 export default PageNotFound;