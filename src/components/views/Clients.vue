<template>
    <div class="clients">
        <p class="clients__paragraph">
            I've been fortunate to work with some great businesses.<br>
            Here's a few recent projects.<br>
            <span class="clients__paragraph--subtitle">Click on the Image to Visit the Site</span>
        </p>
        <app-client></app-client>
    </div>
</template>

<script>
    import Client from './Client.vue'
export default {
    components: {
        appClient: Client
    }
}
</script>

<style lang="scss" scoped>

.clients {
    display: flex;
    flex: 2;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;

    @media only screen and (max-width: 37.5em) {
       min-height: auto;         
    }

    &__paragraph {
        text-align: center;

        @media only screen and (max-width: 37.5em) {
                font-size: 1.5rem;       
            }

        &--subtitle {
            text-transform: uppercase;
            font-size: 1.2rem;
            font-style: italic;

             @media only screen and (max-width: 37.5em) {
                font-size: 1rem;       
             } 
        }
    }
     &__paragraph:after {
        content: ""; /* This is necessary for the pseudo element to work. */ 
        display: block; /* This will put the pseudo element on its own line. */
        margin: 0 auto; /* This will center the border. */
        width: 50%; /* Change this to whatever width you want. */
        padding-top: 20px;
        border-bottom: 1px solid var(--color-darkblue); 

        @media only screen and (max-width: 37.5em) {
                padding-top: 10px;
            }
    }
}
</style>