<template>
    <div style="background-color: #f8f9fc !important" class="w-100 d-flex align-center justify-center p-relative">
        <div class="d-flex p-absolute align-center overflow-hidden" style=" height: 100vh; width: 48vw; top: 0; right: 0; min-height: 100vh; z-index: 9;">
            <img :src="require('@/assets/img/home-bg.jpg')" style="position: absolute; left: 0; top: 0; height: 100%; contain: content;"/>
                <div class="p-absolute w-100 h-100" style="left: 0px; top: 0; opacity: .8; background: linear-gradient(80deg, #46a5bd 0%, #116a8d 100%)"></div>
                <div v-if="false" class="p-absolute d-flex align-center justify-center w-100 h-100">
                    <div class="slider d-flex animated-normal" :style="'margin-left: -' + (sliderPosition * 220) + 'px'">
                        <div class="slider-item mx-2"></div>
                        <div class="slider-item mx-2"></div>
                        <div class="slider-item mx-2"></div>
                        <div class="slider-item mx-2"></div>
                        <div class="slider-item mx-2"></div>
                    </div>
                </div>
        </div>
        <div class="row ma-0" style="min-height: 100vh; max-width: 1200px; ">
            <div class="col-12 col-md-6 pa-0">
                <div class="w-100 h-100 d-flex align-center justify-end">
                    <div class="pa-2 pa-md-0 pr-2 pr-md-7 d-flex flex-column text-left justify-start">
                        <span style="color: #952522; font-weight: 600" class="fs-16">Some Text Here</span>
                        <span style="color: rgb(24, 59, 86); font-size: 48px" class="font-weight-bold py-6 pb-2">İhtiyacını belirt, en uygun teklifleri al.</span>
                        <p class="fs-15" style="color: rgb(131, 132, 133); line-height: 25px !important;">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz. En uygun ve en düşük fiyatları tedarikçinizi bulmak için aşağıdan ilanınızı oluşturmanız yeterli, gerisini biz hallediyoruz.</p>
                        <button class="find-button">TEDARİKÇİ BUL</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pa-0 p-relative overflow-hidden"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionOne',
    data: function () {
        return {
            sliderPosition: 1
        }
    },
    mounted(){
        //setInterval(() => { this.sliderPosition++ }, 1000)
    }
}
</script>

<style>
    .slider { z-index: 3; }
    .slider-item {
        width: 200px;
        height: 300px;
        background: red;
    }
    .find-button {
        width: fit-content;
        background: #9525221f;
        color: #952522;
        font-weight: 900;
        border-radius: 3px;
        padding: 13px 20px;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-top: 15px;
        border: solid 2px #952522;
        transition: .3s;
        cursor: pointer;
    }

    .find-button:hover{
        background: #952522;
        color:white;
    }
</style>