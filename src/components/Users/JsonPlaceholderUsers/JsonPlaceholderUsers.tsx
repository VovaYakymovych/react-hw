import {useEffect, useState} from "react";
import {UsersPlaceholderType} from "../../../models/UsersTypes/UsersPlaceholderType.ts";
import {getPlaceholderUsers} from "../../../services/service-functions.ts";
import JsonPlaceholderUser from "../JsonPlaceholderUser/JsonPlaceholderUser.tsx";




const JsonPlaceholderUsers = () => {

    const [users,setUsers]=useState<UsersPlaceholderType[]>([])
    useEffect(() => {
        getPlaceholderUsers().then(response=>setUsers(response))
    }, []);

    return (
        <div className={'api-res-component'}>
            {users.map(value => <JsonPlaceholderUser user={value} key={value.id}/>)}
        </div>
    );
};

export default JsonPlaceholderUsers;