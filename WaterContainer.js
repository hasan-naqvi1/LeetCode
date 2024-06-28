function maxWater{
let maxarea = 0;
let left = 0;
let right =heights.length-1;

while (left<right){
  const   width = right - left;
    const area = width*(Math.min(heights[left],heights[right]))
    maxarea = Math.max(area,maxarea);

if(heights[left]<heights[right]){
    left ++
}else{
    right --
}
}
return maxarea
}