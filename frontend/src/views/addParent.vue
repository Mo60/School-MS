<template>
    <h1 class="mt-5">Add Parent</h1>
   <div class="wrapper">
        <form>
            <fieldset class="form-control">
                <legend>Parent Information</legend>
                <div class="row mb-4">
                   <div class="col">
                        <label for="" class="form-label">First Name</label>
                        <input type="text" class="form-control">
                   </div >
                   <div class="col">
                        <label for="" class="form-label">Last Name</label>
                        <input type="text" class="form-control">
                   </div >
                   <div class="col"><label for="" class="form-label">Email</label>
                <input type="email" class="form-control"></div>
                   </div>
                   <div class="row mb-4">
                    <div class="col"><label for="" class="form-label">Phone Type</label>
                    <select name="" id="" class="form-control">
                        <option value="" disabled selected>Select An Option</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                    </select></div>
                   <div class="col">
                        <label for="" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                   </div >
                </div>   
            </fieldset>
            <fieldset class="form-control mt-5">
                <legend>Address</legend>
                <div class="row mb-4"><div class="col"><label class="form-label">Street</label>
                <input type="text" class="form-control"></div>
<div class="col"><label for="" class="form-label">City</label><input type="text" class="form-control"></div>
<div class="col"><label for="" class="form-label">Zip</label><input type="number" class="form-control"></div>
</div>
            </fieldset>

            <fieldset class="form-control mt-5">
                <legend>Others</legend>
             <div class="row mb-4">   <div class="col-md-4"><label for="" class="form-label">Reference</label><input type="text" class="form-control"></div></div >
             <div class="row mb-4"><div class="col">Notes<textarea name=""  class="form-control"></textarea></div></div>
            </fieldset>

            <button class="btn mt-4">Submit</button>
        </form>
   </div >
</template>