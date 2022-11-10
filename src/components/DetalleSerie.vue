<template>
  <div>
    <h1>Detalles</h1>
    <div v-if="serie">
      <img style="width: 300px; height: 300px" :src="serie.imagen" />
      <h2 style="color: blue">{{ serie.nombre }}</h2>
      <h3 style="color: red">{{ serie.puntuacion }}</h3>
      <router-link class="btn btn-success" to="/">Volver</router-link>
      <router-link class="btn btn-info" :to="'/personaje/'+ serie.idSerie">Personajes</router-link>
    </div>
  </div>
</template>

<script>
import ServicesSeries from "../services/ServicesSeries";
const services = new ServicesSeries();
export default {
  name: "DetalleSerie",
  data() {
    return {
      serie: null,
    };
  },
  methods: {
    loadSerie() {
      var id = this.$route.params.id;
      services.findSerie(id).then((result) => {
        this.serie = result;
      });
    },
  },
  mounted() {
    this.loadSerie();
  },
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loadSerie();
      }
    },
  },
};
</script>

<style>
</style>