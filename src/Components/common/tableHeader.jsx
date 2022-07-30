const TableHader = (props) => {
    const {columns,onSort,sortColumn}=props;
    const raiseOnsort=(path)=>{
        const updatedSortColumn={...sortColumn};
        if(sortColumn.path===path)
        updatedSortColumn.order=sortColumn.order ===1?-1:1;
else {
    updatedSortColumn.path=path;
    updatedSortColumn.order=1;
}
onSort(updatedSortColumn)
    }
    const renderSortIcon=(column)=>{
        if(sortColumn.path!== column.path) return null;
        else{
  return  sortColumn.order===1?(
<i className="fa fa-sort-asc"></i>
            ):(
<i className="fa fa-sort-desc"></i>
            );
        }
    }
    return (<thead>
        <tr>
         {columns.map((column)=>(
         <th 
         key={column.path || column.key} 
         style={{cursor:"pointer"}} 
         onClick={()=> raiseOnsort(column.path)}
         
         >
        {column.label}
        {renderSortIcon(column)}
        </th>
         ))}
        </tr>
      </thead> )
}
 
export default TableHader;