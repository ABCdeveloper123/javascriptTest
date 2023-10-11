// let count=0
// let i,j 
// for(j=2;j<=100;j++)
// {
// for( i=1;i<=j;i++)
// {
//   if(j%i==0)
//   count++
  
// }

// if(count==2)

// console.log(j)
// count=0


  
// }

// var num = 100;

var prime = 0;

for (var i=2; i<=10; i++){
    prime = 1;

    for( var j=2; j<=i/2; j++){
        if(i%j == 0){
            prime ++;
            break;
        }
    }
    if(prime ==1 ){
        console.log(i+"<br>");
    }
}