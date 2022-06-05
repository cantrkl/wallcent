<template>
    <div class="w-100 d-flex align-center justify-center p-relative py-12 pb-1 pb-md-3" :style="'background: #f3f6f9 !important;'">
        <div class="row ma-0 mt-12 align-center" style="max-width: 1200px;     justify-content: center; z-index: 2">
            <div class="col-12 col-md-6 pa-0">
                <div class="pa-12 pa-sm-6 pa-md-0">
                    <img :src="require('@/assets/img/sup3.png')"  class="adv-img">
                </div>
                
            </div>
            <div class="col-12 col-md-6 pa-0">
                <div class="pa-12 pa-sm-6 pa-md-0">
                    <div class="d-flex flex-column  text-left px-2 px-md-12">
                        <span style="color: rgb(149 37 34); font-size: 15px; font-weight: 500!important;" class="">EN UYdddGUN</span>
                        <span style="color: rgb(0, 0, 0); font-size: 40px" class="font-weight-bold pb-2 pt-2">Track your crytpo portfolio on the best way possible</span>
                        <p style="line-height: 1.72; color: #6e6e6e;" class="fs-15">
                            All designs here are based on a collection of most fashionable designs in the world. These designs are made by a group of trendsetting designers who are gifted with second sight. More than 70K people are eager to become fans of these designs and always give us top ratings.
                        </p>
                        <hr style="height: 1px; width: 100%; border: none; border-bottom: solid 1px #E6E6E6;">
                        <div class="d-flex flex-column mt-5">
                            <div class="adv w-100 d-flex align-center">
                                <div  class="circle d-flex align-center justify-center" style="width: 28px; min-width: 28px; height: 28px; min-height: 28px; background:#FDBC64; line-height: 28px;">
                                    <i class="ri-check-line fs-22" style="color: white"></i>
                                </div>
                                <div class="d-flex flex-column ml-4">
                                    <span style=" color: #505887; font-weight: 500!important;" class="fs-15 mt-1">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz.</span>
                                </div>
                            </div>
                            <div class="adv w-100 d-flex align-center mt-3">
                                <div  class="circle d-flex align-center justify-center" style="width: 28px; min-width: 28px; height: 28px; min-height: 28px; background:#FDBC64; line-height: 28px;">
                                    <i class="ri-check-line fs-22" style="color: white"></i>
                                </div>
                                <div class="d-flex flex-column ml-4">
                                    <span style=" color: #505887; font-weight: 500!important;" class="fs-15 mt-1">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BuyersA',
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
    /*
    .adv-img-wrapper:hover::before {
        transform: scale(.5)
    }
    */
    .adv-img-wrapper::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgb(24, 59, 86);
        transition: .8s;
        left: 0;
        z-index: -1;
        top: 0;
        transform: rotate(-5deg);
    }
    /*
    .adv-img-wrapper:hover .adv-img {
         box-shadow: 0 0 5px rgba(24, 59, 86, 1);
    }
    */
    .adv-img {
        /* box-shadow: 2px -3px 14px -4px rgba(0,0,0,0.35); */
        object-fit: contain;
        width: 100%;
        border-radius:10px;
        transition: .6s;
    }

    @media (max-width: 1264px) { 
        .adv-img-wrapper  {
            max-width: 400px !important;
            margin: 0 auto !important;
        }
    }
    
</style>

