<template>
<div class="containerFake">
  <div class="container" :class="{ 'isRegister': !logIn }">
    <registerComponent v-if="!logIn"></registerComponent>
    <loginComponent v-if="logIn"></loginComponent>
    <el-button v-if="logIn" class="btn loginBtn" :class="{ 'active': logIn }" @click="switchButton()">
      <!--Iniciar Sesión-->
      Registrarse
    </el-button>
    <el-button v-if="!logIn" class="btn registerBtn" :class="{ 'active': !logIn }" @click="switchButton()">
      Tienes cuenta? Iniciar Sesion
    </el-button>
  </div>
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

.containerFake{
  width: 300px; /* Ajusta el ancho del contenedor según tus necesidades */
  height: 200px; /* Ajusta la altura del contenedor según tus necesidades */
  margin: auto; /* Margen automático para centrar horizontalmente */
  /* Opción 2: centrar verticalmente utilizando relleno */
  padding-top: calc(55vh - 1px);  /* Calcula la mitad de la altura de la pantalla y resta la mitad de la altura del contenedor */
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*min-height: 100vh;*/

}

.loginBtn {
  color: white;
  margin: 10% 0% 15% 0%; /* Ajusta el margen superior para bajar el botón */
  padding: 10px 20px;
  
}

@media (max-width: 400px) {
  .loginBtn,
  .registerBtn {
    width: 80%; /* Ajusta el ancho de los botones en dispositivos móviles */
  }
}

.registerBtn {
  color: white;
  margin: 0 0 5% 0; /* Ajusta el margen inferior para ambos botones */
  padding: 10px 20px;
  padding-top: calc(15vh - 1px);
}

.btn.active {
  /* Estilos para cuando el botón está activo */
  /*border: 2px solid aqua;*/
}

.btn {
  margin: 0 auto; /* Para centrar el botón horizontalmente */
  color: #03e9f4;
  z-index: 20;
  /*border: 2px solid aqua; Agrega un borde blanco de 2px */  
  text-align: center; /* Para centrar el texto dentro del botón */

}

</style>