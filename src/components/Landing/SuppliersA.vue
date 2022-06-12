<template>
    <div class="w-100 d-flex align-center justify-center p-relative py-1 pb-1 pb-md-3" :style="'background: #fff !important;'"><!--f3f6f9-->
        <div class="row ma-0 mt-0 align-center flex-column-reverse flex-md-row" style="max-width: 1200px;     justify-content: center; z-index: 2">
            
            <div class="col-12 col-md-7 pa-0">
                <div class="pa-12 pa-sm-6 pa-md-0 pt-0">
                    <div class="d-flex flex-column  text-left px-2 px-md-12">
                        <div class="d-flex flex-column poppins text-left pa-0 pa-md-6 mt-4" style="color: rgb(24, 59, 86)">
                            <div class="mb-3">
                                <button class="hiw-button cursor-pointer hover-opacity">
                                    Tedarikçi Ol
                                </button>
                            </div>
                            <span class="font-weight-bold" style="font-size: 42px;">Yeni Müşterilere Ulaş</span>
                            <p class="poppins fs-17 mb-6" style="line-height: 1.72; color: #6e6e6e;">Tedarikçi olduktan sonra sektörünle alakalı satın alma taleplerine teklif verebilir aynı zamanda talep havuzundaki diğer talepleri inceleyebilirsin. Teklifin diğer teklifler arasında uygun görüldüğünde yeni müşterinle iletişime geçebilir ve süreci sonlandırabilirsin.</p>
                            <div class="pa-3">
                                <div class="row mt-2">
                                    <div class="col-6 col-md-6 pa-0 mt-7"  v-for="x in advantages" :key="x">
                                        <div class="d-flex flex-column">
                                            <i class="fs-29" :class="x.icon" style="color: #952522"></i>
                                            <span class="poppins mt-2 font-weight-bold">{{x.title}}</span>
                                            <p class="poppins fs-12 mb-6" style="line-height: 1.72; color: #6e6e6e;" v-if="false">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 pa-0">
                <div class="pa-12 pa-sm-6 pa-md-0 py-0">
                    <img :src="require('@/assets/img/sup4.png')"  class="adv-img">
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
            advantages: [
                {
                    icon: 'ri-group-2-line',
                    title: 'Yeni Müşteriler Edin'
                },
                {
                    icon: 'ri-line-chart-line',
                    title: 'Satışlarını Arttır'
                }
            ]
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
        object-fit: contain;
        width: 100%;
        border-radius:10px;
        transition: .6s;
        max-width: 500px;
    }


    @media (max-width: 1264px) { 
        .adv-img-wrapper  {
            max-width: 400px !important;
            margin: 0 auto !important;
        }
    }

    .hiw-button{
        background: #952522;
        padding: 15px 17px;
        border-radius: 400px;
        border: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .hiw-button > i {
        font-size: 18px;
    }

</style>

