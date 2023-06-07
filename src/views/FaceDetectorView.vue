<template lang="pug">
<video id="video" autoplay muted width="720" height="540"></video>
    <canvas  id="canvas" width="720" height="540"></canvas>
</template>

<script>
import { startDetection, descargarImagen } from '../face-api/detectionLogic.js';
import { getImages } from '../firebase/manageUsers.js';

export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
                name: "",
                lastname: "",
                image: "",
            }
        }

    },
    async mounted() {
        
        //Primero habría que recibir todos los usuarios y filtrar cada url de cada usuario y ponerla en una lista
        const imagenes = await getImages();
        console.log("Imagenes: ", imagenes);
     
        //Luego estas urls se las envía
        console.log("Empieza");
        const res = await startDetection(imagenes);
        console.error("RES: ", res);
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
