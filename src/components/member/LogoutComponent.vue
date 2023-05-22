<template>
    <table class="grey darken-3">
        <v-btn @click="cancel">cancel</v-btn>
        <v-btn class="red" @click="logout">logout</v-btn>

    </table>
</template>

<script>
export default {
    name: "LogoutComponent",
    methods: {
        cancel() {
            this.$emit('cancel')
        },
        logout() {
            localStorage.setItem('userToken', null)

            this.$emit("cancel")
            this.$router.go('/')

        }
    }
}
</script>

<style scoped>

</style>