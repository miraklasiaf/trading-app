<template>
  <b-row>
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
  </b-row>
</template>

<script>
import Stock from "../components/Stock.vue";
export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },
  components: {
    Stock
  }
};
</script>