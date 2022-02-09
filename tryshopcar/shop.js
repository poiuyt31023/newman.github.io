var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'雙人套餐',
            imgUrl:'https://www.mirrormedia.com.tw/assets/images/20210727154715-7403fa0ed574cbd7ccbd83dcfa319074-desktop.jpeg',
            price:'549',
            count:'0'
          },
          {
            id:'2',
            itemName:'美式漢堡',
            imgUrl:'https://i0.wp.com/www.missariesx2.com/wp-content/uploads/2020/06/102705716_3040016572758938_799184541527709415_o.jpg?fit=960%2C960&ssl=1',
            price:'249',
            count:'0'
          },
          {
            id:'3',
            itemName:'白酒蛤犡義大利麵',
            imgUrl:'https://cf.shopee.tw/file/5cd7723d9a5331a437acf47c60cd012f',
            price:'280',
            count:'0'
          },
          {
            id:'4',
            itemName:'青醬雞腿排燉飯',
            imgUrl:'https://almablog.com.tw/wp-content/uploads/2019/10/1570162190-937a68977d3bdef4400f4122bca989e2-1200x857.jpg',
            price:'320',
            count:'0'
          },
    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>0){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
        
        // countQuantity: function () {
        //   var countQuantity = 0;
        //   for (var i in this.incart) {
        //     countQuantity += parseInt(this.incart[i].quantity);
        //   }
        //   return countQuantity;
        // },
        //   get countQuantity() {
        //     return this._countQuantity;
        //   },
        //   set countQuantity(value) {
        //     this._countQuantity = value;
        //   },
        //   countTotal: function () {
        //     var countTotal = 0;
        //     for (var i in this.incart) {
        //       countTotal += parseInt(this.incart[i].quantity * this.incart[i].price);
        //     }
        //     return countTotal;
        //   }
        // },
},})