import { useState, useRef } from 'react';
import ProjectsSideBar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [projects, setProjects] = useState([
    {
      title: 'Learning React',
      description: '',
      dueDate: '',
      id: Math.random(),
    },
    {
      title: 'Mastering React',
      description: '',
      dueDate: '',
      id: Math.random(),
    },
  ]);

  function handleCreateProject() {
    setIsActive(true);
  }

  function handleAddProject(enteredData) {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          title: enteredData.title,
          description: enteredData.description,
          dueDate: enteredData.dueDate,
          id: Math.random(),
        },
      ];
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        projects={projects}
        onCreateProject={handleCreateProject}
      />
      {isActive && <NewProject onAdd={handleAddProject} />}
      {!isActive && <NoProjectSelected onCreateProject={handleCreateProject} />}
    </main>
  );
}

export default App;
