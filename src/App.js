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

	return (
		<div className='contenedor'>
			<Header />
			<FormTask tareas={tareas} setTareas={setTareas} />
			<ListTareas tareas={tareas} setTareas={setTareas} />
		</div>
	);
};

export default App;
