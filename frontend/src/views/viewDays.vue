<template>
  <div class="row justify-content-center">
   <h1 class="mb-3 mt-3">Days</h1>
      <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>Day ID</th>
          <th>Week Day</th>  
       /tr>
      </thead>
      <tbody>   
        <tr v-for="day in Days" :key="day.DayID">
            <td>{{ day.DayID }}</td>
            <td>{{ day.WeekDay}}</td>
                        <td>   
                        <router-link :to="{day: 'editWeekDay', params: { id: day.DayID }}" class="btn btn-success ">Edit</router-link>
                         <button @click.prevent="deleteDay(day.DayID)" class="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
