import './Pagination.css'

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return null;

    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
                &laquo; Previous
            </button>

            <span className="page-number">Page {currentPage} / {totalPages}</span>

            <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next &raquo;
            </button>
        </div>
    );
};

export default Pagination;
