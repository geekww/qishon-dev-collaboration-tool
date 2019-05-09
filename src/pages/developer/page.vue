<template>
    <div class="main-box">
        <h3>创建变量</h3>
        <!--创建变量-->
        <el-form class="from-group" :rules="rules" ref="createForm" :model="createForm" label-width="100px">
            <el-form-item label="变量名：" prop="name">
                <el-input v-model="createForm.name" placeholder="请输入变量名" style="width: 44.4%"></el-input>
            </el-form-item>
            <el-form-item label="选择分类：" prop="category">
                <el-cascader :options="categoryData" v-model="createForm.category" @change="categoryChange"></el-cascader>
            </el-form-item>
            <el-form-item label="功能描述：" prop="desc">
                <el-input v-model="createForm.desc" placeholder="请输入变量描述"></el-input>
            </el-form-item>
            <el-form-item label="格式规范：" prop="rule">
                <el-input v-model="createForm.rule" placeholder="请输入属性格式  示例：#FFFFFF"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('createForm')">立即创建</el-button>
                <el-button @click="resetForm('createForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'developer',
        mixins: [],
        components: {},
        props: {},
        data() {
            return {
                createForm: {
                    name: '',
                    category: '',
                    desc: '',
                    rule: '',
                },
                categoryData: [
                    {
                        value: 'color',
                        label: '颜色',
                        children: [{
                            value: 'background',
                            label: '背景颜色',
                        }]
                    },
                    {
                        value: 'border',
                        label: '边框',
                        children: [{
                            value: 'button',
                            label: '按钮边框',
                        }]
                    }
                ],
                rules: {
                    name: [
                        { required: true, message: '请填写变量名', trigger: 'blur' },
                    ],
                    category: [
                        { required: true, message: '请选择类别', trigger: 'blur' },
                    ],
                    desc: [
                        { required: true, message: '请填写变量描述', trigger: 'blur' },
                    ],
                    rule: [
                        { required: true, message: '请填写变量示例', trigger: 'blur' },
                    ]
                },
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
            categoryChange(value) {
                console.log(value);
            },
            onSubmit:function(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="scss">
    .main-box {
        h3 {
            text-align: center;
        }
        .from-group {
            width: 800px;
            margin: 50px auto;
            padding: 50px 100px;
            border: 1px solid #ebebeb;
            border-radius: 3px;
            transition: .2s;
            overflow: auto;
            .button-group {
                float: right;
            }
        }
        .from-group:hover {
            box-shadow: 0 0 8px rgba(232,237,250,.7);
        }
    }
</style>
