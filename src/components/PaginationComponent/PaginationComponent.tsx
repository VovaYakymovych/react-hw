import {useSearchParams} from "react-router-dom";
import './Pagination.css'


const PaginationComponent = ({ totalPages = 5 }) => {
    const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
    const currentPage = parseInt(searchParams.get("page") || "1");

    const changePage = (page: number) => {
        setSearchParams({ page: page.toString() });
    };

    const getPages = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 4) {
                pages.push(...[1, 2, 3, 4, 5, 6, 7]);
                pages.push("...", totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1, "...", ...Array.from({ length: 7 }, (_, i) => totalPages - 6 + i));
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="pagination">
            <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            {getPages().map((page, index) =>
                page === "..." ? (
                    <span key={index} className="dots">...</span>
                ) : (
                    <p
                        key={index}
                        className={`page-btn ${page === currentPage ? "active" : ""}`}
                        onClick={() => changePage(page as number)}
                    >
                        {page}
                    </p>
                )
            )}

            <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default PaginationComponent;
