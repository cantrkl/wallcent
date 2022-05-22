<template>
    <div class="">
		<Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
export default {
    name: 'Landing Layout',
    components: {
        Header
    }
}
</script>
