import UsersComponent from "../components/Users/UsersComponent.tsx";
import PaginationComponent from "../components/paginationComponent/PaginationComponent.tsx";


const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;