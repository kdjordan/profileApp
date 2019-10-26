<template>
    <div class="inner-client">
        <h2>{{ getClient.name }}</h2>
        <a :href="getClient.link" target="_blank"><img :src="getImage" class="mt-med"></a>
        <div class="text-center inner-client__details">
            <h3>Work Performed</h3>
            <p class="mt-small mb-med">{{ getClient.work }}</p>
        </div>
        
    </div>
    <!-- return require(`../../img/${this.$store.state.clients[this.index].img}`) -->
</template>

<script>
    import { mapState, mapGetters  } from 'vuex';

    export default {
        data() { 
            return {
                
            }
        },
        computed: {
            ...mapGetters ([
                'getClient'
            ]),
            getImage() {
               return require(`../../img/${this.$store.state.clients[this.$store.state.clientIndex].img}`)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.inner-client {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &__details {
        margin-top: -6.5rem;
    }
}
</style>