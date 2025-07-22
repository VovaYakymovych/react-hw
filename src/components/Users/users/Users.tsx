import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../../redux/slices/userSlice.ts";
import User from "../user/User.tsx";
import './users.css'


const Users = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <div className={'users'}>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    );
};

export default Users;