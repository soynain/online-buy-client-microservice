<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import LoginBoxComponent from './components/LoginBoxComponent.vue';
import {useLoginBoxStateManage} from './stores/LoginBoxStateManager';

let loginBoxState=useLoginBoxStateManage();


</script>

<template>
  <header>

    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid d-flex flex-row justify-content-between">
        <span class="navbar-brand mb-0 h1">Online buying client</span>
        <span>
            Welcome to your most conformtable platform for you! buy whatever you want
        </span>
      </div>
    </nav>

    <LoginBoxComponent v-if="loginBoxState.getLoginBoxValue()===true"/>

    <!--<nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>-->
  </header>

  <RouterView />
</template>

<style scoped>

</style>
