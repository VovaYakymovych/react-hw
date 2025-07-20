import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../../../redux/slices/userSlice.ts";
import {IUser} from "../../../models/IUser.ts";


const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {

        dispatch(userActions.loadUsers());
    }, []);

    return (
        <>
            {users.map((user: IUser) => (<div key={user.id}> {user.name}</div>))}
        </>
    );
};

export default Users;