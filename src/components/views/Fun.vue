<template>
    <div class="fun">
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
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    &__box {
        display: flex;
        justify-items: space-between; 
        align-items: center;
        flex-direction: row;
        
    }
}

</style>