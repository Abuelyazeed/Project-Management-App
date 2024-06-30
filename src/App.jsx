import { useState, useRef } from 'react';
import ProjectsSideBar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [
      {
        title: 'Learning React',
        description:
          'Learn React from the group up. Start with the basics, finish with advanced knowledge.',
        dueDate: '2024-06-13',
        id: Math.random(),
      },
      {
        title: 'Mastering React',
        description:
          'Learn React from the group up. Start with the basics, finish with advanced knowledge.',
        dueDate: '2024-06-13',
        id: Math.random(),
      },
    ],
  });

  function handleSelectProject(id) {
    setProjectsState((prevprojectsState) => {
      return {
        ...projectsState,
        selectedProject: id,
      };
    });
  }

  function handleCreateProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(enteredData) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProject: undefined,
        projects: [
          ...prevProjectsState.projects,
          {
            title: enteredData.title,
            description: enteredData.description,
            dueDate: enteredData.dueDate,
            id: Math.random(),
          },
        ],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProject: undefined,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (p) => p.id === projectsState.selectedProject
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProject === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        projects={projectsState.projects}
        onCreateProject={handleCreateProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={selectedProject != undefined && selectedProject.id}
      />
      {content}
    </main>
  );
}

export default App;
