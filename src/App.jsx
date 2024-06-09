import React, { useEffect, useState } from "react";
import Container from "./components/container";
import TasksHeader from "./components/tasks_header";
import TaskList from "./components/task_list";
import "./index.css";

export default function App() {
  // Manipulating for update task items (when change is true then we need to re-render all components)
  const [change, setChange] = useState(false);

  return (
    <Container>
      <TasksHeader change={change} setChange={setChange} />
      <TaskList change={change} setChange={setChange} />
    </Container>
  );
}
