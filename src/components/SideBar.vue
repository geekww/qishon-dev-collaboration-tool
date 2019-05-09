<template>
    <div class="side-bar">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <!--展开按钮-->
            <el-menu-item v-if="isCollapse" @click="isCollapse = false">
                <i class="el-icon-d-arrow-right"></i>
                <span slot="title">展开</span>
            </el-menu-item>
            <!--收起按钮-->
            <el-menu-item v-else @click="isCollapse = true">
                <i class="el-icon-d-arrow-left"></i>
                <span slot="title">收起</span>
            </el-menu-item>

            <!--无子项目时渲染-->
            <el-menu-item v-for="(sideItem,sideIndex) in this.sideData" v-if="!sideItem.group" :index="String(sideIndex)" @click="$router.push(sideItem.router)">
                <i :class="sideItem.icon"></i>
                <span slot="title">{{sideItem.title}}</span>
            </el-menu-item>

            <!--有子项目时渲染-->
            <el-submenu v-for="(sideItem,sideIndex) in this.sideData" v-if="sideItem.group" :index="sideIndex">
                <template slot="title">
                    <i :class="sideItem.icon"></i>
                    <span slot="title">{{sideItem.title}}</span>
                </template>
                <el-menu-item-group v-for="(group,groupIndex) in sideItem.group">
                    <span slot="title" v-if="group.title">{{group.title}}</span>
                    <el-menu-item :index="String(sideIndex) + '-' + String(groupIndex) + '-' + String(groupItemIndex)" v-for="(groupItem,groupItemIndex) in group.item" @click="$router.push(groupItem.router)">{{groupItem.title}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'SideBar',
        mixins: [],
        components: {},
        props: {},
        data() {
            return {
                // 是否隐藏侧边栏
                isCollapse: true,
                activeIndex: '1',
                sideData: [
                    {
                        title: '指南',
                        icon: 'el-icon-document',
                        router: '/collaborative/guid'
                    },
                    {
                        title: '分类',
                        icon: 'el-icon-menu',
                        group: [
                            {
                                title: '颜色',
                                item: [
                                    {
                                        title: '背景颜色',
                                        router: '/collaborative/color'
                                    }
                                ]
                            }
                        ]
                    }
                ]
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
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped lang="scss">
    .side-bar {
        color: #000;
        text-align: center;
        float: left;
        /deep/.el-menu {
            text-align: left;
        }
        /deep/.el-submenu__title {
            text-align: left;
        }
        /deep/.el-menu-item-group__title {
            padding-left: 50px!important;
        }
        /deep/.el-submenu .el-menu-item {
            padding-left: 70px!important;
        }
    }
</style>
