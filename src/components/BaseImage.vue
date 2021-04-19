<template>
    <div>
        <img :src="bgImage" alt="project image" class="project-image" :style="{ height }">
    </div>
</template>

<script>
export default {
    props: {
        bgImage: {
            type: String,
            required: true
        },
        height: String
    },
}
</script>

<style lang="scss" scoped>
    .project-image {
        width: 100%;
        height: 20rem;
        box-shadow: 0 10px 15px rgba(0, 0, 0, .3);
        border-radius: 10px;
        overflow: hidden;
        object-fit: cover;
    }
</style>
