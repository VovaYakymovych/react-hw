import {simpsonsArrayType} from "../../models/simpsonsArrayType.ts";
import {ReactNode} from "react";
import './CharacterComponent-style.css'

interface CharacterComponentProps {
    item: simpsonsArrayType,
    children:ReactNode
}

const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div className={'FamilyMember'}>
            <img src={item.photo} alt={item.name}/>
            <div className={'FamilyMember-info'}>{children}</div>
        </div>
    );
};

export default CharacterComponent;