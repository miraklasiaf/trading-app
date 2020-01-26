<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="/" tag="b-navbar-brand" activeClass="active">
        <a class="nav-link">Trading App</a>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/portfolio" tag="b-nav-item" activeClass="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="b-nav-item" activeClass="active">
            <a class="nav-link">Stocks</a>
          </router-link>
          <router-link to="/about" tag="b-nav-item" activeClass="active">
            <a class="nav-link">About</a>
          </router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click="endDay">End Day</b-nav-item>

          <b-nav-item-dropdown
            @click="isDropDown = !isDropdownOpen"
            :class="{open: isDropdownOpen}"
            text="Save & Load"
            right
          >
            <b-dropdown-item href="#" @click="saveData">Save Data</b-dropdown-item>
            <b-dropdown-item href="#" @click="loadData">Load Data</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item>Funds: {{ funds }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      axios
        .put("https://trading-app-c88cc.firebaseio.com/data.json", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>