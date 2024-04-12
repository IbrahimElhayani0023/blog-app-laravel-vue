<template>
    <header><Nav/></header>
    <main>
        <router-view></router-view>
    </main>
    <footer class="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white" >
        <Footer/>
    </footer>
</template>

<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

