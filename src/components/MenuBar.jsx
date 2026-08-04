import { Link } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import "./MenuBar.scss";

const MenuBar = () => {
	return (
		<header className='site-header'>
			<div className='left'>
				<Link to='/'>
					<h1>Where in the world?</h1>
				</Link>
			</div>
			<div className='right'>
				<IoMoonOutline />
				<p>Dark Mode</p>
			</div>
		</header>
	);
};

export default MenuBar;
