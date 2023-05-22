import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING
} from './mutation-types'

import axiosInst from '@/utility/axiosInst'
import {REQUEST_BOARD_LIST_TO_SPRING, REQUEST_BOARD_TO_SPRING} from "@/store/board/mutation-types";


export default{
    requestWriteBoardToSpring({},payload){
    
    return axiosInst.post('/board/write-board',payload)
    .then((res)=>{
        alert("게시물 등록완료")
    })
    .catch(()=>{
        alert("문제발생")
    })
},
    requestBoardListToSpring({commit} ){
     return axiosInst.get('/board/list-board')
    .then((res)=>{
        commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
    })
    },
    requestBoardToSpring({commit}, boardId) {
        axiosInst.get(`/board/${boardId}`)
            .then((res) => {
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })

    }

}