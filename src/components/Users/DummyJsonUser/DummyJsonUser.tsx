import {UsersDummyType} from "../../../models/UsersTypes/dummyJsonResponseUsersType.ts";
import {FC} from "react";
import './dummy-user-style.css'

type UsersDummyPropsType = {
    user: UsersDummyType
}

const DummyJsonUser: FC<UsersDummyPropsType> = ({user}) => {
    return (
        <div>
            <div className="dummy-user">
                <img src={user.image} alt={user.username} className="user-image"/>

                <div className={'user-info'}>
                    <h2>{user.firstName} {user.lastName} ({user.username})</h2>
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Birth Date:</strong> {user.birthDate}</p>
                    <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
                    <p><strong>Height / Weight:</strong> {user.height} cm / {user.weight} kg</p>
                    <p><strong>Eye Color:</strong> {user.eyeColor}</p>
                    <p><strong>Hair:</strong> {user.hair.color}, {user.hair.type}</p>
                </div>

                <div className={'user-address'}>
                    <h3>🏠 Address</h3>
                    <p>{user.address.address}, {user.address.city}, {user.address.state} {user.address.stateCode}, {user.address.postalCode}</p>
                    <p><strong>Country:</strong> {user.address.country}</p>
                    <p><strong>Coordinates:</strong> {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
                </div>

                <div className={'user-bank'}>
                    <h3>🏦 Bank</h3>
                    <p><strong>Card Number:</strong> {user.bank.cardNumber}</p>
                    <p><strong>Expires:</strong> {user.bank.cardExpire}</p>
                    <p><strong>Type:</strong> {user.bank.cardType}</p>
                    <p><strong>IBAN:</strong> {user.bank.iban}</p>
                    <p><strong>Currency:</strong> {user.bank.currency}</p>
                </div>

                <div className={'user-company'}>
                    <h3>💼 Company</h3>
                    <p><strong>Company Name:</strong> {user.company.name}</p>
                    <p><strong>Title:</strong> {user.company.title}</p>
                    <p><strong>Department:</strong> {user.company.department}</p>
                    <p><strong>Company
                        Address:</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.state} ({user.company.address.stateCode})
                    </p>
                </div>

                <div className={'user-other'}>
                    <h3>🔐 Other</h3>
                    <p><strong>MAC:</strong> {user.macAddress}</p>
                    <p><strong>IP:</strong> {user.ip}</p>
                    <p><strong>SSN:</strong> {user.ssn}</p>
                    <p><strong>EIN:</strong> {user.ein}</p>
                    <p><strong>University:</strong> {user.university}</p>
                    <p><strong>User Agent:</strong> {user.userAgent}</p>
                </div>

                <div className={'user-crypto'}>
                    <h3>🪙 Crypto</h3>
                    <p><strong>Coin:</strong> {user.crypto.coin}</p>
                    <p><strong>Wallet:</strong> {user.crypto.wallet}</p>
                    <p><strong>Network:</strong> {user.crypto.network}</p>
                </div>

                <div className={'user-role'}>
                    <h3>🔐 Role</h3>
                    <p>{user.role}</p>
                </div>
            </div>
        </div>
    );
};

export default DummyJsonUser;