<template>
  <div class="product-card">
    <div class="product-content">
      <div class="product-image">
        <div
          class="drink-image"
          :style="{ backgroundImage: `url(${product.image})` }"
        ></div>
      </div>
      <div class="product-detail">
        <div class="product-name">
          {{ product.name }}
        </div>
        <div class="product-description">
          {{ product.description }}
        </div>
        <div class="price">
          <label>price</label> <span> {{ product.price }}฿</span>
        </div>

        <div class="stock">
          <label>stock</label> <span> {{ product.stock }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="action">
            <button class="btn btn-add-item">add items</button>
            <button class="btn btn-decrease-item">decrease</button>
            <button class="btn btn-edit">edit</button>
          </div>
          <div class="alert warning">nearly out of item</div> -->
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
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
        background-size: 6.75rem;
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
        font-size: 16px;
        padding-top: 0.5rem;
      }
    }

    .stock {
      span {
        font-weight: bold;
        font-size: 16px;
        padding-top: 0.5rem;
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
</style>
