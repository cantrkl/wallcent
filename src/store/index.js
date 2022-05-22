import { createStore } from 'vuex'

export default createStore({
    state: {
        language: {},
        languages: [
            { code: 'TR', text: 'Türkçe' },
            { code: 'EN', text: 'English' }
        ],
        selectedLanguage: '',
        dimensions: { width: window.innerWidth, height: window.innerHeight },
        position: { positionY: 0, positionX: 0 }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
