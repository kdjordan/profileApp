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
  import Home from './components/views/Home.vue';
  import Clients from './components/views/Clients.vue';
  import Fun from './components/views/Fun.vue';
  import Me from './components/views/Me.vue';
  import Contact from './components/views/Contact.vue';

  export default {
    components: {
      appSideBarLeft: SideBarLeft,
      appSideBarRight: SideBarRight,
      appHome: Home,
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

    
    --logoPrimary: 'Dosis', sans-serif;

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
    min-width: 700px;
}

//layout classes
.container {
    max-width: 120rem;
    background: var(--color-offwhite);  
    margin: 8rem auto;
    border-radius: 5px;

    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    min-width: 700px;
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
.mb-small {
  margin-bottom: 2rem !important;
}
.m-med {
  margin: 2rem 0;
}
.u-strong {
  font-weight: 700;
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

.material-design-icon.icon-1x > .material-design-icon__svg {
  height: 2.3em;
  width: 2.3em;
  position: absolute;
  top: -10px;
  left: -10px;

}


</style>
