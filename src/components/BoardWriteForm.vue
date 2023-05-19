<template>
    <v-container>
    <div>
        <table>
            <tr>
                <td>

                    <v-text-field label="title" v-model="title"/>
                </td>
            </tr>
            <tr>
                <td>
                    <v-text-field label="author" v-model="memberId"/>
                </td>
            </tr>
            <tr>
                <td width="400">
                    <v-textarea
                        filled
                        name="content"
                        label="content"
                        value="내용을 입력하세요."
                        v-model="content"
                    ></v-textarea>
                </td>
            </tr>
        </table>
    </div>
    
    <v-btn @click="write">게시글 저장</v-btn>
    <router-link :to="{name:'home'}">
        <v-btn>취소</v-btn>
    </router-link>
    </v-container>
</template>
<script>

export default {
    name: 'BoardWriteForm',
    data(){
        return{
            title: '제목을 입력하세요',
            memberId: '',
            content: '내용을 입력하세요'
        }
    },
    methods: {
        write(){
            const{title, memberId, content} =this
            this.$emit('write', {title, memberId, content})
        }
    }
}
</script>
<style scoped>
input{
width: 200px
}    
</style>