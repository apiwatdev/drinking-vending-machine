<template>
  <header>
    <h1
      class="logo"
      @click="goToMachine()
      "
    >
      <span>O</span>Drink
    </h1>
    <div class="machine-name">
      {{$store.state.machineId}}
    </div>
  </header>
</template>

<script>
export default {
    methods:{
        goToMachine(){
            this.$router.push('/'+this.$store.state.machineId);
        }
    }
};
</script>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  .logo {
    cursor: pointer;
    display: block;
    span {
      color: $primary-color;
    }
    h1 {
      font-size: 24px;
    }
  }

  .machine-name {
    display: block;
  }
}
</style>
