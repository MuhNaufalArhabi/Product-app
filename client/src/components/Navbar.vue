<script>
import { useIndexStore } from '../store';
import { mapState, mapActions } from 'pinia';

export default {
    computed: {
        ...mapState(useIndexStore, ['isLogin']),
    },
    methods: {
        ...mapActions(useIndexStore, ['logout']),
        logoutButtonLocal() {
            this.logout();
        },
    },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0 mb-5" style="background-color: #E8D2A6;">
        <div class="container">
            
            <div class="collapse navbar-collapse" id="navbarExample01">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link px-3" to="/orderlist">Order List</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav flex-row">
                    <li class="nav-item" v-if="!isLogin">
                        <router-link class="nav-link pe-3" to="/login">
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="isLogin">
                        <a class="nav-link pe-3" href="#" @click.prevent="logoutButtonLocal">
                            Logout
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
a {
    color: #ffffff;
}
</style>