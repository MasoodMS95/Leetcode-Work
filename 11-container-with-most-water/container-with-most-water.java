class Solution {
    public int maxArea(int[] height) {
        int l = 0, r = height.length - 1, best = -1;
        while(l < r){
            int length = r-l;
            int lowestHeight = Math.min(height[l], height[r]);
            int area = length * lowestHeight;
            if(best < (area)){
                best = area;
            }
            if(height[l] < height[r]){l++;}
            else{r--;}
        }
        return best;
    }
}