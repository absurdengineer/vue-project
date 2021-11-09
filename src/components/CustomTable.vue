<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" v-for="header in headers" :key="header">
            {{ header }}
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obj in data" :key="obj.id">
          <td v-for="header in headers" :key="header">
            {{ obj[header] }}
          </td>
          <td>
            <button class="btn btn-success mx-1" @click="view(obj.id)">
              View
            </button>
            <button class="btn btn-warning mx-1" @click="edit(obj.id)">
              Edit
            </button>
            <button class="btn btn-danger mx-1" @click="handleDelete(obj.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CustomTable",
  props: ["data", "headers", "handleDelete"],
  methods: {
    view(id) {
      if (this.$router.currentRoute._rawValue.fullPath.endsWith("/"))
        this.$router.push(this.$router.currentRoute._rawValue.fullPath + id);
      else
        this.$router.push(
          this.$router.currentRoute._rawValue.fullPath + "/" + id
        );
    },
    edit(id) {
      if (this.$router.currentRoute._rawValue.fullPath.endsWith("/"))
        this.$router.push(this.$router.currentRoute._rawValue.fullPath + id);
      else
        this.$router.push(
          this.$router.currentRoute._rawValue.fullPath + "/" + id + "/update"
        );
    },
  },
};
</script>

<style>
th:first-letter {
  text-transform: capitalize;
}
</style>
