import { useState } from 'react';
import ProjectsSideBar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
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
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevProjectsState) => {
      const newTask = {
        text: text,
        projectId: prevProjectsState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevProjectsState,
        tasks: [newTask, ...prevProjectsState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    const updatedTasks = projectsState.tasks.filter((task) => task.id !== id);
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: updatedTasks,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: id,
      };
    });
  }

  function handleCreateProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(enteredData) {
    setProjectsState((prevProjectsState) => {
      const newProject = {
        title: enteredData.title,
        description: enteredData.description,
        dueDate: enteredData.dueDate,
        id: Math.random(),
      };
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    const updatedProjects = projectsState.projects.filter(
      (p) => p.id !== projectsState.selectedProjectId
    );
    setProjectsState((prevprojectsState) => {
      return {
        ...prevprojectsState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (p) => p.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onCreateProject={handleCreateProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        projects={projectsState.projects}
        onCreateProject={handleCreateProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
