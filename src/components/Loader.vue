<template>
    <div>
        <section class="liquid-fill">
            <div class="box">
                <div class="liquid-box"></div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">

    .box {
        display: flex;
        justify-content: center;
        height: 100vh;
        align-items: center;
        align-content: center;
    }

    .liquid-box {
        height: 100px;
        width: 100px;
        background-color: #000;
        border: 5px solid #000;
        overflow: hidden;
        position: relative;
    }

    .liquid-box::before {
        content: url("/signature.png");
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 100%;
    }

    .liquid-box::after {
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        background: #fff;
        left: -50%;
        top: -50%;
        border-radius: 45%;
        animation: fill 3s ease-in-out infinite;
    }

    @keyframes fill {
        0% {
            transform: translateY(0) rotate(0);
        }
        100% {
            transform: translateY(-100%) rotate(500deg);
        }
    }

</style>