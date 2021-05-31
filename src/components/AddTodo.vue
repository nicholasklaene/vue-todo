<template>
  <form @submit.prevent="createTodo">
    <div>
      <input
        type="text"
        v-model="description"
        :class="{ error: error }"
        @keyup="evaluateError"
        required
      />
    </div>
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      description: "",
      error: false,
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    createTodo() {
      if (!this.description) {
        this.error = true;
        return;
      }
      const todo = { description: this.description, completed: false };
      this.addTodo(todo);
      this.description = "";
    },
    evaluateError() {
      if (this.description) this.error = false;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  gap: 16px;
  justify-content: center;
  max-width: 460px;
  margin: 2rem auto 0 auto;
}

input[type="text"] {
  border: 1px solid #ccc;
  padding: 8px;
}

input[type="submit"] {
  border: none;
  background: #0066db;
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.error {
  border: 1px solid crimson;
}
</style>
