<template>
  <b-row>
    <app-stock
      v-for="(stock, index) in stocks"
      :key="index"
      :stock="stock"
    ></app-stock>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "../components/StockPort.vue";
export default {
  computed: {
    ...mapGetters({ stocks: "stockPortfolio" })
  },
  components: {
    appStock: Stock
  }
};
</script>
