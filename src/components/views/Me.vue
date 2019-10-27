<template>
    <div class="me">
        <div class="main-content-abs-center">
            <h1 class="header-font">ME</h1>
            <div class="me__box">
                <div class="me__profile-image">
                    <img src="'../img/profile." alt="">
                </div>
                    <pre>
                        <code>me_json: { 
                            education: { University of Oregon : BS CIS },
                            certification: 'ITIL Foundation 4' ,
                            workstation: {
                                machine: '2018 MacBook Pro 13" i7 16GB 1TB',
                                display: 'LG 34-Inch 21:9 Curved UltraWide Monitor',
                                IDE : 'VSCode'
                            },
                            frontend: {
                                languages: [ 'HTML', 'JavaScript', 'CSS', 'PHP', 'Java' ],
                                CSS: [ 'float', 'flexbox', 'grid', 'bootstrap', 'SASS' ],
                                JavaScript: {
                                    description: [ 'ES5', 'ES6', 'VueJS', 'NodeJS', 'jQuery' ],
                                    tools: [ 'webpack', 'gulp', 'babel' ],
                                }
                            },
                            databases: [ 'MongoDB', 'Firebase', 'mySQL' ],
                            CMS : 'WordPress',
                            OS: [ 'MacOS', 'Windows', 'Linux' ],
                            other_miscell: [ 'Product Photography', 'Adobe Creative Cloud', 'Postman', 'phpMyAdmin' ],
                            hobbies: [ 'glass art', 'fitness', 'trail running', 'mtn biking', 'skiing', 'surfing', 'travel' ]
                        };
                        </code>
                    </pre>
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

.me {

    &__box {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        min-height: 70vh;
    }

    &__education {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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