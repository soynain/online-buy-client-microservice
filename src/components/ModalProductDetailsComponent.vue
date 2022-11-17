<script setup lang="ts">
import { inject, onMounted, ref, type Ref } from 'vue';
import type ProductListKeysInterface from '@/components/ProductListKeysInterface';

const stepUpButton = ref<HTMLInputElement | null>(null);

let modalProductDetailsComponentSTatus=inject('modalProductDetailsComponentSTatus') as Ref<number>;
let productGetDetailsForModalInstance=inject('productGetDetailsForModal') as Ref<ProductListKeysInterface>;


onMounted(()=>{
    console.log(productGetDetailsForModalInstance.value);
})
function closeModal():void{
    modalProductDetailsComponentSTatus.value=0;
    productGetDetailsForModalInstance.value={id:0}
}

function stepUpItemQuantity(): void {
    stepUpButton.value?.stepUp()
}

function stepDownItemQuantity(): void {
    stepUpButton.value?.stepDown();
}

onMounted(()=>{
    stepUpButton.value?.stepUp()
})
</script>
<template>
    <section class="d-flex w-100 h-100 justify-content-center align-items-center min-vh-100 modal-area">
        <section class="card w-50 h-75 modal-card">
            <section class="card-body ml-0 me-0 d-flex flex-column justify-content-start align-items-start">
                <section class="modal-header d-flex flex-column w-100">
                    <button @click="closeModal()" type="button" class="btn-close" aria-label="Close"></button>
                    <header class="h5 text-center">Product details</header>
                    <blockquote class="text-center">You're just a step for having your product on your hands.
                    </blockquote>
                </section>
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="text-center">
                                <dt>Product name: </dt><span>{{productGetDetailsForModalInstance.product_name}}</span>
                            </td>
                            <td class="text-center">
                                <dt>Product type: </dt><span>{{productGetDetailsForModalInstance.product_type}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">
                                <dt>Owner brand: </dt><span>COSTEÑA</span>
                            </td>
                            <td class="text-center">
                                <dt>Product description: </dt><span>{{productGetDetailsForModalInstance.product_description}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center" colspan="2">
                                <dt>Price per unit: </dt><span>{{productGetDetailsForModalInstance.price_per_unit}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <section class="quantity-menu-interact w-100">
                    <blockquote class="text-center">
                        Select the amount of items you want to buy
                    </blockquote>
                    <div class="w-100 justify-content-center d-flex flex-row mb-2">
                        <button @click="stepUpItemQuantity" class="btn btn-light border">+</button>
                        <input class="form-control" ref="stepUpButton" style="width:5rem" type="number" min="1"
                            max="100">
                        <button @click="stepDownItemQuantity" class="btn btn-light border">-</button>
                    </div>
                    <button class="btn btn-primary w-100">Add to cart</button>
                </section>
            </section>
        </section>
    </section>
</template>
<style scoped>
.modal-area {
    /*display: flex;*/
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

.modal-card {
    z-index: 99999999;
    overflow-y: auto;
}

/*Snipper for hidding the arrows of the number input*/
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    appearance: none;
}
</style>