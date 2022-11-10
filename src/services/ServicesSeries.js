import axios from "axios";
import Global from "@/Global";
import { Promise } from "core-js";

export default class ServiceSeries{
    loadSelect(){
        return new Promise(function(resolve){
            var request = "/api/Series";
            var url = Global.urlseries + request;
            var series = [];
            axios.get(url).then(res=>{
                series = res.data;
                resolve(series);
            })
        })
    }
    loadPersonajesUpdate(){
        return new Promise(function(resolve){
            var request = "/api/Personajes";
            var url = Global.urlseries + request;
            var personajes = [];
            axios.get(url).then(res=>{
                personajes = res.data;
                resolve(personajes);
            })
        })
    }
    findSerie(id){
        return new Promise(function(resolve){
            var request = "/api/Series/" + id;
            var url = Global.urlseries + request;
            var serie = {};
            axios.get(url).then(res=>{
                serie=res.data;
                resolve(serie);
            })
        })
    }
    loadPersonajes(idserie){
        return new Promise(function(resolve){
            var request = "/api/Series/PersonajesSerie/" + idserie;
            var url = Global.urlseries + request;
            var personajes = []
            axios.get(url).then(res=>{
                personajes = res.data;
                resolve(personajes);
            })
        })
    }
    insertPersonaje(datos){
        return new Promise(function(resolve){
            var request = "/api/Personajes";
            var url = Global.urlseries + request;
            axios.post(url,datos).then(res=>{
               
                resolve(res);
            })
        })
    }
    updatePersonaje(idpersonaje,idserie){
        return new Promise(function(resolve){
            var request = "/api/Personajes/"+ idpersonaje+ "/"+ idserie ;
            var url = Global.urlseries + request;
            axios.put(url).then(res=>{
                resolve(res);
            })
        })
    }
}