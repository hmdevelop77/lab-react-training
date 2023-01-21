
import "./BoxColor.css"

function BoxColor(props){
  

return(
<div className=" white-color border-name" ><div className="box" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}> rgb({props.r},{props.g},{props.b}) </div></div> 
)

}

export default BoxColor