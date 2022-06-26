<template>
    <div style="background-color: #fff !important" class="w-100  pb-0 d-flex align-center flex-column p-relative footer" :style="'background-image: url(' + require('@/assets/img/footer-bg.svg') + ')'">
        <div class="row w-100 ma-0 mt-5 justify-center mb-0 pb-0 text-left" style="max-width: 1200px; ">
            <div class="col-12 col-md-5 pa-0">
                <div class="d-flex flex-column px-6 px-md-0">
                    <img :src="require('@/assets/logo_s.png')" height="46" style="    object-fit: contain; object-position: left;">
                    <p class="fs-14" style="color: rgb(131, 132, 133); line-height: 25px !important;" v-if="false">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz. En uygun ve en düşük fiyatları tedarikçinizi bulmak için aşağıdan ilanınızı oluşturmanız yeterli, gerisini biz hallediyoruz.</p>
                    <div class="d-flex white--text fs-30 mt-5">
                        <!--
                                <i class="ri-twitter-fill ml-3 hover-opacity cursor-pointer"></i>
                                <i class="ri-github-fill ml-3 hover-opacity cursor-pointer"></i>
                        -->
                        <i class="ri-facebook-fill hover-opacity cursor-pointer"></i>
                        
                        <i class="ri-linkedin-box-fill ml-3 hover-opacity cursor-pointer"></i>
                        
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-1 pa-0"></div>
            <div class="col-12 col-md-5 pa-0">
                <div class="d-flex flex-column px-6 px-md-0 mt-10 mt-md-0">
                    <b class="white--text fs-17" style="opacity: .8">CONTACT US</b>
                    <div class="d-flex align-center white--text fs-16 mt-5" v-if="false">
                        <i class="ri-map-pin-fill hover-opacity cursor-pointer"></i>
                        <span class="fs-14 ml-4" style="color: rgb(131, 132, 133); line-height: 25px !important;">33 Queen St London EC4R 1AP London/United Kingdom</span>
                    </div>
                    <div class="d-flex align-center white--text fs-16 mt-5">
                        <i class="ri-phone-fill hover-opacity cursor-pointer"></i>
                        <span class="fs-17 ml-4" style="color: rgb(131, 132, 133); line-height: 25px !important;">+905452769188</span>
                    </div>
                    <div class="d-flex align-center white--text fs-16 mt-2">
                        <i class="ri-mail-fill hover-opacity cursor-pointer"></i>
                        <span class="fs-17 ml-4" style="color: rgb(131, 132, 133); line-height: 25px !important;">iletisim@wallcent.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-100 mt-9 d-flex align-center justify-center py-4" style="background-color: #15242b;">
            <span style="color: rgba(255,255,255,.5)!important" class="fs-14">2022 © Wallcent</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    components: {
    }
}
</script>
<style scoped>
    .footer{
        background-position: center;
        background-size: cover;
        padding: 35px 0;
    }
</style>