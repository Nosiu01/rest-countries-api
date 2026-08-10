import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import countries from "../data.json";
import Home from "./pages/Home.jsx";
import CountryPage from "./pages/CountryPage.jsx";
import MenuBar from "./components/MenuBar.jsx";

function App() {
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem("theme");
		return storedTheme === "light" || storedTheme === "dark"
			? storedTheme
			: "dark";
	});

	useEffect(() => {
		document.body.classList.toggle("light-theme", theme === "light");
		document.body.classList.toggle("dark-theme", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleToggleTheme = () => {
		setTheme((current) => (current === "dark" ? "light" : "dark"));
	};

	return (
		<BrowserRouter>
			<MenuBar theme={theme} onToggleTheme={handleToggleTheme} />
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
