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
                <input class="container" type="text" placeholder="Contact" v-model="username">
                <input class="container" type="password" placeholder="Password" :v-model="password">
                <br>
                <br>
                <button class="btn  btn-primary container shadow rounded-pill bg-white no-border text-secondary" @click="login">Login </button>
                <p class="small text-right"><a href="#"><u>Forgate</u></a> password.</p>
                <p class="text-center">or</p>
                <button class="btn  btn-primary container shadow rounded-pill bg-white no-border text-secondary">Register</button>
                <p>{{username}}</p>
                <p>{{password}}</p>
                <p>{{parent.name}}</p>
                <p>{{parent.group}}</p>
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
      username:"",
      password:""
    }
  },
  methods:{
    login(){
      if(this.username.length< 10 || this.password.length<6){
        alert("username and password are smaller then they must be.")
      }
      this.parent.name=abhishek;
      this.parent.type=0;
      this.parent.group="test"
    }

  }
,
mounted:{

},
watch:{
    
}
  



  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
