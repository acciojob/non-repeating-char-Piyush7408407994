function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        if (count === 1) {
            return str[i];
        } else {
			return null; 
		}
    }

}

 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
