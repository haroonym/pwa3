<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <h5>Willkommen bei der Service Worker Untersuchung!!</h5>
    <img
      src="../public/images/employees.jpg"
      height="300px"
      class="mx-auto d-block mt-5"
      alt="picture of employee"
    />
    <h5 class="mb-5 mt-5">Hier könnte Ihre Werbung stehen!</h5>
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"></CardView>
  </div>
</template>

<script>
import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    ButtonGet,
    CardView,
  },
  data() {
    return {
      employees: [],
      serverAddress: process.env.VUE_APP_SERVER,
      once: false,
    };
  },
  methods: {
    async getEmployees() {
      try {
        const { data } = await axios({
          url: this.serverAddress + '/employees',
          method: 'GET',
        });
        this.employees = data;
      } catch (error) {
        console.error(error);
      }
    },
    async delEmployee(e) {
      try {
        console.log(`${this.serverAddress}/employees/${e.id}`);
        await axios({
          url: `${this.serverAddress}/employees/${e.id}`,
          method: 'DELETE',
        });
        this.getEmployees();
      } catch (error) {
        console.error(error);
      }
    },
    fetchData() {
      console.log('fetchData called');
      this.getEmployees();
    },
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten!');
    },
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
  },
};
</script>

<style></style>
