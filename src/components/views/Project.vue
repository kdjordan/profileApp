<template>
    <div class="project">
            <div class="project__col">
                <h3 class="project__name">{{ getProjects[0].name }}</h3>
                <p class="project__desc">{{ getProjects[0].description }}<br>
                {{ getProjects[0].todo }}</p>
                <div class="project__links">
                    <button class="app-button project__button">Live</button>
                    <icon-git-circle class="icon-1x"></icon-git-circle>
                </div>
            </div>
            <div class="project__col">
                    <h3 class="project__name">{{ getProjects[2].name }}</h3>
                <p class="project__desc">{{ getProjects[2].description }}<br>
                {{ getProjects[2].todo }}</p>
                <div class="project__links">
                    <icon-git-circle class="icon-1x"></icon-git-circle>
                </div>
            </div>
            <div class="project__col">
                    <h3 class="project__name">{{ getProjects[1].name }}</h3>
                <p class="project__desc">{{ getProjects[1].description }}<br>
                {{ getProjects[1].todo }}</p>
                <div class="project__links">
                    <button class="app-button project__button">Live</button>
                    <icon-git-circle class="icon-1x"></icon-git-circle>
                </div>
            </div>
    </div>
</template>

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
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    & h1 {
        margin: .5rem 0;
    }

    &__name {
        margin: .5rem 0;
    }


    &__col {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;

    }


    &__desc {
        margin-bottom: 2rem;
        font-size: 1.5rem;

        @media(max-width:700px) {
          font-size: 1.3rem;
      }
    }

    &__links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 50%;
    }

}

.project-icon {
    cursor: pointer;
    color: var(--color-darkblue);
    top: 0px;
    left: 0px;
    transition: all .4s;
    height: 1rem;
    width: 1rem;

    &:hover { 
        color: var(--color-lightgrey);
    }

}

.app-button {
  padding: 1rem 2rem;
  background: var(--color-darkblue);
  color: var(--color-lightgrey);
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .4s;

    &:hover {
      background: var(--color-lightgrey);
      color: var(--color-darkblue);
    }
}

</style>
