<template>
    <table class="grey darken-3">
        <tr>
            <td colspan="3">
                <v-text-field label="email" v-model="email" placeholder="test@test.com"></v-text-field>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <v-text-field label="password" v-model="password"></v-text-field>
            </td>
        </tr>
        <v-btn @click="cancel">cancel</v-btn>
        <v-btn class="blue" @click="submit">login</v-btn>

    </table>
</template>

<script>
import {mapActions} from "vuex";
const memberModule = 'memberModule'
export default {
    name: "LoginComponent",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        cancel() {
            this.$emit('cancel')
        },
        async submit() {
            const {email, password} = this

            await this.requestMemberLogin({email, password})
        },
        ...mapActions(memberModule, ['requestMemberLogin'])
    }
}
</script>

<style scoped>

</style>