<template>
    <div class="project">
        <base-image 
            :bg-image="project[0].images[0]" 
            height="30rem"
        >
        </base-image>
        <base-title :title="project[0].projectName"></base-title>
        <base-text>
            {{project[0].projectDescription}}
        </base-text>
       <div>
            <base-title title="Stack"></base-title>
            <base-text>
                {{project[0].projectStack}}
            </base-text>
       </div>

       <div class="grid-container">
           <div>
                <base-title title="Purpose"></base-title>
               <base-text>
                    {{project[0].projectPurpose}}
               </base-text>
           </div>
           <div>
               <base-image :bg-image="project[0].images[1]"></base-image>
           </div>
       </div>

       <div class="challenges">
            <base-title title="Challenges and thought process"></base-title>
            <base-text>
                {{project[0].challenges}}
            </base-text>
        </div>

       <div class="grid-container">
           <div>
               <base-image :bg-image="project[0].images[2]"></base-image>
           </div>
           <div>
                <base-title title="Lessons learned"></base-title>
               <base-text>
                    {{project[0].lessonsLearned}}
               </base-text>
           </div>
       </div>

        <base-link 
            outlined
            text="view project"
            :project-url="project[0].projectUrl"
            >
        </base-link>
    </div>
</template>

<script>
import { projectListDetails } from "../projectListDetails";
import BaseImage from './BaseImage.vue';
import BaseTitle from "./BaseTitle";
import BaseText from "./BaseText"
import BaseLink from "./BaseLink";

export default {
    components: { 
        BaseImage,
        BaseTitle,
        BaseText,
        BaseLink
    },
    data() {
        return {
            projectListDetails
        }
    },
    computed: {
        project() {
            return this.projectListDetails.filter(el => {
                return el.id == this.$route.params.id
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .project {
        max-width: 980px;
        width: 90%;
        margin: 2rem auto;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 4rem;
        row-gap: 4rem;
        margin: 2rem 0;

        @media all and (max-width: 48em ) {
            grid-template-columns: 1fr;
        }
    }

    .challenges {
        margin-top: 2rem;
    }
</style>