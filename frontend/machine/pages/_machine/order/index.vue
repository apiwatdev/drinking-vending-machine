<template>
  <div class="container">
     
    <div class="thank-you">
      
      Thank you!
   

    </div>
    <div class="drink-product">
      <div
        class="drink-image"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
    <div>
      <div class="drink-detail">
        <h2>Coca-cola</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quae facilis nostrum soluta repudiandae fugit reiciendis et doloribus
          eos, aliquid tempora adipisci natus at. Ab tenetur ipsam atque numquam
          voluptatem.
        </p>
      </div>
      <div class="price">Price <span>12 ฿</span></div>
      <div class="quantity">Quantity <span>12</span></div>
      <div class="total">Total <span>12 ฿</span></div>
    </div>
  </div>
</template>

<script>
import cokeImage from "~/assets/images/cocacola_PNG22.png";
export default {
  layout: "machine",
  data() {
    return {
      image: cokeImage
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}
.drink-product {
  display: block;
  width: 100%;
  min-width: 12rem;
  padding: 0.5rem;
  height: 24rem;
  margin: 0.5rem auto;
  border-radius: 5%;
  cursor: pointer;
  background-image: linear-gradient(180deg, $primary-color, #fec987);
  box-shadow: 2px 5px 12px 0 rgb(0 0 0 / 20%);

  .drink-image {
    width: 100%;
    height: 25rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25rem;
  }
}

.quantity {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;

  .minus {
    margin: 0 0.5rem;
  }

  .qty {
    margin: 0 0.5rem;
  }

  .plus {
    margin: 0 0.5rem;
  }

  .avaliable {
    font-size: 14px;
    padding-top: 0.25rem;
  }
}

.price, .total, .quantity  {
  margin-top: 1rem;
}

.thank-you {
  text-align: center;
  font-size: 50px;
  font-weight: 400;
  color: #666565;
}
</style>
