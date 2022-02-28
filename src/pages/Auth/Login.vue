<template>
    <div>
        <div class="wrapper wrapper-full-page">
            <div class="full-page login-page" data-color="" :data-image="image">
            <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                <form method="#" action="#">
                                    <div class="card" data-background="color" data-color="blue">
                                        <div class="card-header">
                                            <h3 class="card-title">Login</h3>
                                        </div>
                                        <div class="card-content">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" placeholder="Enter email" class="form-control input-no-border">
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password" class="form-control input-no-border">
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <button type="submit" class="btn btn-fill btn-wd ">Let's go</button>
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

                <footer class="footer footer-transparent">
                    <div class="container">
                        <div class="copyright">
                           test, made with <i class="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com">Creative Tim</a>
                        </div>
                    </div>
                </footer>
                <div class="full-page-background" :style="cssProps">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            image: `url(${require('@/assets/img/background/background-1.jpeg')})`,
            cssProps: {
                backgroundImage: `url(${require('@/assets/img/background/background-1.jpeg')})`
            }
        }
    }
}
</script>

<style scoped>
</style>