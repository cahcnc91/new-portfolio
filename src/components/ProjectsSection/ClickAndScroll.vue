<template><MyStuff :project="project"></MyStuff></template>

<script>
import MyStuff from './MyStuff.vue';

export default {
    components: {
        MyStuff
    },
    data(){
        return {
            project: {
                title: "Click & Scroll",
                subtitle: "Component",
                body: "Component using React, where active section follows scrolling, also click on section and scroll to it. Also using monorepo to publish multiple packages, available for use as a",
                technologies: "React, React Hooks, Css-in-js, npm, Webpack, Lerna and Storybook.",
                link: "https://www.npmjs.com/package/cahcnc91-click-scroll",
                iframe: "https://codesandbox.io/embed/using-click-and-scroll-package-ux2d3?fontsize=14&hidenavigation=1&theme=dark",
                arrowLeft: "/autocomplete",
                arrowRight: "/portfolio"
            }
        }
    }
}
</script>
