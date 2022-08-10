<template>
    <v-container class="my-15">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h4 justify-center">Skills</v-subheader>
                <p></p>
            </v-col>
            <v-col lg="8">
                <div class="text-center d-flex">
                    <v-progress-circular :value="80" :size="120" :width="15" color="#26C6DA"></v-progress-circular>
                    <p class="py-16">HTML5</p>
                    <v-progress-circular :value="80" :size="120" :width="15" color="#AFB42B"></v-progress-circular>
                    <p class="py-16">CSS3</p>
                    <v-progress-circular :value="80" :size="120" :width="15" color="blue-grey"></v-progress-circular>
                    <p class="py-16">MySQL</p>
                    <v-progress-circular :value="80" :size="120" :width="15" color="deep-orange lighten-2">
                    </v-progress-circular>
                    <h3 class="py-16">Javascript</h3>
                    <v-progress-circular :value="60" :size="120" :width="15" color="brown"></v-progress-circular>
                    <p class="py-16">ReactJs</p>
                    <v-progress-circular :value="80" :size="120" :width="15" color="teal"></v-progress-circular>
                    <p class="py-16">NodeJs</p>
                    <v-progress-circular :value="70" :size="120" :width="15" color="indigo darken-2">
                    </v-progress-circular>
                    <p class="py-16">MongoDB</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Skills'
}
</script>

<style scoped>
.v-progress-circular {
    margin: 1rem;
}
</style>