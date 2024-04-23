let max=7;
let i=0;
while(i<max){
    star="*";
    spase="";
    for(j=0;j<max-i;j++)
    {
        spase+=" ";
    }
    for(j=0;j<2*i;j++)
    {
        star+="*"
    }
    i++
    console.log(spase+star)
}