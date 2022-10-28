<template>
  <h1 class="mt-5">Enter Payment Information</h1>
  <div class="wrapper">
    <form @submit.prevent="submitForm">
      <fieldset class="form-control">
        <legend>Transaction Information</legend>
        <div class="row mb-4">
         
          <div class="col">
            <label for="" class="form-label">Invoice ID</label>
            <input type="number" class="form-control" v-model="payment.InvoicetID" />
          </div>
           <div class="col">
            <label for="" class="form-label">Payment Method</label>
            <input type="num" class="form-control" v-model="payment.PaymentMethod" />
          </div>
          <div class="col">
            <label for="" class="form-label">Amount</label>
            <input type="number" class="form-control" v-model="payment.Amount" />
          </div>
          <div class="col">
            <label for="" class="form-label">Date</label>
            <input type="date" class="form-control" v-model="payment.date" />
          </div>
        </div>
        
      </fieldset>

      <button class="btn mt-4">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        payment:{
      PaymentID: "",
          invoiceID: "",
          PaymentMethod: "",
          Amount: "",
          Date: ""
      }
    }
    
  },
  methods: {
    submitForm() {
      let apiURL = "http://172.26.54.21:8082/api/payment/"
      axios.post(apiURL, this.payment).then(() => {
        this.payment = {
          PaymentID: "",
          invoiceID: "",
          PaymentMethod: "",
          Amount: "",
          Date: ""
        }
      }).catch(error => {
        console.log(error)
      });
      this.$router.push({
        name: "addpayment"
        }
      )
    }
  }
}
</script>
