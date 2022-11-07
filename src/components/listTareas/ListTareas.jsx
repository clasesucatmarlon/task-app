import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Task from './Task';

const ListTareas = ({ tareas, setTareas, showTasks }) => {
	/**
	 * A function that is called when the user clicks on the checkbox
	 * @param {id} id this is the id of the task
	 * @return modified completada properties of the object
	 */
	const handleCompletedTask = (id) => {
		setTareas(
			tareas.map((task) => {
				if (task.id === id) {
					return { ...task, completada: !task.completada };
				}
				return task;
			})
		);
	};

	/**
	 * A function that is called when the user clicks on the update button
	 * If the task id matches the id passed in, return a new object with the same properties as the task,
	 * but with the texto property set to the newStateTask.
	 * @param {id} id id of the task
	 * @param {newStateTask} newStateTask new value to property texto of the object
	 * @return The newTask object will have the new value
	 */
	const updateTask = (id, newStateTask) => {
		setTareas(
			tareas.map((task) => {
				if (task.id === id) {
					return { ...task, texto: newStateTask };
				}
				return task;
			})
		);
	};

	/**
	 * Delete the task with the given id from the list of tasks
	 * @param {id} id id of the task
	 */
	const deleteTask = (id) => {
		const filterTask = tareas.filter((task) => task.id !== id);
		setTareas(filterTask);
	};

	return (
		<ul className='lista-tareas'>
			{tareas.length > 0 ? (
				tareas.map((task) => {
					if (showTasks) {
						return (
							<Task
								key={task.id}
								task={task}
								handleCompletedTask={handleCompletedTask}
								updateTask={updateTask}
								deleteTask={deleteTask}
							/>
						);
					} else if (!task.completada) {
						return (
							<Task
								key={task.id}
								task={task}
								handleCompletedTask={handleCompletedTask}
								updateTask={updateTask}
								deleteTask={deleteTask}
							/>
						);
					}
					return '';
				})
			) : (
				<div className='lista-tareas__mensaje'>
					<FontAwesomeIcon
						icon={faBookmark}
						className='lista-tareas__icono-task'
					/>
					No hay tareas - Agregue una nueva tarea
					<FontAwesomeIcon
						icon={faBookmark}
						className='lista-tareas__icono-task'
					/>
				</div>
			)}
		</ul>
	);
};

ListTareas.propTypes = {
	tareas: PropTypes.array.isRequired,
	setTareas: PropTypes.func.isRequired,
	showTasks: PropTypes.bool.isRequired,
};

export default ListTareas;
