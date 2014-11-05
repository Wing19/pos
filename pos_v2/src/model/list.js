function list(splitResults)
{
    var k=0;
    var num=[],barcodes=[];
    for(var i=0;i<splitResults.length;i++)
    {
      var position=barcodes.indexOf(splitResults[i].itemBarcode);
      console.log('position=='+position+'\n');
      if(position==-1)
      {
        num[k]=0;
        num[k]+=splitResults[i].itemNum;
        barcodes[k++]=splitResults[i].itemBarcode;
      }
      else
        num[position]+=splitResults[i].itemNum;
    }
      this.listNum=num;
      this.listBarcodes=barcodes;

  }
