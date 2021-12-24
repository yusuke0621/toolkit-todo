import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../taskSlice";
import styles from "./TaskList.module.scss";
import TaskItem from "../taskItem/TaskItem";

const TaskList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  return (
    <div className={styles.root}>
      {
        //sampleData.tsで確認後、tasksに変更
      }
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
