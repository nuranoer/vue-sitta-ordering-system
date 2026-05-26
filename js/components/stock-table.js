Vue.component('stock-table', {

  props: [
    'stok',
    'upbjjList',
    'kategoriList'
  ],

  template: '#tpl-stock',

  data() {

    return {

      search: '',

      selectedUPBJJ: '',
      selectedKategori: '',

      sortBy: '',

      showWarning: false,

      showModal: false,

      deleteIndex: null,

      newItem: {

        kode: '',
        judul: '',
        kategori: 'MK Wajib',
        upbjj: 'Jakarta',
        harga: 0,
        qty: 0,
        safety: 10,
        catatanHTML: 'Data baru'

      }

    }

  },

  computed: {

    filteredStock() {

      let data = [...this.stok]

      if(this.search){

        data = data.filter(item =>
          item.judul
            .toLowerCase()
            .includes(this.search.toLowerCase())
        )

      }

      if(this.selectedUPBJJ){

        data = data.filter(item =>
          item.upbjj == this.selectedUPBJJ
        )

      }

      if(this.selectedKategori){

        data = data.filter(item =>
          item.kategori == this.selectedKategori
        )

      }

      if(this.showWarning){

        data = data.filter(item =>
          item.qty < item.safety
        )

      }

      if(this.sortBy){

        data.sort((a,b)=>{

          if(this.sortBy == 'judul'){

            return a.judul.localeCompare(b.judul)

          }

          return a[this.sortBy] - b[this.sortBy]

        })

      }

      return data

    }

  },

  methods: {

    formatHarga(harga) {

      return harga.toLocaleString('id-ID')

    },

    resetFilter() {

      this.search = ''
      this.selectedUPBJJ = ''
      this.selectedKategori = ''
      this.sortBy = ''
      this.showWarning = false

    },

    addItem() {

      if(
        !this.newItem.kode ||
        !this.newItem.judul
      ){

        alert('Data belum lengkap')

        return

      }

      this.stok.push({
        ...this.newItem
      })

      alert('Data berhasil ditambah')

      this.newItem = {

        kode: '',
        judul: '',
        kategori: 'MK Wajib',
        upbjj: 'Jakarta',
        harga: 0,
        qty: 0,
        safety: 10,
        catatanHTML: 'Data baru'

      }

    },

    confirmDelete(index){

      this.deleteIndex = index
      this.showModal = true

    },

    deleteItem(){

      this.stok.splice(this.deleteIndex,1)

      this.showModal = false

    },

    removeHTML(text){

      return text.replace(/<[^>]*>?/gm,'')

    }

  },

  watch: {

    search(newValue){

      console.log('Search:',newValue)

    },

    selectedUPBJJ(newValue){

      console.log('UPBJJ:',newValue)

    }

  }

})