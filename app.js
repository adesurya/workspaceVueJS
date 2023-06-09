const app = Vue.createApp({
// template:'<h2>Im the template</h2>'
data (){
    return{
        showBooks: true,
        url: 'http://adesurya.com',
        // title:"Semen Padang FC",
        // author:"Ade Surya Iskandar",
        // age:23,
        // x:0,
        // y:0
        books:[
        {
            title:"Alkarim FC",
            author: "Alkarim Group"
        },
        {
            title:"Rendra FC",
            author: "Rendra Group"
        }
    ]
    }
    },
    methods:{
        changeTitle(test){
            // this.title = "Alkarim FC"
            this.title=test
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
 })
app.mount('#app')