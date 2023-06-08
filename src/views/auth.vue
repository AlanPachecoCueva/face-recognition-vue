
<template>
    <div class="container" :class="{ 'isRegister': !logIn }">
        <register v-if="!logIn"></register>
        <login v-if="logIn"></login>
        <el-button class="btn" @click="switchButton()">{{ textoBtn }}</el-button>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra verticalmente los elementos */
    align-items: center; /* Centra horizontalmente los elementos */
    min-height: 100vh; /* Establece el tamaño mínimo de la altura del contenedor al 100% del viewport */
}

.isRegister{
    display: flex;
    flex-direction: column;
    min-height: 75% !important;
    height: 75% !important;
    margin: 1% 0% 10% 0%;
}

.btn {
    margin: 3% 0%;
}
</style>

<script>
import register from "../components/registerComponent.vue"
import login from "../components/loginComponent.vue"
export default {
    components: {
        // Registrar el componente importado
        register,
        login
    },
    data() {
        return {
            logIn: true,
            textoBtn: "Registrarse"
        }
    },
    methods: {
        switchButton() {
            this.logIn = !this.logIn;
            if (this.logIn) {
                this.textoBtn = "Registrarse";
            } else {
                this.textoBtn = "Iniciar Sesión";
            }
        }
    }
}
</script>

