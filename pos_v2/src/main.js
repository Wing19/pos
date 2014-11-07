//TODO: Please write code in this file.

function InputSplit(input,splitWord)
{
  var splitResult=input.split(splitWord);
  if(!splitResult[1])splitResult[1]='1';
  var x=splitResult[0];
  var y=parseInt(splitResult[1]);
  return {
      barcode:splitResult[0],
      num:parseInt(splitResult[1])
    };

}
function findItem(barcode)
{
  var allItems=loadAllItems();
  var item;
  for(var j=0;j<allItems.length;j++)
  {
    if(barcode==allItems[j].barcode)
    {
      item=allItems[j];
      break;
    }
  }
  return item;
}
function listAccount(inputsBarcodes,inputsNum)
{
    var k=0;
    var num=[],itemBarcodes=[],items=[],listItems=[];//
    for(var i=0;i<inputsBarcodes.length;i++)
    {
      var Position=itemBarcodes.indexOf(inputsBarcodes[i]);
      if(Position==-1)
      {
        num[k]=0;
        num[k]+=inputsNum[i];
        itemBarcodes[k]=inputsBarcodes[i];
        items[k++]=findItem(inputsBarcodes[i]);
      }
      else
        num[Position]+=inputsNum[i];
    }
    return {
      items:items,
      num:num
    };
  }
function printInventory(inputs)
{
//  var allItems=loadAllItems();
  var splitResults=[];
  var inputsNum=[];
  var inputsBarcodes=[];
  var listLength=0;
  for(var i=0;i<inputs.length;i++)
  {
    splitResults[i]=InputSplit(inputs[i],'-');
    inputsNum[i]=splitResults[i].num;
    inputsBarcodes[i]=splitResults[i].barcode;
  }
  var listItems=listAccount(inputsBarcodes,inputsNum);
  listLength=listItems.items.length;
//  for(var i=0;i<listItems.items.length;i++)
//  {
    //console.log('实验打印：名称'+listItems.items[i].name+' 数量：'+listItems.num[i]+'\n');
//  }
  var ListWithoutPromotion=new list(listItems.items,listItems.num);
  ListWithoutPromotion.priceWithoutPromotion();
  ListWithoutPromotion.getPromotion();
  var FinalList=new listWithPromotion(ListWithoutPromotion);
  FinalList.priceWithPromotion();
/*
  for(var i=0;i<listLength;i++)
  {
    console.log(' 名称'+FinalList.items[i].name+' 小计：'+FinalList.subPrice[i]+
      ' 赠送：'+FinalList.freeNum[i]+' 节省：'+FinalList.savings[i]+'\n');
  }
  console.log('总价格：'+FinalList.totalPrice+' 总节省：'+FinalList.totalSavings+'\n');
*/
  var printNote=new print(FinalList);
//  printNote.getTime();
//  printNote.printItems();
  printNote.printReceipt();
}
