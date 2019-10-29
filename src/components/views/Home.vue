<template>
        <div class="home">
            <h1>My Name is Kevin Jordan.</h1>
            <h3>I design and build things on the Internet.</h3>   
            <div class="large-logo mt-large">
                <span class="large-logo__type">kj</span>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.home {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    flex: 2;

    @media only screen and (max-width: 37.5em) {
        min-height: auto; 
    }

    & h1 {
        @media only screen and (max-width: 37.5em) {
            text-align: center;
            font-size: 2.8rem;
        }
    }

    & h3 {
         @media only screen and (max-width: 37.5em) {
            text-align: center;
            font-size: 1.8rem;
        }

    }

    @media only screen and (max-width: 37.5em) {
        
    }
}

.large-logo {
    display: flex;
    background: var(--color-darkblue);
    height: 20rem;
    width: 20rem;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto;
    align-items: center;

    &__type {
        font-family: var(--logoPrimary);
        font-size: 10rem;
        color: var(--color-lightgrey);
        text-transform: uppercase;
        // margin-right: 6%;
        // margin-top: 6%;
        
    }
}


</style>