import {IUser} from "../../../models/IUser.ts";
import {FC} from "react";
import './user.css'

type UserProps = {
    item:IUser
}

const User:FC<UserProps> = ({item}) => {
    return (
        <div className={'user'}>
            <h3 className={'name'}>{item.name}</h3>
            <p className={'userP'}>ID: {item.id}</p>
            <p className={'userP'}>E-mail: {item.email}</p>
            <p className={'userP'}>Phone Number: {item.phone}</p>
            <p className={'userP'}>Website: {item.website}</p>
        </div>
    );
};


export default User;