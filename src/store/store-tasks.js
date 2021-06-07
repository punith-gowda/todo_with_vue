import Vue from 'vue';
import { uid } from 'quasar';
import { firebaseDB, firebaseAuth } from 'boot/firebase';
const state = {
    tasks: {
        // 'ID1': {
        //     name: 'go to shop ',
        //     completed: false,
        //     duedate: '2019/03/29',
        //     duetime: '10:00'
        // },
        // 'ID2': {
        //     name: 'get bannas',
        //     completed: false,
        //     duedate: '2019/04/29',
        //     duetime: '11:00'
        // },
        // 'ID3': {
        //     name: 'get Applies',
        //     completed: false,
        //     duedate: '2019/06/29',
        //     duetime: '12:00'
        // },
    },
    search: '',
    sort: 'duedate'
}



const mutations = {
    updatetask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deletetask(state, id) {
        Vue.delete(state.tasks, id)
    },
    addtask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    },
    setsearch(state, search) {
        state.search = search
    },
    searchfilter(state, sort) {
        state.sort = sort
    }
}

const actions = {
    updatetask({ dispatch }, payload) {
        dispatch('updateFbTasks', payload)
    },
    deletetask({ dispatch }, id) {
        dispatch('deleteFbtask', id)
    },
    addtask({ dispatch }, task) {
        let taskuid = uid()
        let payload = {
            id: taskuid,
            task: task,
        }
        dispatch('fbAddtask', payload)
    },
    setsearch({ commit }, search) {
        commit('setsearch', search)
    },
    searchfilter({ commit }, filter) {
        commit('searchfilter', filter)
    },
    fbReadData({ commit }) {
        let user = firebaseAuth.currentUser.uid
        let userTasks = firebaseDB.ref(`tasks/${user}`)

        // child added tasks
        userTasks.on('child_added', snapshot => {
            let task = snapshot.val()
            let payload = {
                id: snapshot.key,
                task: task
            }
            commit('addtask', payload)
        })

        // child_changed
        userTasks.on('child_changed', snapshot => {
            let task = snapshot.val()
            let payload = {
                id: snapshot.key,
                updates: task
            }
            commit('updatetask', payload)
        })

        // child_removed
        userTasks.on('child_removed', snapshot => {
            let taskId = snapshot.key
            commit('deletetask', taskId)
        })
    },
    fbAddtask({ }, payload) {
        let user = firebaseAuth.currentUser.uid
        let TaskRef = firebaseDB.ref(`tasks/${user}/${payload.id}`)
        TaskRef.set(payload.task)
    },
    updateFbTasks({ }, payload) {
        let user = firebaseAuth.currentUser.uid
        let TaskRef = firebaseDB.ref(`tasks/${user}/${payload.id}`)
        TaskRef.update(payload.updates)
    },
    deleteFbtask({ }, TaskId) {
        let user = firebaseAuth.currentUser.uid
        let TaskRef = firebaseDB.ref(`tasks/${user}/${TaskId}`)
        TaskRef.remove()
    }
}

const getters = {
    tasksorted: (state) => {
        let Stasks = {}
        let keyordered = Object.keys(state.tasks)
        keyordered.sort((a, b) => {

            let taskAprop = state.tasks[a][state.sort].toLowerCase(),
                taskBprop = state.tasks[b][state.sort].toLowerCase();
            if (taskAprop > taskBprop) {
                return 1;
            }
            else if (taskAprop < taskBprop) {
                return -1;
            }
            else {
                return 0;
            }
        })
        keyordered.forEach((key) => {
            Stasks[key] = state.tasks[key];
        })

        return Stasks;
    },
    tasksfiltered: (state, getters) => {
        let Stasks = getters.tasksorted
        let Ftasks = {}
        if (state.search) {
            Object.keys(Stasks).forEach((keyid) => {
                let task = Stasks[keyid]
                let tasknamelower = task.name.toLowerCase()
                let searchlower = state.search.toLowerCase()
                if (tasknamelower.includes(searchlower)) {
                    Ftasks[keyid] = task
                }
            })
            return Ftasks;
        }
        return Stasks
    },
    taskstodo: (state, getters) => {
        let Ftasks = getters.tasksfiltered
        let tasks = {}
        Object.keys(Ftasks).forEach((keyid) => {
            let task = Ftasks[keyid]
            if (!task.completed) {
                tasks[keyid] = task
            }
        })
        return tasks;
    },
    taskscompleted: (state, getters) => {
        let Ftasks = getters.tasksfiltered
        let tasks = {}
        Object.keys(Ftasks).forEach((keyid) => {
            let task = Ftasks[keyid]
            if (task.completed) {
                tasks[keyid] = task
            }
        })
        return tasks;
    },

}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}