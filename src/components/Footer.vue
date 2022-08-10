<template>
    <v-footer padless>
        <v-col lg="12" md="12">
            <v-row justify="center">
                <v-col lg="4" md="4" class="text-center">
                    <v-toolbar-title>Portfolio</v-toolbar-title>
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-subheader></v-subheader>
                    <v-form class="mt-4">
                        <v-text-field label="Email" outlined dense />
                        <v-btn rounded color="primary">Subscribe Me</v-btn>
                    </v-form>
                </v-col>
            </v-row>
                <div class="mt-10">
                    <v-divider></v-divider>
                    <v-subheader>Copyright &copy; {{ new Date().getFullYear() }} All Rights Reserved
                    <v-spacer></v-spacer>
                    <strong>Portfolio of Sudipta Adhikary Joy</strong>
                    </v-subheader>
                </div>
        </v-col>
    </v-footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Footer',
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style>

</style>