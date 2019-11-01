<template>
    <div class="me">
        <div class="me__image">
            <img src="../../img/profile.jpg" alt="">
        </div>
        <div class="me__code-block">
            <table >
                <tbody>
                    <tr>
                        <td class="u-strong">Education:</td>
                        <td> University of Oregon : BS CIS</td>
                    </tr>
                    <tr>
                        <td class="u-strong">Certification:</td>
                        <td>ITIL Foundation 4</td>
                    </tr>
                    <tr>
                        <td class="u-strong">Languages:</td>
                        <td>HTML, JavaScript, CSS, PHP, Java</td>
                    </tr>
                    <tr>
                        <td class="u-strong">CSS:</td>
                        <td>Float, Flexbox, Grid, Bootstrap, SASS</td>
                    </tr>
                    <tr>
                        <td class="u-strong">JavaScript:</td>
                        <td>ES5, ES6, VueJS, NodeJS</td>
                    </tr>
                    <tr>
                        <td class="u-strong">Tools:</td>
                        <td>Webpack, Gulp, Babel</td>
                    </tr>
                    <tr>
                        <td class="u-strong">Databases:</td>
                        <td>MongoDB, Firebase, mySQL</td>
                    </tr>
                    <tr>
                        <td class="u-strong">CMS:</td>
                        <td>WordPress</td>
                    </tr>
                    <tr>
                        <td class="u-strong">OS:</td>
                        <td>MacOS, Windows, Linux</td>
                    </tr>
                    <tr>
                        <td class="u-strong">Workstation: </td>
                        <td>2018 MacBook Pro 13" i7 16GB 1TB</td>
                    </tr>
                    <tr>
                        <td class="u-strong">Display: </td>
                        <td>LG 34-Inch 21:9 Curved UltraWide Monitor</td>
                    </tr>
                    <tr>
                        <td class="u-strong">IDE:</td>
                        <td>VSCode</td>
                    </tr>
                    <tr>
                        <td class="u-strong"> Other_miscell:</td>
                        <td>Product Photography, Adobe Creative Cloud</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Postman, phpMyAdmin</td>
                    </tr>
                    <tr>
                        <td class="u-strong">Hobbies:</td>
                        <td> Glass Art, Fitness, Trail Running, Mtn Biking</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Skiing, Surfing, Travel</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.me {
    display: flex;
    flex-direction: column;
    flex: 2;
    min-height: 80vh;
   
    &__code-block {
        text-align: left;
        margin-left: 8%;
    }
    
    &__image {
        text-align: center;
            & img {
            width: 12%;
            border-radius: 50%;
            margin: 5% 0;;
            border: 6px solid var(--color-darkblue);
        }
    }

    & table {
        margin: auto;
        margin-bottom: 3rem;
    }
    & td {
        padding: .3rem;
    }
    & tbody {
        font-size: 1.4rem;
    }
  
}

</style>