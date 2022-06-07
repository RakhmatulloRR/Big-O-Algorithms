function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      //Big-O - O(n^2)
      console.log("let arr" + i + "_" + j + "=");
      if (arr[j] > arr[j + 1]) {
        let c = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = c;
      }
      console.log(arr);
    }
  }
}
const arr = [3, 2, 1, 0, -1, -2, -3];
bubbleSort(arr);
// console.log(arr); // [-6, -2, 4, 8, 20]

// sorting started
// sorting: (i = 1 )
let arr1_0 = [2, 3, 1, 0, -1, -2, -3];
let arr1_1 = [2, 1, 3, 0, -1, -2, -3];
let arr1_2 = [2, 1, 0, 3, -1, -2, -3];
let arr1_3 = [2, 1, 0, -1, 3, -2, -3];
let arr1_4 = [2, 1, 0, -1, -2, 3, -3];
let arr1_5 = [2, 1, 0, -1, -2, -3, 3];
// sorting: (i = 2 )
let arr2_0 = [1, 2, 0, -1, -2, -3, 3];
let arr2_1 = [1, 0, 2, -1, -2, -3, 3];
let arr2_2 = [1, 0, -1, 2, -2, -3, 3];
let arr2_3 = [1, 0, -1, -2, 2, -3, 3];
let arr2_4 = [1, 0, -1, -2, -3, 2, 3];
let arr2_5 = [1, 0, -1, -2, -3, 2, 3];
// sorting: (i = 3 )
let arr3_0 = [0, 1, -1, -2, -3, 2, 3];
let arr3_1 = [0, -1, 1, -2, -3, 2, 3];
let arr3_2 = [0, -1, -2, 1, -3, 2, 3];
let arr3_3 = [0, -1, -2, -3, 1, 2, 3];
let arr3_4 = [0, -1, -2, -3, 1, 2, 3];
let arr3_5 = [0, -1, -2, -3, 1, 2, 3];
// sorting: (i = 4 )
let arr4_0 = [-1, 0, -2, -3, 1, 2, 3];
let arr4_1 = [-1, -2, 0, -3, 1, 2, 3];
let arr4_2 = [-1, -2, -3, 0, 1, 2, 3];
let arr4_3 = [-1, -2, -3, 0, 1, 2, 3];
let arr4_4 = [-1, -2, -3, 0, 1, 2, 3];
let arr4_5 = [-1, -2, -3, 0, 1, 2, 3];
// sorting: (i = 5 )
let arr5_0 = [-2, -1, -3, 0, 1, 2, 3];
let arr5_1 = [-2, -3, -1, 0, 1, 2, 3];
let arr5_2 = [-2, -3, -1, 0, 1, 2, 3];
let arr5_3 = [-2, -3, -1, 0, 1, 2, 3];
let arr5_4 = [-2, -3, -1, 0, 1, 2, 3];
let arr5_5 = [-2, -3, -1, 0, 1, 2, 3];
// sorting: (i = 6 )
let arr6_0 = [-3, -2, -1, 0, 1, 2, 3];
let arr6_1 = [-3, -2, -1, 0, 1, 2, 3];
let arr6_2 = [-3, -2, -1, 0, 1, 2, 3];
let arr6_3 = [-3, -2, -1, 0, 1, 2, 3];
let arr6_4 = [-3, -2, -1, 0, 1, 2, 3];
let arr6_5 = [-3, -2, -1, 0, 1, 2, 3];
// sorting finished
