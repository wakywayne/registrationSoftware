import * as React from 'react';
import PrivateRoute from './utils/privateRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'
import Login from './Login'
import App2 from './App2'
import ErrPage from './ErrPage'
import AdminPage from './AdminPage'
import EventPage from './EventPage'
import Payment from './Payment';
import AdminDivisionsPage from './AdminDivisionsPage';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<App2 />} />
				<Route path="/FullEventPage/:id" element={<EventPage />} />

				<Route path="/Payment" element={<Payment />}></Route>

				<Route path="/adminLogin" element={<Login />} />

				<Route path="/adminPage" element={<PrivateRoute children={<AdminPage />} />} />
				<Route path="/adminDivisionsPage/:idd" element={<PrivateRoute children={<AdminDivisionsPage />} />} />

				<Route path="*" element={<ErrPage />} />

			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
