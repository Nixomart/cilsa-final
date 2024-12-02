import './App.css'
import AllTask from './components/AllTask'
import AddTask from './components/AddTask'
function App() {

  return (
    <div className='lg:flex flex-col w-full lg:flex-row '>
      <AddTask />
      <AllTask />
    </div>
  )
}

export default App
