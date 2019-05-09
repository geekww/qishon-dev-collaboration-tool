<template>
    <div class="main-box">
        <div class="banner-desc">
            <h1>启尚开发协同平台</h1>
            <p>QStool，一套为前端开发者、UI设计师定制的沟通协同工具</p>
            <img src="../../assets/images/index/banner.png" alt="banner">
        </div>
        <div class="cards">
            <ul class="container">
                <li>
                    <div class="card">
                        <img src="../../assets/images/index/document.png" alt="guid">
                        <h3>开发者工具</h3>
                        <p>帮助UI设计人员与前端开发人员迅速完成对接。</p>
                        <a @click="$router.push('/collaborative/components')">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../assets/images/index/document.png" alt="guid">
                        <h3>开发者工具</h3>
                        <p>帮助UI设计人员与前端开发人员迅速完成对接。</p>
                        <a @click="$router.push('/collaborative/guid')">查看详情</a>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../assets/images/index/document.png" alt="guid">
                        <h3>开发者工具</h3>
                        <p>帮助UI设计人员与前端开发人员迅速完成对接。</p>
                        <a @click="$router.push('/collaborative/components')">查看详情</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped lang="scss" type="text/scss">
    .main-box {
        width: 1200px;
        margin: 0 auto;
        .banner-desc {
            padding-top: 20px;
            text-align: center;
            h1 {
                font-size: 34px;
                margin: 0;
                line-height: 48px;
                color: #555;
            }
            p {
                font-size: 18px;
                line-height: 28px;
                color: #888;
                margin: 10px 0 5px;
            }
            img {
                margin: 50px 0;
            }
        }
        .cards {
            padding-bottom: 100px;
            ul {
                overflow: auto;
                padding-top: 20px;
                li {
                    width: 33.33333%;
                    padding: 0 19px;
                    box-sizing: border-box;
                    float: left;
                    list-style: none;
                    .card {
                        height: 430px;
                        width: 100%;
                        background: #fff;
                        border: 1px solid #eaeefb;
                        border-radius: 5px;
                        box-sizing: border-box;
                        text-align: center;
                        position: relative;
                        transition: all .3s ease-in-out;
                        bottom: 0;
                        img {
                            margin: 66px auto 60px;
                            width: 160px;
                            height: 120px;
                        }
                        h3 {
                            margin: 0;
                            font-size: 18px;
                            color: #1f2f3d;
                            font-weight: 400;
                        }
                        p {
                            font-size: 14px;
                            color: #99a9bf;
                            padding: 0 25px;
                            line-height: 20px;
                        }
                        a {
                            height: 53px;
                            line-height: 52px;
                            font-size: 14px;
                            color: #409eff;
                            text-align: center;
                            border: 0;
                            border-top: 1px solid #eaeefb;
                            padding: 0;
                            cursor: pointer;
                            width: 100%;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            background-color: #fff;
                            border-radius: 0 0 5px 5px;
                            transition: all .3s;
                            text-decoration: none;
                            display: block;
                        }
                        a:hover {
                            background: #409eff;
                            color: #fff;
                        }
                    }
                    .card:hover {
                        bottom:6px;
                        box-shadow:0 6px 18px 0 rgba(232,237,250,.5)
                    }
                }
            }
        }
    }
</style>
