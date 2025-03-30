import {simpsons} from "../../data/simpsonsArray.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";
import './FamilyComponent-style.css'

export const FamilyComponent = () => {
    return (
        <div className={'FamilyComponent'}>
            {
                simpsons.map((value,index)=> <CharacterComponent item={value} key={index}>
                    <h2 className={'name'}>{value.name} {value.surname}</h2>
                    <p className={'age'}>Вік:{value.age}</p>
                    <p className={'info'}>{value.info}</p>
                    </CharacterComponent>)
            }
        </div>
    );
};

export default FamilyComponent;