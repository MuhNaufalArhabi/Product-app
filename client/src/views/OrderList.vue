<script>
import { mapState, mapActions } from 'pinia'
import { useIndexStore } from '../store/index'
import OrderComponent from '../components/OrderComponent.vue'

export default {
    components: {
        OrderComponent
    },
    computed: {
        ...mapState(useIndexStore, ['orders'])
    },
    methods: {
        ...mapActions(useIndexStore, ['fetchOrders'])
    },
    created() {
        this.fetchOrders()
    }
}
</script>

<template>
    <div class="container margin-navbar">
        <div class="row justify-content-center align-content-center">
            <div class="col-6">
                <h1>Order List</h1>
                <table class="table table-striped" v-if="orders.length !== 0">
                    <thead>
                        <tr>
                            <th scope="col">Order ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <OrderComponent v-for="order in orders" :key="order._id" :order="order" />
                    </tbody>
                </table>
                <div v-if="orders.length === 0">
                    <h3>No Order</h3>
                </div>
            </div>
        </div>
    </div>
</template>