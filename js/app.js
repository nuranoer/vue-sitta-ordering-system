new Vue({

  el: '#app',

  data: {

    tab: 'stok',

    stok: [],
    tracking: [],
    paket: [],

    upbjjList: [],
    kategoriList: [],
    pengirimanList: []

  },

  async created() {

    const data = await loadData()

    this.stok = data.stok
    this.tracking = data.tracking
    this.paket = data.paket

    this.upbjjList = data.upbjjList
    this.kategoriList = data.kategoriList
    this.pengirimanList = data.pengirimanList

  }

})