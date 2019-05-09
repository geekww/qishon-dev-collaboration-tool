<template>
    <header class="header">
        <img src="../assets/images/index/logo.png" alt="logo">
        <div class="menu-nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" @click="$router.push('/index')">首页</el-menu-item>
                <el-menu-item index="2" @click="$router.push('/collaborative/guid')">协同开发</el-menu-item>
                <el-menu-item index="3" @click="$router.push('/developer')">开发者</el-menu-item>
                <el-menu-item index="4" @click="$router.push('/designer')">设计师</el-menu-item>
            </el-menu>
            <div class="line"></div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        mixins: [],
        components: {},
        props: {},
        data() {
            return {
                activeIndex: '1'
            }
        },
        computed: {},
        watch: {},
        created() {

        },
        mounted() {

        },
        destroyed() {

        },
        methods: {
            handleSelect() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        height: 80px;
        background: #fff;
        color: #000;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 80px;
        z-index: 100;
        position: relative;
        .menu-nav {
            float: right;
            /deep/.el-menu.el-menu--horizontal {
                border-bottom: none;
            }
        }
        img {
            height: 50px;
            margin: 15px 0;
        }
        ul {

        }
    }
</style>
