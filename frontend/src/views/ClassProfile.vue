<template>
    <div class="cont2">
       <div class="box-wrapper">
            <div class="box">
                <h2>Class Details</h2>

            </div>
            <div class="profile">
                <div class="profile-body">
                  
                </div>
            </div>

       </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            classInfo:[],
            classID:this.$route.params.ClassID
        }
    },
    created(){
        let apiURL=`http://172.26.54.21:8082/api/reports/class_view/${this.classID}`
        axios.get(apiURL).then((res)=>{
            this.classInfo=res.data;
            
        })
    }
}
</script>