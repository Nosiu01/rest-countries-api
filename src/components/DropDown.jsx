import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./DropDown.scss";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(null);

	return (
		<div className='dropdown'>
			<button
				className={`dropdown__toggle ${isOpen ? "is-open" : ""}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selected || "Filter by Region"}
				<FiChevronDown />
			</button>

			{isOpen && (
				<ul className='dropdown__menu'>
					{regions.map((region) => (
						<li
							key={region}
							className='dropdown__item'
							onClick={() => {
								setSelected(region);
								setIsOpen(false);
							}}
						>
							{region}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
