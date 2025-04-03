import {courses} from "../../data/coursesArray.ts";
import './coursesArrayComponent-style.css'
import {CoursesElementsComponent} from "../coursesElementsConponent/coursesElementsConponent.tsx";

const CoursesArrayComponent = () => {
    return (
        <div className={'component-wrapper'}>
            {
                courses.map((value,index)=> <CoursesElementsComponent item={value} key={index}/>)
            }
        </div>
    );
};

export default CoursesArrayComponent;