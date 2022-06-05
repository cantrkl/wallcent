<template>
    <div class="home">
        <Heading></Heading>
        <SectionTwo v-if="false"></SectionTwo>
        <HowItWorks></HowItWorks>
        <BuyersA></BuyersA>
        <SuppliersA></SuppliersA>

        <SectionFive v-if="false"></SectionFive>
        <BecameSupplier v-if="false"></BecameSupplier>
        <SubscribeForm></SubscribeForm>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Heading from '@/components/Landing/Heading.vue'
import SectionTwo from '@/components/Landing/SectionTwo.vue'
import HowItWorks from '@/components/Landing/HowItWorks.vue'
import BuyersA from '@/components/Landing/BuyersA.vue'
import SectionFour from '@/components/Landing/SectionFour.vue'
import SuppliersA from '@/components/Landing/SuppliersA.vue'
import SectionFive from '@/components/Landing/SectionFive.vue'
import BecameSupplier from '@/components/Landing/BecameSupplier.vue'
import SubscribeForm from '@/components/Landing/SubscribeForm.vue'
import Footer from '@/components/Landing/Footer.vue'

export default {
    name: 'Home',
    components: {
        Heading,
        SectionTwo,
        HowItWorks,
        BuyersA,
        SectionFour,
        SuppliersA,
        SectionFive,
        BecameSupplier,
        SubscribeForm,
        Footer
    }
}
</script>
