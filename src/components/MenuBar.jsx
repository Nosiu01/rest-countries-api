import { Link } from "react-router-dom";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import "./MenuBar.scss";

const MenuBar = ({ theme, onToggleTheme }) => {
	const isDark = theme === "dark";

	return (
		<header className='site-header'>
			<div className='left'>
				<Link to='/'>
					<h1>Where in the world?</h1>
				</Link>
			</div>
			<button className='theme-toggle' onClick={onToggleTheme}>
				{isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
				<p>{isDark ? "Light Mode" : "Dark Mode"}</p>
			</button>
		</header>
	);
};

export default MenuBar;
