<template>
  <div class="container" :class="{ 'isRegister': !logIn }">
    <registerComponent v-if="!logIn"></registerComponent>
    <loginComponent v-if="logIn"></loginComponent>
    <el-button class="btn" :class="{ 'loginBtn': logIn, 'registerBtn': !logIn }" @click="switchButton()">
      {{ textoBtn }}
    </el-button>
  </div>
</template>

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
                this.textoBtn = "Iniciar Sesión";
            }
        }
    }
}
</script>

<style>

.container {
  display: flex;
  width:100%;
  
}



.registerBtn {
 background-color: yellow;
}

.isRegister{
    display: flex;
    flex-direction: column;
    min-height: 75% !important;
    height: 75% !important;
    margin: 1% 0% 10% 0%;
}

.btn {
  margin: 0 auto; /* Para centrar el botón horizontalmente */
  color: #03e9f4;
  z-index: 20;
  border: 1px solid white; /* Agrega un borde blanco de 2px */
  
  text-align: center; /* Para centrar el texto dentro del botón */

}


</style>