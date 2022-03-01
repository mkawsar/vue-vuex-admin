<template>
    <div>
        <div class="wrapper wrapper-full-page">
            <div class="full-page login-page" data-color="" :data-image="image">
            <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                <form method="post" action="javascript:void(0)">
                                    <div class="card" data-background="color" data-color="blue">
                                        <div class="card-header">
                                            <h3 class="card-title">Login</h3>
                                        </div>
                                        <div class="card-content">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" placeholder="Enter email" 
                                                    class="form-control input-no-border" name="email" v-validate="userValidations.email"
                                                    v-model="user.email">
                                                <span class="text-danger" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password" 
                                                    class="form-control input-no-border"
                                                    name="password" v-validate="userValidations.password"
                                                    v-model="user.password">
                                                <span class="text-danger" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <button type="submit" class="btn btn-fill btn-wd" @click.prevent="handleLogin">Let's go</button>
                                            <div class="forgot">
                                                <a href="#pablo">Forgot your password?</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="full-page-background" :style="cssProps">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { createNamespacedHelpers } from 'vuex';
const {mapGetters, mapActions} = createNamespacedHelpers('auth')
let veeCustomMessage = {
    en: {
        custom: {
            email: {
                required: 'Email field is required',
                email: '',
            },
            password: {
                required: 'Password field is required',
            }
        }
    }
};

let userObj = {
    email: '',
    password: ''
};

Vue.use(VeeValidate, {
    dictionary: veeCustomMessage,
    fieldsBagName: userObj
});

export default {
    name: 'Login',
    data() {
        return {
            image: `url(${require('@/assets/img/background/background-1.jpeg')})`,
            cssProps: {
                backgroundImage: `url(${require('@/assets/img/background/background-1.jpeg')})`
            },
            user: userObj,
            userValidations: {
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    min: 6
                }
            },
            loader: false,
        }
    },
    methods: {
        ...mapActions(['handleAuthLogin']),
        handleLogin () {
            this.$validator.validateAll().then(isValid => {
                let obj = {
                    password: this.user.password,
                    email: this.user.email
                }
                if (isValid) {
                    this.handleAuthLogin(obj);
                }
            });
        }
    },
    computed: {
        ...mapGetters([
            'getSuccessStatus',
            'getMessage'
        ]),
    },
    watch: {
        getSuccessStatus(value) {
           if (value) {
               this.$notification.notify(this, 'Success', this.getMessage);
           }
        }
    }
}
</script>

<style scoped>
</style>