<script setup lang="ts">
import { ref } from 'vue';
import { useNotification } from "@kyvg/vue3-notification";

const { notify } = useNotification()


let usernameBinding = ref<string>('');
let passwordBinding = ref<string>('');

async function validateDataInputs(authenticateCallback: (usernameBinding: string, passwordBinding: string) => void) {
    console.log(usernameBinding.value, ' ', passwordBinding.value);
    //let jsonResponseAuthenticationOauth = {};
    usernameBinding.value = usernameBinding.value.trim();
    passwordBinding.value = passwordBinding.value.trim();
    if (usernameBinding.value !== '' && passwordBinding.value !== '') {
        let jsonResponseAuthenticationOauth = await authenticateCallback(usernameBinding.value, passwordBinding.value);
        console.log(jsonResponseAuthenticationOauth,' here s the server response');
    } else {
        notify({
            title: "Empty inputs",
            text: "You must provide your username and password in order to log in.",
            type: 'error'
        });
    }



}

async function authenticateCredentials(usernameBinding: string, passwordBinding: string) {
    let requestTaken = await fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ usernameBinding, passwordBinding })
    });

    let responseJson = requestTaken.json();
    return responseJson;
}

</script>
<template>
    <section class="min-vh-100 w-auto h-auto d-flex justify-content-center align-items-center">
        <section class="w-25 h-50 d-flex flex-column justify-content-center align-items-center card">
            <section class="card-body w-100 h-100">
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input v-model="usernameBinding" class="form-control" type="text"
                        placeholder="Introduce your username">
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input v-model="passwordBinding" class="form-control" type="password"
                        placeholder="Introduce your password">
                </div>
                <div class="mb-3 text-center">
                    <button @click="validateDataInputs(authenticateCredentials)" class="btn btn-primary w-75">Log
                        in</button>
                </div>
            </section>
        </section>
    </section>
    <notifications width="100%" position="top left" />
</template>
<style scoped>

</style>