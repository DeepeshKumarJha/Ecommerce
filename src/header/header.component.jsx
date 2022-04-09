import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoginSignUpModal from '../modals/login_signup_modal.component';
import './header.component.css';

const Header = () => {
	const [modalState, SetModalState] = useState(false);

	const handleBurgerClick = () => {
		const nav_ul_list = document.querySelector('.nav-ul');

		nav_ul_list.classList.toggle('nav-active');
		nav_ul_list.classList.toggle('nav-ul-display');

		const nav_ul_li = document.querySelectorAll('.nav-ul li');

		nav_ul_li.forEach((li, index) => {
			if (li.style.animation) {
				li.style.animation = '';
			} else {
				li.style.animation = `nav-ul-li 1s ease forwards ${
					index / 15 + 0.2
				}s`;
			}
		});
	};

	const showModal = () => {
		SetModalState((prev) => !prev);
	};

	return (
		<>
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
					<div className='header-user-section'>
						<span onClick={showModal}>Login/Signup</span>
					</div>
					<div className='nav-burger' onClick={handleBurgerClick}>
						<div className='line1'></div>
						<div className='line2'></div>
						<div className='line3'></div>
					</div>
				</nav>
			</header>
			<div>
				<Outlet />
			</div>
			{modalState && <LoginSignUpModal />}
		</>
	);
};

export default Header;
