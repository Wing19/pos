//存储购买列表中所有物品的信息
function list(items,num)
{
  this.items=items||[];
  this.num=num||[];
  this.subPrice=[];
  this.itemsPromotion=[];
  this.priceWithoutPromotion=function()
  {
    //var subPrice=[];
    for(var i=0;i<this.num.length;i++)
      this.subPrice[i]=this.items[i].price*this.num[i];
    //return subPrice;
  }
  this.getPromotion=function()
  {
    var promotions=loadPromotions();
    //var itemsPromotion=[],
    for(var j=0;j<this.items.length;j++)
    {
      for(var i=0;i<promotions.length;i++)
      {
        if(promotions[i].barcodes.indexOf(this.items[j].barcode)>=0)
        {
            //this.itemsOnSale[k]=this.items[j];
            this.itemsPromotion[j]=promotions[i].type;
          //  console.log('促销信息'+this.itemsPromotion[j]+'\n');
            break;
        }
      }
    }
  }
}
