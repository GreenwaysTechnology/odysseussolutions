function getStocks(args){
  console.log(this,args)
}
const google = {
    name:'google stock'
}
getStocks.apply(google,[{id:1,value:1222}])