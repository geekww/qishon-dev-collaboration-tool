<template>
    <div class="main-box">
        <h2>背景颜色</h2>
        <p>仅将这些标记用于背景颜色。不要将这些用于边框颜色或文本颜色。</p>
        <h3>导航</h3>
        <p>适用广泛的基础用法。</p>

        <!--协同列表-->
        <div class="coordination-box">
            <el-table
                    :data="coordinationData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="开发者"
                        align="center">
                    <template slot-scope="scope">
                        <h3>{{ scope.row.developer.variable }}</h3>
                        <p>{{ scope.row.developer.desc }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="设计师"
                        align="center">
                    <template slot-scope="scope">
                        <el-form ref="scope.row.designer" :model="scope.row.designer" label-width="70px">
                            <el-form-item label="名称：">
                                <el-input v-model="scope.row.designer.attribute"></el-input>
                            </el-form-item>
                            <el-form-item label="属性值：">
                                <el-input v-model="scope.row.designer.value"></el-input>
                            </el-form-item>
                            <el-form-item label="示例：">
                                {{ scope.row.designer.rule }}
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作"
                        align="center"
                        width="150px">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="editClick(scope.row)">保存</el-button>
                        <el-button type="text" size="small" @click="removeClick(scope.row)">移除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // 协同数据
                coordinationData: [
                    {
                        // 开发者
                        developer: {
                            variable: '$components-background-alt',
                            desc: '应用程序的第二个默认背景颜色。'
                        },
                        // 设计师
                        designer: {
                            attribute: 'G40',
                            rule: '#FFFFFF',
                            value: '#000000'
                        }
                    }
                ]
            }
        },
        methods: {
            editClick(row) {
                console.log(row);
                this.editVisible = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .main-box {
        .coordination-box {
            /deep/.el-form-item {
                margin-bottom: 14px;
            }
            /deep/.el-form-item input {
                text-align:center
            }
        }
        /*编辑对话框*/
        .edit-title {
            color: #5e6d82;
            font-size: 12px;
            line-height: 30px;
            border-bottom: 1px solid #EBEEF5;
            margin-bottom: 20px;
        }
    }
</style>
