<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/insert" class="nav-link">Insert</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/update" class="nav-link">Update</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li v-for="ser in series" :key="ser">
                <router-link class="dropdown-item" :to="'/detalle/'+ser.idSerie">{{ser.nombre}}</router-link>
                </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import ServicesSeries from '../services/ServicesSeries';
const services = new ServicesSeries();
export default {
name:"MenuSeries",
data(){
    return{
        series:[]
    }
},
mounted(){
    services.loadSelect().then(result=>{
        this.series = result;
    })
}
}
</script>

<style>

</style>