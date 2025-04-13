import {useEffect, useState} from "react";
import {getDummyJsonResUsers} from "../../../services/service-functions.ts";
import DummyJsonUser from "../DummyJsonUser/DummyJsonUser.tsx";
import {UsersDummyType} from "../../../models/UsersTypes/dummyJsonResponseUsersType.ts";


const DummyJsonUsers = () => {
    const [users,setUsers] = useState<UsersDummyType[]>([])
    useEffect(()=>{
        getDummyJsonResUsers()
            .then(response => setUsers(response))
    },[])

    return (
        <div className={'api-res-component'}>
            {users.map(value => <DummyJsonUser user={value} key={value.id}/>)}
        </div>
    )
};

export default DummyJsonUsers;