<template>
  <div>
    <label>Сумма кредита: <input type="number" v-model.number="loanAmount"></label><br>
    <label>Процентная ставка: <input type="number" v-model.number="interestRate"></label><br>
    <label>Срок кредита: <input type="number" v-model.number="loanTerm"></label><br>
    <p>Ежемесячный платеж: {{ monthlyPayment }}</p>
    <p>Общая сумма по кредиту: {{ totalPayment }}</p>
  </div>
</template>
<script>
export default {
  name: 'MortgageCalculator',
  data () {
    return {
      loanAmount: 0,
      interestRate: 0,
      loanTerm: 0
    }
  },
  computed: {
    monthlyPayment () {
      const rate = this.interestRate / 100 / 12
      const term = this.loanTerm
      const principal = this.loanAmount
      const numerator = rate * Math.pow(1 + rate, term)
      const denominator = Math.pow(1 + rate, term) - 1
      const payment = principal * (numerator / denominator)
      return payment.toFixed(2)
    },
    totalPayment () {
      const term = this.loanTerm
      const payment = parseFloat(this.monthlyPayment)
      return (term * payment).toFixed(2)
    }
  }
}
</script>
<style lang="">

</style>
