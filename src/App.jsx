import { useState } from 'react';
import ProjectsSideBar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [isActive, setIsActive] = useState(false);
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
  function handleCreateProject() {
    setIsActive(true);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onCreateProject={handleCreateProject} />
      {isActive && <NewProject />}
      {!isActive && <NoProjectSelected onCreateProject={handleCreateProject} />}
    </main>
  );
}

export default App;
