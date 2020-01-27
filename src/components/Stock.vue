<template>
  <b-col sm="6" md="4" class="mt-2">
    <b-card header-tag="header" footer-tag="footer">
      <template v-slot:header>
        <h6 class="mb-0">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h6>
      </template>

      <b-form-input
        type="number"
        v-model="quantity"
        placeholder="Quantity"
        :class="{ danger: insufficientFunds }"
      ></b-form-input>
    </b-card>
    <b-card-footer>
      <b-button
        variant="success"
        @click="buyStock"
        :disabled="insufficientFunds || quantity <= 0"
        >{{ insufficientFunds ? "Insufficient Funds" : "Buy" }}</b-button
      >
    </b-card-footer>
  </b-col>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>
