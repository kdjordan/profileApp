<template>
    <div class="fun">
        <div class="main-content-abs-center">
            <h1 class="header-font">Fun</h1>
            <p>Here are some side projects I've been working on lately.</p>
            <div class="fun__box">
                <div class="fun__project">
                    Mental Math
                    <img src="'../../img/profile.jpg" alt="">
                </div>
                <div class="fun__project">
                    Project 2
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.fun {

    &__box {
        display: flex;
        justify-items: space-between; 
        align-items: center;
        flex-direction: row;
        
    }
}

</style>