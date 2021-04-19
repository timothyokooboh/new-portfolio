<template>
    <nav>
        <div class="header">
            <div> <router-link to="/" > timothy okooboh </router-link> </div>
            <div 
                v-if="$route.name === 'Home'"
                class="header__nav"
            >
                <div> <a href="#home" > home </a> </div>
                <div> <a href="#about"> about me </a>  </div>
                <div> <a href="#skills"> skills </a>  </div>
                <div> <a href="#projects"> projects </a> </div>
                <div> <a href="#articles"> articles </a> </div>
                <div> <a href="#contact"> contact </a>  </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(to right bottom, #5686E8, #3327D1);
        padding: 1.5rem 2rem;
        color: #FFF;
        text-transform: capitalize;
        
        a {
            color: #FFF;
            text-decoration: none;
            transition: all .4s;

            &:hover {
                box-shadow: 0 10px 15px rgba(0, 0, 0, .3);
                padding: .5rem 1rem;
                border-radius: 5px;
            }
        }

        &__nav {
            display: flex;
            
        @media all and (max-width: 51.75em) {
            display: none;
        }

            & > * {
                margin-right: 1rem;
            }
        }
    }
</style>