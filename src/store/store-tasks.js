const state = {
    tasks: {
        'ID1': {
            id: 1,
            name: 'got to go ',
            completed: false,
            duedate: '2019/02/29',
            duetime: '10:00'
        },
        'ID2': {
            id: 2,
            name: 'got to go 2',
            completed: false,
            duedate: '2019/02/29',
            duetime: '11:00'
        },
        'ID3': {
            id: 3,
            name: 'got to go 3',
            completed: false,
            duedate: '2019/02/29',
            duetime: '12:00'
        },
    }
}



const mutations = {

}

const actions = {

}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
}