import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquare,
	faSquareCheck,
	faPencil,
	faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, handleCompletedTask }) => {
	const [editTask, setEditTask] = useState(false);
	const [newStateTask, setNewStateTask] = useState(task.texto);

	/**
	 * The handleSubmit function is called when the user clicks the submit button. It prevents the
	 * default action of the submit button, which is to refresh the page, and then it sets the editTask
	 * state to false
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		setEditTask(false);
	};

	return (
		<li className='lista-tareas__tarea'>
			<FontAwesomeIcon
				icon={task.completada ? faSquareCheck : faSquare}
				className='lista-tareas__icono lista-tareas__icono-check'
				onClick={() => handleCompletedTask(task.id)}
			/>
			<div className='lista-tareas__texto'>
				{editTask ? (
					<form className='formulario-editar-tarea' onSubmit={handleSubmit}>
						<input
							type='text'
							className='formulario-editar-tarea__input'
							value={newStateTask}
							onChange={(e) => setNewStateTask(e.target.value)}
						/>
						<button type='submit' className='formulario-editar-tarea__btn'>
							Actualizar
						</button>
					</form>
				) : (
					task.texto
				)}
			</div>
			<div className='lista-tareas__contenedor-botones'>
				<FontAwesomeIcon
					icon={faPencil}
					className='lista-tareas__icono lista-tareas__icono-accion'
					onClick={() => setEditTask(!editTask)}
				/>
				<FontAwesomeIcon
					icon={faTrashCan}
					className='lista-tareas__icono lista-tareas__icono-accion'
				/>
			</div>
		</li>
	);
};

Task.propTypes = {
	task: PropTypes.object.isRequired,
	handleCompletedTask: PropTypes.func.isRequired,
};

export default Task;
