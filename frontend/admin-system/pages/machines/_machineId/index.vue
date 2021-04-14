<template>
  <div class="container">
    <div class="content">
      <div class="machine-name"><h2>machine 001</h2></div>
      <div class="machine-location">
        <span>location </span>
        Bang Bon Bangkok
      </div>
      <div class="map">
        map
      </div>
      <div class="product">
        <div class="product-title">Products</div>
        <input class="search" type="text" placeholder="search" />
        <div class="product-card">
          <div class="product-content">
            <div class="product-image">
              <div
                class="drink-image"
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </div>
            <div class="product-detail">
              <div class="product-name">
                Coca-Cola
              </div>
              <div class="product-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                mollitia excepturi ducimus voluptatibus expedita dolor officia
                impedit dicta corrupti, neque enim ut voluptas, optio alias
                pariatur inventore assumenda repellendus veniam!
              </div>
              <div class="price">price <span>10฿</span></div>

              <div class="stock">stock <span>9</span></div>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-add-item">add items</button>
            <button class="btn btn-decrease-item">decrease</button>
            <button class="btn btn-edit">edit</button>
          </div>
          <div class="alert warning">nearly out of item</div>
        </div>

        <div class="product-card">
          <div class="product-content">
            <div class="product-image">
              <div
                class="drink-image"
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </div>
            <div class="product-detail">
              <div class="product-name">
                Coca-Cola
              </div>
              <div class="product-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                mollitia excepturi ducimus voluptatibus expedita dolor officia
                impedit dicta corrupti, neque enim ut voluptas, optio alias
                pariatur inventore assumenda repellendus veniam!
              </div>
              <div class="price">price <span>10฿</span></div>

              <div class="stock">stock <span>9</span></div>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-add-item">add items</button>
            <button class="btn btn-decrease-item">decrease</button>
            <button class="btn btn-edit">edit</button>
          </div>
          <div class="alert warning">nearly out of item</div>
        </div>

        <div class="product-card">
          <div class="product-content">
            <div class="product-image">
              <div
                class="drink-image"
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </div>
            <div class="product-detail">
              <div class="product-name">
                Coca-Cola
              </div>
              <div class="product-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                mollitia excepturi ducimus voluptatibus expedita dolor officia
                impedit dicta corrupti, neque enim ut voluptas, optio alias
                pariatur inventore assumenda repellendus veniam!
              </div>
              <div class="price">price <span>10฿</span></div>

              <div class="stock">stock <span>9</span></div>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-add-item">add items</button>
            <button class="btn btn-decrease-item">decrease</button>
            <button class="btn btn-edit">edit</button>
          </div>
          <div class="alert warning">nearly out of item</div>
        </div>

        <div class="product-card">
          <div class="product-content">
            <div class="product-image">
              <div
                class="drink-image"
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </div>
            <div class="product-detail">
              <div class="product-name">
                <input type="text" placeholder="name" />
              </div>
              <div class="product-description">
                <input type="text" placeholder="detail" />
              </div>
              <div class="price">
                <label for="">price</label>
                <input type="text" placeholder="100" />
              </div>
              <div class="stock">
                <label for="">stock</label>
                <input type="text" placeholder="100" />
              </div>
            </div>
          </div>
          <div class="action">
            <button class="btn btn-save">save</button>
          </div>
        </div>

        <div class="action">
          <button class=" btn-add-product">add product</button>
        </div>
      </div>
    </div>

    <!-- <div class="model-content">
      <div class="model add-item">
        <input type="text" />
        <button>add</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import cokeImage from "~/assets/images/cocacola_PNG22.png";
export default {
  components: {},
  data() {
    return {
      image: cokeImage
    };
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

.content {
  text-align: left;
  padding: 2rem;

  .machine-location {
    margin: 0.75rem 0;
    display: flex;
    font-weight: 500;
    span {
      margin: 0 1rem 0 0;
    }
  }
  .map {
    border: 1px solid #ddd;
    height: 8rem;
    border-radius: 10px;
    margin: 0.25rem;
  }

  .product {
    margin-top: 1rem;
    .product-title {
      font-weight: 600;
    }

    .product-card {
      padding: 1rem;
      border-radius: 10px;
      position: relative;
      box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
      margin: 1rem 0;
      .product-content {
        display: flex;
        margin-top: 1rem;
        .product-image {
          display: block;
          width: 100%;
          min-width: 10rem;
          max-width: 10rem;
          padding: 0.5rem;
          height: 10rem;
          border-radius: 5%;
          cursor: pointer;
          background-image: linear-gradient(180deg, $primary-color, #fec987);
          box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
          margin-right: 1rem;
          .drink-image {
            width: 100%;
            height: 10rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 10rem;
          }
        }
        .product-name {
          font-size: 24px;
        }

        .product-description {
          font-size: 12px;
          color: #666565;
        }

        .price {
          span {
            font-weight: bold;
            font-size: 20px;
          }
        }

        .stock {
          span {
            font-weight: bold;
            font-size: 20px;
          }
        }
      }

      .action {
        text-align: center;

        .btn {
          border: none;
          outline: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 5px;
        }

        .btn-add-item {
          background-color: #70a4a1;
          color: #fff;
        }

        .btn-decrease-item {
          color: #fff;
          background-color: #8871fc;
        }

        .btn-edit {
          color: #fff;
          background-color: #707070;
        }

        .btn-save {
          color: #fff;
          background-color: #70a4a1;
        }
      }

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

      input {
        padding: 0.5rem;
        border: 1px solid #ecedf1;
        margin: 0.25rem 0;
        border-radius: 5px;
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        outline: none;

        width: 100%;

        ::placeholder {
          color: #c7c7c7;
        }
      }

      .price {
        display: flex;
        label {
          font-size: 15px;
          padding-top: 0.5rem;
          margin-right: 1rem;
        }
      }

      .stock {
        display: flex;
        label {
          font-size: 15px;

          padding-top: 0.5rem;
          margin-right: 1rem;
        }
      }
    }

    .btn-add-product {
      width: 100%;
      outline: none;
      cursor: pointer;
      color: #fff;
      border: none;
      background-color: #fec987;
      font-family: "Prompt", Arial, sans-serif;
      font-size: 20px;
      box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
      margin: 1rem auto;
      padding: 0.8rem 0;
      border-radius: 10px;
      font-weight: 700;
    }

    input.search {
      display: block;
      font-size: 18px;
      width: 100%;
      padding: 1rem;
      border: none;
      margin: 0.5rem 0;
      border-radius: 10px;
      text-decoration: none;
      outline: none;
      border: 1px solid #ecedf1;
    }
    .search::after {
      content: " * * * *";
      display: block;
      // background-image: url(~assets/icons/search.svg);
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
    }
  }
}
.model-content {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #00000038;
  justify-content: center;
  align-items: center;
  .model {
    width: 20rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);
    margin: auto;
  }
}
</style>
