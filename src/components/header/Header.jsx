import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setShowTasks, showTasks }) => {
	return (
		<div className='header'>
			<h1 className='header__titulo'>Lista de tareas</h1>
			<button
				className='header__boton'
				onClick={() => setShowTasks(!showTasks)}
			>
				{showTasks ? 'No mostrar completadas' : 'Mostrar completadas'}
				<FontAwesomeIcon
					icon={showTasks ? faEyeSlash : faEye}
					className='header__icono-boton'
				/>
			</button>
		</div>
	);
};

Header.propTypes = {
	showTasks: PropTypes.bool.isRequired,
	setShowTasks: PropTypes.func.isRequired,
};

export default Header;
