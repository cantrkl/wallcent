<template>
    <div style="background-color: #fff !important" class="w-100 d-flex align-center flex-column justify-center p-relative pb-12 mb-12">
        <div class="row d-none d-md-flex ma-0 mt-12 mx-7 mx-lg-0" style="max-width: 1200px;     justify-content: center; ">
            <div class="col-12 col-md-3 pa-0 p-relative d-flex" v-for="(item, i) in steps" :key="i">
                <div class="d-flex mt-5 mt-md-0 flex-column w-100 hiw-item">
                    <div class="circle d-flex align-center justify-center mx-auto fs-18 font-weight-bold" style="background: #f7f8fc; width: 60px; height: 60px;"><span>{{i+1}}</span></div>
                    <div class="font-weight-bold poppins mt-1 mt-md-5 px-5" style="font-size: 20px; color: rgb(24, 59, 86)">{{item.title}}</div>
                    <div class="px-5 d-none d-sm-block"><p class="poppins fs-15" style="line-height: 1.72; color: #6e6e6e;">{{item.description}}</p></div>
                </div>
                <i v-if="i != (steps.length - 1)" class="d-none d-sm-block ri-arrow-right-s-line" style="font-size: 36px; position: absolute; right: -17px;"></i>
            </div>
        </div>
        <div class="row ma-0 mt-12 mx-7 mx-lg-0" style="max-width: 1200px;     justify-content: center; ">
            <div class="col-12 col-md-12 pa-0 mt-0 p-relative d-flex" v-for="(item, i) in steps" :key="i">
                <div class="row ma-0 mt-0 mx-7 mx-lg-0 py-0 py-md-5" :style="(i % 2 == 1 ? 'flex-direction: row-reverse !important;' : '') + (i != 0 ? 'margin-top: 60px !important' : '')">
                    <div class="col-12 col-md-6 pa-0 p-relative d-flex">
                        <div class="pa-0 pa-md-6">
                            <div class="w-100" style="background: #f0f2f4">
                                <img :src="require('@/assets/img/steps/' + item.image)" class="w-100">
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 pa-0 p-relative d-flex">
                        <div class="d-flex flex-column poppins text-left pa-0 pa-md-6 mt-4" style="color: rgb(24, 59, 86)">
                            <div class="mb-3">
                                <button class="hiw-button cursor-pointer hover-opacity">
                                    <i class="ri-play-fill mr-2"></i>
                                    Start with ease
                                </button>
                            </div>
                            <span class="font-weight-bold" style="font-size: 42px;">Grow With Ease With Saasable</span>
                            <p class="poppins fs-17 mb-6" style="line-height: 1.72; color: #6e6e6e;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            <div class="d-flex align-center mb-3 mt-2" v-for="x in 3" :key="x">
                                <div class="circle d-flex align-center justify-center" style="width: 37px; min-width: 37px; height: 37px; min-height: 37px; background:#e7f8eb; line-height: 37px;">
                                    <i class="ri-check-line fs-25" style="color: #61d37e"></i>
                                </div>
                                <span class="ml-3 fs-15" style="font-weight: 500;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
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
    name: 'HowItWorks',
    components: {
    },
    data: function () {
        return {
            stepPosition: 0,
            changed: true,
            steps: [
                {
                    icon: 'ri-settings-5-fill',
                    title: 'İhtiyacını Belirt',
                    image: 'hiw-1.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. '
                },
                {
                    icon: 'ri-notification-3-fill',
                    title: 'Binlerce Tedarikçiye Ulaş',
                    image: 'hiw-2.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. '
                },
                {
                    icon: 'ri-alert-fill',
                    title: 'Tedarikçilerden Teklif Al',
                    image: 'hiw-1.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. '
                },
                /*
                {
                    icon: 'ri-lock-2-fill',
                    title: 'Sana En Uygun Olanı Seç',
                    image: 'hiw-2.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. '

                }
                */
            ]
        }
    },
    watch: {
        stepPosition: {
            handler: function() {
                this.changed = false;
                setTimeout(() => {
                    this.changed = true;
                }, 350);
            }
        }
    }
}
</script>

<style scoped>
    .step-item {
        border-right: 3px solid #e8eaef;
        border-radius: 0;
        font-size: 15px;
        font-weight: 500;
        color: #505056;
        cursor: pointer;
    }
    .step-item.active {
        border-right-color: #952522;
        background: transparent;
        color: #952522;
    }
    .step-item.active .step-icon{
        background: #952522 !important;
        color:white;
    }

    .hiw-r-arrow {

    }

    /*
    .step-title::before{
        content: "";
        width: 100%;
        height: 3px;
        background: #2b70fa;
        position: absolute;
        bottom: 0;
        left: 0;
        animation: borderbottom 5s infinite;
    }

    @keyframes borderbottom {
        0%   {width: 0%}
        25%  {width: 25%}
        50%  {width: 50%}
        75%  {width: 75%}
        100% {width: 100%}
    }
    */

    @keyframes fadeInUp {
        from { transform: translate3d(0, 40px, 0); }
        to { transform: translate3d(0, 0, 0); }
    }
    .fade-in-up-enter-active { transition: opacity 0.5s ease; }
    .fade-in-up-leave-to { opacity: 0; transition: 0.35s; }
    .fade-in-up-enter-to {
        opacity: 1;
        animation-duration: 0.7s;
        animation-name: fadeInUp;
    }

    @keyframes fadeInRight {
        from { transform: translate3d(40px, 0, 0); }
        to { transform: translate3d(0, 0, 0); }
    }
    .fade-in-right-enter-active { transition: opacity 0.5s ease; }
    .fade-in-right-leave-to { opacity: 0; transition: 0.35s; }
    .fade-in-right-enter-to {
        opacity: 1;
        animation-duration: 0.7s;
        animation-name: fadeInRight;
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
