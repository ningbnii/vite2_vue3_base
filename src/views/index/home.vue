<template>
  <div class="container">
    <header>
      <h1 class="page-heading">Ink</h1>
    </header>
    <nav>
      <ul class="site-nav">
        <li><a href="">Home</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Support</a></li>
        <li class="nav-right"><a href="">About</a></li>
      </ul>
    </nav>

    <main class="main tile">
      <h1>Team collaboration done right</h1>
      <p>
        Thousands of teams from all over the world turn to <b>Ink</b>to
        communicate and get things done.
      </p>
    </main>

    <div class="sidebar-top tile">
      <form action="" class="login-form">
        <h3>Login</h3>
        <p>
          <label for="username">Username</label
          ><input type="text" id="username" />
        </p>
        <p>
          <label for="password">Password</label
          ><input type="password" id="password" />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>

    <div class="sidebar-bottom tile centered">
      <small>Starting at</small>
      <div class="cost">
        <span class="cost-currency"></span>
        <span class="cost-dollars"></span>
        <span class="cost-cents"></span>
      </div>
      <a href="" class="cta-button">Sign up</a>
    </div>
  </div>
</template>
<script setup>
import { useMeta } from 'vue-meta'
useMeta({
  title: '用户中心',
})
</script>
<style lang="scss">
.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(4, auto); // 定义4条水平轨道，大小为auto
  grid-gap: 1.5em;
  max-width: 1080px;
}

header,
nav {
  grid-column: 1/3;
  grid-row: span 1;
}
main {
  grid-column: 1/2;
  grid-row: 3/5;
}
.sidebar-top {
  grid-column: 2/3;
  grid-row: 3/4;
}
.sidebar-bottom {
  grid-column: 2/3;
  grid-row: 4/5;
}
.tile {
  padding: 1.5em;
  background-color: #fff;
}
.tile > :first-child {
  margin-top: 0;
}
.tile * + * {
  margin-top: 1.5em;
}
</style>
