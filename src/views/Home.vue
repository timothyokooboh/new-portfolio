<template>
  <div>
  
    <header>
      <div class="header">
        <div class="hamburger">
          <input type="checkbox" id="check">
          <label for="check" class="hamburger__menu" > </label>
          <ul class="hamburger__menu--nav-items">
            <li>  <a href="#home" > home </a> </li>
            <li>  <a href="#about"> about me </a> </li>
            <li>  <a href="#services"> services </a> </li>
            <li>  <a href="#skills"> skills </a> </li>
            <li>  <a href="#portfolio"> portfolio </a> </li>
            <li>  <a href="#contact"> contact </a> </li>
          </ul>
        </div>
        <nav>
          <div class="header__nav">
            <div id="home">timothy okooboh</div>
            <div class="header__nav--list">
              <div> <a href="#home" > home </a> </div>
              <div> <a href="#about"> about me </a>  </div>
              <div> <a href="#services"> services </a> </div>
              <div> <a href="#skills"> skills </a>  </div>
              <div> <a href="#portfolio"> portfolio </a> </div>
              <div> <a href="#contact"> contact </a>  </div>
            </div>
          </div>
        </nav>
        <div class="header__info">

          <div>
            <div class="header__info--intro">
              <div>
                Hello, I'm
              </div>
              <h1>timothy okooboh</h1>
              <div class="header__info--role">
                software developer
              </div>
              <div class="header__info--action">
                <span> <a href="#contact"> contact me </a>  </span>
              </div>
            </div>
          </div>

          <div>
            <img src="timothy.png">
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,32L26.7,58.7C53.3,85,107,139,160,154.7C213.3,171,267,149,320,128C373.3,107,427,85,480,74.7C533.3,64,587,64,640,85.3C693.3,107,747,149,800,149.3C853.3,149,907,107,960,117.3C1013.3,128,1067,192,1120,192C1173.3,192,1227,128,1280,122.7C1333.3,117,1387,171,1413,197.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
    </header>

    <section class="about" id="about">
        <div class="about__details">
          <div>
            <img src="timothy.png">
          </div>
          <div class="about__details--info">
            <h2> I am Timothy Okooboh </h2>
            <div class="about__details--stack"> A Fullstack Software Developer with a keen interest in web app optimization and Vue.js development. </div>
            <div class="about__details--subtext"> I specialize on the research and development of reusable and performant UI components while adhering to best practices. </div>
            <div class="about__details--subtext"> The sole aim of the softwares I create is to provide solutions to everyday problems. </div>
            <div class="about__details--subtext"> PS: I'm also a Pharmacist. </div>
            <div class="about__details--action"> 
              <div> <a href="resume_tim.pdf" download > Download CV </a> </div> 
              <div> <a href="#contact"> Hire Me </a> </div>
            </div>
          </div>
        </div>
    </section>

    <section class="services" id="services" >
      <div class="services__details">
        <div class="services__details--info">
          <h2> my awesome <span style="color: #2806D2;" > services </span> </h2>
          <div class="services__details--subinfo">
            I work either on the frontend or backend to create single page applications (SPAs), progressive web apps (PWAs), and universal applications.
          </div>
        </div>
        <div class="services__cards">
          <div class="services__cards--spa"> 
            <div class="services__cards--content">    
              <div> <img src="/spa.png"> </div>
              <h2> SPAs </h2>
              <div class="services__cards--info" > I create single page apps that are performant and scalable </div>
            </div>
          </div>
          <div class="services__cards--pwa"> 
            <div class="services__cards--content" >
              <div> <img src="/pwa.png"> </div>
              <h2> PWAs </h2>
              <div class="services__cards--info" > I create progressive web apps that are performant and scalable </div>
            </div>
          </div>
          <div class="services__cards--univ">
            <div class="services__cards--content">
              <div> <img src="/univ.png"> </div>
              <h2> universal Apps </h2>
              <div class="services__cards--info"  > I create universal web apps with Nuxt.js </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <section class="skills" id="skills" >
      <h2 class="skills__heading"> my <span style="color: #2806D2;" > skills </span> </h2>
      <div class="skills__category">
        <div>
          <h4 class="skills__category--header">frontend</h4>
          <div>
            <div class="skills__item"> Vue.js </div>
            <div class="skills__item"> Nuxt.js </div>
            <div class="skills__item"> Javascript </div>
            <div class="skills__item"> Typescript </div>
            <div class="skills__item"> SCSS </div>
            <div class="skills__item"> CSS </div>
            <div class="skills__item"> HTML5 </div>
          </div>
        </div>
        <div>
          <h4 class="skills__category--header"> backend</h4>
            <div>
              <div class="skill__item"> Node/Express.js </div>
            </div>
        </div>
        <div>
          <h4 class="skills__category--header"> databases</h4>
          <div>
            <div class="skill__item"> MongoDB </div>
          </div>
        </div>
        <div>
          <h4 class="skills__category--header"> version control </h4>
          <div>
            <div class="skill__item"> Git/Github </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio" id="portfolio" >
      <h2 class="portfolio__heading"> My latest <span style="color: #2806D2;" > projects </span> </h2>

      <div class="portfolio__cards">
        <div class="portfolio__content" >
          <div class="portfolio__content--details">
            <img src="food.png">
            <h3> 950 meals</h3>
            <div>
              950meals is a food delivery service. Users pre-order breakfast and lunch meals which are then prepared by chefs and delivered by a logistics company.
            </div>
            <div class="portfolio__actions">
              <div>
                <a href="https://950meals.com" target="_blank" > 
                  <img src="web.png">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio__content" >
          <div class="portfolio__content--details" >
            <img src="ecommerce.png">
            <h3> BuyHub </h3>
            <div>
              BuyHub is an ecommerce web application built with Vue.js and Node.js
            </div>
            <div class="portfolio__actions">
              <div>
                <a href="https://buyhub.herokuapp.com" target="_blank" > 
                  <img src="web.png">
                </a>
              </div>
              <div>
                <a href="https://github.com/timothyokooboh/E-commerce" target="_blank" > 
                  <img src="github.png" style="height:20px">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio__content" >
          <div class="portfolio__content--details">
            <img src="virus.png">
            <h3> Covid19 Dashboard</h3>
            <div>
              Covid19 dashboard contains statistics of the coronavirus pandemic in various countries.
            </div>
            <div class="portfolio__actions">
              <div>
                <a href="https://timothyokooboh.github.io" target="_blank" > 
                  <img src="web.png">
                </a>
              </div>
              <div>
                <a href="https://github.com/timothyokooboh/covid19-dev" target="_blank" > 
                  <img src="github.png" style="height:20px">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio__content" >
          <div class="portfolio__content--details">
            <img src="book.png">
            <h3> Dictionary </h3>
            <div>
              Dictonary is a progressive web app that utilizes the owlbot-js NPM package to display the meaning of English words.
            </div>
            <div class="portfolio__actions">
              <div>
                <a href="https://timothyokooboh.github.io/dictionary" target="_blank" > 
                  <img src="web.png">
                </a>
              </div>
              <div>
                <a href="https://github.com/timothyokooboh/dictionary-dev-2" target="_blank" > 
                  <img src="github.png" style="height:20px">
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer>
      <div class="contact" id="contact" >
        <h2> contact me </h2>
        <div class="contact__description" > Get in touch with me and let's build the next big thing that will change the world for good! </div>

        <div class="contact__avenues">
          <div>
            <a href="tel:+2348176581327" target="_blank" > 
              <img src="phone.png" class="icon" >
            </a>
          </div>
          <div>
            <a href="mailto: okoobohtimothy@gmail.com" target="_blank"> 
              <img src="email.png" class="icon" >
            </a>
          </div>
        </div>

        <div class="contact__avenues">
          <div>
            <a href="https://www.linkedin.com/in/timothy-okooboh-193980165/" target="_blank" > 
              <img src="linkedin.png" class="icon" >
            </a>
          </div>
          <div>
            <a href="https://twitter.com/inspiretim24" target="_blank"> 
              <img src="twitter.png" style="width:24px" class="icon" >
            </a>
          </div>
        </div>

        <div class="copyright">
          &copy; 2020. Timothy Okooboh. All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>


<style lang="scss">

  // variables
  $color-white-light: #f7f7f7;
  $color-white: #FFFFFF;
  $color-grey: #777;
  $color-black: #000;
  $color-primary: #2806D2;

  @mixin boxShadow {
    box-shadow: 0 1rem 1.5rem rgba($color-black, .15);
  }

  .header {
    background-image: linear-gradient(to right bottom, #5686E8, #3327D1);
    width: 100%;

    & svg {
      display: block;
    }

    &__nav {
      display: flex;
      justify-content: space-between;
      padding: 2rem 3rem;
      text-transform: capitalize;
      color: $color-white-light;

      &--list {
        display: flex;

        a {
          color: $color-white-light;
          text-decoration: none;
          letter-spacing: 1.09px;
          outline-offset: 5px;
          transition: all .1s;

          &:hover {
            outline: 5px solid $color-white;
          }
        }

        & > div {
          padding: 0 1rem;
        }
      }
    }

    &__info {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: $color-white-light;
      letter-spacing: 1.08px;

      &--intro {
        animation: slideIn 1s ease-out forwards;
      }

      & img {
        margin-top: -30px;
        height: 250px;
        border-radius: 50%;
        background: #fff;
        animation: moveIn 2s ease-out 1s forwards;
        animation-fill-mode: backwards;
      }

      h1 {
        text-transform: capitalize;
      }

      & > div {
        padding: 5rem 3rem;
      }

      &--role {
        text-transform: capitalize;
      }

      &--action {
        background: $color-white;
        display: inline-block;
        padding: .5rem 1rem;
        margin-top: 1rem;
        color: $color-black;
        text-transform: capitalize;
        font-size: .8rem;
        border-radius: 5px;
        position: relative;
        cursor: pointer;

        a {
          text-decoration: none;
          color: $color-grey;
        }

        &::after {
          content: "contact me";
          position: absolute;
          top: 0;
          left: 0;
          padding: .5rem 0 0;
          text-align: center;
          display: inline-block;
          width: 100%;
          height: 76%;
          z-index: -1;
          background: $color-white;
          color: $color-grey;
          border-radius: 5px;
          transition: all .5s;
        }

        &:hover::after {
          transform: scale(1.5);
          opacity: 0;
          //z-index: -1;
        }
      }

    }
  }

  .about {
    margin-top: 1rem;

    &__details {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      h2 {
        color: $color-primary;

      }

      & > div {
        padding: 0 3rem;
      }

      img {
        height: 20rem;
        background: #D7D3D1;
        border-radius: 5px;
      }

      &--info {
        max-width: 30rem;
      }

      &--stack {
        font-weight: 700;
        line-height: 30px;
        padding-bottom: 1rem;
        letter-spacing: 1.08px;
      }

      &--subtext {
        color: $color-grey;
        letter-spacing: 1.08px;
        line-height: 25px;
      }

      &--action {
       display: flex;
       flex-wrap: wrap;

       a {
         color: $color-white;
         text-decoration: none;
       }

       & > div {
         margin-top: 1rem;
         background-image: linear-gradient(to right bottom, #3327D1, #5686E8);
         color: $color-white;
         padding: .5rem 1rem;
         border-radius: 5px;
       }

       & > div:last-child {
        margin-left: 1rem;
       }
      }
    }
  }

  .services {
    margin: 3rem 0;
    padding: 0 5rem;
    position: relative;

    &__details {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        margin-right: 2rem;
      }

      h2 {
        text-transform: capitalize;
      }

      &--info {
        max-width: 30rem;
      }
      &--subinfo {
        color: $color-grey;
        line-height: 25px;
      }
    }

    &__cards {
      position: relative;

      & > div {
        width: 15rem;
        height: 15rem;
        background: $color-white;
        @include boxShadow;
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem 0;
        border-radius: 4px;
        outline-offset: 10px;

        transition: all .2s;
      }

      & > div:hover {
        z-index: 1000;
        outline: 10px $color-primary solid;
      }

      &--spa {
        transform: translateX(-100px)
      }
      &--pwa {
        transform: translate(-200px, 100px);
      }
      &--univ {
        transform: translate(10px, 140px)
      }

      &--content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }

      &--info {
        color: $color-grey;
        font-size: .8rem;
        line-height: 25px;
      }

    }
  }

  .skills {
    margin-top: 25rem;

    &__heading {
      text-align: center;
      text-transform: capitalize;
      padding-bottom: 2rem;
    }

    &__item {
      padding-bottom: .5rem;
      letter-spacing: 1.08px;
    }

    &__category {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      &--header {
        text-transform: capitalize;
        letter-spacing: 1.08px;
        border-bottom: 5px solid $color-primary;
        display: inline-block;
        margin-bottom: 1rem;
      }

      & > div {
        padding: 0 2rem;
      }
    }

    ul li {
      padding: .5rem 0;
    }
  }

  .portfolio {
    margin: 3rem 0;
    background: lighten(#D7D3D1, 10%);
    padding: 2rem 0;
    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);

    &__heading {
      text-align: center;
      text-transform: capitalize;
      padding: 1rem 0 2rem;
    }

    &__cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      position: relative;
      color: #333;

      & > div {
        width: 20rem;
        min-height: 20rem;
        @include boxShadow;
        background: $color-white;
        border-radius: 4px;
        margin: 2rem;
        transition: all .2s;

        &:hover {
          transform: translateY(-10px);
        }
      }
    }

    &__content {
      position: relative;
      padding: 5rem 0;
      text-align: center;
      line-height: 25px;

     &--details {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
     }

    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 2rem 0 0;
    }

  }

  .contact {
    background-image: linear-gradient(to right bottom, #5686E8, #3327D1);
    padding: 2rem 0;
    color: $color-white-light;

    h2, h4 {
      text-align: center;
      text-transform: capitalize;
    }

    &__avenues {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      & > div {
        padding: 1rem 2rem;
      }
    }

    &__description {
      text-align: center;
      padding: 0 2rem 2rem;
    }
  }

  .copyright {
    text-align: center;
    color: $color-white-light;
    font-size: .8rem;
    padding-top: 2rem;
  }

  .icon {
    background: $color-white;
    padding: .5rem 1rem;
    border-radius: 50%;
    border: 4px solid #5482E7;
  }

  .hamburger {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1000;
    background-color: $color-white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    @include boxShadow;
    display: none;

    input[type="checkbox"] {
      display: none
    }

    input[type="checkbox"]:checked + &__menu::before {
      transform: rotate(45deg);
    }

    input[type="checkbox"]:checked + &__menu::after {
      transform: rotate(-45deg);
    }

    input[type="checkbox"]:checked ~ &__menu {
      background-color: transparent;
    }

    input[type="checkbox"]:checked ~ .hamburger__menu--nav-items {
      animation: moveIn .5s ease-out forwards;
    }


    &__menu {
      width: 30px;
      height: 3px;
      background-color: $color-grey;
      display: inline;
      position: relative;
      cursor: pointer;
      transition: all .4s;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $color-grey;
        transform: translateY(-6px);
        cursor: pointer;
        transition: all .4s;
      }

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $color-grey;
        transform: translateY(6px);
        cursor: pointer;
        transition: all .4s;
      }

    }

     
      ul {
        list-style: none;
        background: $color-white;
        outline: 5px solid $color-primary;
        outline-offset: 5px;
        padding: 2rem 3rem;
        position: fixed;
        top: 100px;
        right: 20px;
        opacity: 0;
        border-radius: 4px;
        z-index: 100;
        @include boxShadow;
        transition: all 20s;

        li {
          padding: .5rem;
          color: $color-grey;
          text-transform: capitalize;
          letter-spacing: 1.08px;

          &:hover {
              transform: rotate(5deg) scale(1.2);
            }

          a {
            text-decoration: none;
            color: $color-grey;
            transition: all .1s;

            &:hover {
              color: $color-primary !important;
            }
          }
        }
        
      }
  }

  @keyframes moveIn {
    from {
      transform: translateX(-100px) scale(.3);
      opacity: 0;
    }
    to {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }

  @media all and (max-width: 1154px) {
    .services__details {
      display: grid;
      grid-template-columns: auto;
      justify-content: center;
      row-gap: 3rem;
    }

    .services__cards {
      position: relative;
      //display: block;
      width: 70%;
      margin: auto;
      text-align: center;

      & > div {
        width: 100%;
        margin: auto;
        overflow: scroll;
        left: 80px;
      }
      
    }

    .skills {
      margin-top: 32rem;
    }
  }

  @media all and (max-width: 828px) {
   .hamburger {
     display: flex;
   }

   .header__nav--list {
    display: none;
   }
  }

  @media all and (max-width: 768px) {
   .portfolio {
    clip-path: polygon(0 0, 100% 2%, 100% 100%, 0 100%);
   }

  }


  @media all and (max-width: 728px) {
    .header__info {
      img {
        margin-top: -80px;
        height: 250px;
      }
    }
  }

  @media all and (max-width: 500px) {
   .hamburger {
    right: 50px;

    ul {
      right: 100px;
    }

   }

  }

  @media all and (max-width: 434px) {
   .services__cards {

    width: 100%;

    &--spa {
      transform: translateX(-70px)
    }
    &--pwa {
      transform: translate(-140px, 100px);
    }
    &--univ {
      transform: translate(-10px, 120px)
    }
   }

  }

  @media all and (max-width: 370px) {
   .services__cards {
    width: 100%;

    &--spa {
      transform: translateX(-70px)
    }
    &--pwa {
      transform: translate(-140px, 100px);
    }
    &--univ {
      transform: translate(0, 120px)
    }
   }

  }

  @media all and (max-width: 360px) {
   .services__cards {
    width: 100%;

    &--spa {
      transform: translateX(-70px)
    }
    &--pwa {
      transform: translate(-140px, 100px);
    }
    &--univ {
      transform: translate(-20px, 120px)
    }
   }

  }


@keyframes slideIn {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>