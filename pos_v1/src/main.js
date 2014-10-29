//TODO: Please write code in this file.

function printInventory(input)
{
  var list=loadAllItems();
  var pro=loadPromotions();
  var frePos=[];//免费物品在list中的下标
  var freNum=[];//该物品赠送几个
  var amount=[];//,spc=[];//spc数组用来存储用户购买产品的code
  for(var i=0;i<list.length;i++) amount[i]=0;//amount下标存储列表中对应下表物品的数量
  //var lastcode='0';
  var k = 0;
  var pos=[];//用来存储用户购买商品在list中的下标
  var sum=0;
  var freSum=0;
  console.log("***<没钱赚商店>购物清单***\n");
  for(var i=0;i<input.length;i++)
  {
    var arr=input[i].split("-");
    if(!arr[1])arr[1]='1';
    var num=parseInt(arr[1]);
    //amount[parseInt(arr[0])]+=num;
    for(var j=0;j<list.length;j++)
    {
      if(arr[0]==list[j].barcode)
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
    var p=pos[i];//用户购买商品在list以及amount中的位置
    var code=list[p].barcode;
    for(j=0;j<pro[0].barcodes.length&&code!=pro[0].barcodes[j];j++);
    if(j<pro[0].barcodes.length)
    {
        freNum[k]=parseInt(amount[p]/3);//赠送的物品数目
        frePos[k]=p;//赠送物品在list中的位置，用以获取赠送物品的名称等信息
        amount[p]=freNum[k]*2+amount[p]%3;//需要计算价格的物品数目
        //console.log("名称:%s,数量:%d%s,单价:%d,小计：%d\n",
                  //list[p].name,amount[p]+freNum[k],list[p].unit,list[p].price,amount[p]*list[p].price);
        console.log('，名称：'+list[p].name+'，数量:'+(amount[p]+freNum[k])+list[p].unit+
              '，单价:'+list[p].price.toFixed(2)+'(元)，小计:'+(amount[p]*list[p].price).toFixed(2)+'(元)'+'\n');
        sum+=amount[p]*list[p].price;//计算物品价格总和
        freSum+=freNum[k]*list[p].price;//计算节省的钱数
        k++;
    }
  else
    //if(j==3)
    {
    //  console.log("名称:%s,数量:%d%s,单价:%d,小计：%d\n",
      //        list[p].name,amount[p],list[p].unit,list[p].price,amount[p]*list[p].price);
      console.log('，名称：'+list[p].name+'，数量:'+amount[p]+list[p].unit
                +'，单价:'+list[p].price.toFixed(2)+'(元)，小计:'+(amount[p]*list[p].price).toFixed(2)+'(元)'+'\n');
      sum+=amount[p]*list[p].price;
    }
  }


 console.log('----------------------\n'+'挥泪赠送商品\n');
  for(var i=0;i<k;i++)
  {
    var p=frePos[i];
  //  console.log('名称:%s,数量:%d%s\n',list[p].name,list[p].unit,freNum[i]);
    console.log('，名称：'+list[p].name+'，数量:'+freNum[p]+list[p].unit+'\n');
  }
  console.log('----------------------');
  console.log('总计'+sum.toFixed(2)+'(元)\n');
  console.log('节省'+freSum.toFixed(2)+'(元)\n');


}
