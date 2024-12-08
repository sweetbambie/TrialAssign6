<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="header">
    <nav>
      <ul class="navlist">
        <li class="logo">Feminine Flix</li>
        <div class="buttons">
          <li><RouterLink to="/register" class="button register">Register</RouterLink></li>
          <li><RouterLink to="/login" class="button login">Login</RouterLink></li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.navlist {
  list-style-type: none;
  margin: 8px 8px;
  padding: 0;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navlist li {
  float: right;
}

.navlist li a {
  padding: 8px 16px;
  text-decoration: none;
}

.logo {
  font-size: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: bold;
  margin-left: 8px;
  color: hotpink;
}

.buttons {
  display: flex;
}

.button {
  background-color: rgb(255, 255, 255);
  color: black;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 4px;
  font-weight: bold;
}
</style>