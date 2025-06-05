
import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UsersDummyPropsType = {
    user: IUser
}

const UserComponent: FC<UsersDummyPropsType> = ({user}) => {
    return (
        <div>
            {user.id} {user.firstName}
        </div>
    );
};

export default UserComponent;