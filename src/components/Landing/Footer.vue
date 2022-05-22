<template>
    <div style="background-color: #fff !important" class="w-100  pb-0 d-flex align-center flex-column p-relative footer" :style="'background-image: url(' + require('@/assets/img/footer-bg.svg') + ')'">
        <div class="row w-100 ma-0 mt-12 mb-0 pb-0 text-left" style="max-width: 1200px; ">
            <div class="col-4 pa-0">
                <div class="d-flex flex-column justify-start">
                    <img :src="require('@/assets/logo_s.png')" height="46" style="    object-fit: contain;">
                    <p class="fs-15" style="color: rgb(131, 132, 133); line-height: 25px !important;">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz. En uygun ve en düşük fiyatları tedarikçinizi bulmak için aşağıdan ilanınızı oluşturmanız yeterli, gerisini biz hallediyoruz.</p>
                </div>
                
            </div>
            <div class="col-8 pa-0">
                asd
            </div>
        </div>
        <div class="w-100 mt-9 d-flex align-center justify-center py-5" style="background-color: #15242b;">
            <span style="color: rgba(255,255,255,.5)!important">2022 © Wallcent</span>
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