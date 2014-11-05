function inputSplit(input,splitWord)
{
///
//for(var i=0;i<inputs.length;i++)
  //{
    var splitResult=input.split(splitWord);
    if(!splitResult[1])splitResult[1]='1';
  //}
  this.itemBarcode=splitResult[0];
  this.itemNum=parseInt(splitResult[1]);
///
//this.listBarcode=inputs;
//this.listNum=splitWOrd;
}
