<template>
  <div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required="">
        <label>Email</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required="">
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
  <div class="bubbles">
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
  </div>
</template>

<script>
export default {
  // Resto de la configuración del componente
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
  overflow: hidden;
}

@keyframes bubbles {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-200vh);
    opacity: 0;
  }
}

.login-box {
  position: relative;
  z-index: 1;
}

.bubbles {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bubble {
  position: absolute;
  bottom: -50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #a8c1db;
  opacity: 0.5;
  animation: bubbles 10s ease-in-out infinite; /* Ajusta la duración de la animación */
}

.bubble:nth-child(1) {
  left: calc(10% + 20px);
  animation-delay: 0s;
}

.bubble:nth-child(2) {
  left: calc(20% + 40px);
  animation-delay: 1s;
}

.bubble:nth-child(3) {
  left: calc(30% + 60px);
  animation-delay: 2s;
}

.bubble:nth-child(4) {
  left: calc(40% + 80px);
  animation-delay: 3s;
}

.bubble:nth-child(5) {
  left: calc(50% + 100px);
  animation-delay: 4s;
}

.bubble:nth-child(6) {
  left: calc(60% + 120px);
  animation-delay: 5s;
}

.bubble:nth-child(7) {
  left: calc(70% + 140px);
  animation-delay: 6s;
}

.bubble:nth-child(8) {
  left: calc(80% + 160px);
  animation-delay: 7s;
}

.bubble:nth-child(9) {
  left: calc(90% + 180px);
  animation-delay: 8s;
}

.bubble:nth-child(10) {
  left: calc(100% + 200px);
  animation-delay: 9s;
}

</style>
