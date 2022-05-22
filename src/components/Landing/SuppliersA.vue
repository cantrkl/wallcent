<template>
    <div class="w-100 d-flex align-center justify-center p-relative py-2 py-md-12" :style="'background: #f3f6f9 !important; padding-bottom: 100px !important;'">
        <div class="row ma-0 mt-3 mt-lg-12 align-center flex-column-reverse flex-md-row" style="max-width: 1200px;     justify-content: center; z-index: 2">
            <div class="col-12 col-md-6 pa-0">
                <div class="pa-12 pa-sm-6 pa-md-0 pt-0">
                    <div class="d-flex flex-column  text-left px-2 px-md-12">
                        <span style="color: rgb(149 37 34); font-size: 27px; font-weight: 800!important;" class="">EN UYGUN</span>
                        <span style="color: rgb(24, 59, 86); font-size: 32px" class="font-weight-bold pb-2 pt-2">Yeni Müşteriler</span>
                        <div class="mt-3" style="    width: 215px; height: 1px; background: linear-gradient(to right, transparent, rgb(149 37 34), transparent);"></div>
                        <p style="line-height: 1.72; color: #6e6e6e;" class="fs-15">
                            All designs here are based on a collection of most fashionable designs in the world. These designs are made by a group of trendsetting designers who are gifted with second sight. More than 70K people are eager to become fans of these designs and always give us top ratings.
                        </p>
                        <div class="d-flex flex-column mt-5">
                            <div class="adv w-100 d-flex align-center">
                                <i class="ri-line-chart-fill" style="font-size: 50px; color: #183b56"></i>
                                <div class="d-flex flex-column ml-4">
                                    <span style="font-weight: 600; color: #183b56;">Satışlarınızı Artırın</span>
                                    <span style=" color: #6e6e6e;" class="fs-15 mt-1">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz.</span>
                                </div>
                            </div>
                            <div class="adv w-100 d-flex align-center mt-7">
                                <i class="ri-time-fill" style="font-size: 50px; color: #183b56"></i>
                                <div class="d-flex flex-column ml-4">
                                    <span style="font-weight: 600; color: #183b56;">Zaman Kazanma</span>
                                    <span style=" color: #6e6e6e;" class="fs-15 mt-1">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 pa-0">
                <div class="pa-12 pa-sm-6 pa-md-0">
                    <div class="ml-2 ml-md-9 p-relative adv-img-wrapper">
                        <img :src="require('@/assets/img/sup3.png')" class="adv-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SuppliersA',
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
        transform: rotate(5deg);
    }
    /*
    .adv-img-wrapper:hover .adv-img {
         box-shadow: 0 0 5px rgba(24, 59, 86, 1);
    }
    */
    .adv-img {
        /* box-shadow: 2px -3px 14px -4px rgba(0,0,0,0.35); */
        box-shadow: 0 0 50px rgb(0 0 0 / 60%);
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

