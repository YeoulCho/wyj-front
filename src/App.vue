<template>
    <v-app>
        <navigation-menu-page/>
        <v-main>
            <router-view align="center"/>
        </v-main>
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
