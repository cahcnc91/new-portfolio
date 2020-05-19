<template>
  <section class="section-projects" id="projects">
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
          tools: ["Nodejs / Express", "MySQL / GraphQL", "React / Redux", "GCP"],
          class: "card__picture card__picture--1",
          link: "/thinkempire"
        },
        {
          title: "RESOVERE",
          tools: ["Wordpress", "VUE", "SCSS", "Webpack"],
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
