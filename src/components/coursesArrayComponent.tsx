import {courses} from "../data/coursesArray.ts";


const CoursesArrayComponent = () => {
    return (
        <div>
            {
                courses.map((value,index)=>
                )
            }

        </div>
    );
};

export default CoursesArrayComponent;