<template>
  <div class="portfolio">
    <figure class="featured">
      <img src="../../assets/logo.png" alt="monkey" />
      <figcaption>Monkey</figcaption>
    </figure>
    <figure>
      <img src="../../assets/logo.png" alt="eagle" />
      <figcaption>Eagle</figcaption>
    </figure>
    <figure class="featured">
      <img src="../../assets/logo.png" alt="bird" />
      <figcaption>Bird</figcaption>
    </figure>
    <figure>
      <img src="../../assets/logo.png" alt="bear" />
      <figcaption>Bear</figcaption>
    </figure>
    <figure class="featured">
      <img src="../../assets/logo.png" alt="swan" />
      <figcaption>Swan</figcaption>
    </figure>
    <figure>
      <img src="../../assets/logo.png" alt="elephants" />
      <figcaption>Elephants</figcaption>
    </figure>
    <figure>
      <img src="../../assets/logo.png" alt="owl" />
      <figcaption>Owl</figcaption>
    </figure>
  </div>
</template>
<script setup>
import { useMeta } from 'vue-meta'
useMeta({
  title: '用户中心',
})
</script>
<style lang="scss">
.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1em;
  grid-auto-flow: dense;
  figure {
    display: flex;
    flex-direction: column;
    max-width: initial;
    img {
      flex: 1;
      object-fit: cover;
    }
    figcaption {
      padding: 0.3em 0.8em;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      text-align: right;
    }
  }
  .featured {
    grid-row: span 2;
    grid-column: span 2;
  }
}
</style>
