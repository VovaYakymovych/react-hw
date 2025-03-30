
import './App.css'
import {coursesAndDurationArray} from "./data/coursesAndDurationArray.ts";
import {coursesAndDurationArrayType} from "./models/coursesAndDurationArrayType.ts";

function App() {

  return (
    <>
      <ul id = 'coursesAndDurationList'>
        {coursesAndDurationArray.map((course:coursesAndDurationArrayType,index:number)=>
            <div className='course' key={index}>
                <h2>{index+1}. {course.title}</h2>
                <p>Month Duration: {course.monthDuration}</p>
            </div>)}
      </ul>
    </>
  )
}

export default App