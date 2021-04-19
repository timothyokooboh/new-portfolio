<template>  
    <div class="hamburger">
        <input type="checkbox" id="check">
        <label for="check" > 
            <span class="hamburger__menu" ></span>
        </label>
        <ul class="hamburger__menu--nav-items" id="x" >
            <li>  <a href="#home" > home </a> </li>
            <li>  <a href="#about"> about me </a> </li>
            <li>  <a href="#skills"> skills </a> </li>
            <li>  <a href="#projects"> projects </a> </li>
            <li>  <a href="#articles"> articles </a> </li>
            <li>  <a href="#contact"> contact </a> </li>
        </ul>
    </div>
    
</template>

<style lang="scss" scoped>
    $color-white-light: #f7f7f7;
    $color-white: #FFFFFF;
    $color-grey: #777;
    $color-black: #000;
    $color-primary: #2806D2;

 @mixin boxShadow {
    box-shadow: 0 1rem 1.5rem rgba($color-black, .15);
  }

  .hamburger {
        label {
            position: fixed;
            top: 30px;
            right: 30px;
            z-index: 1000;
            background-color: $color-white;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            @include boxShadow;
            display: none;

            @media all and (max-width: 51.7em) {
                display: flex;
                outline: none;
            }
        }

    input[type="checkbox"] {
      display: none
    }

    input[type="checkbox"]:checked + label &__menu::before {
      transform: rotate(45deg);
    }

    input[type="checkbox"]:checked + label &__menu::after {
      transform: rotate(-45deg);
    }

    input[type="checkbox"]:checked + label &__menu {
      background-color: transparent;
    }

    input[type="checkbox"]:checked ~ .hamburger__menu--nav-items {
      animation: moveIn .5s ease-out forwards;
    }


    &__menu {
      width: 30px;
      height: 3px;
      background-color: $color-grey;
      display: inline-block;
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
        transform: translateY(-8px);
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
        transform: translateY(8px);
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

  
</style>