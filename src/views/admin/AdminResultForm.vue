<template>
    <div>
        <b-form v-on:submit.prevent="submitResult">
            <b-form-group
                id="nameInputGroup"
                label="Name:"
                label-for="nameInput">
                <b-form-input id="nameInput"
                    type="text"
                    required
                    v-model="form.name"
                    placeholder="Enter name">
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="tunerInputGroup"
                label="Tuner:"
                label-for="tunerInput">
                <b-form-input id="tunerInput"
                    type="text"
                    required
                    v-model="form.tuner"
                    placeholder="Enter tuner">
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="leagueInputGroup"
                label="League:"
                label-for="leagueInput">
                <b-form-select id="leagueInput"
                    :options="_leagues"
                    v-model="selectedLeague"
                    required>
                </b-form-select>
            </b-form-group>

            <b-form-group
                id="distancesInputGroup"
                label="Distance:"
                label-for="distancesInput"
                description="The distances are populated in the dropdown above after selecting a league">
                <b-form-select id="distancesInput"
                    :options="_distances"
                    v-model="selectedDistance"
                    required>
                </b-form-select>
            </b-form-group>

            <b-form-group
                id="timeInputGroup"
                label="Time:"
                label-for="timeInput">
                <b-form-input id="timeInput"
                    type="text"
                    required
                    v-model="form.time"
                    placeholder="Enter time">
                </b-form-input>
            </b-form-group>

            <b-form-group
                id="notesInputGroup"
                label="Notes:"
                label-for="timeInput"
                description="This is where you'd might want to add any additional modifications such as cooler or no cooler.">
                <b-form-input id="notesInput"
                    type="text"
                    v-model="form.notes"
                    placeholder="Enter notes">
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>

        <b-alert
            class="mt-3"
            variant="danger"
            dismissible
            fade
            :show="showErrorAlert"
            @dismissed="!showErrorAlert">
            Something went wrong
        </b-alert>

        <b-alert
            class="mt-3"
            variant="success"
            dismissible
            fade
            :show="showSuccessAlert"
            @dismissed="!showSuccessAlert">
            Result added
        </b-alert>
    </div>
</template>

<script>
import db from '@/api/db';

export default {
    data() {
        return {
            leagues: [],
            distances: [],
            result: [],

            form: {
                time: '',
                tuner: '',
                name: '',
                notes: ''
            },

            showErrorAlert: false,
            showSuccessAlert: false
        }
    },
    props: {
        resultId: String,
        selectedDistance: String,
        selectedLeague: String
    },
    computed: {
        _leagues() {
            var leaguesArray = [];
            this.leagues.forEach(league => {
                var leagueObject = {};
                leagueObject.value = league.id;
                leagueObject.text = league.name;
                leaguesArray.push(leagueObject);
            });
            return leaguesArray;
        },
        _distances() {
            var distancesArray = [];
            this.distances.forEach(distance => {
                var distanceObject = {};
                distanceObject.value = distance.id;
                distanceObject.text = distance.name;
                distancesArray.push(distanceObject);
            });
            return distancesArray;
        },
    },
    created() {
        if(this.selectedLeague){
            this.$bind('distances', db.collection('leagues/' + this.selectedLeague + '/distance'));
        }
        if(this.resultId){
            this.$bind('form', db.collection('leagues/' + this.selectedLeague + '/distance/' + this.selectedDistance + '/results/').doc(this.resultId));
        }
    },
    watch: {
        selectedLeague(){
            this.$bind('distances', db.collection('leagues/' + this.selectedLeague + '/distance'));
        } 
    },
    firestore() {
        return {
            leagues: db.collection('leagues'),
        }
    },
    methods: {
        submitResult() {
            if(this.resultId){
                db.collection('leagues/' + this.selectedLeague + '/distance/' + this.selectedDistance + '/results/')
                    .doc(this.resultId)
                    .set(this.form)
                    .then(() => {
                        this.showSuccessAlert = true;
                    })
                    .catch(error => {
                        console.error(error);
                        this.showErrorAlert = true;
                    });
            }else{
                db.collection('leagues/' + this.selectedLeague + '/distance/' + this.selectedDistance + '/results/')
                    .doc()
                    .set(this.form)
                    .then(() => {
                        this.showSuccessAlert = true;
                    })
                    .catch(error => {
                        console.error(error);
                        this.showErrorAlert = true;
                    });
            }
            
        }
    }
}
</script>
