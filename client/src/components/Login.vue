<template>
  <div>
      <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="manage-top"></div>
                <br>
                <br>

                <h1 class="text-center">Login</h1>
                <input class="container" type="text" placeholder="Contact" v-model="contact" minlength="10" maxlength="10">
                <input class="container" type="password" placeholder="Password" v-model="password" minlength="6">
                <p class="textwarning">{{message}}</p>
                <br>
                <br>
                <button class="btn  btn-primary container shadow rounded-pill bg-white no-border text-secondary" @click="login">Login
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if="message=='loading'"></span>
                </button>

                <p class="small text-right"><a href="#"><u>Forgate</u></a> password.</p>
                <p class="text-center">or</p>
                <button class="btn  btn-primary container shadow rounded-pill bg-white no-border text-secondary" @click="register">Register</button>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>    
   
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
      contact:"",
      password:"",
      message:""
    }
  },
  methods:{
     login : async function(){
        if(this.contact.length!=10 || this.password.length<6){
          alert("username and password are smaller then they must be.")
          return
        }
        var url=this.$parent.url+"/login/user"
        var data={contactno:this.contact,password:this.password}
        // alert(data)
        this.message="loading";
        axios
            .post(url,data)
            .then(function(response){
              console.log(response.data)
              if(response.data.login){
                this.$parent.user=res.user
                this.$router.push("subjects")
              }
              else{
                this.message="wrong username or password."
              }
            })
        this.message="";
      },

      register(){
        this.$router.push("register");
      }
  }
  



  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
