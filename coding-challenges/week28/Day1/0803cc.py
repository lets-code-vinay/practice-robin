class Solution(object):
   def canJump(self, nums):
      n = len(nums)-1
      for i in range(n-1,-1,-1):
         if nums[i] + i>=n:
            n = i
      return n ==0
ob1 = Solution()
print(ob1.canJump([2,3,1,1,4]))