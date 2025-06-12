import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {saveCar} from "../../service/service.api.tsx";
import {carValidator} from "../../validators/carValidator.tsx";
import './EditComponent.css'


const EditComponent = () => {

    const {handleSubmit, register, formState:{errors} } = useForm<ICar>({mode:"all",resolver:joiResolver(carValidator)})

    const formSubmit = (data:ICar) =>{
        saveCar(data)
        console.log(data)
    }

    return (
        <div className={'formComponent'}>
            <form className={'formCar'} onSubmit={handleSubmit(formSubmit)}>

                <div className={'inputDiv'}>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>

                <div className={'inputDiv'}>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>


                <div className={'inputDiv'}>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
};

export default EditComponent;