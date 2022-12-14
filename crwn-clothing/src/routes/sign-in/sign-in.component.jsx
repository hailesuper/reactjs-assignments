import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import {useEffect} from "react";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirectUser = async () => {
        const {user} = await signInWithGoogleRedirect();
        console.log({user});
        // const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign-in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign-in with Google Redirect</button>

        </div>
    )
}

export default SignIn;