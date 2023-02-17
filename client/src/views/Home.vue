<script>
import { useIndexStore } from '../store/index';
import { mapActions } from 'pinia';
export default {
    data() {
        return {
            order: {
                name: '',
                quantity: 0,
                price: 0,
            },
        };
    },
    methods: {
        ...mapActions(useIndexStore, ['createOrder']),
        submitOrder() {
            this.createOrder(this.order);
            this.order.name = '';
            this.order.quantity = 0;
            this.order.price = 0;
        },
    },
}
</script>

<template>
    <div class="container margin-navbar">
        <div class="row justify-content-center">
            <div class="col-6 justify-content-center">
                <h1>Input Order</h1>
                <form>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control" v-model="order.name" />
                    </div>
                    <div>
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" class="form-control" v-model="order.quantity" />
                    </div>
                    <div>
                        <label for="price">Price</label>
                        <input type="number" id="price" class="form-control" v-model="order.price" />
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn btn-primary" @click="submitOrder">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

