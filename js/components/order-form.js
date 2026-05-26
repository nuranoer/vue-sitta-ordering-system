Vue.component('order-form', {

  props: [
    'paket',
    'pengirimanList'
  ],

  template: '#tpl-order',

  data(){

    return {

      selectedPaket: '',
      selectedPengiriman: ''

    }

  },

  methods: {

    formatHarga(harga){

      return harga.toLocaleString('id-ID')

    },

    submitOrder(){

      if(
        !this.selectedPaket ||
        !this.selectedPengiriman
      ){

        alert('Data belum lengkap')

        return

      }

      const now = new Date()

      const year = now.getFullYear()

      const random = Math.floor(Math.random()*1000)

      const nomorDO =
        `DO${year}-${random}`

      alert(
        `Order berhasil\n${nomorDO}`
      )

    }

  }

})