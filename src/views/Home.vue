<template>
    <div class="home">
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <HowItWorks></HowItWorks>
        <SectionFour></SectionFour>
        <BuyersA></BuyersA>
        <SuppliersA></SuppliersA>
        <SectionFive></SectionFive>
        <BecameSupplier></BecameSupplier>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import SectionOne from '@/components/Landing/SectionOne.vue'
import SectionTwo from '@/components/Landing/SectionTwo.vue'
import HowItWorks from '@/components/Landing/HowItWorks.vue'
import BuyersA from '@/components/Landing/BuyersA.vue'
import SectionFour from '@/components/Landing/SectionFour.vue'
import SuppliersA from '@/components/Landing/SuppliersA.vue'
import SectionFive from '@/components/Landing/SectionFive.vue'
import BecameSupplier from '@/components/Landing/BecameSupplier.vue'
import Footer from '@/components/Landing/Footer.vue'

export default {
    name: 'Home',
    components: {
        SectionOne,
        SectionTwo,
        HowItWorks,
        BuyersA,
        SectionFour,
        SuppliersA,
        SectionFive,
        BecameSupplier,
        Footer
    }
}
</script>
