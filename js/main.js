const containerDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {

    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    
    containerDom.append(quadratino);
        
    if (i % 5 == 0 && i % 3 == 0 ) {
        console.log("fizzbuzz");
        quadratino.append("fizzbuzz");
        quadratino.classList.add('bgp');
    } else if (i % 5 ==0) {
        quadratino.append("buzz");
        quadratino.classList.add('bgy');
        console.log("buzz");
    } else if (i % 3 ==0) {
        quadratino.append("fizz");
        quadratino.classList.add('bgg');
        console.log("fizz")
    } else {
        quadratino.append(i);
        console.log(i);
    }

}



