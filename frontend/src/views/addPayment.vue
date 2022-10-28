<template>
       <h1 class="mt-5">Add Payment</h1> 
        <div class="wrapper3">
            <form @submit.prevent="handleSubmitForm"> 
             <fieldset class="form-control p-4">
                    <div class="row mb-3">
                        
                    
                 <div class="col">
                        <label class="form-label">Invoice ID</label>
                        <input type="number" class="form-control" v-model="payment.invoiceID" required>
                    </div>   
                    <div class="col">
    
                        <label class="form-label">Payment Method</label>
                        <select name="" id="" class="form-select"><option value="" selected disabled>Select an option</option>
                        <option value="">Debit/Credit</option>
                        <option value="">Cash</option>
                        <option value="">Check</option>
                    </select>
                    </div>
                    </div>
                   <div class="row mb-3">
                          <div class="col">
        
                            <label class="form-label">Amount</label>
                            <input type="number" class="form-control" v-model="payment.Amount" required>
                        </div>
                        
                       <div class="col">
                            <label class="form-label">Date</label>
                            <input type="date" class="form-control" v-model="payment.date" required>
                        </div> 
        
                    </div >
                    
             </fieldset >
             <button class="btn mt-3">Create</button>   
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
