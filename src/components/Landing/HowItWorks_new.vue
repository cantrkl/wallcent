<template>
    <div style="background-color: #fff !important" class="w-100 d-flex align-center flex-column justify-center p-relative pb-12 mb-12">
        <div class="align-center w-100" style="max-width: 1200px;     justify-content: center; z-index: 2">
            <div class="sticky-cards-container" ref="sticky-cards-container">
                <div class="sticky-cards-wrap" ref="sticky-cards-wrap">
                    <div class="sticky-card" v-for="(item,i) in steps" :key="i"
                        :style="getStyles">
                        <span>CARD {{i + 1}}</span>
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
                    title: 'Talep Oluştur',
                    image: 'hiw-1.png',
                    longTitle: 'Dakikalar İçinde Talep Oluştur',
                    description: 'İş talebinizle ilgili kategoriyi seçin ve aradığınız ürünün bilgilerini, çalışma şartlarınızı detaylarıyla belirterek bir talep oluşturun.'
                },
                {
                    icon: 'ri-notification-3-fill',
                    title: 'Talebin Tedarikçilere Ulaşsın',
                    image: 'hiw-2.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Teklifin, Wallcent’te kayıtlı, ilgili kategorideki tüm tedarikçilere anında ulaşır.'
                },
                {
                    icon: 'ri-alert-fill',
                    title: 'Tedarikçiler Teklif Versin',
                    image: 'hiw-1.png',
                    longTitle: 'The standard Lorem Ipsum passage',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet lacus quis neque consequat dapibus. '
                },
                {
                    icon: 'ri-lock-2-fill',
                    title: 'Teklifleri İncele, En Uygununu Seç',
                    image: 'hiw-2.png',
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
            console.log(window.scrollY)
        },
        getStyles: (i) => {
            let scale3d = scale3d(1,1,1)
            return ("will-change: background, transform; background-color: red; transform: translate3d(0px, 0px, 0px) " + scale3d + " rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;")
        }
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
        display: grid;
        width: 100%;
        margin-bottom: 10vw;
        padding: 5vw;
        grid-auto-columns: 1fr;
        grid-column-gap: 64px;
        grid-row-gap: 40px;
        -ms-grid-columns: 3fr 7fr;
        grid-template-columns: 3fr 7fr;
        -ms-grid-rows: auto;
        grid-template-rows: auto;
        background-color: #f0f2f4;
        border: 1px solid red;
        height: 400px;
    }

</style>
