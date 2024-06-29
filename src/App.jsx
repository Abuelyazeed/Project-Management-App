import { useState } from 'react';
import ProjectsSideBar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';

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
      <NewProject />
    </main>
  );
}

export default App;
