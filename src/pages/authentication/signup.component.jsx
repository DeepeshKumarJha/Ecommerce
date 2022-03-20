import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../redux/firebaseAuth/Firebase";

const SignUp = () => {
	const email = useRef();
	const password = useRef();
	const navigate = useNavigate();

	const handleSignupForm = async (event) => {
		event.preventDefault();

		try {
			await createUserWithEmailAndPassword(
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
			<h1>SignUp</h1>
			<form onSubmit={handleSignupForm} method='post'>
				<input type='email' ref={email} /> <br />
				<input type='password' ref={password} /> <br />
				<input type='submit' value='submit' />
			</form>
		</>
	);
};

export default SignUp;
