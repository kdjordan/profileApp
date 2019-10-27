<template>
    <div class="client">
        <div class="main-content-abs-center">
            <h1 class="header-font">Client Work</h1>
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
    &__paragraph {
        margin: 2rem 0;
        padding-bottom: 2rem;
        border-bottom: 1px solid var(--color-darkblue);
        text-align: center;

        &--subtitle {
            text-transform: uppercase;
            font-size: 1.2rem;
            font-style: italic;
        }
    }
}
</style>