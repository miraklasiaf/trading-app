<template>
  <b-col sm="6" md="4" class="mt-2">
    <b-card header-tag="header" footer-tag="footer" variant="primary">
      <template v-slot:header>
        <h6 class="mb-0">
          {{ stock.name }}
          <small
            >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small
          >
        </h6>
      </template>

      <b-form-input
        type="number"
        v-model="quantity"
        placeholder="Quantity"
        :class="{ danger: insufficientQuantity }"
      ></b-form-input>
    </b-card>

    <b-card-footer>
      <b-button
        variant="success"
        @click="sellStock"
        :disabled="insufficientQuantity || quantity <= 0"
        >{{ insufficientQuantity ? "Not Enough" : "Sell" }}</b-button
      >
    </b-card-footer>
  </b-col>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
