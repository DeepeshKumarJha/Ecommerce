import { Link } from "react-router-dom";
import "./header.component.css";

const Header = () => {
	const handleBurgerClick = () => {
		const nav_ul_list = document.querySelector(".nav-ul");

		nav_ul_list.classList.toggle("nav-active");

		const nav_ul_li = document.querySelectorAll(".nav-ul li");

		nav_ul_li.forEach((li, index) => {
			if (li.style.animation) {
				li.style.animation = "";
			} else {
				li.style.animation = `nav-ul-li 1s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});
	};

	return (
		<header>
			<nav>
				<div className='logo'>Shooop</div>
				<ul className='nav-ul'>
					<li>
						<Link to='/mens'>MENS</Link>
					</li>
					<li>
						<Link to='/womens'>WOMENS</Link>
					</li>
					<li>
						<Link to='/kids'>KIDS</Link>
					</li>
					<li>
						<Link to='/shoes'>SHOES</Link>
					</li>
					<li>
						<Link to='/watches'>WATCHES</Link>
					</li>
				</ul>
				<div className='nav-burger' onClick={handleBurgerClick}>
					<div className='line1'></div>
					<div className='line2'></div>
					<div className='line3'></div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
