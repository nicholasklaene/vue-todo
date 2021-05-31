<template>
  <Todos />
  <AddTodo />
</template>

<script>
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";

export default {
  name: "Home",
  components: { Todos, AddTodo },
};
</script>
