import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLoginBoxStateManage = defineStore('loginBoxState', () => {
    const loginBoxState = ref<boolean>(true);
    
    function disableLoginBoxState() {
        loginBoxState.value = false;
    }

    function enableLoginBoxState() {
        loginBoxState.value = true;
    }

    function getLoginBoxValue():boolean{
        return loginBoxState.value;
    }

    return { loginBoxState, disableLoginBoxState, enableLoginBoxState,getLoginBoxValue }
})