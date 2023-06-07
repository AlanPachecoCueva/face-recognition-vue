<template lang="pug">
<video id="video" autoplay muted width="720" height="540"></video>
    <canvas  id="canvas" width="720" height="540"></canvas>
</template>

<script>
import { startDetection } from '../face-api/detectionLogic.js';

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
        console.log("Empieza");
        await startDetection("ewad");
    },
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
