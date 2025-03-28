
import './App.css'
import {coursesTitleArray} from "./data/coursesTitleArray.ts";

function App() {

  return (
    <>
      <ul id = 'coursesList'>
        {coursesTitleArray.map((course,index)=><li key={index}>{index+1}. {course}</li>)}
      </ul>
    </>
  )
}

export default App