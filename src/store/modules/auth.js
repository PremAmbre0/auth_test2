
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const state = {
    token: null,
    credential: null,
    user: null,
}
const getters = {
    token(state) {
        return state.token
    },
    credential(state) {
        return state.credential
    },
    user(state) {
        return state.user
    },

}
const mutations = {
    setUser(state, payload) {
        state.token = payload.token
        state.credential = payload.credential
        state.user = payload.user
    }
}
const actions = {
    signinWithGoogle(context) {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            context.commit('setUser', {
                credential: credential,
                token: token,
                user: user,
            })
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(error)
            console.log(errorCode, errorMessage, email, credential);
        });
    },
    signinWithFacebook(context) {
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                context.commit('setUser', {
                    credential: credential,
                    token: accessToken,
                    user: user,
                })
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log(error)
                console.log(errorCode, errorMessage, email, credential);
            });
    },
    signoutFromGoogle(context) {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
        context.commit('setUser', {
            credential: null,
            token: null,
            user: null,
        })
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}