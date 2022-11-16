<script setup lang="ts">
import { provide, ref } from 'vue';
import ModalProductDetailsComponentVue from '@/components/ModalProductDetailsComponent.vue';
import { useListProductStoreJson } from '@/stores/listProductsStore';



interface ProductListKeys {
  id: number,
  product_name: String,
  product_type: String,
  owner_brand: String,
  product_description: String,
  price_per_unit: number
}

let listProductInstanceStore = useListProductStoreJson();
let listProductsStore = listProductInstanceStore.getAllProducts();
console.log(typeof listProductsStore);


const modalProductDetailsComponentSTatus = ref<number>(1);

provide('modalProductDetailsComponentSTatus', modalProductDetailsComponentSTatus);
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
            <!--<tr v-for="(item, index) in listProductsStore">
              <td>{{ item.produc }}</td>
              <td>{{}}</td>
              <td><button class="btn btn-primary">Details</button></td>
            </tr>-->
            {{listProductsStore}}
          </tbody>
        </table>
      </section>
    </div>
  </section>

  <ModalProductDetailsComponentVue v-if="modalProductDetailsComponentSTatus === 1"
    :key="modalProductDetailsComponentSTatus" />
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