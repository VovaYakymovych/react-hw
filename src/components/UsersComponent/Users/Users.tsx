import {useFetch} from "../../../hooks/useFetch.tsx";
import {IUser} from "../../../models/IUser.ts";
import User from "../User/User.tsx";


const Users = () => {

    const users = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', []);


    return (
        <>
        {users.map(value => <User key={value.id} item={value}/>)}
        </>
    );
};

export default Users;