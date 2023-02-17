<script>
export default {
    props: ['order']
}
</script>

<template>
    <tr>
        <th scope="row">{{ order.id }}</th>
        <td>{{ order.name }}</td>
        <td>{{ order.quantity }}</td>
        <td>{{ order.price }}</td>
        <td>
            <router-link :to="'/orderdetail/' + order._id" class="btn btn-primary">Detail</router-link>
        </td>
    </tr>
</template>