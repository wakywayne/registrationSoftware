import * as React from 'react';
import PrivateRoute from './utils/privateRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'
import Login from './Login'
import App2 from './App2'
import ErrPage from './ErrPage'
import AdminPage from './AdminPage'
import EventPage from './EventPage'

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<App2 />} />
				<Route path="/FullEventPage/:id" element={<EventPage />} />


				<Route path="/adminLogin" element={<Login />} />

				<Route path="/adminPage" element={<PrivateRoute children={<AdminPage />} />} />

				<Route path="*" element={<ErrPage />} />

			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
