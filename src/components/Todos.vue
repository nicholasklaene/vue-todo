<template>
  <div class="legend">
    <div class="legend-container">
      <h5>
        Double click a to-do item to mark it as complete.
      </h5>
      <h5>
        Click the trash can to remove a to-do item.
      </h5>
      <h5>
        Fill out the form to create a new to-do item.
      </h5>
      <h5>
        <span class="block complete"></span> Complete
        <span class="block incomplete"></span> Incomplete
      </h5>
    </div>
    <div class="labels"></div>
  </div>

  <div class="todos">
    <Todo v-for="todo in allTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  components: { Todo },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 90%;
  gap: 20px;
  margin: 0 auto;
}

.legend-container {
  text-align: left;
  width: 90%;
  margin: 1rem auto;
}

.block {
  display: inline-block;
  height: 10px;
  width: 10px;
}

.complete {
  background: #0066db;
}

.incomplete {
  background: #0cc242;
}

@media screen and (max-width: 600px) {
  .todos {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 1000px) and (min-width: 600px) {
  .todos {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
