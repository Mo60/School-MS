<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
          <h3 class="text-center">Update Invoice</h3>
            <form @submit.prevent="handleUpdateForm" class="mb-5 pb-5">
                <div class="form-group">
                    <label>Invoice ID</label>
                    <input type="number" class="form-control" v-model="invoice.invoiceID" required>
                </div>
                <div class="form-group">
                    <label>Student ID</label>
                    <input type="number" class="form-control" v-model="invoice.studentID" required>
                </div>
                <div class="form-group">
                    <label>Total</label>
                    <input type="number" class="form-control" v-model="invoice.total" required>
                </div>
                <div class="form-group">
                    <label>Total Payment</label>
                    <input type="number" class="form-control" v-model="invoice.totalPayment" 
                    required>
                </div>

                <div class="form-group">
                    <label>Due Date</label>
                    <input type="date" class="form-control" v-model="invoice.dueDate" required>
                </div>
                
                <div class="text-center m-3">
                <button class="btn btn-danger mt-3">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "EditInvoice",
        data() {
            return {
               invoice: { 
                    invoiceID: "",
                    studentID:"",
                    total:"",
                    totalPayment:"",
                    dueDate:""
                }, 
            };
        },
        
    }
</script>
