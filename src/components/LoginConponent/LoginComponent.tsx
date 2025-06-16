import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {loginValidator} from "../../validators/LoginFormSubmit.tsx";
import {ILoginInputData} from "../../models/ILoginInputData.ts";

const LoginComponent = () => {

    const {handleSubmit, register, formState:{errors}} = useForm<ILoginInputData>({
        mode:"all",
        resolver:joiResolver(loginValidator)
    });

    const LoginFormSubmit = (data:ILoginInputData) => {

        const loginData = {
            username: data.username,
            password: data.password,
            expiresInMins: 1
        }

        console.log(loginData);
    };

    return (
        <div className={'loginFormWrapper'}>
            <form className={'loginForm'} onSubmit={handleSubmit(LoginFormSubmit)}>

                <input type="text" {...register("username")} placeholder="Username"/>
                <div>{errors.username?.message}</div>
                <input type="text" {...register("password")} placeholder="Password"/>
                <div>{errors.password?.message}</div>
                <button>Log in</button>
            </form>

        </div>
    );
};

export default LoginComponent;