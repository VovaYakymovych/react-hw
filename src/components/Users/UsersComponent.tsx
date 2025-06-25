import {useEffect, useState} from "react";
import {getUsers} from "../../services/service.api.ts";
import {IUser} from "../../models/IUser.ts";
import {IDummyJsonUsersResponse} from "../../models/IDummyJsonUsersResponse.ts";
import UserComponent from "./UserComponent.tsx";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../paginationComponent/PaginationComponent.tsx";

const UsersComponent = () => {
    const [query]=useSearchParams({page: '1'})
    const [users,setUsers] = useState<IUser[]>([])


    useEffect(()=>{
        const currentPage =query.get('page') || '1'
        getUsers(currentPage).then(({users}: IDummyJsonUsersResponse) => {setUsers(users)});
    },[query])

    return (
        <div className={'api-res-component'}>
            {users.map((user:IUser) => <UserComponent user={user} key={user.id}/>)}
            <PaginationComponent/>
        </div>
    )
};

export default UsersComponent;