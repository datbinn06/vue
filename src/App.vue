<script setup>
    import Header from '@/components/layout/header.vue';
    import Footer from '@/components/layout/footer.vue';
    //b1 . Tao noi dung trang con
    //b2 . khai bao duong dan trong routes/index.js
    //b3 . Thay the the a = routerlink


</script>
<template>
    <header>
        <!-- goi layout da nhung -->
        <Header></Header>
    </header>
    <main>
        <router-view></router-view>
        Noi dung main
    </main>
    <footer>
        <!-- goi layout da nhung -->
        <Footer></Footer>
    </footer>
</template>
<style scoped></style>