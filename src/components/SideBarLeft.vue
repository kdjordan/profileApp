<template>
    <div class="sidebar-left">
        <div class="sidebar-left__menu-box"> 
                <div class="ham-menu">
                    <span class=" ham-menu--el ham-menu--el-1"></span>
                    <span class="ham-menu--el ham-menu--el-2"></span>
                    <span class="ham-menu--el ham-menu--el-3"></span>
                </div>  
                <ul class="nav">
                    <li class="nav__item" @click="setScreen('welcome')">Home</li>
                    <li class="nav__item" @click="setScreen('clients')">client work</li>
                    <li class="nav__item" @click="setScreen('fun')">fun code</li>
                    <li class="nav__item" @click="setScreen('me')">me</li>
                    <li class="nav__item" @click="setScreen('contact')">contact</li>    
                </ul>    
        </div>
        <div class="sidebar-left__indicator">
                <span class="sidebar-left__indicator sidebar-left__indicator--type">
                    {{ this.getMessage  }}
                </span> 
        </div>
        <div>

        </div>
    </div> <!-- end sidebar-left -->
</template>

<script>    
import { mapState, mapGetters } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    methods: {
        setScreen(screen) {
            this.$store.state.activeComponent = `app-${screen}`;
        }
    },
    computed: {
        ...mapGetters ([
            'getMessage'
        ]),
        getMessage() {
             return this.$store.getters.getMessage.split('-')[1]
        }
    }
}
</script>

<style lang="scss">

.sidebar-left {
    background: var(--color-lightgrey);
    border-bottom-left-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 7rem;
    
    &__menu-box {
        background: var(--color-darkblue);
        height: 8.8rem;
        border-top-left-radius: 5px;
        cursor: pointer;
        z-index: 10;

        &:hover {
            width: 200%;
            height: 35%;
            border-bottom-right-radius: 5px;
        }
        &:hover .ham-menu{
            opacity: 0;
        }
        &:hover .nav {
            opacity: 1;
        } 
    }
  
    &__indicator {
        writing-mode: vertical-lr;
        text-orientation: left;
        margin: 0 auto;

        &--type {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            letter-spacing: 1.8rem;
            font-size: 1.8rem;
            font-family: var(--logoPrimary);
            margin-left: 3%;
            text-transform: uppercase;

        }
    }
}

.ham-menu {
   position: relative;
   top: 26%;
   left: 31%;
    cursor: pointer;
    opacity: 1;
    transition: all .2s;
    &--el {
        display: block;
        height: .3rem;
        width: 2.5rem;
        background: var(--color-lightgrey);
        margin: 6px 0;
        border-radius: 10px;
        
        &-1 {
            width: 1rem;
        }

        &-3 {
            margin-left: 15px; 
            width: 1rem;
        }
    }
}

.nav {
    list-style-type: none;
    text-transform: uppercase;
    font-size: 1.3rem;
    color: var(--color-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: all .2s ease-in;
    
    &__item { 
        margin: .8rem auto;
        padding-bottom: 2px;
    
        &:hover {
            border-bottom: 2px solid var(--color-grey);

        }
    }
}
</style>