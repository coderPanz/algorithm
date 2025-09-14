function merge(nums1, m, nums2, n) {
  let i = nums1.length - 1
  m--
  n--

  while (n >= 0) {
    while (m >= 0 && nums1[m] > nums2[n]) {
      // 交换元素并移动指针
      ;[nums1[i], nums1[m]] = [nums1[m], nums1[i]]
      i--
      m--
    }
    // 交换元素并移动指针
    ;[nums1[i], nums2[n]] = [nums2[n], nums1[i]]
    i--
    n--
  }
}


const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

merge(nums1, m, nums2, n)
console.log(nums1)// 技法解析：
```md
  三指针：i、m、n
  i：指向nums1的末尾
  m：指向nums1的末尾
  n：指向nums2的末尾

  1. 从后往前遍历nums1和nums2
  2. 如果nums1[m] > nums2[n]，则将nums1[m]和nums1[i]交换
  3. 如果nums1[m] <= nums2[n]，则将nums2[n]和nums1[i]交换
  时间复杂度 O (m+n) 和空间复杂度 O (1)
  ```
