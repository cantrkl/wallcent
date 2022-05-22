<template>
    <div class="w-100 d-flex align-center justify-center p-relative py-12" :style="'background: rgb(248, 249, 252) !important; padding-bottom: 100px !important;'">
        <div class="row ma-0 mt-12 align-center" style="max-width: 1200px;     justify-content: center; z-index: 2">
            <div class="became-sup-card w-100" :style="'background-image: url(' + require('@/assets/img/became-sup.jpg') + ')'">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BecameSupplier',
    components: {
    },
    data: function () {
        return {
            
        }
    }
}
</script>

<style scoped>
    .became-sup-card {
        height: 350px;
        border-radius: 10px;
    }
</style>

