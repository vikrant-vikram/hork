<template>
  <div id="app">
    <div class="header">
      <div class="rounded-circle">
        logo
      </div>
    </div>



    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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

</style>
