<template>
  <div>
    <h1>personajes</h1>
    <div v-if="status == true">
        <router-link class="btn btn-danger" :to="'/detalle/'+$route.params.idserie">Volver</router-link>
      <table>
        <thead>
          <tr>
            <th>Personajes</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="per in personajes" :key="per">
            <td>{{per.nombre}}</td>
            <td><img style="width:150px;height:150px" :src="per.imagen"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServicesSeries from "../services/ServicesSeries";
const services = new ServicesSeries();
export default {
  name: "PersonajesSerie",
  data() {
    return {
      personajes: [],
      status: false,
    };
  },
  mounted() {
    var idSerie = this.$route.params.idserie;
    services.loadPersonajes(idSerie).then((result) => {
      this.personajes = result;
      this.status = true;
    });
  },
};
</script>

<style>
</style>