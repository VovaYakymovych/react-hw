
import { FC } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", gap: "10px" }}>

            <button className={'headerAndPaginationButton'} onClick={handlePrevious} disabled={currentPage === 1}>
                ⬅️ Previous
            </button>

            <p>Page {currentPage}</p>

            <button className={'headerAndPaginationButton'} onClick={handleNext} disabled={currentPage === totalPages}>
                Next ➡️
            </button>
        </div>
    );
};

export default Pagination;
