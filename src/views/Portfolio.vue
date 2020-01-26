<template>
  <b-row>
    <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "@/components/StockPort";
export default {
  computed: {
    ...mapGetters({ stocks: "stockPortfolio" })
  },
  components: {
    Stock
  }
};
</script>