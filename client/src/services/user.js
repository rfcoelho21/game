import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase';

export const createUser = (email, password) => {
	console.log(`Email: ${email}, Password: ${password}`)
	return createUserWithEmailAndPassword(auth, email, password)
}

export const loginUser = (email, password) => {
	console.log('loginUser')
	return signInWithEmailAndPassword(auth, email, password)
}

export const deleteUser = () => {
	console.log('deleteUser')
}

export const recoverPassword = () => {
	console.log('recoverPassword')
}
