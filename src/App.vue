<template>
    <v-app>
        <navigation-menu-page/>
        <v-main>
            <router-view align="center"/>
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

export default {
  name: 'App',
    components: {NavigationMenuPage},

  data: () => ({
    //
  }),
};
</script>
