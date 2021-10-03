  const lengthOfLastWord = function(s) {
    s = s.trim();  //setting method of trim as property of s, where the trim() method removes whitespace from both ends of s 
    let count = 0;
    for (let i = s.length-1; i>=0; i--){  //for loop will traverse the array of s  and if element i on the array's indice correlates, it will find correlation enough to continue iteration, 
        if(s[i] === " " ){break;}
        
        else{count +=1;}  // setting constraint so until for loop has iterated across array and found value of 0 , traverse and return count value
        
    }
    return count;  
};


/*
Success
Details 
Runtime: 64 ms, faster than 96.47% of JavaScript online submissions for Length of Last Word.
Memory Usage: 38.8 MB, less than 48.09% of JavaScript online submissions for Length of Last Word.
*/
