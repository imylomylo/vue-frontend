<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">

                <div class="panel panel-default panel-signin">
                    <div class="panel-heading">
                        <p class="text-center" v-if="$route.query.redirect">You need to login first.</p>
                        <h3 class="panel-title">Sign In</h3>
                    </div>
                    <div class="panel-body">
                        <form @submit.prevent="login">
                            <fieldset>

                                <div class="form-group">
                                    <input class="form-control" placeholder="E-mail" v-model="email" type="text">
                                </div>

                                <div class="form-group">
                                    <input class="form-control" placeholder="Password" v-model="password" type="password" value="">
                                </div>

                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" v-model="remember"> Remember Me
                                    </label>
                                </div>

                                <input class="btn btn-success btn-block" type="submit" value="Login">

                                <p v-if="error" class="error">Bad login information</p>

                            </fieldset>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import auth from '../auth.js'

    export default {
        data () {
            return {
                email: 'joe@example.com',
                password: '123qweasd',
                remember: false,
                loading: false,
                error: false
            }
        },
        methods: {
            isValid () {
                return ! (this.email == '' || this.password == '')
            },
            login () {
                if(!this.isValid())
                    return;

                let data = {
                    email: this.email,
                    password: this.password,
                    remember: this.remember
                }

                this.loading = true

                auth.login(this.email, this.password, (loggedIn) => {
                    this.loading = false

                    if(loggedIn){
                        this.$router.replace(this.$route.query.redirect || '/')
                    } else {
                        this.error = true
                    }
                })
            }
        }
    }
</script>

<style lang="sass" scoped>
    .panel-signin {
        margin-top: 100px;
    }
    .error{
        color: red
    }
</style>