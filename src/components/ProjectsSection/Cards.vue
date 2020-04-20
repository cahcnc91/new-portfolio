<template>
  <section class="section-projects" id="projects">
  <div class="u-center-text u-margin-bottom-small"><h2 class="heading-secondary">WORK</h2></div>

    <div class="row">
      <ProjectsCard v-for="item in projects" :key="projects.title" :item="item"></ProjectsCard>
    </div>
  </section>
</template>

<script>
import ProjectsCard from "./ProjectsCard.vue";

export default {
  components: {
    ProjectsCard,
  },
  data() {
    return {
      projects: [
        {
          title: "THINK EMPIRE",
          tools: ["Nodejs", "MySQL", "React / Redux", "GraphQL", "GCP"],
          class: "card__picture card__picture--1",
          link: "/thinkempire"
        },
        {
          title: "RESOVERE",
          tools: ["Responsive design","Wordpress", "VUE", "SCSS", "Webpack"],
          class: "card__picture card__picture--2",
          link: "/resovere"
        },
        {
          title: 'MY FUN PROJECTS',
          tools: ["React", "Vue", "Webpack", "npm"],
          class: "card__picture card__picture--3",
          link: "/autocomplete"
        }
      ],
    };
  },
};
</script>
