import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {

    const [query,setQuery]=useSearchParams({page:'1'})
    let currentPage = Number(query.get('page') || '1')

    return (
        <div>
            <button onClick={ ()=>{
                setQuery({page:(--currentPage).toString()})
            }}>
                Previous Page</button>

            <button onClick={ ()=>{
                setQuery({page:(++currentPage).toString()})
            }}>
                Next Page</button>
        </div>
    );
};

export default PaginationComponent;