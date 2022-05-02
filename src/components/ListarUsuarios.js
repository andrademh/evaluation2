import React from 'react';
import { Link } from 'react-router-dom';

export const ListarUsuarios = () => {
	const [equipo, setEquipo] = React.useState([]);

	React.useEffect(() => {
		// console.log('useEffect')
		obtenerDatos();
	}, []);

	const obtenerDatos = async () => {
		const data = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await data.json();
		setEquipo(users);
	};

	return (
		<div>
			<table class="table table-dark">
				<thead>
					<tr>
						<td>
							<h3>Lista de Usuarios</h3>
						</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							{equipo.map((item) => (
								<li key={item.id}>
									<Link to={`/detalles/${item.id}`}>{item.name}</Link>
								</li>
							))}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

// export default ListarUsuarios;
