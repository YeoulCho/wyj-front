<template>
    <v-container class="background">
        <v-card class="box" width="700">
        <form>
            <table width="50%">
                <tr>
                    <td colspan="3">
                        <v-text-field label="email" v-model="email" placeholder="test@test.com"></v-text-field>
                    </td>
                </tr>
                <tr>
                    <td colspan="3">
                        <v-text-field label="password" v-model="password"></v-text-field>
                    </td>
                </tr>
                <tr>
                    <v-radio-group v-model="roleType" row>
                        <v-radio label="NORMAL" value="NORMAL" aria-checked="true" ></v-radio>
                        <v-radio label="BUSINESS" value="BUSINESS"></v-radio>
                        <v-radio label="ADMIN" value="ADMIN" ></v-radio>
                    </v-radio-group>
                </tr>
                <tr>
                    <v-text-field v-if="roleType==='BUSINESS'" v-model="businessNumber" label="BUSINESS NUMBER" placeholder="숫자 10자리"
                                  :rules="[rules.businessNumber10DigitRule, rules.businessNumberDigitRule]"></v-text-field>
                </tr>
            </table>
        </form>  
            <v-btn :disabled="loading"
                    class="ma-1"
                    color="grey"
                    plain @click="$router.push('/')">취소</v-btn>
            <v-btn :disabled="loading"
                    class="ma-1"
                    color="grey"
                    plain @click="submit">회원가입</v-btn>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions} from "vuex";
// import memberModule from "@/store/memberStore/MemberModule";
const memberModule = 'memberModule'
export default {
    name: "MemberSignUp",
    data() {
        return {
            email: "",
            password: "",
            roleType: "NORMAL",
            businessNumber: "",
            rules: {
                businessNumber10DigitRule: (value) => value.length === 10 || "Please enter a 10-digit number",
                businessNumberDigitRule: (value) => Number(value) || "Please enter a 10-digit number"

            }
        }
    },
    methods: {
        async submit() {
            const {email, password, roleType, businessNumber} = this

            await this.requestMemberSignUp({email, password, roleType, businessNumber})
        },
        ...mapActions(memberModule, ['requestMemberSignUp'])
    }
}
</script>

<style scoped>
/*form, table, td {*/
/*    border: black 1px solid;*/
/*}*/
.background{
  background: linear-gradient(-45deg, #f3f5f0 50%, #dfe8eb 50%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80%;
}
.box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} 
/* v-btn{
  border: none;
  box-shadow: none;
} */
</style>