import React, { useState } from 'react';
import './assets/css/App.css';
import FormTask from './components/formTasks/FormTask';
import Header from './components/header/Header';
import ListTareas from './components/listTareas/ListTareas';

const App = () => {
	const dataInitial = [
		{
			id: 1,
			texto: 'Lavar ropa',
			completada: false,
		},
		{
			id: 2,
			texto: 'Hacer comida',
			completada: true,
		},
	];
	const [tareas, setTareas] = useState(dataInitial);
	const [showTasks, setShowTasks] = useState(false);

	return (
		<div className='contenedor'>
			<Header showTasks={showTasks} setShowTasks={setShowTasks} />
			<FormTask tareas={tareas} setTareas={setTareas} />
			<ListTareas tareas={tareas} setTareas={setTareas} showTasks={showTasks} />
		</div>
	);
};

export default App;
