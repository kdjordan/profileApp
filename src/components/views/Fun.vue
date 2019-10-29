<template>
<div class="main__between">
    <div class="fun">
            <div class="fun__box">
                <app-project></app-project>
            </div>
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
    flex: 0 0 1;

    min-height: 80rem;

    &__box {
        display: flex;
        justify-items: space-between; 
        align-items: center;
        flex-direction: row;
        
    }
}

</style>