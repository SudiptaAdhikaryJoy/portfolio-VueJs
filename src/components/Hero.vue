<template>
    <v-container class="p-15">
        <v-row>
            <v-col lg="6">
                <h2 class="intro-text">Welcome To My Portfolio</h2>
                <div>
                    <h4 class="d-flex align-center description pr-3"> I'm
                        <typewriter ref="typewriter" class="typewriter" :replace="replace" :type-interval="100"
                            :replace-interval="500">
                            <Span>Sudipta Adhikary Joy</Span>
                        </typewriter>
                    </h4>
                    <p>I'm a Full time Software Engineer</p>
                </div>
                <v-btn color="success" class="white--text">Hire Me</v-btn>
            </v-col>
            <v-col lg="6">
                <img src="" alt="">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Typewriter from "typewriter-vue";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Hero',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Typewriter,
    },
    data: () => ({
        replace: [
            
            { from: "My", to: "Joking, it`s Vue!" },
        ],
    }),
}
</script>

<style>
    h2.intro-text{
        font-size: 60px;
        font-weight: 700;
        font-family: "Helvetica Neue", "Helvetica";
        color: #444;
    }
    h4.description{
        font-size: 19px;
        font-family: "Helvetica Neue", "Helvetica";
        margin: 30px 0px;
        color: #444444ba;
    }
</style>