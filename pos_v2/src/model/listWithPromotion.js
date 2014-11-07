function listWithPromotion(list)
{
  this.items=list.items;
  this.num=list.num;
  this.itemsPromotion=list.itemsPromotion;
  this.subPrice=list.subPrice;
  this.freeNum=[];
  this.savings=[];
  this.totalPrice=0;
  this.totalSavings=0;
  this.priceWithPromotion=function()
  {
    for(var i=0;i<this.items.length;i++)
    {
      this.savings[i]=0;
      this.freeNum[i]=0;
      switch(this.itemsPromotion[i])
      {
        case 'BUY_TWO_GET_ONE_FREE':
          this.freeNum[i]=parseInt(this.num[i]/3);//赠送的物品数目
          this.savings[i]=this.freeNum[i]*this.items[i].price;
          this.subPrice[i]=this.subPrice[i]-this.savings[i];
          break;
      }
      this.totalPrice+=this.subPrice[i];
      this.totalSavings+=this.savings[i];
    }
  }
}
