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
        <v-footer padless height="100px">
            <div class="box1">
                <h4>+82 00-0000-000</h4>
                <h6>AM.10:30 - PM.06:00 / LUNCH PM.12:00 -PM.14:00</h6>
                <h6>SAT.SUN HOLIDAY OFF</h6>
                <h6>[카카오뱅크] 7979-44-67548 (주)WYJ</h6>
            </div>
            <!-- <v-col class="align-center text-center">
                    <v-btn icon :href='`https://github.com/eddi-study/wyj-front`'>
                        <v-icon size="24px">mdi-github</v-icon>
                    </v-btn>
            </v-col> -->
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
<style scoped>
.box1{
  position: fixed;
  bottom: 10px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
