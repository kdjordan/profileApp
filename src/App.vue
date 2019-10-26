<template>
  
    <div class="container">
       <app-side-bar-left></app-side-bar-left>
        <component :is="this.$store.state.activeComponent" >
          </component>
        <app-side-bar-right></app-side-bar-right>
    </div>
    <!-- this.$store.state.activeComponent -->
</template>

<script>
  import SideBarLeft from './components/SideBarLeft.vue';
  import SideBarRight from './components/SideBarRight.vue';
  import Welcome from './components/views/Welcome.vue';
  import Clients from './components/views/Clients.vue';
  import Fun from './components/views/Fun.vue';
  import Me from './components/views/Me.vue';
  import Contact from './components/views/Contact.vue';
  import { mapState } from 'vuex';   
  
  export default {
    components: {
      appSideBarLeft: SideBarLeft,
      appSideBarRight: SideBarRight,
      appWelcome: Welcome,
      appClients: Clients,
      appFun: Fun,
      appMe: Me,
      appContact: Contact
    },
    data() {
      return {
        
      }
    }
  }
</script>


<style lang="scss">

//base classes
:root {
    --color-grey : #979CA6; 
    --color-darkblue : #263440; 
    --color-lightgrey : #C7D2D9; 
    --color-moss : #736230; 
    --color-earth : #594B31; 
    --color-offwhite: #eef0fb;

    --logoFont : arya-single, sans-serif;
    --logoFont-slant : arya-double-slant, sans-serif;
    --logoPrimary: 'Dosis', sans-serif;

    //font-weight: 400;
    //font-style: italic;
    --shadow-dark: 0 2rem 6rem rgba(0,0,0, .3);
}   
* {
    padding: 0;
    margin: 0;
}
html {
    box-sizing: inherit;
    font-size: 62.5%;      //1rem = 10px
}
*,
*::after,
*::before {
    box-sizing: border-box;
}
body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;  
    font-size: 1.7rem;
    min-height: 100vh;
    padding: 5rem;   
}

//layout classes
.container {
    max-width: 120rem;
    background: var(--color-offwhite);  
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 85vh;
    border-radius: 5px;
}

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-darkblue);
    width: 80%;
    text-align: center;
}

.header-font {
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 1.3rem 2.5rem;
  color: var(--color-lightgrey);
  background: var(--color-darkblue);
  
}

.app-button {
  padding: 1rem 2rem;
  background: var(--color-darkblue);
  color: var(--color-lightgrey);
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
}
//utility classes
.u-active {
  background: var(--color-darkblue) !important;
}
.mt-large {
  margin-top: 6rem !important;
}
.mt-med {
  margin-top: 4rem !important;
}
.mt-small {
  margin-top: 2rem !important;
}
.mb-med {
  margin-bottom: 4rem !important;
}
.m-med {
  margin: 2rem 0;
}
.text-center {
  text-align: center;
}

//material svgs
.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 3em;
  width: 3em;
  position: absolute;
  top: -15px;
  left: -15px;
}

</style>
