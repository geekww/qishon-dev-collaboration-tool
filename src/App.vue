<template>
    <div id="app">
        <div class="wrapper">
            <Header></Header>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    export default {
        name: 'app',
        components: {
            Header
        },
        data() {
            return {

            }
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    @import "./assets/scss/index.scss";
</style>
