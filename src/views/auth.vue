
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
    min-height: 50% !important;
    height: 50% !important;
    margin: 1% 0% 10% 0%;
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
                this.textoBtn = "Iniciar sesión";
            }
        }
    }
}
</script>

