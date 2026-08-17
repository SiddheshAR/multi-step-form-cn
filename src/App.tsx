
import { useEffect } from 'react';
import './App.css'
import CreateContentForm from './components/CreateContentForm'

function App() {
async function fetchData(){
  const response = await fetch(
  "/content-dashboard/project/content-niche-county-code?project_id=proj_1042"
);
const data = await response.json();
console.log(data)
}
useEffect(()=>{
fetchData();
},[])
  return (
    <>
      <CreateContentForm />
    </>
  )
}

export default App
