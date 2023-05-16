function getNum(num){
    document.getElementById('result').value += num;
}
function clearNum(){
    document.getElementById('result').value ='';
}
function removeNumb(){
    var res =  document.getElementById('result').value;
    document.getElementById('result').value =  document.getElementById('result').value.slice(0,res.lenght-1)
}
function getResults(){
   // console.log(document.getElementById('result').value)
    document.getElementById('result').value = eval( document.getElementById('result').value)
    
}
