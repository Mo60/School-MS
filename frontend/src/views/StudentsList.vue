<template> 
    <div class="row mb-5 pb-5 ">
        <router-link to="/students/studentForm" class="btn btn-lg btn btn-success me-3 mb-3">Add New Student</router-link><br/>
        <h3 class="text-center">List of Students</h3>
        <h5 class="text-muted text-center mb-5 pb-5">List of all Students on record</h5>
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Student ID</th>
                        <th>Parent ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>StartDate</th>
                        <th>Emergency Contact Name</th>
                        <th>Emergency Contact Number</th>
                        <th>Lesson Day</th>
                        <th>Lesson Time</th>
                        <th>Medical</th>
                        <th>Notes</th>

                    </tr>
                </thead>
                <tbody> 
                    <tr v-for="student in students" :key="student.studentID"> <!-- loops through the array of student using the key studentID -->
                        <td>{{ student.studentID }}</td>
                        <td>{{ student.parentID }}</td>
                        <td>{{ student.firstName }}</td>
                        <td>{{ student.lastName }}</td>
                        <td>{{ student.DOB }}</td>
                        <td>{{ student.startdate< }}</td>
                        <td>{{ student.emergencycontactname}}</td>
                        <td>{{ student.emergencycontactnumber}}</td>
                        <td>{{ student.lessonday}}</td>
                        <td>{{ student.lessontime}}</td>
                        <td>{{ student.medical}}</td>
                        <td>{{ student.notes}}</td>
                        <td>   
                        <router-link :to="{name: 'editStudent', params: { id: student.studentID }}" class="btn btn-success ">Edit</router-link>
                         <button @click.prevent="deleteStudent(student.studentID)" class="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// import the axios method. needed to create a hook
    import axios from "axios";
    export default {
        data() { // holds variables 
            return {
                students: [] 
            }
        }, //hook need this for the lifecycle hook that can run during anytime during the lifecyle
        created() {
            let apiURL = '';
            axios.get(apiURL).then(res => {
                this.students = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteStudent(id){
                let apiURL = ``;
                let indexOfArrayItem = this.students.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
 
</template>
