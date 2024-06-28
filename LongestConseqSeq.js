
    longestConsecutive(nums) {
     const newSet = new Set(nums)
        let maxl = 0;
for( let num of newSet){

        if(!newSet.has(num-1)){
            let currentNum = num;
           let currentL =1
            while(newSet.has(currentNum+1)){
         currentNum++;
        currentL ++
            }
            maxl = Math.max(maxl,currentL)
        }
    }
    return maxl

    }
