<template>
       <h1 class="mt-5">Add Payment</h1> 
        <div class="wrapper2">
            <form @submit.prevent="handleSubmitForm"> 
             <fieldset class="form-control">
                    <div class="row">
                        
                    
                 <div class="col">
                        <label>Invoice ID</label>
                        <input type="number" class="form-control" v-model="payment.invoiceID" required>
                    </div>   
                    <div class="col">
    
                        <label>Payment Method</label>
                        <input type="text" class="form-control" v-model="payment.paymentmethod" required>
                    </div>
                    </div>
                   <div class="row">
                          <div class="col">
        
                            <label>Amount</label>
                            <input type="number" class="form-control" v-model="payment.Amount" required>
                        </div>
                        
                       <div class="col">
                            <label>Date</label>
                            <input type="date" class="form-control" v-model="payment.date" required>
                        </div> 
        
                    </div >
                    <button class="btn mt-3">Create</button>        
             </fieldset >
            </form>
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
