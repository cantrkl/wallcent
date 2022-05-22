<template>
    <component :is="this.$route.meta.layout || 'div'">
        <router-view></router-view>
    </component>
</template>

<script>
export default {
    name: 'Home',
    components: {
    },
    created(){
        window.addEventListener('resize', this.handleResize);
		window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.handleScroll);
	},
    methods: {
        handleResize (event) {
            this.$store.state.dimensions.width = window.innerWidth;
			this.$store.state.dimensions.height = window.innerHeight;
		},
		handleScroll (event) {
            this.$store.state.position.positionY = window.scrollY;
            this.$store.state.position.positionX = window.scrollX;
        }
	},
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');
    @import "./assets/styles/global.css";
    @import "./assets/styles/theme.css";
    #app {
        /*font-family: 'Roboto', sans-serif;*/
        font-family: 'Poppins', sans-serif;
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin: 0;
        padding: 0;
    }
</style>

