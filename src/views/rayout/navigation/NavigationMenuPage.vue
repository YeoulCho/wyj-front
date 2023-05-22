<script>
import {defineComponent} from 'vue'

export default defineComponent({
        name: "NavigationMenuPage",
        data() {
            return {
                memberId: null,
                // isLogin: false,
                loginComp: false,
                // items: [
                // { title: '게시판', icon: 'mdi-clipboard-text-outline', route: '/board-list-page'},
                // { title: 'Photos', icon: 'mdi-image' },
                // { title: 'About', icon: 'mdi-help-box', route: 'about' },
                // ],
                right: null,
                mini: true,
                drawer: true,
                // navigation_drawer: false,
                Boards: [
                    ['Q&A', '/board-list-page'],
                    ['Review'],
                    ['Return']
                ],
                SHOPPING: [
                    ['Top'],
                    ['Botton'],
                    ['Dress'],
                    ['Outer'],
                    ['Acc']
                ]
            }
        },
        mounted() {
            this.memberId = localStorage.getItem("loginUserInfo")
            // this.isLogin = this.memberId !== null;
        },
        methods: {
            tryLogin() {
                this.$emit('tryLogin')
            },
            tryLogout() {
                this.$emit('tryLogout')
            }
        },
    computed: {
            isLogin() {
                console.log(localStorage)
                return localStorage.getItem('userToken')==='null'?false:true
            }
    }
    },
)
</script>

<template>
    <nav>
        <v-app-bar>
            <v-app-bar-nav-icon app 
            @click="navigation_drawer = !navigation_drawer"/>
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


            <div v-if="!isLogin">
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
            </div>
            <div v-if="isLogin">

                <v-btn @click="tryLogout">
                    <span>로그아웃</span>
                    <v-icon right>mdi-account-cancel-outline</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
      <v-navigation-drawer 
      permanent
      app
      expand-on-hover
      :mini-variant.sync="mini">
      <!-- <v-navigation-drawer app v-model="navigation_drawer" expand-on-hover> -->

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              WYJ_BOARD
            </v-list-item-title>
            <v-list-item-subtitle>
              원기,여울,지원
            </v-list-item-subtitle>
            
          </v-list-item-content>
            <!-- <v-btn icon @click.stop="mini = !mini">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn> -->
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>SHOPPING</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="([title, route], i) in SHOPPING"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
        </v-list-group>
        <v-list-group
          :value="false"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>게시판</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="([title, route], i) in Boards"
            :key="i"
            :to="route"
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            </v-list-item>
        </v-list-group>
          <!-- <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
        </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<style scoped>

</style>