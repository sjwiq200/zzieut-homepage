<template>
    <div class="registerWrapper" @click="test">
        <div class="test" @click="stopTest">
            <ul class="tabs">
                <li
                    :class="activeId === 1 ? 'activeTab' : ''"
                    @click="clickTab(1)"
                >
                    로그인
                </li>
                <li
                    :class="activeId === 2 ? 'activeTab' : ''"
                    @click="clickTab(2)"
                >
                    회원가입
                </li>
            </ul>
            <div class="content" v-if="activeId === 1">
                <Login ref="login" />
            </div>
            <div class="content" v-else><Signup /></div>
        </div>
    </div>
</template>
<<<<<<< HEAD
<script>
import Login from "./components/Login";
import Signup from "./components/Signup";
=======

<script>
import Login from "./components/Login";
import Signup from "./components/Signup";

>>>>>>> origin
export default {
    components: { Login, Signup },
    data() {
        return {
            activeId: 1
        };
    },
    methods: {
        clickTab(id) {
            this.activeId = id;
        },
        test() {
            this.$refs.login.outSideClicked();
        },
        stopTest(e) {
            event.stopPropagation();
        }
    }
};
</script>
