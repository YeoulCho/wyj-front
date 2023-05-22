<template lang="">
    <v-container>
        <div><h2>자유게시판</h2></div>
        <table style="margin-left: auto;">
            <tr>
                <td>
                    <router-link to="board-write-page">
                        <v-btn class="ma-2"
                               outlined
                               color="indigo">게시물 작성</v-btn></router-link>
                </td>
            </tr>
        </table>
        <v-card>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details>
                </v-text-field>
            </v-card-title>
        <v-data-table :headers="headerTitle" :items="boards" 
                    :items-per-page="7" class="elevation-1" 
                    :search="search"
                    @click:row="readRow" show-select 
                    item-key="boardId" v-model="selectedItems"/>
        </v-card>
    </v-container>
</template>

<script>
import router from '@/router';
import { mapActions, mapState } from 'vuex';
const boardModule = 'boardModule'
export default {
    data () {
        return {
            headerTitle: [
                { text: '번호', value: 'boardId', width: "70px" },
                { text: '제목', value: 'title', width: "200px", sortable: false },
                { text: '작성자', value: 'memberId', width: "100px",sortable: false },
                { text: '등록일자', value: 'createDate', width: "100px" },
            ],
            selectedItems: [],
            search: ''
        }
    },
    computed: {
        ...mapState(boardModule, ['boards']),
    },
    mounted () {
        this.requestBoardListToSpring()
    },
    beforeUpdate () {
        console.log('selected: ' + JSON.stringify(this.selectedItems))
    },
    methods: {
        ...mapActions(boardModule, ['requestBoardListToSpring']),
        readRow (readValue) {
            alert('게시물 읽기: ' + JSON.stringify(readValue))
            router.push({
                name: 'BoardReadPage',
                params: { boardId: readValue.boardId.toString() }
            })
        }
    }
}
</script>

<style lang="">
    
</style>