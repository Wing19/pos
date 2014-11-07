//商品属性列表，每种商品的属性包括（名称，数量，单位，单价，忽略促销的价格，参加哪种促销活动）
function list(items,num)
{
  this.items=items||[];
  this.num=num||[];
  this.subPrice=[];
  this.itemsPromotion=[];
  this.length=items.length;
  this.priceWithoutPromotion=function()
  {
    for(var i=0;i<this.length;i++)
      this.subPrice[i]=this.items[i].price*this.num[i];
  }
  this.getPromotion=function()
  {
    var promotions=loadPromotions();
    for(var j=0;j<this.length;j++)
    {
      for(var i=0;i<promotions.length;i++)
      {
        if(promotions[i].barcodes.indexOf(this.items[j].barcode)>=0)
        {
            this.itemsPromotion[j]=promotions[i].type;
            break;
        }
      }
    }
  }
}
