<template>
  <div id="app">
        <nav class="navbar sticky-top shadow">
        <a href="#" class="rounded-circle bg-primary">Hwk</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   data () {
    return {
      type:0,
      user:{},
      url:"http://127.0.0.1:5555"

    }
  }
}
</script>

<style>


body{

  background-color:#FFE2D1 ;
  padding: 0;
  margin-top: 0px;
}
.header{
  position: sticky;
  height: 10vh;
  background-color: #55917F;
  min-height: 10vh;
  width: 120vw;
  left:0px;
  right:0px;
  margin-left:-10px;
  margin-right: 0px;

}
 body{
        background-color: #ffe2d1;
        color: #55917f;

    }
    nav{
        /* background-color: #ffe2d1; */
        background-color: #55917f;
        color: #ffe2d1;
    }
    input{
        background-color: transparent;
        border: none;
        margin-top: 4vh;
        color: #55917f;
        border-bottom: #55917f thin solid;
    }
    .secondary{
        background-color: #55917f;
    }
    .text-secondary{
        background-color: #55917f;
    }
    .primary{
        color: #ffe2d1;
    }
    .no-border{
        border: none;
    }
    .bg-primary{
        background-color: #ffe2d1;
    }
    .bg-white{
        background-color: white;
    }
    .manage-top{
        margin-top: 15vh;
    }

</style>
