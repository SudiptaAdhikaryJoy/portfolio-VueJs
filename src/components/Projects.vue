<template>
    <v-container class="my-15">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h4 justify-center">Projects</v-subheader>
                <p></p>
            </v-col>

            <v-col lg="4" v-for="project in 3" :key="project">
                <v-card class="mx-auto my-12" max-width="374">
                    <v-img height="100%" width="100%" src="../assets/images/Screenshot 2022-08-10 at 23.39.51.png">

                        <v-card-title>{{project.title}}</v-card-title>
                    </v-img>
                    <v-card-text>
                        <div>
                            {{project.des}}
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" rounded>View Details</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  data(){
    return{
        webApps:[
            { title:'Ajker Barta', image:'../assets/images/Screenshot 2022-08-10 at 23.39.51.png', des:'It is an online news paper website. People read news from online.'},
            { title: 'Mercury Car', image: '../assets/images/Screenshot 2022-08-10 at 23.40.36.png', des: 'It is an online car services. People book car service slots from online.' },
        ]
    }
  }
};
</script>

<style>
</style>