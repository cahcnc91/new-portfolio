<template>
  <section class="section-about">
    <p class="about__text" data-cy="about-section-header" id="about-section-top">
      I'm a full-stack developer based in NYC. I love coding, I'm extremely
      social and I'm obsessed with being productive.
    </p>
    <p class="about__text--sm u-margin-top u-margin-bottom">
      I'm experienced with a range of different technologies<br />
      Some of them are:
    </p>
    <div data-cy="about-cards" class="row">
      <AboutCard
        :skills="frontEnd.skills"
        :iconName="frontEnd.icon"
        :title="frontEnd.title"
      ></AboutCard>
      <AboutCard
        :skills="backEnd.skills"
        :iconName="backEnd.icon"
        :title="backEnd.title"
      ></AboutCard>
      <AboutCard
        :skills="other.skills"
        :iconName="other.icon"
        :title="other.title"
      ></AboutCard>
    </div>
  </section>
</template>

<script>
import AboutCard from "./AboutCard.vue";

export default {
  components: {
    AboutCard,
  },
  data() {
    return {
      frontEnd: {
        title: "Front End",
        skills: [
          "HTML, CSS",
          "CSS preprocessors",
          "Webpack",
          "React",
          "Vue",
          "Apollo",
        ],
        icon: "code",
      },
      backEnd: {
        title: "Back End",
        skills: [
          "Nodejs",
          "MySQL, Postgres",
          "MongoDB, Firebase",
          "GraphQL",
          "RESTful APIs",
          "Graph APIs",
        ],
        icon: "database",
      },
      other: {
        title: "Others",
        skills: [
          "Version Control (Git)",
          "TypeScript",
          "Testing Frameworks",
          "Documentation",
          "Agile Methodologies",
          "CMS",
        ],
        icon: "code-branch",
      },
    };
  },
};
</script>
