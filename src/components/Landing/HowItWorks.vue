<template>
    <div style="background-color: #fff !important" class="w-100 d-flex align-center justify-center p-relative pb-12">
        <div class="row ma-0 mt-12 mx-7 mx-lg-0 align-center" style="max-width: 1200px;     justify-content: center; ">
            <div class="col-12 col-md-3 pa-0">
                <div class="d-flex flex-column w-100">
                    <div @click="stepPosition = i" class="d-flex pa-2 align-center step-item animated-normal" v-for="(item, i) in steps" :key="i" :class="i == stepPosition ? 'active' : ''">
                        <div class="step-icon circle d-flex align-center justify-center  animated-normal" style="height: 35px; width: 35px; background: #f1f2f7;">
                            <i :class="item.icon" class="fs-20"></i>
                        </div>
                        <span class="ml-3">{{item.title}}</span>
                    </div>
                </div>
            </div>
            <div class="cold-12 col-md-9 pa-0">
                <div class="row ma-0 mt-8 mt-md-0 align-center">
                    <div class="col-12 col-sm-6 col-md-6 pa-0" style="z-index: 100">
                        <div class="px-12 px-md-6 ml-0 ml-md-6">
                            <Transition name="fade-in-up">
                                <img style="z-index: 20"  v-show="changed" :src="require('@/assets/img/steps/' + steps[stepPosition].image)" class="w-100">
                            </Transition>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6 pa-0">
                        <Transition name="fade-in-right">
                            <div class="d-flex flex-column text-left pa-6 pa-md-0" v-show="changed">
                                <span style="color: #952522; font-weight: 600" class="fs-15" v-if="changed">{{steps[stepPosition].title}}</span>
                                <span style="color: rgb(24, 59, 86); font-size: 34px" class="font-weight-bold step-title py-4 pb-2 p-relative" v-if="changed">{{steps[stepPosition].longTitle}}</span>
                                <p class="fs-15" style="color: rgb(131, 132, 133); line-height: 25px !important;" v-if="changed">{{steps[stepPosition].description}}</p>
                            </div>
                        </Transition>
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
                    image: 'steps-thumb-1.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. Phasellus iaculis volutpat eleifend. Curabitur interdum ornare quam, sit amet ultrices elit sagittis at. Donec vitae condimentum sem. Nunc felis enim, posuere eget enim vel, dapibus fermentum diam.'
                },
                {
                    icon: 'ri-notification-3-fill',
                    title: 'Binlerce Tedarikçiye Ulaş',
                    image: 'steps-thumb-1.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. Phasellus iaculis volutpat eleifend. Curabitur interdum ornare quam, sit amet ultrices elit sagittis at. Donec vitae condimentum sem. Nunc felis enim, posuere eget enim vel, dapibus fermentum diam.'
                },
                {
                    icon: 'ri-alert-fill',
                    title: 'Tedarikçilerden Teklif Al',
                    image: 'steps-thumb-1.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. Phasellus iaculis volutpat eleifend. Curabitur interdum ornare quam, sit amet ultrices elit sagittis at. Donec vitae condimentum sem. Nunc felis enim, posuere eget enim vel, dapibus fermentum diam.'
                },
                {
                    icon: 'ri-lock-2-fill',
                    title: 'Sana En Uygun Olanı Seç',
                    image: 'steps-thumb-1.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. Phasellus iaculis volutpat eleifend. Curabitur interdum ornare quam, sit amet ultrices elit sagittis at. Donec vitae condimentum sem. Nunc felis enim, posuere eget enim vel, dapibus fermentum diam.'

                }
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

    
    
</style>
