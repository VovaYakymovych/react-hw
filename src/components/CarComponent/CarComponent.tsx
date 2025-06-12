import {ICar} from "../../models/ICar.ts";
import {FC} from "react";
import './CarComponent.css'

interface ICarsProps{
    car:ICar
}

const CarComponent:FC<ICarsProps> = ({car}) => {
    return (
        <div className={'Car'}>
            <p className={'CarInfo'}>🚘 {car.brand}</p>
            <p className={'CarInfo'}>💰 {car.price}</p>
            <p className={'CarInfo'}>📆 {car.year}</p>
        </div>
    );
};

export default CarComponent;