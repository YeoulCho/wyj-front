<template>
    <v-app>
        <navigation-menu-page @tryLogin="tryLogin" @tryLogout="tryLogout"/>
        <v-main>
            <router-view align="center"/>
            <v-overlay :value="loginComp">
                <v-card>
                    <login-component @cancel='cancel'></login-component>
                </v-card>
            </v-overlay>
            <v-overlay :value="logoutComp">
                <v-card>
                    <logout-component @cancel='cancel'></logout-component>
                    
                </v-card>
            </v-overlay>
        </v-main>
        <v-footer padless>
            <v-col class="align-center text-center">
                    <v-btn icon :href='`https://github.com/eddi-study/wyj-front`'>
                        <v-icon size="34px">mdi-github</v-icon>
                    </v-btn>
                <v-card-text class="pt-0 black--text">WYJ</v-card-text>

            </v-col>
        </v-footer>
    </v-app>
</template>

<script>

import NavigationMenuPage from "@/views/rayout/navigation/NavigationMenuPage.vue";
import LoginComponent from "@/components/member/LoginComponent.vue";
import LogoutComponent from "@/components/member/LogoutComponent.vue";
export default {
    name: 'App',
    components: {
        LogoutComponent, 
        LoginComponent, 
        NavigationMenuPage,
       },

    data: () => ({
        //
        loginComp: false,
        logoutComp: false,
    }),
    methods: {
        tryLogin() {
            this.loginComp = true
        },
        cancel() {
            this.loginComp = false
            this.logoutComp = false
        },
        tryLogout() {
            this.logoutComp = true
        }
    }
};
</script>
