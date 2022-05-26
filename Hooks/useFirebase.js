import { useEffect, useState } from "react";
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
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setRouteLoading(false))
    }


    // Logout an user
    const logOutUser = () => {
        setRouteLoading(true)
        signOut(auth)
            .then(() => {
                setUser(null)
                /*  router.push('/') */
                setUserRole('')
            }).catch(error => {
                console.log(error)
            }).finally(() => setRouteLoading(false))
    }

    useEffect(() => {
        setRouteLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setRouteLoading(false)
        })
        return () => unsubscribe;
    }, [auth])


    return {
        user,
        SignInWithGoogle,
        logOutUser
    }
}

export default useFirebase