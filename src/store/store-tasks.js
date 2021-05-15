import Vue from 'vue'
import { uid } from 'quasar'
const state = {
    tasks: {
        'ID1': {
            name: 'got to go ',
            completed: false,
            duedate: '2019/02/29',
            duetime: '10:00'
        },
        'ID2': {
            name: 'got to go 2',
            completed: true,
            duedate: '2019/02/29',
            duetime: '11:00'
        },
        'ID3': {
            name: 'got to go 3',
            completed: false,
            duedate: '2019/02/29',
            duetime: '12:00'
        },
    }
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
    }
}

const actions = {
    updatetask({ commit }, payload) {
        commit('updatetask', payload)
    },
    deletetask({ commit }, id) {
        commit('deletetask', id)
    },
    addtask({ commit }, task) {
        let taskuid = uid()
        let payload = {
            id: taskuid,
            task: task,
        }
        commit('addtask', payload)
    }

}

const getters = {
    taskstodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach((keyid) => {
            let task = state.tasks[keyid]
            if (!task.completed) {
                tasks[keyid] = task
            }
        })
        return tasks;
    },
    taskscompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach((keyid) => {
            let task = state.tasks[keyid]
            if (task.completed) {
                tasks[keyid] = task
            }
        })
        return tasks;
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}