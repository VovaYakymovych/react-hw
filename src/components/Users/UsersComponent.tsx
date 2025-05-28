import {useEffect, useState} from "react";
import {getUsers} from "../../services/service.api.ts";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {
    const [users,setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        getUsers()
            .then(response => setUsers(response))
    },[])

    return (
        <div className={'api-res-component'}>
            {users.map(value => <UsersComponent user={value} key={value.id}/>)}
        </div>
    )
};
};

export default UsersComponent;