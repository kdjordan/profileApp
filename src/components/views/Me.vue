<template>
    <div class="me">
        <div class="main-content-abs-center">
            <h1 class="header-font">ME</h1>
            <div class="me__box">
                <div class="me__profile-image">
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
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

table {
    margin: auto;
    margin-bottom: 10%;
}
td {
    padding: .3rem;
}
tbody{
    font-size: 1.2rem;
}

.me {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    
    &__box {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }

    &__profile-image {
        text-align: center;
            & img {
            width: 30%;
            border-radius: 50%;
            margin: 10% 0;
            border: 6px solid var(--color-darkblue);

        }
    }

     &__code-block {
        width: 100%;
        
        // width: 10 0%;  
        margin: 0 auto;
        
        
    }

    pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
}
    

   
}

.small {
    font-size: 1.8rem;
    display: inline-block;
}

h3 {
    padding-bottom: 4px;
    border-bottom: 1px solid black;
}


</style>