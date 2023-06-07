<template>
  <div class="login-box">
    <h2>Register</h2>
    <form>
      <div class="user-box">
        <input v-model="user.email" type="text" name="Email" required="">
        <label>Email</label>
      </div>
      <div class="user-box">
        <input v-model="user.password" type="password" name="Password" required="">
        <label>Password</label>
      </div>
      <div class="user-box">
        <input v-model="user.name" type="text" name="Name" required="">
        <label>Name</label>
      </div>
      <div class="user-box">
        <input v-model="user.lastname" type="text" name="Lastname" required="">
        <label>Lastname</label>
      </div>


      <div id="uploader">
        <div class="row uploadDoc">
          <div class="col-sm-3">
            <div class="docErr">Por favor seleccione una imagen válida</div><!--error-->
            <div class="fileUpload btn btn-orange">
              <!-- <img src="https://image.flaticon.com/icons/svg/136/136549.svg" class="icon"> -->
              <span class="upl" id="upload">seleccione su foto</span>
              <input type="file" class="upload up" id="up" @change="onFileChange" />
            </div><!-- btn-orange -->
          </div><!-- col-3 -->
        </div><!--row-->
      </div><!--uploader-->



      <a @click="submit()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
</template>

<script>

import {createUser} from '../firebase/manageUsers.js';
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
  methods: {
    async submit() {
      console.log("User: ", this.user);
      const res = await createUser(this.user);
      console.log("RES: ", res);
      this.$router.push('/faceDetector');
    },
    onFileChange(event) {
      const file = event.target.files[0];
      this.user.image = file;
    },
  }
}
</script>