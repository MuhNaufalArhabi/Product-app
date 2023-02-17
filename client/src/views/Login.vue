<script>
import { mapState, mapActions } from 'pinia'
import { useIndexStore } from '../store/index'
export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            registerForm: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useIndexStore, ['submitLogin', 'submitRegister']),
        submitLoginLocal() {
            this.submitLogin(this.loginForm)
        },
        submitRegisterLocal() {
            this.submitRegister(this.registerForm)
        }
    }
}
</script>

<template>
    <section class="container margin-navbar">
        <div class="row justify-content-center align-content-center">
            <div class="col-6">

                <!-- Pills navs -->
                <ul class="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item active" role="presentation">
                        <a class="nav-link active" id="tab-login" data-bs-toggle="tab" href="#pills-login">Login</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab-register" data-bs-toggle="tab" href="#pills-register">Register</a>
                    </li>
                </ul>
                <!-- Pills navs -->

                <!-- Pills content -->
                <div class="tab-content">
                    <div class="tab-pane active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form @submit.prevent="submitLoginLocal">
                            <div class="text-center mb-3">
                                <p>Sign in with:</p>


                            </div>

                            <p class="text-center">or:</p>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginName">Email</label>
                                <input type="email" id="loginName" class="form-control" v-model="loginForm.email" />
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="loginPassword">Password</label>
                                <input type="password" id="loginPassword" class="form-control"
                                    v-model="loginForm.password" />
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                        </form>
                    </div>
                    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form @submit.prevent="submitRegisterLocal">
                            <!-- Name input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="registerName">Username</label>
                                <input type="text" v-model="registerForm.username" class="form-control" />
                            </div>

                            <!-- Username input -->
                            <div class="form-outline mb-4">
                                <label class="form-label">Email</label>
                                <input type="email" v-model="registerForm.email" class="form-control" />
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label">Password</label>
                                <input type="password" v-model="registerForm.password" class="form-control" />
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
                <!-- Pills content -->
            </div>
        </div>

    </section>
</template>


