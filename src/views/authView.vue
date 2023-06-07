
<template>
    <div class="container" :class="{ 'isRegister': !logIn }">
        <registerComponent v-if="!logIn"></registerComponent>
        <loginComponent v-if="logIn"></loginComponent>
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
    background-color: aqua;
    margin: 3% 0%;
}
</style>

<script>
import registerComponent from "../components/registerComponent.vue"
import loginComponent from "../components/loginComponent.vue"
export default {
    components: {
        // Registrar el componente importado
        registerComponent,
        loginComponent
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

