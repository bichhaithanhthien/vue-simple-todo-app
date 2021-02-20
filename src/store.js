import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // This is the state of the application.
    state: {
        todos: [
            {
                completed: false,
                message: "Get some milk 🐄",
            },
            {
                completed: false,
                message: "Become better at singing 🎶"
            }
        ],
    },

    // We'll look at this later
    mutations: {
        ADD_TODO(state, todo) {
            state.todos.push(todo);
        }
    },
    actions: {
        /*async addTodo({ commit }, todo) {
            // This is a fake function to illustrate the example.
            const response = await postRequestToTheAPI(todo);
            if (response.isOk) {
                commit('ADD_TODO', todo);
            }
        }*/
    },
});
