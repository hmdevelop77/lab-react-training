
import "./Random.css"
function Random(props){
    const minil = Math.ceil(props.min);
    const maxil  = Math.floor(props.max);
return(
    <div className="border-name" >Random value between {minil} and {maxil} is {Math.floor(Math.random() * (maxil - minil + 1)) + minil}</div> );

//     <div>
//     {props.min} = Math.ceil({props.min});
//     {props.max} = Math.floor({props.max});
    
//     return Math.floor(Math.random() * ({props.max} - {props.min} + 1)) + {props.min};
//     </div>
// )
}


export default Random