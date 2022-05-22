<template>
    <div class="header d-flex align-center justify-center w-100 animated-normal p-fixed" :class="$store.state.position.positionY > 30 ? 'elevation-3' : ''" :style="$store.state.position.positionY > 30 ? 'background-color: #fff;' : 'background-color: #f8f9fc'" style="top: 0; font-family: 'Roboto', sans-serif !important; z-index: 250;"> 
        <div class="wrapper animated-normal d-flex align-center w-100" style="justify-content: space-between;" :style="$store.state.position.positionY > 30 ? 'height: 65px !important;' : ''" >
            <img :src="require('@/assets/logo_s.png')" height="46" style="    object-fit: contain;">
            <div class="d-flex " style="flex: 1; justify-content: space-evenly; max-width: 600px;">
                <span class="fs-13 text-uppercase cursor-pointer hover-opacity" style="color: #183b56; font-weight: 700">Özellİkler</span>
                <span class="fs-13 text-uppercase cursor-pointer hover-opacity" style="color: #183b56; font-weight: 700">Neden?</span>
                <span class="fs-13 text-uppercase cursor-pointer hover-opacity" style="color: #183b56; font-weight: 700">Nasıl?</span>
                <span class="fs-13 text-uppercase cursor-pointer hover-opacity" style="color: #183b56; font-weight: 700">Sağlayıcı ol</span>
                <span class="fs-13 text-uppercase cursor-pointer hover-opacity" style="color: #183b56; font-weight: 700">İLETİŞİM</span>
            </div>
            <select v-model="$store.state.selectedLanguage" v-if="false">
                <option :value="item.code" v-for="item in $store.state.languages" :key="item.code">{{item.text}}</option>
            </select>
            <router-link to="/login" >
                <button class="rounded text-uppercase white--text w-100 border-none blue darken-3 cursor-pointer hover-opacity" style="padding: 13px 20px ;">Giriş</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import languages from '@/languages'
export default {
    name: 'Header',
    components: {
    },
    watch: {
        '$store.state.selectedLanguage': {
            handler: function(val) {
                window.localStorage.setItem('lang', val)
                this.$store.state.language = languages[val];
            }
        }
    }
}
</script>
