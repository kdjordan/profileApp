<template>
   <div class="main__between text-center">
        <h1 class="header-font">Contact</h1>
        <div class="contact">
            <h2 class="contact__h2 mb-med ">Let's Connect</h2>
            <div class="contact--outline">
                <a href="mailto:k.dean.jordan@gmail.com">k.dean.jordan@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.contact {

    height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    

    &--outline {
        border: 2px solid var(--color-darkblue);
        padding: 1rem 2rem;
        cursor: pointer;
        transition: all .4s;

        & a {
            text-decoration: none; 
            color: var(--color-darkblue);

            &:hover {
                color: var(--color-lightgrey);
            }
        }
    }

    &:hover &--outline {
        background: var(--color-darkblue);
        color: var(--color-lightgrey);
    }
    

    &__h2 {
        text-transform: uppercase;
        letter-spacing: 5px;

    }

}

</style>