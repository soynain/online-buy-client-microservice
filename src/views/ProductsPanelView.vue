<script setup lang="ts">
import { provide, ref, type Ref } from 'vue';
import ModalProductDetailsComponentVue from '@/components/ModalProductDetailsComponent.vue';
import { useListProductStoreJson } from '@/stores/listProductsStore';
import type ProductListKeysInterface from '@/components/ProductListKeysInterface';

const modalProductDetailsComponentSTatus = ref<number>(0);

let listProductInstanceStore = useListProductStoreJson();
let listProductsStore: Array<ProductListKeysInterface> = listProductInstanceStore.getAllProducts();
let productGetDetailsForModal=ref({}) as Ref<ProductListKeysInterface>;

function getProductDetailsForModal(index:number):void{
  productGetDetailsForModal.value = listProductInstanceStore.getProductDetails(index);
  modalProductDetailsComponentSTatus.value=1;
}

provide('modalProductDetailsComponentSTatus', modalProductDetailsComponentSTatus);
provide('productGetDetailsForModal',productGetDetailsForModal);
</script>
<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid d-flex flex-row justify-content-between">
        <section class="d-flex justify-content-between flex-row w-100">
          <span class="navbar-brand mb-0 h1 w-25">Online buying client</span>
          <ul class="navbar-nav d-flex flex-row justify-content-between w-50">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Finished items</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Close session</a>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  </header>



  <section class="m-0 p-0 d-flex justify-content-start align-items-start min-vh-100 table-section">
    <div class="container">
      <header class="h4 text-center mt-3 mb-3">Welcome to the buy platform</header>
      <dt class="text-center">Here you can watch a list of available products of this store.
        Each item has it's own availability based on the stock available.
        Have fun!
      </dt>

      <section class="datatable-body-scroller">
        <table class="table table-light table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th class="datatable-columns" scope="column">Product name</th>
              <th class="datatable-columns" scope="column">Price per unit</th>
              <th class="datatable-columns" scope="column"></th>
            </tr>
          </thead>

          <tbody class="datatable-body">
            <tr v-for="(value, key, index) in listProductsStore">
              <td>{{ value.product_name }}</td>
              <td>{{ value.price_per_unit }}</td>
              <td><button @click="getProductDetailsForModal(key)" class="btn btn-primary">Details</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </section>

  <ModalProductDetailsComponentVue v-if="modalProductDetailsComponentSTatus === 1"
    :key="modalProductDetailsComponentSTatus"/>
</template>
<style scoped>
.datatable-columns {
  color: white;
  background-color: #3b3b3b;
}

.datatable-body-scroller {
  overflow-y: auto;
  height: 30rem !important;
}
</style>