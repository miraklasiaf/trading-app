<template>
  <div>
    <h1>Trader or View your Portfolio</h1>
    <h6>You may Save & Load your data</h6>
    <h6>CLick on End Day to begin a New day!</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
