<template>
  <div class="container">
    <div class="graph-chart">
      <bar-chart
        :data="barChartData"
        :options="barChartOptions"
        :height="200"
      />
    </div>
    <div class="machine-health">
      <p class="title">Machines</p>
      <div
        class="machine-card"
        v-for="machine of machines"
        :key="machine.id"
        @click="goToMachineDetail(machine.id)"
      >
        <h2 class="machine-name">{{ machine.name }}</h2>
        <p class="machine-lo">{{ machine.location }}</p>
        <!-- <p class="machine-updatedate">{{machine}}</p> -->
        <!-- <span class="alert warning">nearly out of item</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/chart/BarChart.js";
export default {
  middleware: "auth",
  components: {
    "bar-chart": BarChart
  },
  data() {
    return {
      barChartData: {
        labels: [
          "Machine001",
          "Machine002",
          "Machine003",
        ],
        datasets: [
          {
            label: "salse",
            data: [10,30,15],
            backgroundColor: "#fd9f2c"
          },
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Drink salse (Mock)",
          fontSize: 24,
          fontColor: "#6b7280"
        },
        tooltips: {
          backgroundColor: "#17BF62"
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    };
  },
  fetch() {
    this.$store.commit("setMachine", {});
    this.$store.dispatch("fetchMachines");
  },
  computed: {
    machines() {
      return this.$store.state.machineList;
    }
  },
  mounted() {
    if (!this.machines.length != 0) {
      this.$store.dispatch("fetchMachines");
    }
  },
  methods: {
    goToMachineDetail(machineId) {
      this.$router.push("/machines/" + machineId);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.machine-health {
  .title {
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.machine-health {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  .title {
    text-align: left;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .machine-card {
    cursor: pointer;
    text-align: left;
    background-color: #ecedf1;
    display: block;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 10px;
    position: relative;
    box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);

    .alert {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      border: 1px solid;
      padding: 0.25rem;
      border-radius: 5px;
      font-size: 12px;
    }

    .alert.warning {
      color: #fff;
      border: none;
      background-color: #fcae63;
    }

    .alert.health {
      color: #fff;
      border: none;
      background-color: #70a4a1;
    }

    .alert.denger {
      color: #fff;
      border: none;
      background-color: #fc6363;
    }
  }
}
</style>
