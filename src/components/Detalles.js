import React from 'react';
import { useParams } from 'react-router-dom';
//import { useLocation, useNavigate } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const Detalles = () => {
	const { id } = useParams();
	console.log(id);

	const [Masdetalles, setMasdetalles] = React.useState([]);

	React.useEffect(() => {
		const obtenerDatos = async () => {
			const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
			const users = await data.json();
			setMasdetalles(users);
		};
		obtenerDatos();
	}, [id]);

	return (
		<div>
			<table class="table table-dark">
				<thead>
					<tr>
						<th scope="col">
							<h3>Nombre: {Masdetalles.name}</h3>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nombre de usuario: {Masdetalles.username}</td>
					</tr>
					<tr>
						<td>Email: {Masdetalles.email}</td>
					</tr>
					<tr>
						<td>Direccion: {Masdetalles.address?.street}</td>
					</tr>
					<tr>
						<td>Suite: {Masdetalles.address?.suite}</td>
					</tr>
					<tr>
						<td>Ciudad: {Masdetalles.address?.city}</td>
					</tr>
					<tr>
						<td>Zipcode: {Masdetalles.address?.zipcode}</td>
					</tr>
					<tr>
						<td>Geolocalizacion Latitude: {Masdetalles.geo?.lat}</td>
					</tr>
					<tr>
						<td>Geolocalizacion Longitud: {Masdetalles.geo?.lng}</td>
					</tr>
					<tr>
						<td>Telefono: {Masdetalles.phone}</td>
					</tr>
					<tr>
						<td>Sitio Web: {Masdetalles.website}</td>
					</tr>
					<tr>
						<td>Nombre de la Compañia: {Masdetalles.company?.name} </td>
					</tr>
					<tr>
						<td>Slogan: {Masdetalles.company?.catchPhrase} </td>
					</tr>
					<tr>
						<td>Bs: {Masdetalles.company?.bs} </td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
