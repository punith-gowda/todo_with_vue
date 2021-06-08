import { LocalStorage, Loading } from 'quasar';
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
        Loading.show()
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(response => {
        }).catch(err => {
            showErorrMessage(err);
        })
    },
    loginUser({ }, payload) {
        Loading.show()
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
        }).catch(err => {
            showErorrMessage(err);
        })
    },
    logOutUser() {
        firebaseAuth.signOut()
    },
    handleAuthStateChange({ commit, dispatch }) {
        firebaseAuth.onAuthStateChanged((user) => {
            Loading.hide()
            if (user) {
                commit('setLoggedin', true);
                LocalStorage.set('isLoggedin', true)
                this.$router.push('/').catch(err => { })
                dispatch('tasks/fbReadData', null, { root: true })
            } else {
                commit('tasks/clearTasks', null, { root: true })
                commit('tasks/setTasksFromFb', false, { root: true })
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
