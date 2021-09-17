import Task from "./components/Tasks/Task";
import AddTask from "./components/AddTask/AddTask";
import NewTask from "./components/AddTask/NewTask";

function App() {

  const tasks = [
    {
      id: 0,
      title: 'React Basics',
      description: 'JSX, Components, Single Page Application'
    },
    {
      id: 1,
      title: 'Data Structures',
      description: 'Binary Search Tree, Linked Lists'
    },
    {
      id: 2,
      title: 'Algorithms',
      description: 'Introduction to Python Programming Language'
    },
    {
      id: 3,
      title: 'React.js',
      description: 'Redux vs. Context API'
    },
  ]

  const addTaskHandler = (task) => {
    console.log('app.js')
    console.log(task)
  }


  return (
    <div className="App">
      <AddTask onAddTask={addTaskHandler} />
      <Task data={tasks}/>
    </div>
  );
}

export default App;
