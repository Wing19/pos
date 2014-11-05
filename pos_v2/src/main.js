//TODO: Please wrrite code in this file.
function printInventory(inputs)
{
  var splitResults=[];
  for(var i=0;i<inputs.length;i++)
  {
    splitResults[i]=new inputSplit(inputs[i],'-');
    //console.log('实验打印'+splitResults[i].itemBarcode+' '+splitResults[i].itemNum+'\n');

  }
  var listInfo=new list(splitResults);
  for(var i=0;i<listInfo.listNum.length;i++)
  {
    //splitResults[i]=new inputSplit(inputs[i],'-');
    console.log('个数'+listInfo.listNum[i]+' 条形码'+listInfo.listBarcodes[i]+'\n');

  }

}
