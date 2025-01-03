import { useState } from 'react';
import { TodoTask, TodoTaskStatus } from '../components/todo-list/todo-list';

export const useTodo = () => {
    const [tasks, setTasks] = useState<TodoTask[]>(require('../../default.json'));

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

    const editTask = (task: TodoTask) => {
        setTasks(prev => prev.map(
            item => item.id === task.id ? task : item
        ))
    }

    const changeTaskStatus = (idx: number, status: TodoTaskStatus) => {
        setTasks(prev => prev.map(
            task => task.id === idx ? { ...task, status } : task
        ))
    }

    return { tasks, addTask, editTask, changeTaskStatus };
}
