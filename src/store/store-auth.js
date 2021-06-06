import { LocalStorage } from 'quasar';
import { firebaseAuth } from 'src/boot/firebase';
import { showErorrMessage } from 'src/functions/function-show-errormsg'

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
            showErorrMessage(err);
        })
    },
    loginUser({ }, payload) {
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
        }).catch(err => {
            showErorrMessage(err);
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
