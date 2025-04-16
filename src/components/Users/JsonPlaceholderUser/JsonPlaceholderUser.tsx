import {UsersPlaceholderType} from "../../../models/UsersTypes/UsersPlaceholderType.ts";
import {FC} from "react";
import './placeholder-user-style.css'


type UserPlaceholderPropsType = {
    user: UsersPlaceholderType
}

const JsonPlaceholderUser: FC<UserPlaceholderPropsType> = ({user}) => {
    return (
        <div>
            <div className="placeholder-user">

                <div className={'user-info'}>
                    <h2>{user.name} ({user.username})</h2>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank">{user.website}</a>
                    </p>
                </div>

                <div className={'user-address'}>
                    <h3>🏠 Address</h3>
                    <p>{user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                    <p><strong>Coordinates:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
                </div>

                <div className={'user-company'}>
                    <h3>💼 Company</h3>
                    <p><strong>Name:</strong> {user.company.name}</p>
                    <p><strong>Catchphrase:</strong> "{user.company.catchPhrase}"</p>
                    <p><strong>BS:</strong> {user.company.bs}</p>
                </div>
            </div>
        </div>
    );
};

export default JsonPlaceholderUser;