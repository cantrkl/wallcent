<template>
    <div class="w-100d-flex align-center justify-center p-relative py-12" :style="'background: rgb(255, 255, 255) !important; padding-bottom: 100px !important;'">
        <div class="row ma-0 mx-5 mx-md-auto mt-12 align-center" style="max-width: 1200px;  background:#f0f2f4; border-radius: 10px;   justify-content: center; z-index: 2">
            <div class="col-12 col-md-6 pa-0">
                <div class="pa-5 pa-md-12 ma-6 text-center text-md-left">
                    <span style="font-size: 55px" class="font-weight-bold black--text">Subscribe to <br class="d-none d-md-block"> stay updated</span>
                </div>
            </div>
            <div class="col-12 col-md-6 pa-0">
                <div class=" px-0 pa-md-12 ma-6 ml-md-0 mt-0 mt-md-6 pl-md-0 pt-0 pt-md-12">
                    <div class="d-flex" style="padding: 5px; background: #f4f3f7; border-radius: 10px;">
                        <input placeholder="your@mail.com" class="border-none" style="font-size: 15px; padding: 18px; margin-right: 6px; border-radius: 10px; border: none; background: #fff;     flex: 1 auto;"/>
                        <button class="white--text one-line border-none cursor-pointer hover-opacity font-weight-bold roboto fs-15 manrope " style="padding: 17px 20px ; background: #952522; border-radius: 10px">Tedarikçi Bul</button>
                    </div>
                    <div class="d-flex ml-3  align-center mt-2">
                        <div class="d-flex align-center">
                            <i class="ri-check-line mr-1"></i>
                            <span class="fs-13">Free updates</span>
                        </div>
                        <div class="d-flex align-center ml-5">
                            <i class="ri-check-line mr-1"></i>
                            <span class="fs-13">Good stuff</span>
                        </div>
                        <div class="d-flex align-center ml-5">
                            <i class="ri-check-line mr-1"></i>
                            <span class="fs-13">Only value</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscribeForm',
    components: {
    },
    data: function () {
        return {
            
        }
    }
}
</script>

<style scoped>
</style>

