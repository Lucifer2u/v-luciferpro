import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const now = new Date();


const store = new Vuex.Store({

    state:{
        routes:[],

        sessions:[{
            id:1,
            user:{
                name:'示例介绍',
                img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F842eea2fef4be992c14222abf3df84af576f8d0d21049-YmLxJv_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628337952&t=02ebc923420e56695dadbe2933151ca0'
            },
            messages:[{
                content:'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                date:now
            },{
                content:'项目地址(原作者): https://github.com/coffcer/vue-chat',
                date:now
            },{
                content:'本项目地址(重构): https://github.com/is-liyiwei',
                date:now
            }]
        },{
            id:2,
            user:{
                name:'webpack',
                img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20181113%2F23%2F1542122451-kZaRlqfLyK.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628338001&t=8d7e0245528edff2b25393d4573fd6ef'
            },
            messages:[{
                content:'Hi，我是webpack哦',
                date:now
            }]
        }],
        currentSessionId:1,
        filterKey:''

    },
    mutations:{
        initRoutes(state, data){
            state.routes = data;
        },
        changeCurrentSessionId (state,id) {
            state.currentSessionId = id;
        },
        addMessage (state,msg) {
            state.sessions[state.currentSessionId-1].messages.push({
                content:msg,
                date: new Date(),
                self:true
            })
        },
        INIT_DATA (state) {
            let data = localStorage.getItem('vue-chat-session');
            //console.log(data)
            if (data) {
                state.sessions = JSON.parse(data);
            }
        }
    },
    actions:{
        initData (context) {
            context.commit('INIT_DATA')
        }
    }
})

store.watch(function (state) {
    return state.sessions
}, function (val) {
    localStorage.setItem('vue-chat-session', JSON.stringify(val));
}, {
    deep: true/*这个貌似是开启watch监测的判断,官方说明也比较模糊*/
})

export default store;