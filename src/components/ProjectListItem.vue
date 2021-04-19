<template>
    <div class="project-item">
        <base-image :bg-image="projectImage"></base-image>
        <base-title :title="projectName"></base-title>
        <base-text>
            {{projectDescription}}
        </base-text>
        <div class="links" >
            <base-link
                text="learn more"
                :project-route="projectRoute"
            >
            </base-link>
            <base-link 
                outlined
                text="view project"
                :project-url="projectUrl"
            >
            </base-link>
        </div>
    </div>
</template>

<script>
import BaseImage from "./BaseImage";
import BaseTitle from "./BaseTitle";
import BaseText from "./BaseText";
import BaseLink from "./BaseLink";

export default {
    name: "ProjectListItem",
    props: {
        projectImage: {
            type: String,
            required: true
        },
        projectName: {
            type: String,
            required: true
        },
        projectDescription: {
            type: String,
            required: true
        },
        projectRoute: {
            type: String,
            required: true,
        },
        projectUrl: {
            type: String,
            required: true
        }
    },
    components: {
        BaseImage,
        BaseTitle,
        BaseText,
        BaseLink
    },
}
</script>

<style lang="scss" scoped>
    .links {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        & > * {
            margin-bottom: 1.5rem;
        }
    }
</style>