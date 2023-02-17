import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore('index', {
    state: () => ({
        isLogin: false,
        orders: [],
    }),
    actions:{
        async submitLogin (payload){
            try {
                const {data} = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/user/login',
                    data: {
                        email: payload.email,
                        password: payload.password
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async submitRegister (payload){
            try {
                const {data} = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/user/register',
                    data: {
                        username: payload.username,
                        email: payload.email,
                        password: payload.password
                    }
                })
                localStorage.setItem('access_token', data.access_token)
            } catch (error) {
                console.log(error)
            }
        },
        logout (){
            localStorage.clear()
            this.isLogin = false
            this.router.push('/login')
        },
        async fetchOrders (){
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: 'http://localhost:3000/order',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.orders = data
            } catch (error) {
                console.log(error)
            }
        },
        async createOrder(payload){
            try {
                const {data} = await axios({
                    method: 'POST',
                    url: 'http://localhost:3000/order',
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        name: payload.name,
                        price: payload.price,
                        quantity: payload.quantity
                    }
                })
                this.fetchOrders()
            } catch (error) {
                console.log(error)
            }
        }
    }
})
