<template>
  <div
    class="todo"
    :class="{ completed: todo.completed }"
    @dblclick="updateTodo({ ...todo, ...{ completed: !todo.completed } })"
  >
    <h5>{{ todo.description }}</h5>
    <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
  },
};
</script>

<style scoped>
.todo {
  padding: 30px;
  background: #0cc242;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
}

i {
  cursor: pointer;
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

i:hover {
  color: #ccc;
}

.completed {
  background: #0066db;
}
</style>
