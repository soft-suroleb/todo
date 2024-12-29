import { useState } from 'react';
import { TodoTask, TodoTaskStatus } from '../components/todo-list/todo-list';

export const useTodo = () => {
    const [tasks, setTasks] = useState<TodoTask[]>([]);

    const addTask = (task: TodoTask) => {
        setTasks(prev => {
            let maxId = Math.max(...prev.map(item => item.id));
            maxId = isFinite(maxId) ? maxId : 0;

            return [
                {
                    ...task,
                    status: TodoTaskStatus.Active,
                    id: maxId + 1
                },
                ...prev,
            ]
        })
    }

    const changeTaskStatus = (idx: number, status: TodoTaskStatus) => {
        setTasks(prev => prev.map(
            task => task.id === idx ? { ...task, status } : task
        ))
    }

    return { tasks, addTask, changeTaskStatus };
}
