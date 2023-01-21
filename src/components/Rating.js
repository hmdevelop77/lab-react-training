import "./Rating.css"

function Rating(props){
    
    function decimalNumber(number){
        if (number<0.5){
            return ("☆☆☆☆☆")
        }else if (number<1.5 ){
            return ("★☆☆☆☆")
        }else if (number<2.5 ){
            return ("★★☆☆☆") 
        }else if (number<3.5 ){
            return ("★★★☆☆")
        }else if (number<4.5 ){
            return ("★★★★☆")
        }else{
            return ("★★★★★")
        }
    }



return(
    <div className="star">
        {decimalNumber(props.children)}
    </div>
    
)
}


export default Rating