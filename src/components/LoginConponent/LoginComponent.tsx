import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import {loginValidator} from "../../validators/LoginFormSubmit.tsx";
import {ILoginInputData} from "../../models/ILoginInputData.ts";
import './LoginComponent.css'

const LoginComponent = () => {

    const {handleSubmit, register, formState: {errors}} = useForm<ILoginInputData>({
        mode: "all",
        resolver: joiResolver(loginValidator)
    });

    const LoginFormSubmit = (data: ILoginInputData) => {

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

                <div className={'inputDivWrapper'}>
                    <div className={'errorDiv'}>{errors.username?.message}</div>
                    <input type="text" {...register("username")} placeholder="Username"/>
                </div>

                <div className={'inputDivWrapper'}>
                    <div className={'errorDiv'}>{errors.password?.message}</div>
                    <input type="password" {...register("password")} placeholder="Password"/>
                </div>

                <button>Log in</button>
            </form>

        </div>
    );
};

export default LoginComponent;