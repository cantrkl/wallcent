<template>
    <div class="w-100 heading d-flex align-center justify-center p-relative pb-4" :style="'min-height: 80vh; background-image: url(' + require('@/assets/img/headerbg.png') + ')'">
        <div class="heading-background"  :style="'background-image: url(' + require('@/assets/img/heading.png') + ')'"></div>
        <div class="row ma-0 mt-12 align-center text-left" style="max-width: 1200px;     justify-content: center; z-index: 2">
            <div class="col-12 col-md-12 pa-0">
                <div class=" mt-12 mt-sm-0  d-flex text-center align-center justify-center"  style="max-width:800px;     margin: 0 auto;">
                    <div class="d-flex flex-column w-100 text-center pa-5 pa-md-0">
                        <span style="font-size: 48px" class="font-weight-black py-6 pb-2 manrope">Managing freelance payments has never been easier</span>
                        <p class="fs-17 manrope text-center mx-auto font-weight-bold" style="color: rgba(0,0,0,.5); line-height: 25px !important; max-width:500px;">End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        <div class="d-none d-md-flex flex-wrap align-center align-center justify-center">
                            <div class="pa-5">
                                <div class="d-flex" style="padding: 5px; background: #f4f3f7; border-radius: 10px;">
                                    <input placeholder="your@mail.com" class="border-none" style="font-size: 15px; padding: 18px; margin-right: 6px; border-radius: 10px; border: none; background: #fff;"/>
                                    <button class="white--text one-line border-none cursor-pointer hover-opacity font-weight-bold roboto fs-15 manrope " style="padding: 17px 20px ; background: #952522; border-radius: 10px">Tedarikçi Bul</button>
                                </div>
                            </div>
                            
                            <button class="border-none cursor-pointer hover-opacity font-weight-bold roboto fs-15 manrope ml-2" style="padding: 20px 22px ; background: #F7F9FB; color: #952522; border-radius: 10px">Satıcı Ol</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--
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
    -->
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

    .heading {
        background-size: auto;
        background-repeat-y: no-repeat;
    }
    .heading-background {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-size: auto;
        background-repeat: no-repeat;
            background-position: center 85px;
    }
</style>