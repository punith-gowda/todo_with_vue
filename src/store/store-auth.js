import { LocalStorage } from 'quasar';
import 'firebase/auth'
import { firebaseAuth } from 'src/boot/firebase';

const state = {
    isLoggedin: false,
};

const mutations = {
    setLoggedin(state, value) {
        state.isLoggedin = value;
    }
};

const actions = {
    registerUser({ }, payload) {
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(response => {
        }).catch(err => {
            console.log(err);
        })
    },
    loginUser({ }, payload) {
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
        }).catch(err => {
            console.log(err);
        })
    },
    logOutUser() {
        firebaseAuth.signOut()
    },
    handleAuthStateChange({ commit }) {
        firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                commit('setLoggedin', true);
                LocalStorage.set('isLoggedin', true)
                this.$router.push('/').catch(err => { })
            } else {
                commit('setLoggedin', false);
                LocalStorage.set('isLoggedin', false)
                this.$router.replace('/auth').catch(err => { })
            }
        });
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
