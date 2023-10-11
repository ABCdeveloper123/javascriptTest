// let n=15; 

 let Pyramid = n;m; 
 for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= m; j++) {
      if (j <= i) {
        row += ' ';
      } else {
        row += 'x';
      }
    }
    console.log(row);
 }
 console.log();


drawBoxPyramid(5, 5);