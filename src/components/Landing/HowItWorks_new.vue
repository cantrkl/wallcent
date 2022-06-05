<template>
    <div style="background-color: #fff !important" class="w-100 d-flex align-center flex-column justify-center p-relative pb-12 mb-12">
        <!--
        <div class="d-flex w-100 justify-center">
            <div class="my-3" style="width: 180px; height: 1px; background: linear-gradient(to right, transparent, #952522, transparent);"></div>
        </div>
        <span class="font-weight-bold mt-5" style="font-size: 42px;">Nasıl kullanılır?</span>
        -->
        <div class="align-center w-100" style="max-width: 1200px; justify-content: center; z-index: 2">
            <div class="row ma-0 mt-7 mb-0 mb-md-12">
                <div v-for="(step, i) in steps" :key="i" class="col-12 col-md-3 pa-0 ma-0">
                    <div class="pa-8 pa-md-2 roboto" :style="$store.state.dimensions.width > 960 ? 'height: 100%;' : ''" >
                        <div class="step-card"  style="height: 100%;">
                            <div class="d-flex flex-column pa-8 justify-start text-left w-100">
                                <span style="font-size: 30px; font-weight: 900">{{i+1}}</span>
                                <span class="mt-4" style="font-size: 25px; font-weight: 600">Start</span>
                                <p class="poppins fs-15 pb-0 mb-0" style="line-height: 1.72; color: #6e6e6e;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="sticky-cards-container" ref="sticky-cards-container" >
                <div class="sticky-cards-wrap px-4 px-md-2">
                    <div class="sticky-card _1" :style="'top: ' + (50 + (i * 20) + ($store.state.dimensions.width > 960 ? 50 : 0)) + 'px;'" v-for="(step, i) in steps" :key="i">
                        <div class="d-flex  w-100">
                            <div class="pa-12 w-100">
                                <div class="row w-100">
                                    <div class="col-12 col-md-5 pa-0">
                                        <div class="text-left d-flex flex-column" style="height: 100%;">
                                            <span :style="'font-size: ' + ($store.state.dimensions.width > 960 ? '60px' : '35px') + '; font-weight: 600'">{{step.title}}</span>
                                            <div class="flex-fill"></div>
                                            
                                            <span class="poppins mt-8 mt-md-2 font-weight-bold">Easy customization</span>
                                            <p class="poppins fs-15 pb-0 mb-0 pr-5" style="line-height: 1.72; color: #6e6e6e;">{{step.description}}</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-7 pa-0">
                                        <img :src="require('@/assets/img/steps/' + step.image)"  class="adv-img mt-6 mt-md-0">
                                    </div>
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
import gsap from 'gsap'
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
                    title: 'Talep Oluştur',
                    image: 'hiw1.png',
                    longTitle: 'Dakikalar İçinde Talep Oluştur',
                    description: 'İş talebinizle ilgili kategoriyi seçin ve aradığınız ürünün bilgilerini, çalışma şartlarınızı detaylarıyla belirterek bir talep oluşturun.'
                },
                {
                    icon: 'ri-notification-3-fill',
                    title: 'Talebin Tedarikçilere Ulaşsın',
                    image: 'hiw2.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Teklifin, Wallcent’te kayıtlı, ilgili kategorideki tüm tedarikçilere anında ulaşır.'
                },
                {
                    icon: 'ri-alert-fill',
                    title: 'Tedarikçiler Teklif Versin',
                    image: 'hiw3.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. '
                },
                {
                    icon: 'ri-lock-2-fill',
                    title: 'Teklifleri İncele, En Uygununu Seç',
                    image: 'hiw4.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. '

                }
            ]
        }
    },
    created(){
		window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	},
    methods: {
		handleScroll (event) {

            var elements = [ ... document.getElementsByClassName('sticky-card')];
            elements.forEach((card, i) => {
                if(i == (elements.length - 1)) return;
                if(card.getBoundingClientRect().y > 180) {
                    card.style.transform = ("translate3d(0px, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");
                    card.style.background = "#f0f2f4"
                    return;
                };
                let position = gsap.utils.mapRange(500, 150, 1, (0.88 + (i * 0.02)), (card.getBoundingClientRect().y))
                
                let colorscale = gsap.utils.mapRange(1000, 150, (240 + (i * 15)), (209 + (i * 15)), (card.getBoundingClientRect().y))
                let scale3d = "scale3d("+ position +","+ position +",1)"
                let color = 'rgb('+colorscale+', '+(colorscale + 2)+', '+(colorscale + 4)+')'
                card.style.transform = ("translate3d(0px, 0px, 0px) " + scale3d + " rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)");
                card.style.background = color
            });

        },
	},
}
</script>

<style scoped>

    .sticky-cards-container {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: auto;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: start;
        -webkit-align-items: start;
        -ms-flex-align: start;
        align-items: start;
        grid-auto-columns: 1fr;
        -ms-grid-columns: 1fr 2fr;
        grid-template-columns: 1fr 2fr;
        -ms-grid-rows: auto;
        grid-template-rows: auto;
        
    }

    .sticky-cards-wrap {
        position: relative;
        top: 10%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .sticky-card {
        position: -webkit-sticky;
        position: sticky;
        top: 5vh;
        display: -ms-grid;
        width: 100%;
        margin-bottom: 20px;
        /*
        padding: 5vw;
        grid-auto-columns: 1fr;
        grid-column-gap: 64px;
        grid-row-gap: 40px;
        */
        -ms-grid-columns: 3fr 7fr;
        grid-template-columns: 3fr 7fr;
        -ms-grid-rows: auto;
        grid-template-rows: auto;
        background-color: #f8fafc;
        transition-delay: .3s;
        transition: .3s;
        border-radius: 10px;
    }

    .adv-img {
        /* box-shadow: 2px -3px 14px -4px rgba(0,0,0,0.35); */
        object-fit: contain;
        width: 100%;
        border-radius:10px;
        transition: .6s;
    }

    .step-card {
        background-color: #f0f2f4;
            display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        align-items: flex-start;
        border-radius: 10px;
        color: #1d1d1f;
        font-weight: 400;
    }
</style>
