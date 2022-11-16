import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useListProductStoreJson=defineStore('productsQueryIds',()=>{

    interface ProductListKeys {
        id: number,
        product_name: String,
        product_type: String,
        owner_brand: String,
        product_description: String,
        price_per_unit: number
      }
      
    const jsonListProductQuery=ref([]);

    function getProductDetails(index:number):ProductListKeys{
        return JSON.parse(JSON.stringify(jsonListProductQuery.value[index]));
    }

    function setProductDetails(jsonArray:[]):void{
        jsonListProductQuery.value=jsonArray;
    }

    function getAllProducts():Array<ProductListKeys>{
        return JSON.parse(JSON.stringify(jsonListProductQuery.value));
    }

    return {getProductDetails,setProductDetails,getAllProducts}
})