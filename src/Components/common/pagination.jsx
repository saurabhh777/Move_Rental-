import _ from "lodash" 

const Pagination=(props)=> {
    const {pageSize,currentPage,itemsCount,onPageChange}=props;
    const pageCount=Math.ceil (itemsCount/pageSize);
    if(pageCount ==1) return null;
    const pages=_.range(1,pageCount+1);
    console.log(pageCount);
    return(
        <ul className="pagination">
        {pages.map((p)=>(
        <li key={p} 
        className={currentPage == p?"page-item active":"page-item"}>
        <button className="page-link" onClick={()=>onPageChange(p)}>
        {p}
        </button>
        </li>
      
        ))}
       
       </ul>
    );
};
 
export default Pagination;