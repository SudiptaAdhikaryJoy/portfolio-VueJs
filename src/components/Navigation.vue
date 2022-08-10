<template>
    <v-app-bar style="padding: 0px 90px" app color="black" dark elevation="6" elevate-on-scroll>
        <v-toolbar-title>
            hello
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-list class="d-flex align-center">
            <v-list-item link v-for="(menu, index) in menus" :key="index" :to="route">
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
        </v-list>


    </v-app-bar>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Navigation",
    data() {
        return {
            menus: [
                { title: "Home", route: "home" },
                { title: "About Me", route: "about-me" },
                { title: "Projects", route: "project" },
                { title: "Home", route: "home" },
            ]
        }
    },
}
</script>

<style>

</style>