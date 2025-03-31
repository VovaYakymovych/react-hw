import {courses} from "../../data/coursesArray.ts";
import './coursesArrayComponent-style.css'

const CoursesArrayComponent = () => {
    return (
        <div className={'component-wrapper'}>
            {
                courses.map((value,index)=>
                    <div className={'courseWrapper'} key={index}>

                        <img src={value.logo} alt={value.title}/>
                        <h2>{value.title}</h2>
                        <p className={'duration'}>Month Duration:{value.monthDuration} | Hour Duration {value.hourDuration}</p>

                        <ul className={'modules'}>Modules:
                            {value.modules.map((module,id)=>
                                <li className={'moduleLi'} key={id}>{id+1}. {module}</li>
                            )}
                        </ul>

                        <p className={'price'}>Price: {value.price}</p>
                        <p className={'avgResult'}>Average result: {value.avgResult}</p>
                        <p className={'rating'}>Rating: {value.rating}⭐</p>

                    </div>
                )
            }

        </div>
    );
};

export default CoursesArrayComponent;