<template>
  <div class="main">
    <Header></Header>
    <div class="main-wrapper">
      <div class="global-padding">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .main-wrapper {
    width: 100%;
    max-width: 64rem;
    margin: auto;
  }
  .global-padding {
    padding: 0 5%;
  }
</style>
