<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <form @submit.prevent="register">
                    <br>
                    <br>
                    <h1 class="text-center">Register</h1>
                    <input class="container" type="text" placeholder="Name" v-model="name" required>
                    <input class="container" type="text" placeholder="Contact" v-model="contact" minlength="10" maxlength="10" required>
                    <input class="container" type="password" placeholder="Password" minlength="6" v-model="password" required>
                    <input class="container" type="password" placeholder="Confirm Password" v-model="cpassword" required>
                    <input class="container" type="text" placeholder="Class id" v-model="id" required>
                    <br>
                    <br>
                    <p>{{password}}</p>
                    <p>{{cpassword}}</p>
                    <p class="text-warning">{{message}}</p>
                    <button class="btn  btn-primary container shadow rounded-pill bg-white no-border text-secondary" @click="register" type="submit">Register </button>
                    <p class="text-center">or</p>
                    <button class="btn  btn-primary container shadow rounded-pill bg-white no-border text-secondary" @click="login">Login</button>
                 </form>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>   
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:"",
      password:"",
      cpassword:"",
      contact:"",
      id:"",
      message:""

    }
  },
  methods:{
    login(){
        this.$router.push("login");
    },
    register(){
        if(this.name.length< 5|| this.password.length<6){
            this.message="please make sure 1.password length is greater then 6 and name is less then 5"
            return
        }
        if(this.password!==this.cpassword){
            this.message="Both passwords are different."
            this.password=""
            this.cpassword=""
            return
        }
        if(this.id.length<=5){
            this.message="Wrong id."
            return
        }
      this.$parent.name="abhishek";
      this.$parent.type=0;
      this.$parent.group="test";
      this.$router.push("home"); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
