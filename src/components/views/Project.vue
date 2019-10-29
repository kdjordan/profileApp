<template>
<div class="main_between">

    <div class="project">
        <h1>Some Recent Fun Projects</h1>
        <div class="project__row">
            <div class="project__col">
                <div class="project__circle text-center">
                    <span class="project__circle--text">{{ getProjects[0].name }}</span>
                </div>
                <p class="project__desc">{{ getProjects[0].description }}<br>
                {{ getProjects[0].todo }}</p>
                <div class="project__links">
                    <button class="app-button project__button">Live</button>
                    <span><icon-git-circle class="icon-2x project-icon"></icon-git-circle></span>
                </div>
            </div>
            <div class="project__col">
                <div class="project__circle text-center">
                    <span class="project__circle--text">{{ getProjects[2].name }}</span>
                </div>
                <p class="project__desc">{{ getProjects[2].description }}<br>
                {{ getProjects[2].todo }}</p>
                <div class="project__links text-center">
                    <!-- <button class="app-button project__button">Live</button> -->
                    <span><icon-git-circle class="icon-2x project-icon"></icon-git-circle></span>
                </div>
            </div>
        </div>
        <div class="project__row">
            <div class="project__col">
                <div class="project__circle text-center">
                    <span class="project__circle--text">{{ getProjects[1].name }}</span>
                </div>
                <p class="project__desc">{{ getProjects[1].description }}<br>
                {{ getProjects[1].todo }}</p>
                <div class="project__links text-center">
                    <button class="app-button project__button">Live</button>
                    <span><icon-git-circle class="icon-2x project-icon"></icon-git-circle></span>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>
// mdi-github-circle
<script>
import { mapState } from 'vuex';
import GithubCircleIcon from 'vue-material-design-icons/GithubCircle.vue';
export default {
    components: {
        iconGitCircle: GithubCircleIcon
    },
    data() {
        return {

        }
    },
    computed: {
         ...mapState([
             'projects'
        ]),
        getProjects() {
            return this.$store.state.projects;
        }
    }
}
</script>


<style lang="scss" scoped>

.project {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex: 0 0 1;

    & h1 {
        margin: .5rem 0;
    }
    
    &__row {
        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    &__col {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
    }

    &__circle {
        margin: 0 auto;
        display: block;
        background: var(--color-darkblue);
        border-radius: 50%;
        height: 10rem;
        width: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    
        

        &--text {
            color:var(--color-lightgrey);
            font-size: 1.2rem;
            text-transform: uppercase;
            padding: 2rem;
            
        }
    }

    &__desc {
        margin: 2rem 0;
        font-size: 1.5rem;
    }

    &__links {
        display: flex;
        align-items: center;
        justify-content: center;;

    }

    &__button {
        margin-top: 5%;
        margin-right: 4rem;
    }
}

.project-icon {
    cursor: pointer;
    color: var(--color-darkblue);
    top: 0px;
    left: 0px;
    transition: all .4s;

    &:hover { 
        color: var(--color-lightgrey);
    }

}

</style>
