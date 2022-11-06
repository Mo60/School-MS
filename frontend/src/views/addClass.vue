<template>

        
          <h1 class="mt-5">Add Class</h1>
          <div class="wrapper3 ">
                      <form @submit.prevent="handleSubmitForm" class="mb-5">
            <fieldset class="form-control">
                <!-- <div class="col">
                   <label for="" class="form-label">Relationship to Child</label>
                     <select name="" id="" class="form-select">
                       <option value="{{teacher.FacultyID}}" v-for="teacher in TeacherList" 
                        :key="teacher.FacultyID"> {{teacher.FirstName}} {{teacher.LastName}}
                       </option>
                     </select> 
                </div>           -->
                <!-- Course -->
                <div class="col">
                   <label for="" class="form-label">Course</label>
                     <select name="" id="" class="form-select" v-model="Class.CourseID" required>
                       <option :value="c.CourseID" v-for="c in courses" 
                        :key="c.CourseID"> {{c.CourseName}} {{c.Status}}
                       </option>
                     </select> 
                </div>
                <!-- Semester -->
                <div class="col">
                   <label for="" class="form-label">Semester</label>
                     <select name="" id="" class="form-select" v-model="Class.SemesterID" required>
                       <option :value="s.SemesterID" v-for="s in semeseters" 
                        :key="s.SemesterID"> {{s.Semester}}
                       </option>
                     </select> 
                </div>
                <!-- TimeBlock -->
                <div class="col">
                   <label for="" class="form-label">TimeBlock</label>
                     <select name="" id="" class="form-select" v-model="Class.TimeBlockID" required>
                       <option :value="t.TimeblockID" v-for="t in timeBlocks" 
                        :key="t.TimeBlockID"> {{t.StartTime}} {{t.EndTime}}
                       </option>
                     </select> 
                </div>
                <!-- Day -->
                <div class="col">
                   <label for="" class="form-label">Day</label>
                     <select name="" id="" class="form-select" v-model="Class.DayID" required>
                       <option :value="d.DayID" v-for="d in days" 
                        :key="d.DayID"> {{d.WeekDay}} 
                       </option>
                     </select> 
                </div>
                <!-- ClassStatus -->
                <div class="col">
                   <label for="" class="form-label">ClassStatus</label>
                     <select name="" id="" class="form-select" v-model="Class.ClassStatusID" required>
                       <option :value="cs.ClassStatusID" v-for="cs in classstatuses" 
                        :key="cs.ClassStatusID"> {{cs.Status}}
                       </option>
                     </select> 
                </div>
                <!-- Capacity -->
                <div class="col">
                    <label for="" class="form-label">Capacity</label>
                        <input type="number" class="form-control" v-model="Class.Capacity" required>
                </div>
            </fieldset >
            <button class="btn mt-3">Submit</button>
            </form>
       
    </div>
</template>

<script>
   import axios from "axios";
    export default {
        api_host: "172.26.54.21",
        api_port: "8082",

        name: "AddClass",
        data() {
            return {
               Class: { 
                    CourseID: "",
                    SemesterID:"",
                    TimeBlockID:"",
                    DayID:"",
                    ClassStatusID:"",
                    Capacity: "",
                    ////
                    MaxCapacity:"",
                    Lesson:"",
                    Notes: ""
                }, 
                courses:[],
                semeseters:[],
                timeBlocks:[],
                days:[],
                classstatuses:[],
                            
            };
        },
    
    methods: {
            handleSubmitForm(){
                
                let apiURL = 'http://172.26.54.21:8082/api/class/';
                
                axios.post(apiURL, this.Class).then(() => {
                    //changing the view to the list
                  this.$router.push('/classes')
                  this.Class = {
                    ClassID:"",
                    CourseID: "",
                    SemesterID:"",
                    TimeBlockID:"",
                    DayID:"",
                    ClassStatusID:"",
                    Capacity: "",
                    ////
                    MaxCapacity:"",
                    Lesson:"",
                    Notes: ""
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
            //// a function that returns an array from api

            // just an idea but couldn't make it work
                        // getOptions(api_host,api_port,end_point){
                        //     let apiURL = `http://${api_host}:${api_port}/${end_point}`;
                        // axios.get(apiURL).then(res => {
                        //     options = res.data;
                        //     return options;
                            
                        // }).catch(error => {
                        //     console.log(error)
                        // });

                        // }
        }
        ,
     async created(){
            // get options from the api
            // example getting teachers LIst
                // let apiURL = 'http://172.26.54.21:8082/api/faculty/';
                // axios.get(apiURL).then(res => {
                //     this.TeacherList = res.data;
                    
                // }).catch(error => {
                //     console.log(error)
                // });
            // 
        //// get Courses
       // courses = getOptions("172.26.54.21","8082","reports/course_view")
        let apiURL1 = 'http://172.26.54.21:8082/api/reports/course_view/';
         await   axios.get(apiURL1).then(res => {
                this.courses = res.data;
                
            }).catch(error => {
                console.log(error)
            });
        // //// get semesters
        let apiURL2 = 'http://172.26.54.21:8082/api/semester/';
        await    axios.get(apiURL2).then(res => {
                this.semeseters = res.data;
                
            }).catch(error => {
                console.log(error)
            });
        // //// get timeBlocks:[],
        let apiURL3 = 'http://172.26.54.21:8082/api/timeblock/';
        await   axios.get(apiURL3).then(res => {
                this.timeBlocks = res.data;
                
            }).catch(error => {
                console.log(error)
            });
        // //// get days:[],
        let apiURL4 = 'http://172.26.54.21:8082/api/day/';
        await    axios.get(apiURL4).then(res => {
                this.days = res.data;
                
            }).catch(error => {
                console.log(error)
            });
        ///// get classstatuses:[],
        let apiURL5 = 'http://172.26.54.21:8082/api/classstatus/';
        await    axios.get(apiURL5).then(res => {
                this.classstatuses = res.data;
                
            }).catch(error => {
                console.log(error)
            });
        }, 

        
    } 
</script>
