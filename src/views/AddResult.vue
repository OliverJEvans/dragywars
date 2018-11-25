<template>
  <div>
    <h1>Add result</h1>
    <b-form @submit.prevent="onSubmit">
        <b-form-group 
            label="Name:"
            label-for="name">
            <b-form-input 
                id="name"
                type="text"
                v-model="form.name"
                required />
        </b-form-group>
        <b-form-group 
            label="League:"
            label-for="league"
            description="Enter the stage of the car">
            <b-form-input 
                id="league"
                type="text"
                v-model="form.league"
                required />
        </b-form-group>
        <b-form-group 
            label="Distance:"
            label-for="distance"
            description="Enter 0-60, 60-100 or equivalent">
            <b-form-input 
                id="distance"
                type="text"
                v-model="form.distance"
                required />
        </b-form-group>
        <b-form-group 
            label="Time:"
            label-for="time">
            <b-form-input 
                id="time"
                type="text"
                v-model="form.time"
                required />
        </b-form-group>
        <b-form-group 
            label="Tuner:"
            label-for="tuner">
            <b-form-input 
                id="tuner"
                type="text"
                v-model="form.tuner"
                required />
        </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            form: {
                name: '',
                league: '',
                distance: '',
                time: '',
                tuner: ''
            }
        }
    },
    methods: {
        ...mapActions('league', ['createResult']),
        onSubmit () {
            this.createResult(this.form);
        },
    }
}
</script>
