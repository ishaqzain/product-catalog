<template>
  <div class="main">
    <Header></Header>
    <div class="ellipse"></div>
    <div class="main-wrapper">
      <div class="global-padding">
        <slot></slot>
      </div>
    </div>
    <Footer></Footer>
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
  .ellipse {
    position: absolute;
    opacity: .75;
    width: 75%;
    height: 50vh;
    top: 110px;
    left: 0;
    right: 0;
    margin:auto;
    background: linear-gradient(180deg, rgba(114, 191, 120, .4) 0%, rgba(95, 95, 253, .2) 49.5%, rgba(0, 126, 124, 0) 100%);
    filter: blur(92px);
    z-index: -1;

  }
</style>
