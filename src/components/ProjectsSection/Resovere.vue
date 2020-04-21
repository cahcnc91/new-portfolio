<template><ProjectBody :project="project"></ProjectBody></template>

<script>
import ProjectBody from "./ProjectBody.vue";

export default {
  components: {
    ProjectBody,
  },
  data() {
    return {
      project: {
        title: "Front-end Contractor",
        subtitle: "Resovere",
        body:
          "Contractor for a Creative Digital Marketing Agency, where I developed fully responsive websites, created custom WordPress, templates, ACFs, animations, plugins and setup CMS for clients.",
        technologies:
          "HTML, CSS, CSS preprocessors, Vue, Javasvript, PHP, Tailwind, Webpack, CMS(Wordpress), Pantheon and Git",
        img: "../../images/resovere.png",
        arrowLeft: "./thinkempire",
        arrowRight: "./autocomplete",
      },
    };
  },
};
</script>
