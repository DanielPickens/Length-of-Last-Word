  const lengthOfLastWord = function(s) {
    s = s.trim();
    let count = 0;
    for (let i = s.length-1; i>=0; i--){
        if(s[i] === " " ){break;}
        
        else{count +=1;}
        
    }
    return count;
};


/*
Success
Details 
Runtime: 64 ms, faster than 96.47% of JavaScript online submissions for Length of Last Word.
Memory Usage: 38.8 MB, less than 48.09% of JavaScript online submissions for Length of Last Word.
*/