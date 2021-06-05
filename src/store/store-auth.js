import { LocalStorage } from 'quasar'
import 'firebase/auth'
import { firebaseAuth } from 'src/boot/firebase';

const state = {

};

const mutations = {

};

const actions = {
    registerUser({ }, payload) {
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(response => {
            console.log("register sucessful:", response);
        }).catch(err => {
            console.log(err);
        })
    },
    loginUser({ }, payload) {
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
            console.log("login sucessful:", response);
        }).catch(err => {
            console.log(err);
        })
    }
};

const getters = {

};

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state,
};
