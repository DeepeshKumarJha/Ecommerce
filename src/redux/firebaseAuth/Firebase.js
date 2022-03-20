import { initializeApp } from "@firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const configFirebase = {
	apiKey: "AIzaSyAup0Fy4FgrVoL0Uti61La6YD6d-YeZHPM",
	authDomain: "auth-development-4cdc8.firebaseapp.com",
	projectId: "auth-development-4cdc8",
	storageBucket: "auth-development-4cdc8.appspot.com",
	messagingSenderId: "571915190056",
	appId: "1:571915190056:web:185ccc8a972eca975c1a1d",
};

export const app = initializeApp(configFirebase);
export const auth = getAuth(app);

console.log("hiiiii");

// custom hook
export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});
		return unsub;
	}, []);

	return currentUser;
};
