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
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import ThankYou from './ThankYou';

const stripe = loadStripe('pk_test_51GzBOTA0E0lWenKuyj5P79REtLVueBgf5eNEHcMihkwJWvfES5z5IySy4hZCHlkxZWWwx4AHRWi99m0NdvrBpvhN005FDsnvXV');

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<App2 />} />

				<Route path="/Payment" element={<Payment />}></Route>

				<Route path="/adminLogin" element={<Login />} />

				<Route path="/adminPage" element={<PrivateRoute children={<AdminPage />} />} />

				<Route path="/adminDivisionsPage/:idd" element={<PrivateRoute children={<AdminDivisionsPage />} />} />

				<Route path="thankYouPage" element={<ThankYou />} />

				<Route path="/FullEventPage/:id" element={<Elements stripe={stripe}><EventPage /></Elements>} />

				<Route path="*" element={<ErrPage />} />

			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
