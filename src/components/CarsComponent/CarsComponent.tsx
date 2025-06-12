import { useEffect, useState } from "react";
import { getAllCars } from "../../service/service.api.tsx";
import { ICar } from "../../models/ICar.ts";
import CarComponent from "../CarComponent/CarComponent.tsx";
import Pagination from "../PaginationComponent/Pagination"
import './CarsComponent.css'

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        getAllCars().then((response) => setCars(response));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(cars.length / itemsPerPage)

    return (
        <div className={'Cars'}>

            <div className={'carsWrap'}>
                {currentItems.map((value) => (
                    <CarComponent car={value} key={value.id} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default CarsComponent;
