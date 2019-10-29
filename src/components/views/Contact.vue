<template>
   <div class="main__between">
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
     display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 0 0 1;
    min-height: 80rem;
    

    &--outline {
        border: 2px solid var(--color-darkblue);
        padding: 1rem 2rem;
        cursor: pointer;
        
        transition: all .4s;

        & a {
            text-decoration: none; 
            color: var(--color-darkblue);
        }

        &:hover {
                
                background: var(--color-darkblue);
            }

        &:hover a {
            color: var(--color-lightgrey);
        }
        
    }

    // &:hover &--outline {
    //     background: var(--color-darkblue);
    //     color: var(--color-lightgrey);
    // }
    

    &__h2 {
        text-transform: uppercase;
        letter-spacing: 5px;

    }

}

</style>