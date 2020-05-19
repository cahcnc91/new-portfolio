<template><MyStuff :project="project"></MyStuff></template>

<script>
import MyStuff from './components/MyStuff.vue';

export default {
    components: {
        MyStuff
    },
    data(){
        return {
            project: {
                title: "Autocomplete",
                subtitle: "Component",
                body: "Autocomplete component using React, using monorepo to publish multiple packages, available for use as a",
                technologies: "React, React Hooks, Css-in-js, npm, Webpack, Lerna and Storybook.",
                link: "https://www.npmjs.com/package/cahcnc91-autocomplete",
                iframe: "https://codesandbox.io/embed/using-autocomplete-package-25tqk?autoresize=1&fontsize=14&hidenavigation=1&theme=dark",
                arrowLeft: "/d3",
                arrowRight: "/clickscroll"
            }
        }
    }
}
</script>
