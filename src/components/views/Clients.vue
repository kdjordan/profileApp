<template>
    <div class="main__between">
        <div class="client">
            <p class="client__paragraph mt-med">
                I've been fortunate to work with some great businesses.<br>
                Here's a few recent projects.<br>
                <span class="client__paragraph--subtitle">Click on the Image to Visit the Site</span>
            </p>
            <app-client></app-client>
        </div>
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

.client{
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 0 0 1;

    &__paragraph {
        text-align: center;
        &--subtitle {
            text-transform: uppercase;
            font-size: 1.2rem;
            font-style: italic;
        }
    }
     &__paragraph:after {
        content: ""; /* This is necessary for the pseudo element to work. */ 
        display: block; /* This will put the pseudo element on its own line. */
        margin: 0 auto; /* This will center the border. */
        width: 50%; /* Change this to whatever width you want. */
        padding-top: 20px;
        border-bottom: 1px solid var(--color-darkblue); 
    }
}
</style>