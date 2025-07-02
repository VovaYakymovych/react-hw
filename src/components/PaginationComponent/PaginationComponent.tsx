import {useSearchParams} from "react-router-dom";
import './Pagination.css'

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page:'1'});
    let currentPage = Number(query.get('page') || '1');

    return (
        <div className={'PaginationComponent'}>
            <button onClick={ ()=>{
                setQuery({page:(--currentPage).toString()})
            }} disabled={currentPage === 1}>
                Previous Page</button>

            <button onClick={ ()=>{
                setQuery({page:(++currentPage).toString()})
            }} disabled={currentPage === 5}>
                Next Page</button>
        </div>
    );
};

export default PaginationComponent;
