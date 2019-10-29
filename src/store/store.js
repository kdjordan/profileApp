import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        mode: [
            'app-home',  
            'app-clients',
            'app-fun',
            'app-me',
            'app-contact'
        ],
        activeComponent: 'app-home',
        clientIndex: 0,

        clients: [
            {   name: 'Both Sides Construction', 
                img: 'bothsides.png', 
                work: 'Logo / Image Cleanup / Layout / Copywriting', 
                link:'http://bothsidesconstruction.com'
            },
            {   name: 'ActionVox', 
                img: 'avox.png', 
                work: 'Branding & Logo Creation / Identity / Website Layout / Copywriting', 
                link:'http://actionvox.com'
                },
            {   name: 'NorthWest Straps', 
                img: 'nwstraps.png', 
                work: 'Branding & Logo Creation / Website Layout / Copywriting', 
                link:'http://nwstraps.com'
                },
            {   name: 'Above The Fray', 
                img: 'fray.png', 
                work: 'Layout / Ecommerce Quickbooks Integration', 
                link:'https://weareabovethefray.com/'
                },
            {   name: 'Ortiz Metals', 
                img: 'ortiz.png', 
                work: 'Layout / Image Cleanup', 
                link:'http://ortizmetals.com/'
                },
            {   name: 'Eugene Sculpture Group', 
                img: 'esg.png', 
                work: 'Layout / Image Cleanup / Digital Photography', 
                link:'http://eugenesculpturegroup.com/'
                },
            {   name: "Third Time's The Charm", 
                img: '3charm.png', 
                work: 'Branding / Logo Design / Identity / Layout / Image Cleanup / Digital Photography', 
                link:'https://shop.3charm.com'
                }

            ],
            projects: [
                {
                    name: 'Mental Math',
                    description: 'This is a little Mental Math challenge game written in VueJS and using Vuex and some random number generating to provide an infinite number of challenges. You have 60 sec to answer as many addition and subtraction problems as you can.',
                    link: '#',
                    gitLink: '#'
                },
                {
                    name: 'Advanced CSS Practice',
                    description: 'This is a little practice site that I put together to work on some CSS animations. Also included are custom radio buttons and utilization of the checkbox hack to simulate click events using pure CSS. No JS is utilitzed on this page, which was fun little learning experience.',
                    link: '#',
                    gitLink: '#'

                },
                {
                    name: 'Profile App',
                    description: 'This is the VueJS app that you are visiting now. I thought it would be fun to create a profile site that is, in effect, a web app, utilizing Vuex and Flexbox. This is the result !',
                    link: '#',
                    gitLink: '#'

                }
            ]
        
    },
    mutations: {
        advance(state) {
            let index = state.mode.indexOf(state.activeComponent);
            index++;
            
            if(index == state.mode.length) {
                state.activeComponent = state.mode[0];
            } else {
                state.activeComponent = state.mode[index];
            }
        },
        retreat(state) {
            let index = state.mode.indexOf(state.activeComponent);

            if(index == 0){
                console.log('here')
                state.activeComponent = state.mode[state.mode.length-1];
            } else {
                index--;
                state.activeComponent = state.mode[index];
            }
        },
        setIndex(state) {
            state.clientIndex = state;
        }
    },
    getters: {
        getMessage: (state) => {
            return state.activeComponent;
        },
        getClient: (state) => {
            
            return state.clients[state.clientIndex];
        }
    }
    
});
