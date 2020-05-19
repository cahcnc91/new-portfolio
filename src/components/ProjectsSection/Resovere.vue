<template><ProjectBody :project="project"></ProjectBody></template>

<script>
import ProjectBody from "./components/ProjectBody.vue";

export default {
  components: {
    ProjectBody,
  },
  data() {
    return {
      project: {
        title: "Front-End Contractor",
        subtitle: "Resovere",
        body:
          "Contractor for a Creative Digital Marketing Agency, where I developed fully responsive websites from concept through deployment, created custom WordPress, templates, ACFs, animations, plugins and setup CMS for clients.",
        technologies:
          "HTML, CSS, CSS preprocessors, Vue, Javasvript, PHP, Tailwind, Webpack, CMS(Wordpress), Pantheon and Git.",
        img: "../../images/resovere.webp",
        arrowLeft: "./thinkempire",
        arrowRight: "./d3",
        multipleLinks: true,
        link1: "https://knowyourrivals.com/",
        link2: "https://fieldedge.com/",
        link3: "https://www.jwbpinellas.org/"
      },
    };
  },
};
</script>
