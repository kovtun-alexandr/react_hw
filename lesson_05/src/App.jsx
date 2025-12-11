import CurrencyManager from "./components/CurrencyConverter/CurrencyManager"
import TaskManager from "./components/TasksManager/TaskManager"
import { tasksList, workersList } from "./data/tasks_devider"
import currencyUah from "./data/hryvnia";

function App() {

  return (
    <>
      <TaskManager tasksList={tasksList} usersList={workersList} />
      <CurrencyManager currencyUah={currencyUah} />
    </>
  )
}

export default App
