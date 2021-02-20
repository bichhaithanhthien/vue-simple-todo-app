<template>
  <div id="app">
    <h1>Todo App</h1>
    <input type="text" @keyup.enter="addTodo()" v-model="message" placeholder="Add a to-do">
    <ul>
      <li v-for="todo in todos" :key="todo.message">
        {{ todo.message }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() { return {
      message: "",
    } },

    methods: {
      addTodo() {
        this.$store.commit("ADD_TODO", {
          completed: false,
          message: this.message,
        });
        this.message = "";
      }
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      },
    },
  }
</script>
