export const mymixin={
    created(){
        let vm=this;
        vm.username="Young An";
        vm.email="youngan@gmail.com";
    },
    methods:{
        changeUserName(username){
            let vm=this;
            vm.username=username;
        }
    },
    data(){
        return {
            username:"",
            email:""
        }
    }
}