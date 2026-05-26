Vue.component('do-tracking', {

  props: ['tracking'],

  template: '#tpl-tracking',

  data(){

    return {

      keyword: ''

    }

  },

  computed: {

    filteredTracking(){

      if(!this.keyword){

        return this.tracking

      }

      return this.tracking.filter(item=>{

        const data = Object.values(item)[0]

        return (
          data.nim.includes(this.keyword)
        )

      })

    }

  },

  methods: {

    searchTracking(){

      console.log('Cari:',this.keyword)

    },

    resetSearch(){

      this.keyword = ''

    },

    formatDate(date){

      return new Date(date)
        .toLocaleDateString('id-ID')

    }

  }

})