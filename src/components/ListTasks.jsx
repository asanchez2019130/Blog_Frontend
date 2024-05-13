import React, { useEffect, useState } from 'react';
import { useGetTasks } from "../shared/hook/useGetTask";
import { AddComment } from '../components/forms/AddComment';
import "bulma/css/bulma.min.css"

export const ListTasks = () => {
    const { tasks, getTasks, isLoading, error } = useGetTasks();
    const [fullscreenTaskId, setFullscreenTaskId] = useState(null);

    useEffect(() => {
        getTasks();
    }, []);


    return (
        <div className="container">
            <h1 className="title">Listado de Tareas</h1>
            {isLoading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p className="notification is-danger">Error: {error.message}</p>
            ) : tasks.length === 0 ? (
                <p>No hay tareas disponibles.</p>
            ) : (
                <div className="task-list">
                    {tasks.map((taskGroup, index) => (
                        <div key={index} className="box">
                            <h2 className="subtitle">Total: {taskGroup.total}</h2>
                            <div className="columns is-multiline is-centered">
                                {taskGroup.tasks.map((task) => (
                                    <div key={task._id} className="column is-half">
                                        <div className="card">
                                            <div className="card-image">
                                                <figure className="image is-4by3">
                                                    <img src={task.img || 'https://bulma.io/assets/images/placeholders/1280x960.png'} alt={task.title} />
                                                </figure>
                                            </div>
                                            <div className="card-content">
                                                <p className="title is-4">{task.title}</p>
                                                <p className="subtitle is-6">{task.description}</p>
                                                <p>Materia: {task.taskType}</p>
                                                {task.comments && task.comments.map((comment, index) => (
                                                    <div key={index} className=''>
                                                        <p>Autor: {comment.author}</p>
                                                        <p>{comment.content}</p>
                                                    </div>
                                                ))}
                                                <br />
                                                <div className="buttons has-addons is-centered">
                                                    <button className="button is-success is-outlined" onClick={() => setFullscreenTaskId(task._id)}>Agregar Comentario</button>
                                                </div>
                                                {fullscreenTaskId === task._id && <AddComment taskId={task._id} />}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
