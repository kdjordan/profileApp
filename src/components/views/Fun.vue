<template>
    <div class="fun">
            <div class="fun__box">
                <app-project></app-project>
            </div>
    </div>
</template>

<script>
import Project from './Project.vue';

export default {
    components: {
        appProject: Project
    }
    
}
</script>

<style lang="scss" scoped>

.fun {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex: 2;
    min-height: 80vh;

    
    @media only screen and (max-width: 37.5em) {
        min-height: auto;
        
    }
    

    &__box {
        // justify-content: space-between;
        // background: red;
        // display: flex;
        // justify-items: space-between; 
        // align-items: center;
        // flex-direction: row;
        
    }
}

</style>