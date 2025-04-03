import {FC} from "react";
import {coursesArrayType} from "../../models/coursesArrayType.ts";
import './coursesElementsComponent.css'

type coursePropType ={
    item:coursesArrayType
}

export const CoursesElementsComponent: FC<coursePropType> = ({item}) => {
    return (
        <div className={'courseWrapper'}>
            <img src={item.logo} alt={item.title}/>
            <h2>{item.title}</h2>
            <p className={'duration'}>Month Duration:{item.monthDuration} | Hour Duration {item.hourDuration}</p>

            <ul className={'modules'}>Modules:
                {item.modules.map((module,id)=>
                    <li className={'moduleLi'} key={id}>{id+1}. {module}</li>
                )}
            </ul>

            <p className={'price'}>Price: {item.price}</p>
            <p className={'avgResult'}>Average result: {item.avgResult}</p>
            <p className={'rating'}>Rating: {item.rating}⭐</p>
        </div>
    );
};
