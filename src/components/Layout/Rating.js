import React from 'react'
import {FaStar} from 'react-icons/fa'
import {FaStarHalfAlt} from 'react-icons/fa'


function Rating({value, text, color}) {


let stars=[];
let val = Math.abs(value);
   for(let i=0; i<= val; i++){
       if( Math.floor(value)/i > 1 ){
        stars.push(<FaStar style={{color}}/>)
       }
       else if(value%i === 0.5){
        stars.push(<FaStarHalfAlt style={{color}}/>)
       }
   }  
    return (
        <div className="rating">
         <div><p><strong>Ratings: </strong>{value} of {text}</p></div>   
         <div>{stars} </div> 
             
        </div>
    )
}

export default Rating
