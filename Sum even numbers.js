https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

    function sumEvenNumbers(input) {
        let sumEven = 0;
        for(let i = 0; i < input.length; i++) {
            if(input[i] % 2 === 0) {
                sumEven += input[i];
            }
        }
        return sumEven
    }