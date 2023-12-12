
```js
Describe Game.prototype.arrayCheck

Test: "It should be able to check if two arrays have the same values"
Code: 
    let ary1 = [1, 2, 3, 4];
    let ary2 = [1, 2, 3, 4];
Expected Output: true; true; true; true;

Test: "It should be able to check if two arrays have different values"
Code: 
    let ary1 = [1, 2, 3, 4];
    let ary2 = [1,"Kittens","Are","Cute"];
Expected Output: true; false; false; false;

Test: "It should be able to check if two arrays have different values and when a false value is found stop comparing the arrays"
Code: 
    let ary1 = [1, 2, 3, 4];
    let ary2 = [1,"Kittens","Are","Cute"];
Expected Output: true; false;

```