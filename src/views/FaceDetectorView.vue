<template lang="pug">
<video id="video" autoplay muted width="720" height="540"></video>
    <canvas  id="canvas" width="720" height="540"></canvas>
</template>

<script>
import { startDetection, descargarImagen } from '../face-api/detectionLogic.js';
import { getImages, getUsers } from '../firebase/manageUsers.js';
import { addAttendance } from '../firebase/manageReports.js';

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

            //Cuando el usuario se detectó correctamente se le agrega a la lista en firestore
            const resAtt = await addAttendance(res.name + " " + res.lastname, res.id);

            if (resAtt) {
                await this.$swal({
                    title: "Usuario añadido a la lista.",
                    text: 'El estudiante ' + res.name + " " + res.lastname + " está presente.",
                    icon: "success",
                    showCancelButton: false,
                    confirmButtonText: "OK",
                });

            } else {
                await this.$swal({
                    title: "Usuario detectado pero no añadido a la lista",
                    text: 'El estudiante ' + res.name + " " + res.lastname + " fue detectado pero ocurrió un error al subirlo a la lista.",
                    icon: "error",
                    showCancelButton: false,
                    confirmButtonText: "OK",
                });
            }

            //Preguntarle si desea ver el reporte o tomar lista nuevamente
            const result = await this.$swal({
                title: '¿Qué desea hacer?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Tomar asistencia',
                cancelButtonText: "Ver reporte",
            });
            if (result.isConfirmed) {
                //Debe recargarse la página
                this.$router.go(0)
            } else {
                //Debe enviarse a la página para ver el reporte
                this.$router.push('/attendance');
            }
        } else {
            //No se encontró
            await this.$swal({
                title: "Estudiante no encontrado",
                text: 'El rostro no se encuentra registrado en nuestra base de datos.',
                icon: "error",
                showCancelButton: false,
                confirmButtonText: "OK",
            });

            //Preguntarle si desea ver el reporte o tomar lista nuevamente
            const result = await this.$swal({
                title: '¿Qué desea hacer?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Tomar asistencia',
                cancelButtonText: "Ver reporte",
            });
            if (result.isConfirmed) {
                //Debe recargarse la página
                this.$router.go(0)
            } else {
                //Debe enviarse a la página para ver el reporte
                this.$router.push('/attendance');
            }

        }

    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
