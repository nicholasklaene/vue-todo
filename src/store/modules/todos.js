import axios from "axios";

let baseURL = "http://localhost:3000/todos";

// Utility function to keep todos in order
function compareNumbers(a, b) {
  return b.id - a.id;
}

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos.sort((a, b) => compareNumbers(a, b)),
};

const actions = {
  async fetchTodos({ commit }) {
    let response = await axios.get(baseURL);
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, todo) {
    let response = await axios.post(`${baseURL}/`, todo);
    if (response.status !== 201) return;
    commit("newTodo", response.data);
  },
  async updateTodo({ commit }, todo) {
    let response = await axios.put(`${baseURL}/${todo.id}/`, todo);
    if (response.status !== 200 && response.status !== 204) return;
    commit("updateTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    let response = await axios.delete(`${baseURL}/${id}`);
    if (response.status !== 200 && response.status !== 204) return;
    commit("removeTodo", id);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    let todoIdx = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (todoIdx === -1) return;
    state.todos.splice(todoIdx, 1, updatedTodo);
  },
};

export default { state, getters, actions, mutations };
