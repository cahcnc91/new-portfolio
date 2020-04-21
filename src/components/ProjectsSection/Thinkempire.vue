<template>
    <ProjectBody :project="project"></ProjectBody>
</template>

<script>
import ProjectBody from "./ProjectBody.vue";

export default {
  components: {
    ProjectBody,
  },
  data() {
    return {
      project: {
        title: "Full-stack Developer",
        subtitle: "Think Empire",
        body:
          "  This is my full-time job. It is a data-driven app, where I have planned the architecture, implementation and refactor of several different features, created unit / integration / end-to-end tests, created User Interfaces and implemented designs provides, designed REST and Graph API's, and others. I have been involved in the implementation of features from concept to deployment to production, optimization of bundle size and TTI and code review of other teammates.",
        technologies:
          "TypeScript, React, Redux, Redux-Saga, Apollo, Nodejs, Express, MySQL, GraphQL, Jest, Cypress, Storybook, and Git.",
        img: "../../images/thinkempire.png",
        arrowRight: "./resovere"
      },
    };
  },
};
</script>
