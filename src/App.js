import React, { useState, useEffect } from 'react';
import './assets/css/App.css';
import FormTask from './components/formTasks/FormTask';
import Header from './components/header/Header';
import ListTareas from './components/listTareas/ListTareas';

const App = () => {
	const items = localStorage.getItem('dataTasks');
	const data = items ? JSON.parse(items) : [];

	const [tareas, setTareas] = useState(data);
	const [showTasks, setShowTasks] = useState(false);

	/**
	 * Saving the data in the local storage 
	 */
	useEffect(() => {
		localStorage.setItem('dataTasks', JSON.stringify(tareas));
	}, [tareas]);

	return (
		<div className='contenedor'>
			<Header showTasks={showTasks} setShowTasks={setShowTasks} />
			<FormTask tareas={tareas} setTareas={setTareas} />
			<ListTareas tareas={tareas} setTareas={setTareas} showTasks={showTasks} />
		</div>
	);
};

export default App;
