import {IUser} from "../../../models/IUser.ts";
import {FC} from "react";

type UserProps = {
    item:IUser
}

const User:FC<UserProps> = ({item}) => {
    return (
        <div>
            {item.id} - {item.name} - {item.email} - {item.phone} - {item.website}
        </div>
    );
};

export default User;