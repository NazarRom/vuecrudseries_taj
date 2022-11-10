<template>
  <div>
    <h1>Insert</h1>
    <form method="post" v-on:submit.prevent="insertarPerosnaje()">
        <label>Nombre:</label><br/>
        <input type="text" v-model="datos.nombre"/><br/>
        <label>IMG:</label><br/>
        <input type="text" v-model="datos.imagen"/><br/>
        <label>Serie</label><br/>
        <select v-model="datos.idSerie"><br/>
            <option v-for="ser in series" :value="ser.idSerie"  :key="ser">
                {{ser.nombre}}
            </option>
        </select>
        <button>Insertar</button>
    </form>
  </div>
</template>

<script>
import ServicesSeries from '../services/ServicesSeries'
const services = new ServicesSeries();
export default {
name:"InsertSeries",
data(){
    return{
        datos:{
        idPersonaje:0,    
        nombre:"",
        imagen:"",
        idSerie:0
        },
        series:[]
    }
},
mounted(){
services.loadSelect().then(result=>{
this.series=result;
})
},
methods:{
    insertarPerosnaje(){
        services.insertPersonaje(this.datos).then(result=>{
            console.log("dentro");
            console.log(result)
            this.$router.push("/");
        })
       
    }
}
}
</script>

<style>

</style>