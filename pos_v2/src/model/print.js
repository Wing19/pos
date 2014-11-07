function print(finalList)
{
  this.titleHeader='***<没钱赚商店>购物清单***\n';
  this.nameHeader='名称：';
  this.accountHeader='数量：';
  this.unitPriceHeader='单价：';
  this.subPriceHeader='小计：';
  this.totalHeader='总计：';
  this.savingsHeader='节省：';
  this.introduction='挥泪赠送商品：\n';
  this.boundary_line='----------------------\n';
  this.boundary_star='**********************';
  this.timeHeader='打印时间：';
  this.itemsTab='';
  this.PromotionTab='';
  this.totalTab='';
  this.receipt='';
  this.length=finalList.length;
  this.standardizeTime=function(num)
  {
    return num<10?'0'+num:num;
  }
  this.getTime=function()
  {
    var myDate=new Date();
    var year=myDate.getFullYear();
    var month=this.standardizeTime(myDate.getMonth()+1);
    var day=this.standardizeTime(myDate.getDate());
    var hours=this.standardizeTime(myDate.getHours());
    var minutes=this.standardizeTime(myDate.getMinutes());
    var seconds=this.standardizeTime(myDate.getSeconds());
    this.time=year+'年'+month+'月'
      +day+'日'+' '+hours+':'+minutes+':'+seconds;
  }
  this.getItems=function()
  {
    for(var i=0;i<this.length;i++)
    {
      this.itemsTab+=this.nameHeader+finalList.items[i].name+'，'+this.accountHeader
                    +finalList.num[i]+finalList.items[i].unit+'，'+
                    this.unitPriceHeader+finalList.items[i].price.toFixed(2)+'(元)，'
                    +this.subPriceHeader+finalList.subPrice[i].toFixed(2)+'(元)\n';

    }
  }
  this.getPromotion=function()
  {
    for(var i=0;i<this.length;i++)
    {
      if(finalList.freeNum[i]!=0)
        this.PromotionTab+=this.nameHeader+finalList.items[i].name+'，'
                          +this.accountHeader+finalList.freeNum[i]
                          +finalList.items[i].unit+'\n';
    }
  }
  this.getTotal=function()
  {
    this.ToatalTab=this.totalHeader+finalList.totalPrice.toFixed(2)+'(元)\n'
                  +this.savingsHeader+finalList.totalSavings.toFixed(2)+'(元)\n'

  }
  this.getReceipt=function()
  {
    this.receipt=this.titleHeader+this.timeHeader+this.time+'\n'
                +this.boundary_line+this.itemsTab+this.boundary_line
                +this.introduction+this.PromotionTab+this.boundary_line
                +this.ToatalTab+this.boundary_star;
  }
  this.printReceipt=function()
  {
    this.getTime();
    this.getItems();
    this.getPromotion();
    this.getTotal();
    this.getReceipt();
    console.log(this.receipt);
  }
}
