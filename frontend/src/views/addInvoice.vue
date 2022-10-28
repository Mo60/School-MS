<template>
    <h1 class="mt-5">Add Invoices</h1>
    <div class="wrapper">   
                      <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
            <fieldset class="form-control p-4">
                <div class="row">
                    
                        <div class="col mb-3">
                            <label class="form-label">Student ID</label>
                            <input type="number" class="form-control"  required>
                        </div>
                        
                       <div class="col mb-3">
                            <label class="form-label">Total</label>
                            <input type="number" class="form-control" min="0"  required>
                        </div>
                        
                        <div class="col mb-3">
                            <label class="form-label">Total Payment</label>
                            <input type="number" class="form-control" min="0" required>
                        </div>
                        
                        <div class="col mb-3">
                            <label class="form-label">Due Date</label>
                            <input type="date" class="form-control"  required>
                        </div>
                </div >
                    
                    <div class="text-center m-3">
                    
                    </div>
            </fieldset >
            <button class="btn mt-3">Submit</button>
            </form>
        </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "AddInvoice",
        data() {
            return {
               Invoice: { 
                    InvoiceID:"",
                    StudentID: "",
                    Total:"",
                    Totalpayment:"",
                    Duedate: ""
                }, 
            };
        },
        
    }
</script>
