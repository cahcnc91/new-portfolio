<template>
  <section class="section-about">
    <div class="row u-center-text ">
      <h2 class="heading-secondary" id="about">About</h2>
      <div class="about u-margin-bottom-small">
        <figure class="figure-shape">
          <img
            src="../../images/camilaluna.png"
            alt="camila coder web developer"
            class="figure-shape__image"
          />
          <figcaption class="figure-shape__caption">
            Luna says hello!
          </figcaption>
        </figure>

        <p class="paragraph u-margin-top-s">
          I'm a full-stack developer based in NYC, currently working for a real
          estate data startup. I love coding, I'm extremely social and I'm
          obsessed with being productive
          <br />(I just feel great when I'm able to solve THAT problem before
          the day is over).
        </p>
      </div>
    </div>
    <div class="row">
      <AboutCard :skills="frontEnd.skills" :iconName="frontEnd.icon" :title="frontEnd.title"></AboutCard>
      <AboutCard :skills="backend.skills" :iconName="backEnd.icon" :title="backEnd.title"></AboutCard>
      <AboutCard :skills="other.skills" :iconName="other.icon" :title="other.title"></AboutCard>
    </div>
  </section>
</template>

<script>
import AboutCard from './AboutCard.vue'

export default {
  components: {
    AboutCard
  },
  data () {
    return {
      frontEnd: {
        title: "Front End",
        skills: ["HTML, CSS", "CSS preprocessors", 'Webpack', "React", "Vue", "Apollo"],
        icon: "code",
      },
      backEnd: {
        title: "Back End",
        skills: ['Nodejs', 'MySQL, Postgres', 'MongoDB, Firebase', 'GraphQL', 'RESTful APIs', 'Graph APIs'],
        icon: "database"
      },
      others: {
        title: "Others",
        skills: ["Version Control (Git)", "TypeScript", "Testing Frameworks", "Documentation", "Agile Methodologies"],
        icon: 'code-branch'
      }
    }
  }
}
</script>

