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
                title: "Line Chart",
                subtitle: "Data Visualization",
                body: "COVID Line Chart made with d3. It is a data visualization of number of deaths and confirmed cases by country",
                technologies: "Vanilla Js, d3.",
                iframe: "https://codesandbox.io/embed/scatterplot-with-menus-rp40c?fontsize=14&hidenavigation=1&theme=dark&view=preview",
                arrowLeft: "/resovere",
                arrowRight: "/autocomplete"
            }
        }
    }
}
</script>
