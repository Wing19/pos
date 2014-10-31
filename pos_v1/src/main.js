//TODO: Please write code in this file.

function printInventory(input)
{
  var allItems=loadAllItems();
  var pro=loadPromotions();
  var frePos=[];//免费物品在allItems列表中的下标
  var freNum=[];//该物品赠送几个
  var amount=[];//存储用户购买各个商品的数量,按商品在商品列表中的顺序存放
  for(var i=0;i<allItems.length;i++) amount[i]=0;
  var pos=[];//用来存储用户购买商品在allItems中的下标
  var sum=0,k=0,freeSum=0;
  var output= '***<没钱赚商店>购物清单***\n'
  for(var i=0;i<input.length;i++)
  {
    var arr=input[i].split("-");
    if(!arr[1])arr[1]='1';
    var num=parseInt(arr[1]);
    //amount[parseInt(arr[0])]+=num;
    for(var j=0;j<allItems.length;j++)
    {
      if(arr[0]==allItems[j].barcode)
      {
        amount[j]+=num;
        if(j!=pos[k])
        {
          k++;
          pos[k]=j;
        }
        break;
      }
    }
  }
  k=0;
  for(var i=1;i<pos.length;i++)
  {
    var p=pos[i];//用户购买商品在allItems列表中以及amount中的位置
    var code=allItems[p].barcode;
    for(j=0;j<pro[0].barcodes.length&&code!=pro[0].barcodes[j];j++);
    if(j<pro[0].barcodes.length)
    {
        freNum[k]=parseInt(amount[p]/3);//赠送的物品数目
        frePos[k]=p;//赠送物品在allItems列表中的位置，用以获取赠送物品的名称等信息
        amount[p]=freNum[k]*2+amount[p]%3;//需要计算价格的物品数目
        output+='名称：'+allItems[p].name+'，数量：'+(amount[p]+freNum[k])
                  +allItems[p].unit+'，单价：'+allItems[p].price.toFixed(2)
                  +'(元)，小计：'+(amount[p]*allItems[p].price).toFixed(2)+'(元)'+'\n'
        sum+=amount[p]*allItems[p].price;//计算物品价格总和
        freeSum+=freNum[k]*allItems[p].price;//计算节省的钱数
        k++;
    }
  else
    {
      output+='名称：'+allItems[p].name+'，数量：'+amount[p]+allItems[p].unit
                +'，单价：'+allItems[p].price.toFixed(2)+'(元)，小计：'
                +(amount[p]*allItems[p].price).toFixed(2)+'(元)'+'\n'
      sum+=amount[p]*allItems[p].price;
    }
  }
output+='----------------------\n'+'挥泪赠送商品：\n'
  for(var i=0;i<k;i++)
  {
    var p=frePos[i];
    output+='名称：'+allItems[p].name+'，数量：'+freNum[i]+allItems[p].unit+'\n'
  }
  output+='----------------------\n'
          +'总计：'+sum.toFixed(2)+'(元)\n'+'节省：'
          +freeSum.toFixed(2)+'(元)\n'+'**********************';
  console.log(output);
}
