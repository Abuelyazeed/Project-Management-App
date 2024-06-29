import { useState } from 'react';
import ProjectsSideBar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  // const [projects, setProjects] = useState([
  //   {
  //     title: 'Learning React',
  //     description: '',
  //     dueDate: '',
  //   },
  //   {
  //     title: 'Mastering React',
  //     description: '',
  //     dueDate: '',
  //   },
  // ]);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
