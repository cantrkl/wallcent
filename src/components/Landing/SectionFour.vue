<template>
    <div class="w-100 section-four d-flex align-center justify-center p-relative pb-12" :style="'background-image: url(' + require('@/assets/img/sf-bg.jpg') + ')'">
        <div class="section-four-background"></div>
        <div class="row ma-0 mt-12 align-center text-left" style="max-width: 1200px;     justify-content: center; z-index: 2">
            <div class="col-12 col-md-6 pa-0">
                <div class="  pa-12 pa-sm-6 pa-lg-0">
                    <div class="d-flex flex-column w-100">
                        <span style="color: rgb(24, 59, 86); font-size: 30px" class="font-weight-bold py-6 pb-2">En Uygun Tedarikçileri Bulun</span>
                        <div class="mt-3" style="width: 80px; height: 1px; background: linear-gradient(to right, transparent, #ffffff, transparent);"></div>
                    <span style="color: white; font-size: 39px" class="font-weight-bold py-6 pb-2">İhtiyacını belirt, en uygun teklifleri al.</span>
                    <p class="fs-18" style="color: rgba(255,255,255,.5); line-height: 25px !important;">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz. En uygun ve en düşük fiyatları tedarikçinizi bulmak için aşağıdan ilanınızı oluşturmanız yeterli, gerisini biz hallediyoruz.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pa-0 d-none d-lg-flex">
                <img :src="require('@/assets/img/ex-ui.png')" style="transform: matrix(1, -0.05, 0, 1, 0, 0); margin-top: -15px; margin-bottom: 12px; height: 440px;">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionFour',
    components: {
    },
    data: function () {
        return {
            
        }
    }
}
</script>

<style scoped>
    .section-four {
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .section-four-background {
        background: linear-gradient(80deg, #377d8f 0%, #0a4157 100%);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: .9;
    }
    .section-four::before{
        content: "";
        position: absolute;
        top: -50px;
        left: 0;
        width: 100%;
        height: 100px;
        background: #fff;
        transform: matrix(1, -0.05, 0, 1, 0, 0);
        z-index: 1;
    }
    .section-four::after{
        content: "";
        position: absolute;
        bottom: -50px;
        left: 0;
        width: 100%;
        height: 100px;
        background: rgb(243, 246, 249) !important;
        -ms-transform: matrix(1, -0.05, 0, 1, 0, 0);
        -webkit-transform: matrix(1, -0.05, 0, 1, 0, 0);
        transform: matrix(1, -0.05, 0, 1, 0, 0);
    }
    
</style>

