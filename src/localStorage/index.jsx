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

export function setTasks(arr) {
  try {
    localStorage.setItem("tasks", JSON.stringify(arr));
  } catch (error) {
    console.error("Failed to save tasks to localStorage", error);
  }
}

export function addTask(title, desc) {
  const tasksArr = getTasks();
  const taskNew = {
    id: uuidv4(),
    title: title,
    description: desc,
    isDone: false,
  };
  tasksArr.push(taskNew);
  setTasks(tasksArr);
}

export function getUpdateItem() {
  const id = localStorage.getItem("updateItem");
  if (!id) return null;

  const tasksArr = getTasks();
  if (!Array.isArray(tasksArr)) return null;

  const itemFound = tasksArr.find((item) => id === JSON.stringify(item.id));
  console.log("Task item, which could be updating:", itemFound);
  return itemFound || null;
}

export function setUpdateItem(id) {
  if (getUpdateItem()) return;
  localStorage.setItem("updateItem", JSON.stringify(id));
}

export function deleteUpdateItem() {
  if (!getUpdateItem()) return;
  localStorage.removeItem("updateItem");
}

export function updateTask(id, title, description, isDone) {
  const tasksArr = getTasks();
  if (!tasksArr) return;
  const ind = tasksArr.findIndex(
    (item) => JSON.stringify(id) === JSON.stringify(item.id)
  );
  tasksArr[ind] = {
    id: id,
    title: title,
    description: description,
    isDone: isDone,
  };
  setTasks(tasksArr);
}

export function deleteTask(id) {
  const tasksArr = getTasks();
  if (!tasksArr) return;
  setTasks(
    tasksArr.filter((item) => JSON.stringify(item.id) !== JSON.stringify(id))
  );
}
