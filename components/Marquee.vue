<template>
  <div class="marquee">
    <div class="marquee-content scroll">
      <div class="text-block">Prime time to buy one get one free ⚡️ Up to 60% off and free shipping! ⚡️</div>
    </div>
    <div class="marquee-content scroll">
      <div class="text-block">Prime time to buy one get one free ⚡️ Up to 60% off and free shipping! ⚡️</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Script setup can remain empty if not needed for dynamic data.
</script>

<style scoped>
.marquee {
    width: 100%;
    grid-column-gap: 1rem;
    background: rgb(114,191,120);
    background: linear-gradient(90deg, rgba(114,191,120,1) 0%, rgba(95,95,253,1) 50%, rgba(0,212,255,1) 100%);
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    overflow: hidden;
    margin-bottom: 2rem;
    position: sticky;
    top: 60px;
    z-index: 9;
}
.marquee-content {
    min-width: 100%;
    grid-column-gap: 1rem;
    flex: none;
    justify-content: space-around;
    display: flex;
}
.scroll {
    animation: scroll 20s linear infinite;
}

.text-block {
    color: var(--white);
    font-size: 3vw;
    font-weight: 600;
    line-height: 1;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 1rem));
  }
}
</style>
