<template>
   <div class="sidebar-right"> 
        <div class="sidebar-right__logo-box" @click="setScreen('home')">
            <div class="sidebar-right__logo">
                <span class="sidebar-right__logo--type">KJ</span>
            </div>
        </div>
        <div class="sidebar-right__indicator" v-if="this.getMessage == 'app-clients'">
            <div id="0" class="sidebar-right__indicator--element u-active" @click="setIndex(0)"></div>
            <div id="1" class="sidebar-right__indicator--element" @click="setIndex(1)"></div>
            <div id="2" class="sidebar-right__indicator--element" @click="setIndex(2)"></div>
            <div id="3" class="sidebar-right__indicator--element" @click="setIndex(3)"></div>
            <div id="4" class="sidebar-right__indicator--element" @click="setIndex(4)"></div>
            <div id="5" class="sidebar-right__indicator--element" @click="setIndex(5)"></div>
            <div id="6" class="sidebar-right__indicator--element" @click="setIndex(6)"></div>
            
        </div>
        <div class="sidebar-right__button-box">
            <div class="sidebar-right__button-box--top" @click="advanceScreen">
                    <icon-right class="icon-2x"></icon-right>
            </div>
            <div class="sidebar-right__button-box--bottom" @click="retreatScreen">
                <icon-left class="icon-2x"></icon-left>
            </div>
        </div>
        </div> <!-- end sidebar-right -->
</template>

<script>
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue';
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue';
import { mapMutations, mapState, mapGetters } from 'vuex';


export default {
    data() {
        return {
            activeClient
        }
    },
    components: {
        iconRight: ChevronRightIcon,
        iconLeft: ChevronLeftIcon
    },  
    methods: {
        ...mapMutations ([
            'advance',
            'retreat',
            'setIndex'
        ]),
       advanceScreen() {
           this.advance();   
       },
       retreatScreen() {
           this.retreat();
       },
       setScreen(screen) {
           this.$store.state.activeComponent = `app-${screen}`
       },
       setIndex(index) {
           let items = document.getElementsByClassName("sidebar-right__indicator--element");
           Array.from(items).forEach((el) => {
               if(el.id == index) {
                   el.classList.add('u-active');
               } else {
                   el.classList.remove('u-active');
               }
           })
           this.$store.state.clientIndex = index;
       }
    },
    computed: {
        ...mapGetters([
            'getMessage'
        ])

    }

}
</script>

<style lang="scss">


.sidebar-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // flex: 0 0 7rem;
    
    &__logo {
        font-family: var(--logoFont);
        background: var(--color-darkblue);
        font-size: 3rem;
        padding: 2rem;
        border-top-right-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background-color: lighten(#263440, 10%);
        }
        
        &--type {
            color: var(--color-lightgrey);
        }
    }

    &__indicator {
        display: flex;
        flex-direction: column;
        margin: auto;
        cursor: pointer;

        &--element {
            height: .8rem;
            width: 2.5rem;
            display: block;
            background: var(--color-lightgrey);
            margin: 2.5rem 0; 
            border-radius: 2px;
            

        }
    }

    &__button-box {
        color: var(--color-lightgrey);
        cursor: pointer;

        &--top{
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-darkblue);
            margin-bottom: 2px;
            height: 6.5rem;  

            &:hover {
                background-color: lighten(#263440, 10%);
            }
        }
        &--bottom{
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-darkblue);
            border-bottom-right-radius: 5px;
            height: 6.5rem; 

                &:hover {
                background-color: lighten(#263440, 10%);
            }
        }
        &--icon {
            margin-left: 3%;
        }
    }       
}
</style>