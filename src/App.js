import { ListarUsuarios } from './components/ListarUsuarios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Detalles } from './components/Detalles';
//import { useLocation, useNavigate } from 'react-router-dom';

export const App = () => {
	return (
		<BrowserRouter>
			<>
				<div className="btn-group">
					<Link to="/*" className="btn btn-primary">
						Inicio
					</Link>
					<Link to="/*" className="btn btn-primary">
						Ver Listado
					</Link>
					<Link to="/*" className="btn btn-primary">
						Alumno: Moises Andrade
					</Link>
				</div>
				<hr />
				<h2>Listar Usuarios desde Consumo de Api Evaluacion 2</h2>
				<hr />
				<Routes>
					<Route path="/*" element={<ListarUsuarios />}></Route>
					<Route path="/detalles/:id" element={<Detalles />}></Route>
				</Routes>
			</>
		</BrowserRouter>
	);
};
