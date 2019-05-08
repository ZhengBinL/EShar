<template>
    <div class="registered">
        <mt-header class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="loginTop">
            <img src="" alt="login" class="loginImg">
            <p class="logTitle">酒店预订</p>
        </div>
        <mt-field placeholder="请输入手机号码" type="tel" v-model="username"  :attr="{ maxlength: 11 }"></mt-field>
        <mt-field placeholder="请输入验证码" type="email" v-model="email"  :attr="{ maxlength: 20 }"></mt-field>
        <mt-field placeholder="请设置6-20位密码" type="password" v-model="password"></mt-field>
        <div class="btn">
            <mt-button class="btnlog" @click="handleReg">注册</mt-button>
        </div>
        <div class="foot">
            <span>已有账号，</span><a href="" @click="handleLogin">立即登录</a>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            username:'',
            email:'',
            password:''
        }
    },
    mounted(){

    },
    methods:{
        //登录
        handleLogin(e){
            e.preventDefault()
            this.$router.push({name:'login'})
        },
        //注册
        handleReg(){
            
        }
    }

}
</script>


<style scoped lang="scss">
.registered{
    .loginTop{
        width: 100%;
        padding:0.4rem 0;
        text-align: center;
        .loginImg{
            width: 0.4rem;
            height: 0.4rem;
        }
        .logTitle{
            font-size: 14px;
            padding: 0.1rem 0;
        }
    }
    .btn{
        width: 100%;
        text-align: center;
        padding: 0.3rem 0;
        .btnlog{
            font-size: 14px;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            border-radius: 2.4rem;
            width: 80%;
            background-color: #27a2ff;
        }
    }
    .reset{
        text-align: end;
        padding-right: 0.3rem;
        a{
            color: #27a2ff;
        } 
    }
    .foot{
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        span{
            color:black
        }
        a{
            color:#27a2ff;
        }
    }
    
}

</style>
