
export default function CompBubbleElement(props) {
  // console.log("props", props)
  return (
    
    
     <div className="compare">
       <div className="image-div">
       <img src={props.image} className="compare-image" alt="" />
       </div>
       
            <h5 className="card-title">{props.name}</h5>
     </div>
      
    
    
  )
}