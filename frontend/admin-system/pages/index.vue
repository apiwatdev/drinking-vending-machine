<template>
  <div class="container"></div>
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
          "2019-06",
          "2019-07",
          "2019-08",
          "2019-09",
          "2019-10",
          "2019-11",
          "2019-12",
          "2020-01",
          "2020-02",
          "2020-03",
          "2020-04",
          "2020-05"
        ],
        datasets: [
          {
            label: "Visits",
            data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78, 45],
            backgroundColor: "#003f5c"
          },
          {
            label: "Pages Views",
            data: [30, 24, 57, 23, 68, 72, 25, 64, 133, 143, 165, 33, 56],
            backgroundColor: "#2f4b7c"
          },
          {
            label: "Users",
            data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
            backgroundColor: "#665191"
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Google analytics data",
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
  created() {
    this.$router.push("/dashboard");
  },
  methods: {
    goToMachineDetail() {
      this.$router.push("/machines/aaaa");
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
