<template>
            <div style=" display: flex;justify-content: space-around;">
    <el-form  label-width="100px" class="demo-ruleForm"  >
        <el-form-item  label="宠物名称：" prop="name"  >
            <el-input style="width:250px" v-model="petsName" placeholder="请输入：二狗..."></el-input>
        </el-form-item>
        <el-form-item label="宠物品类：" prop="name" >
            <el-radio-group v-model="radio4" size="medium">
                <el-radio-button label="喵星人" ></el-radio-button>
                <el-radio-button label="汪星人"></el-radio-button>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="宠物种类："  prop="name" >
            <el-input style="width:250px" v-model="petsType" placeholder="请输入：金毛，英短..." ></el-input>
        </el-form-item>
        <el-form-item label="宠物颜色：" prop="name"  >
            <el-input style="width:250px" v-model="petsColor"  placeholder="请输入：黑，白..."></el-input>
        </el-form-item>
       
        <el-form-item label="宠物萌照：" prop="name" >
            <el-upload
                class="upload-demo"
                action="/pets/addImgs"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        
        </el-form>
         <el-form  label-width="100px" class="demo-ruleForm"  >
        <el-form-item label="宠物性别：" prop="name" >
            <el-radio-group v-model="radio3" size="medium">
                <el-radio-button label="妹妹" ></el-radio-button>
                <el-radio-button label="弟弟"></el-radio-button>
                <el-radio-button label="其他"></el-radio-button>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="宠物性格：" prop="name" >
            <el-input style="width:250px" v-model="petsCharacter"  placeholder="请输入：活泼，内向..."></el-input>
        </el-form-item>
        <el-form-item label="宠物价格：" prop="name" >
            <el-input style="width:250px" v-model="petsPrice" placeholder="输入数字，单位元"></el-input>
        </el-form-item>
        <el-form-item label="所属商店" >
		    <el-select v-model="department" placeholder="请选择" style="width:250px;">
		    <el-option style="height:50px;" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    	</el-select>
        </el-form-item>
        <el-form-item label="出身日期：" >
            <el-date-picker
                v-model="value1"
                type="datetime"
                value-format="yyyy-MM-dd"
                placeholder="选择日期时间">
            </el-date-picker>    
        </el-form-item>
        <el-form-item>
                   <el-button type="primary" @click="addPets">立即创建</el-button> 
        </el-form-item>
    </el-form>
    </div>
</template>
<script>
    import{ createNamespacedHelpers} from "vuex"
    const {mapState,mapActions,mapMutations}=createNamespacedHelpers("StoresPetsAddPets")
    export default{
          name:"app",
           data () {
              return {
                petsName:"",
                imageUrl: '',
                petsType:"",
                radio4: '喵星人',
                radio3:"妹妹",
                petsColor:"",
                petsCharacter:"",
                petsPrice:"",
                petsImg:"",
                value1:"",
                options: [{
			        value: '0',
			        label: '设计部'
			        }, {
			        value: '1',
			        label: '研发部'
			        }],
			    department: '',
　　            }
            },
            methods: {
                ...mapActions(["addPetsAsync"]),
                addPets(){
                    let obj={petsName:this.petsName,petsClass:this.radio4,petsType:this.petsType,petsColor:this.petsColor,
                    petsDate:this.value1,petsGender:this.radio3,petsCharacter:this.petsCharacter,petsPrice:this.petsPrice,
                    petsImg:this.petsImg}
                    console.log(obj)
                    this.addPetsAsync(obj)
                    this.$notify({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                    });
                },
               handleAvatarSuccess(res, file) {
                    this.petsImg = res._id;
                },
                beforeAvatarUpload(file) {
      // console.log(file)
                // const isJPG = file.type === 'image/jpeg'
                const isLt5M = file.size / 1024 / 1024 < 5;
                // if (!isJPG) {
                //   Message.error('上传头像图片只能是 JPG 格式!');
                // }
                if (!isLt5M) {
                    Message({
                    type: "warning",
                    message: "上传头像图片大小不能超过 5MB!",
                    showClose: true
                    });
                }
                return isLt5M;
                },
            },
        }
</script>
<style>
.el-form-item {
    margin-bottom: 20px;
}
</style>