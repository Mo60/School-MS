<template>
    <h1 class="mt-5">Add a New Student</h1>

   <div class="wrapper">
        <form @submit.prevent="">
            <fieldset class="form-control">
                <legend > Student Information</legend>
<div class="row mb-4"> 
   <div class="col">
        <label for="fName" class="form-label">First Name</label>
        <input type="text" class="form-control">
   </div >
   <div class="col">
        <label for="lName" class="form-label">Last Name</label>
        <input type="text" class="form-control">
   </div >
   <div class="col">
        <label for="lName" class="form-label">Date of Birth</label>
        <input type="date" class="form-control">
   </div >
   <div class="col">
       <label for="sDate" class="form-label"> Start Date</label>
     <input class="form-control" type="date">
     </div>
</div>
</fieldset>
<fieldset class="form-control mt-5">
     <legend>Class Information</legend>
<div class="row mb-4">
   <div class="col"> <label for="">Class Name</label>
<input type="text" class="form-control"></div>
    <div class="col">
     <label for="" class="form-label">Lesson Days</label>
     <select name="days" id="" class="form-control">
          <option value="" disabled selected>Select an Option</option>
          <option value="MWF">MWF</option>
          <option value="Tu/Th">Tu/Th</option>
          <option value="Everyday">Everyday</option>
          <option value="Saturday">Saturday</option>
     </select>
    </div>
<div class="col"> 
     <label for="" class="form-label">Class Time</label>
     <select class="form-control">
          <option value="" disabled selected>Select an Option</option>
          <option value="10:00AM - 11:15AM">10:00AM - 11:15AM </option>
          <option value="11:15AM - 12:30PM">11:15AM - 12:30PM </option>
          <option value="12:30PM - 1:45PM">12:30PM - 1:45PM </option>
          <option value="4:00PM - 5:15PM">4:00PM - 5:15PM </option>
          <option value="5:15PM - 6:30PM">5:15PM - 6:30PM </option>
          </select>
</div>
</div>
            </fieldset>

            <fieldset class="form-control mt-5">
               <legend>Emergency Contact </legend>
              <div class="row">
                    <div class="col">
                         <label for="" class="form-label">Contact Name</label>
                         <input type="text" class="form-control">
                    </div>
                    <div class="col"><label for="" class="form-label">Phone Number</label><input type="tel" class="form-control" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></div>
              </div >
            </fieldset>

            <fieldset class="form-control mt-5">
            <legend >   Medical Information </legend >
               <div class="col"><textarea class="form-control"></textarea></div>
            </fieldset>
            <fieldset class="form-control mt-5">
            <legend >   Notes </legend >
               <div class="col"><textarea class="form-control"></textarea></div>
            </fieldset>

            <button class="btn mt-4">Next</button>
        </form>
   </div>
</template>