<template>
    <div class="w-100 section-five d-flex align-center justify-center p-relative py-12" :style="'background: rgb(248, 249, 252) !important; padding-bottom: 100px !important;'">
        <div class="row ma-0 mt-12 align-center" style="max-width: 1200px;     justify-content: center; z-index: 2">
            
            <div class="col-6 pa-0">
                <div class="px-12">
                    <div class="d-flex flex-column text-left mx-2">
                        <span class="fs-17 font-weight-bold mb-3" style="color: #183b56">Need Support !</span>
                        <span class="fs-14 mb-5" style="color: #183b56">Contact us for a quote , help to join the them.</span>
                    </div>
                    
                    <form>
                        <div class="row ma-0">
                            <div class="col-6 pa-0">
                                <div class="form-group mx-2">
                                    <input class="form-input" placeholder="Adınız"> 
                                </div>
                            </div>
                            <div class="col-6 pa-0">
                                <div class="form-group mx-2">
                                    <input class="form-input" placeholder="Adınız"> 
                                </div>
                            </div>
                        </div>
                        <div class="row ma-0">
                            <div class="col-12 pa-0">
                                <div class="form-group mx-2">
                                    <input class="form-input" placeholder="E-posta adresiniz"> 
                                </div>
                            </div>
                        </div>
                        <div class="row ma-0">
                            <div class="col-12 pa-0">
                                <div class="form-group mx-2">
                                    <textarea style="min-height: 100px" class="form-input" placeholder="Tedarik ettiğiniz ürün hakkında bilgi"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group mx-2">
                            <button class="send-form-button">İletişime geçin</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-6 pa-0 text-right">
                <div class="d-flex flex-column w-100">
                    <span style="color: #952522; font-size: 30px" class="font-weight-bold py-6 pb-2">Ürünlerinizi Binlerce Alıcıya Ulaştırın</span>
                    <div class="d-flex w-100 justify-end">
                        <div class="mt-3" style="width: 80px; height: 1px; background: linear-gradient(to right, transparent, #952522, transparent);"></div>
                    </div>
                    
                   <span style="color: rgb(24, 59, 86); font-size: 39px" class="font-weight-bold py-6 pb-2">Bizimle iletişime geçerek tedarikçi ağımıza katılın.</span>
                   <p class="fs-18" style="color: rgb(131, 132, 133); line-height: 25px !important;">Wallcent'de, ihtiyacınız olan ürünün tedarikçileri ile sizleri buluşturuyoruz. En uygun ve en düşük fiyatları tedarikçinizi bulmak için aşağıdan ilanınızı oluşturmanız yeterli, gerisini biz hallediyoruz.</p>
                </div>
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
    .section-five {
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    .form-group {
        display: flex;
    }
    .form-input {
        margin-bottom: 15px;
        box-shadow: none !important;
        padding: 10px 20px;
        font-size: 15px;
        z-index: 1;
        width: 100%;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        border: 1px solid #ced4da;
        border-radius: 4px;
    }

    .send-form-button {
        width: 100%;
        background: #2b70fa;
        color: white;
        font-weight: 900;
        border-radius: 4px;
        padding: 13px 20px;
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 2px;
        margin-top: 2px;
        border: none;
        transition: .3s;
        cursor: pointer;
    }
    
</style>

