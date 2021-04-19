<template>
    <div style="padding: 2rem 3rem">
        <base-title title="My Projects"></base-title>
        <div class="project-list">
            <project-list-item 
                v-for="(project, index) in projectList"
                :key="index"
                :project-name="project.projectName"
                :project-image="project.projectImage"
                :project-description="project.projectDescription"
                :project-route="project.projectRoute"
                :project-url="project.projectUrl"
            >
            </project-list-item>
        </div>
    </div>
</template>

<script>
import ProjectListItem from "./ProjectListItem";
import { projectList } from "../projectList";
import BaseTitle from './BaseTitle';

export default {
    components: {
        ProjectListItem,
        BaseTitle
    },
    data() {
        return {
            projectList
        }
    },
    mounted() {
        console.log(this.projectList)
    }
}
</script>

<style lang="scss" scoped>
    .project-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-content: center;
        justify-content: space-between;
        column-gap: 2rem;
        row-gap: 4rem;
        padding: 2rem 3rem;

        @media all and (max-width: 64em) {
            grid-template-columns: repeat(2, 1fr); 
            padding: 2rem;
        }

        @media all and (max-width: 48em) {
            grid-template-columns: 1fr; 
        }
    }
</style>