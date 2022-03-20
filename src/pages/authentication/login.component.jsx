import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../redux/firebaseAuth/Firebase";

const Login = () => {
	const email = useRef();
	const password = useRef();
	const navigate = useNavigate();

	const handleLoginForm = async (event) => {
		event.preventDefault();
		try {
			await signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={handleLoginForm} method='post'>
				<input type='email' ref={email} />
				<br />
				<input type='password' ref={password} />
				<br />
				<button>Submit</button>
			</form>
		</>
	);
};

export default Login;
