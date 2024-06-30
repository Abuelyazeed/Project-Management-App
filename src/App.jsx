import { useState, useRef } from 'react';
import ProjectsSideBar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [isActive, setIsActive] = useState('noProject');
  const [projects, setProjects] = useState([
    {
      title: 'Learning React',
      description:
        'Learn React from the group up. Start with the basics, finish with advanced knowledge.',
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
    setIsActive('createProject');
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
    setIsActive('noProject');
  }

  function handleCancelAddProject() {
    setIsActive('noProject');
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        projects={projects}
        onCreateProject={handleCreateProject}
      />
      {isActive === 'createProject' && (
        <NewProject
          onAdd={handleAddProject}
          onCancel={handleCancelAddProject}
        />
      )}
      {isActive === 'noProject' && (
        <NoProjectSelected onCreateProject={handleCreateProject} />
      )}
      {isActive === 'project' && <SelectedProject project={projects[0]} />}
    </main>
  );
}

export default App;
