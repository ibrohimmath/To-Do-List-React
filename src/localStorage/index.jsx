import { v4 as uuidv4 } from "uuid";

export function getTasks() {
  try {
    const res = localStorage.getItem("tasks");
    if (res) {
      return JSON.parse(res);
    }
  } catch (error) {
    console.error("Failed to retrieve tasks from localStorage", error);
  }
  return [];
}

export function addTask(title, desc) {
  const tasksArr = getTasks();
  const taskNew = {
    id: uuidv4(),
    title: title,
    description: desc,
  };
  tasksArr.push(taskNew);
  setTasks(tasksArr);
}

export function setTasks(arr) {
  try {
    localStorage.setItem("tasks", JSON.stringify(arr));
  } catch (error) {
    console.error("Failed to save tasks to localStorage", error);
  }
}
