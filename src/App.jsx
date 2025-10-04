
import './App.css'
import ControlledForm from './components/ControlledForm/ControlledForm'
import FormAction from './components/FormAction/FormAction'
import MealDb from './components/MealDb/MealDb'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm'


const mealPromise = fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json())
// console.log(mealPromise);


function App() {
  return (
    <>
      <h1>Explore React form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <UncontrolledForm></UncontrolledForm> */}
      <MealDb mealPromise={mealPromise}></MealDb>
    </>
  )
}

export default App
