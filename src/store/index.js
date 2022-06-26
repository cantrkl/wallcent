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
        position: { positionY: 0, positionX: 0 },
        modals: {
			findSupModal: {
				visible: false,
                fullName: '',
                companyName: '',
                sector: '',
                email: ''
			},
			becameSupModal: {
				visible: false,
                fullName: '',
                companyName: '',
                sector: '',
                email: ''
			},
        }
    },
    mutations: {
        setModal (state, obj) {
        	state.modals[obj[0]] = obj[1]
		}
    },
    actions: {
    },
    modules: {
    }
})
