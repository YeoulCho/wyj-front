<script>
import {defineComponent} from 'vue'

export default defineComponent({
        name: "NavigationMenuPage",
        data() {
            return {
                memberId: null,
                // isLogin: false,
                loginComp: false,
            }
        },
        mounted() {
            this.memberId = localStorage.getItem("loginUserInfo")
            // this.isLogin = this.memberId !== null;
        },
        methods: {
            tryLogin() {
                this.$emit('tryLogin')
            }
        },
    computed: {
            isLogin() {
                return localStorage.getItem('userToken')===null?false:true
            }
    }
    },
)
</script>

<template>
    <nav>
        <v-app-bar>
            <v-app-bar-nav-icon/>
            <router-link to="/">
            <v-btn>
                <v-img class="mx-2" src="@/assets/logo.png"
                       max-height="40" max-width="40" contain>
                </v-img>
                <v-toolbar-title class="text-uppercase text--darken-4">
                    <span>WYJ-BOARD</span>
                </v-toolbar-title>
            </v-btn>
            </router-link>

            <v-spacer></v-spacer>
            <v-container v-if="!isLogin">
                <router-link to="/member-sign-up">
                    <v-btn >
                        <span>회원가입</span>
                        <v-icon right>mdi-account-plus-outline</v-icon>
                    </v-btn>
                </router-link>
                <v-btn @click="tryLogin">
                    <span>로그인</span>
                    <v-icon right>mdi-account-check-outline</v-icon>
                </v-btn>
            </v-container>
        </v-app-bar>
    </nav>
</template>

<style scoped>

</style>