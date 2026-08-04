import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import countries from "../data.json";
import Home from "./pages/Home.jsx";
import CountryPage from "./pages/CountryPage.jsx";
import MenuBar from "./components/MenuBar.jsx";

function App() {
	return (
		<BrowserRouter>
			<MenuBar />
			<main>
				<Routes>
					<Route path='/' element={<Home countries={countries} />} />
					<Route
						path='/country/:alpha3Code'
						element={<CountryPage countries={countries} />}
					/>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
