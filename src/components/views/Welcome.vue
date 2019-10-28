<template>
    <div class="main">
        <div class="main-content-abs-center">
            <h1>My Name is Kevin Jordan.</h1>
            <h3>I design and build things on the Internet.</h3>   
            <div class="large-logo mt-large">
                <span class="large-logo__type">KJ</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

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
        font-family: var(--logoFont-slant);
        font-size: 10rem;
        color: var(--color-lightgrey);
        margin-right: 6%;
        margin-top: 6%;
        
    }
}


</style>