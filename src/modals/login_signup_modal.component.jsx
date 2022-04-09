import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './login_signup_modal.css';

const LoginSignUpModal = () => {
	const login = useRef();
	const signup = useRef();

	useEffect(() => {
		// setting up the initial style
		login.current.classList.add('lsmc-header-active');
		signup.current.classList.add('lsmc-header-deactive');

		document.body.style.overflow = 'hidden';
		console.log('component mounted');

		return () => {
			console.log('component unmounted');
			document.body.style.overflow = 'unset';
		};
	}, []);

	const changeState = (e) => {
		console.log(e);
		if (e.target.innerText === 'login') {
			login.current.classList.remove('lsmc-header-deactive');
			login.current.classList.add('lsmc-header-active');
			signup.current.classList.remove('lsmc-header-active');
			signup.current.classList.add('lsmc-header-deactive');
		} else {
			login.current.classList.remove('lsmc-header-active');
			login.current.classList.add('lsmc-header-deactive');
			signup.current.classList.remove('lsmc-header-deactive');
			signup.current.classList.add('lsmc-header-active');
		}
	};

	return ReactDOM.createPortal(
		<div className='login-signup-modal-container'>
			<div className='lsmc-header'>
				<div className='lsmc-login' onClick={changeState} ref={login}>
					login
				</div>
				<div className='lsmc-slash'>/</div>
				<div className='lsmc-signup' onClick={changeState} ref={signup}>
					signup
				</div>
			</div>
			<div className='lsmc-input-section'>
				<div></div>
				<div></div>
				<div className='lsmc-btn'>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default LoginSignUpModal;
