<template>
    <v-container >
        <v-card >
            <v-container v-if="boardId==board.board.boardId">
                <v-card-text>
                    <h1>{{board.board.title}}</h1>
                </v-card-text>
                <v-card-text>
                    <h3>{{board.content}}</h3>
                </v-card-text>
            </v-container >
            <v-progress-circular
                    indeterminate
                    color="primary"
                    v-else
            ></v-progress-circular>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {REQUEST_BOARD_TO_SPRING} from "@/store/board/mutation-types";
const boardModule = 'boardModule';

export default {
    name: "BoardReadPage",
    data() {
        return {
        }
    },
    props: {
        boardId: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(boardModule, ['board'])
    },
    methods: {
        ...mapActions(boardModule, ['requestBoardToSpring']),
    },
    beforeMount() {
        this.requestBoardToSpring(this.boardId);
    }
}
</script>

<style scoped>

</style>