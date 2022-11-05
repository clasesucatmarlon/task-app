import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const FormTask = ({ tareas, setTareas }) => {
	const [inputTarea, setInputTarea] = useState('');

	/**
	 * The function takes an event as an argument, prevents the default action of the event,
	 * and then adds new task to the list of tasks
	 * @param {event} event object with events properties
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		setTareas([
			...tareas,
			{
				id: uuidv4(),
				texto: inputTarea,
				completada: false,
			},
		]);
		setInputTarea('');
	};

	/**
	 * A function that handles the input of the task
	 * @param {event} event object with events properties
	 */
	const handleTask = (event) => {
		setInputTarea(event.target.value);
	};

	return (
		<form action='' className='formulario-tareas' onSubmit={handleSubmit}>
			<input
				type='text'
				className='formulario-tareas__input'
				placeholder='Nombre de la tarea'
				value={inputTarea}
				onChange={(event) => handleTask(event)}
			/>
			<button type='submit' className='formulario-tareas__btn'>
				<FontAwesomeIcon
					icon={faCirclePlus}
					className='formulario-tareas__icono-btn'
				/>
			</button>
		</form>
	);
};

FormTask.propTypes = {
	tareas: PropTypes.array.isRequired,
	setTareas: PropTypes.func.isRequired,
};

export default FormTask;
