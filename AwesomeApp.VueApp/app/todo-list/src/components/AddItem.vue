<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Title"
      v-model="title"
      :rules="titleRules"
      :counter="250"
      required
    ></v-text-field>
    <v-text-field
      label="Description"
      v-model="description"
      :rules="descriptionRules"
      :counter="500"
    ></v-text-field>

    <v-btn
      @click="addItem"
      :disabled="!valid"
    >
      Add
    </v-btn>
  </v-form>
      </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: 'AddItem',
    data: () => ({
      valid: true,
      title: '',
      titleRules: [
        (v) => !!v || 'Title is required',
        (v) => v && v.length <= 250 || 'Title must be less than 250 characters'
      ],
      description: '',
      descriptionRules: [
        (v) => v && v.length <= 500 || 'Title must be less than 500 characters'
      ]
    }),
    methods: {
      addItem () {
            this.$store.dispatch('AddNewTodo', 
            { title: this.title, description: this.description})
            this.$refs.form.reset()
          }
    }
  }
</script>
