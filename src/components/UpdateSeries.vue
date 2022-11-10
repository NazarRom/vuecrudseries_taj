<template>
  <div>
    <h1>Update</h1>
    <form v-on:submit.prevent="modificarPersonajes()">


      <label>Escoja la serie</label>
      <select v-model="idSer">
        <br />
        <option v-for="ser in series" :value="ser.idSerie" :key="ser">
          {{ ser.nombre }}
        </option></select
      ><br /><br />


      <label>Escoja el personaje</label>
      <select v-model="idPer">
        <option v-for="per in personajes" :value="per.idPersonaje" :key="per">
          {{ per.nombre }}
        </option></select
      ><br /><br />
      <button>Modificar</button>
    </form>
  </div>


</template>

<script>
import ServicesSeries from "../services/ServicesSeries";
const service = new ServicesSeries();
export default {
  name: "UpdateSeries",
  data() {
    return {
      personajes: [],
      series: [],
      idSer:0,
      idPer:0
    };
  },
  methods: {
    modificarPersonajes() {
      service.updatePersonaje(this.idPer,this.idSer).then(result=>{
        console.log(result);
        this.$router.push("/personaje/"+this.idSer);
      });
    },
    
  },
  mounted() {
    service.loadSelect().then((result) => {
      this.series = result;
    });

    service.loadPersonajesUpdate().then((result) => {
      this.personajes = result;
    });
  },
};
</script>

<style>
</style>