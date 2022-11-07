import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../assets/images/logo1.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const Header = ({ setShowTasks, showTasks }) => {
	return (
		<div className='header'>
			<div style={{ width: '20%', hight: '200px' }}>
				<img src={Logo} alt="Logo" style={{ width: '100%' }} />
			</div>
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
