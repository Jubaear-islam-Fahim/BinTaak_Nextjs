import { useState } from "react";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    sendEmailVerification,
    getAuth
} from "firebase/auth";
import initFirebase from "../Firebase/firebase.init";


const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setRouteLoading] = useState(true)

    initFirebase()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()


    const SignInWithGoogle = () => {
        setRouteLoading(true)
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                // sending sign in data to server
                /* fetch('/api/users', {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }) */
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setRouteLoading(false))
    }


    return {
        user,
        SignInWithGoogle
    }
}

export default useFirebase