//TODO: Please write code in this file.
//拆分输入条码，取出barcode和数量；
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
//在allItems中找到输入商品
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
//获得输入商品的信息和数量
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
  var splitResults;
  var inputsNum=[];
  var inputsBarcodes=[];
  var listLength=0;
  for(var i=0;i<inputs.length;i++)
  {
    splitResults=InputSplit(inputs[i],'-');
    inputsNum[i]=splitResults.num;
    inputsBarcodes[i]=splitResults.barcode;
  }
  var listItems=listAccount(inputsBarcodes,inputsNum);
  listLength=listItems.items.length;
  var ListWithoutPromotion=new list(listItems.items,listItems.num);
  ListWithoutPromotion.priceWithoutPromotion();
  ListWithoutPromotion.getPromotion();
  var FinalList=new listWithPromotion(ListWithoutPromotion);
  FinalList.priceWithPromotion();
  var printNote=new print(FinalList);
  printNote.printReceipt();
}
