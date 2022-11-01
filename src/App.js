import React, { useState } from 'react';
import './assets/css/App.css';
import FormTask from './components/formTasks/FormTask';
import Header from './components/header/Header';

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
			completada: false,
		},
	];
	const [tareas, setTareas] = useState(dataInitial);

	return (
		<div className='contenedor'>
			<Header />
			<FormTask tareas={tareas} setTareas={setTareas} />
		</div>
	);
};

export default App;
