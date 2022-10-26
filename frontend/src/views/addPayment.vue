<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Add Payment</h3> 
            <form @submit.prevent="handleSubmitForm"> 
                <div class="form-group">
                    <label>Payment ID</label>
                    <input type="number" class="form-control" v-model="payment.paymentID" required>
                </div>
             <div class="form-group">
                    <label>Invoice ID</label>
                    <input type="number" class="form-control" v-model="payment.invoiceID" required>
                </div>   
                <div class="form-group">

                    <label>Payment Method</label>
                    <input type="text" class="form-control" v-model="payment.paymentmethod" required>
                </div>
                  <div class="form-group">

                    <label>Amount</label>
                    <input type="number" class="form-control" v-model="payment.Amount" required>
                </div>
                
               <div class="form-group">
                    <label>Date</label>
                    <input type="date" class="form-control" v-model="payment.date" required>
                </div> 

                <button class="btn btn-danger mt-3">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                payment: {
                   paymentID:'',
                   invoiceID:'',
                   paymentmethod:'',
                   amount:'',
                   date: ''
                }
            }
        },
         methods: {
            handleSubmitForm() {
                
                let apiURL = '';
                
                axios.post(apiURL, this.payment).then(() => {
                    //changing the view to the list
                  this.$router.push('/')
                  this.payment = {
                   paymentID:'',
                   invoiceID:'',
                   paymentmethod:'',
                   amount:'',
                   date: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        } 
           
    }
</script>
