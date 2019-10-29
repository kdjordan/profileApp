<template>
<transition name="fade">
    <div class="inner-client">
        <h2 class="text-center">{{ getClient.name }}</h2>
        <a :href="getClient.link" target="_blank">
            <img :src="getImage" :if="show" class="mt-med img" @change="announce">
        </a>
        <div class="text-center inner-client__details">
            <h3>Work Performed</h3>
            <p class="mt-small mb-med">{{ getClient.work }}</p>
        </div>
        
    </div>
    </transition>
    <!-- return require(`../../img/${this.$store.state.clients[this.index].img}`) -->
</template>

<script>
    import { mapState, mapGetters  } from 'vuex';

    export default {
        data() { 
            return {
                show: true
            }
        },
        computed: {
            ...mapGetters ([
                'getClient'
            ]),
            getImage() {
               return require(`../../img/${this.$store.state.clients[this.$store.state.clientIndex].img}`)
            }
        },
        methods: {
            announce() {
                console.log('hmmmm');
            }
        }
    }
</script>

<style lang="scss" scoped>


.inner-client {
    opacity: 1;

    & h2 {
        margin-top: 20px;

         @media only screen and (max-width: 37.5em) {
            font-size: 2rem;
        }
    }
    

    &__details {
        margin-top: -8.5rem;
        
        @media only screen and (max-width: 37.5em) {
            margin-top: -3rem;
            font-size: 1.5rem;
                
            }

        & p {
             @media only screen and (max-width: 37.5em) {
                margin-bottom: 1rem;
                }
        }

    }
}

.img {
    width: 100%;

    @media only screen and (max-width: 37.5em) {
        width: 80%;
        margin: 0 10%;;
    }
    
}
</style>