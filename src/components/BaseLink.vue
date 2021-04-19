<template>
    <div class="base-btn">
        <a 
            v-if="projectUrl"
            class="project-url"
            :href="projectUrl"
            target="_blank"
        >
            {{text}}
        </a>

        <router-link 
            v-else
            class="project-route"
            :to="projectRoute"
        >
            {{text}}
        </router-link>

    </div>
</template>
<script>
export default {
    name: "BaseLink",
    props: {
        outlined: {
            type: Boolean,
            default: false
        },
        projectUrl: String,
        projectRoute: String,
        text: String
    }, 
}
</script>

<style lang="scss" scoped>
    .base-btn {
        a {
            border-radius: 100px;
            padding: .4rem .8rem;
            cursor: pointer;
            text-decoration: none;
            font-size: .8rem;
            text-transform: uppercase;
        }

        .project-url {
            border: 1px solid #4250DB;
            transition: all .4s;

            &:hover {
                background-color: #4250DB;
                color: #FFF;
                box-shadow: 0 10px 15px rgba(0, 0, 0, .3)
            }

            a {
                color: #646ed8;
            }
        }

        .project-route {
            background-color: #4250DB;
            color: #FFF;
            margin-right: 1rem;

            &:hover {
                background-color: #FFF;
                color: #646ed8;
                box-shadow: 0 0 2pt 2pt #4250DB;
            }

            a {
                color: #FFF;
            }
        }
    }
</style>