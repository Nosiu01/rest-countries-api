import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./DropDown.scss";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"];

export default function Dropdown({ selected, onChange }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='dropdown'>
			<button
				className={`dropdown__toggle ${isOpen ? "is-open" : ""}`}
				aria-expanded={isOpen}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selected || "Filter by Region"}
				<FiChevronDown />
			</button>

			{isOpen && (
				<ul className='dropdown__menu'>
					<li>
						<button
							type='button'
							className='dropdown__item'
							onClick={() => {
								onChange(null);
								setIsOpen(false);
							}}
						>
							All Regions
						</button>
					</li>
					{regions.map((region) => (
						<li key={region}>
							<button
								type='button'
								className='dropdown__item'
								onClick={() => {
									onChange(region);
									setIsOpen(false);
								}}
							>
								{region}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
