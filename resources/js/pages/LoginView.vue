<template>
    <div class="w-full h-screen flex justify-center items-center bg-slate-200">
        <form class="w-1/3 bg-slate-50 p-12 rounded-md shadow-lg">
            <h1 class="text-3xl font-bold mb-12 underline text-center">Login</h1>
            <Input type="email" placeholder="email"/>
            <Input type="password" placeholder="password"/>
            <Button>login</Button>
            <div class="flex justify-between items-center px-2 mt-4">
                <router-link class=" ms-3 flex gap-1 duration-200 hover:ms-2 hover:gap-3 hover:text-blue-700" to="/"><span><-</span> Home Page</router-link>
                <router-link class="me-3 flex gap-1 duration-200 hover:me-2 hover:gap-3 hover:text-blue-700" to="/register">Register<span>-></span></router-link>
            </div>
        </form>
    </div>
</template>

<script setup>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import { reactive } from 'vue';
const form = reactive({
  email: '',
  password: ''
});

</script>

