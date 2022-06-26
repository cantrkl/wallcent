<template>
    <div class="modal-container" v-if="$store.state.modals.findSupModal.visible">
        <div class="modal-overlay" @click="modalVisible = false"></div>
        <transition enter-active-class="animated zoomIn faster" leave-active-class="animated zoomOut faster">
            <div class="modal white d-flex flex-column px-4" v-if="modalVisible" style="width:600px">
                <div class="d-flex justify-space-between align-center py-2">
                    <span class="d-block font-weight-regular fs-17" >Tedarikçi Bul</span>
                    <div class="cursor-pointer hover-opacity">
                        <i @click="modalVisible = false" class="ri-close-fill fs-24"></i>
                    </div>
                </div>
                <div class="line mt-1"></div>
                <div class="d-flex align-center justify-center pa-4 grey lighten-5 fs-13 rounded mt-4 poppins" style="line-height: 1.72; color: #6e6e6e;">Bizi hazırlıksız yakaladınız :) Sistemimiz henüz aktif değildir. Bilgilerinizi girerek şimdiden ön kayıt yaptırabilir ve gelişmelerden haberdar olabilirsiniz.</div>
                <form class="d-flex flex-column mt-4">
                    <div class="d-flex flex-column text-left justify-start">
                        <span class="fs-14 poppins" style=" color: #6e6e6e;">Ad Soyad</span>
                        <input class="mt-2 px-4 py-3 fs-13" placeholder="Ad Soyad" style="border: solid 1px #cfcfcf; color: #6e6e6e; border-radius: 4px;" v-model="$store.state.modals.findSupModal.fullName"/>
                    </div>
                    <div class="d-flex flex-column text-left justify-start mt-3">
                        <span class="fs-14 poppins" style=" color: #6e6e6e;">Şirket Adı</span>
                        <input class="mt-2 px-4 py-3 fs-13" placeholder="Şirket" style="border: solid 1px #cfcfcf; color: #6e6e6e; border-radius: 4px;" v-model="$store.state.modals.findSupModal.companyName"/>
                    </div>
                    <div class="d-flex flex-column text-left justify-start mt-3">
                        <span class="fs-14 poppins" style=" color: #6e6e6e;">Sektör</span>
                        <input class="mt-2 px-4 py-3 fs-13" placeholder="Sektör" style="border: solid 1px #cfcfcf; color: #6e6e6e; border-radius: 4px;" v-model="$store.state.modals.findSupModal.sector"/>
                    </div>
                    <div class="d-flex flex-column text-left justify-start mt-3">
                        <span class="fs-14 poppins" style=" color: #6e6e6e;">E-posta</span>
                        <input class="mt-2 px-4 py-3 fs-13" placeholder="Eposta" style="border: solid 1px #cfcfcf; color: #6e6e6e; border-radius: 4px;" v-model="$store.state.modals.findSupModal.email"/>
                    </div>
                    <div class="d-flex mb-2 mt-4">
                        <div class="flex-fill"></div>
                        <button disabled class="rounded-lg white--text border-none red darken-4 cursor-pointer hover-opacity font-weight-bold roboto" style="padding: 13px 20px ;">Gönder</button>
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'findSupModal',
    components: {
    },
    data: function () {
        return {
            modalVisible:false
        }
    },
    methods: {
        closeModal: function(){
            this.$store.state.modals.findSupModal.visible = false;
            setTimeout(() => {
                this.$store.commit('setModal', ['findSupModal', { 
                    visible: false,
                    fullName: '',
                    companyName: '',
                    sector: '',
                    email: ''
                }])
            }, 100);
        }
    },
    watch: {
        '$store.state.modals.findSupModal.visible':{
            handler: function(val) {
                if(val) setTimeout(() => {this.modalVisible = val;}, 100);
            }
        },
        modalVisible:{
            handler: function(val) {
                if(!val) setTimeout(() => { this.closeModal(); }, 100);
            }
        }
    }
}
</script>