<template lang="pug">
<video id="video" autoplay muted width="720" height="540"></video>
    <canvas  id="canvas" width="720" height="540"></canvas>
</template>

<script>
import { startDetection, descargarImagen } from '../face-api/detectionLogic.js';
import { getImages, getUsers } from '../firebase/manageUsers.js';
//Alertas
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
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

        const users = await getUsers();
        console.log("users: ", users);
        //Primero habría que recibir todos los usuarios y filtrar cada url de cada usuario y ponerla en una lista
        //const imagenes = await getImages();

        //Luego estas urls se las envía
        console.log("Empieza");
        const res = await startDetection(users);
        console.error("RES: ", res);

        if (res) {
            await this.$swal({
                title: "Usuario añadido a la lista.",
                text: 'El estudiante ' + res.name + res.lastname + "está presente",
                icon: "success",
                showCancelButton: false,
                confirmButtonText: "OK",
            });


        } else {

            await this.$swal({
                title: "Usuario no encontrado.",
                text: 'No se encontró al estudiante en la base de datos',
                icon: "error",
                showCancelButton: false,
                confirmButtonText: "OK",
            });


        }

    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
