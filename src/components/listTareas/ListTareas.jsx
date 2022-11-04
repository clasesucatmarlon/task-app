import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Task from './Task';

const ListTareas = ({ tareas, setTareas }) => {
	const handleCompletedTask = (id) => {
		setTareas(
			tareas.map((tasks) => {
				if (tasks.id === id) {
					return { ...tasks, completada: !tasks.completada };
				}
				return tasks;
			})
		);
	};

	return (
		<div>
			<ul className='lista-tareas'>
				{tareas.length > 0 ? (
					tareas.map((task) => (
						<Task
							key={task.id}
							task={task}
							handleCompletedTask={handleCompletedTask}
						/>
					))
				) : (
					<div className='lista-tareas__mensaje'>
						<FontAwesomeIcon
							icon={faBookmark}
							className='lista-tareas__icono-task'
						/>
						No hay tareas
						<FontAwesomeIcon
							icon={faBookmark}
							className='lista-tareas__icono-task'
						/>
					</div>
				)}
			</ul>
		</div>
	);
};

ListTareas.propTypes = {
	tareas: PropTypes.array.isRequired,
	setTareas: PropTypes.func.isRequired,
};

export default ListTareas;
