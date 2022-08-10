<template>
    <v-container class="py-15">
        <v-row justify="center">
            <v-col lg="12" class="text-center">
                <v-subheader class="text-h4 justify-center">Contact</v-subheader>
                <p></p>
            </v-col>
            <v-col lg="6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116289.072047589!2d88.53597559053529!3d24.380137954371648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sRajshahi!5e0!3m2!1sen!2sbd!4v1660144932884!5m2!1sen!2sbd"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </v-col>
            <v-col lg="6">
                
                    <v-form ref="form" v-model="valid">
                        <v-text-field v-model="contactInfo.name" :counter="10" :rules="nameRules" label="Name" required>
                        </v-text-field>

                        <v-text-field v-model="contactInfo.email" :rules="emailRules" label="E-mail" required></v-text-field>

                        <v-textarea label="Message" v-model="contactInfo.message">

                        </v-textarea>
                        <v-btn color="success" class="mr-4">
                            Send
                        </v-btn>

                    </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Contact',
    data(){
        return{
            contactInfo:{}
        }
    }
}
</script>

<style>

</style>