const ListGroup = (props)=> {
    const{
        itemList,
        valueProperty,
        textProperty,
        onItemSelection,
        selectedItem,
    }=props;
    return (  
    <ul className="list-group">
        {itemList.map((i)=>(
        <li 
        key={i[valueProperty]} 
        style={{cursor:"pointer"}} 
        onClick={()=>onItemSelection(i[textProperty])}
        
        
        className=
         {i[textProperty]==selectedItem
            ?"list-group-item active"
            :"list-group-item"
        }>{i[textProperty]}
        </li>
        ))}
    </ul>
     );
    };   

ListGroup.defaultProps={
    valueProperty:"_id",
    textProperty:"name",
}
export default ListGroup;       
           
        
  
  
 
