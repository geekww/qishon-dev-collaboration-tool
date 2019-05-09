<template>
    <div class="qishon-collaboration">
        <SideBar></SideBar>
        <div class="content">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import SideBar from '@/components/SideBar'
    export default {
        name: 'main-page',
        mixins: [],
        components: {
            SideBar
        },
        props: {},
        data() {
            return {

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

        }
    }
</script>

<style scoped lang="scss">
    .qishon-collaboration {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .content {
            padding: 50px 0 50px 50px;
            float: left;
            overflow:hidden;width: 100%;
        }
    }
</style>
