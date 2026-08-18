const arr = [1,2,3,4,5,6];
console.log(arr)


const double_arr = arr.map(num=>num*2);
console.log(double_arr);

const odd_arr = arr.filter(num=>num % 2 == 0);
console.log(odd_arr);

const SUM_arr = arr.reduce((sum,num) => sum + num,0);
console.log(SUM_arr);

const studentMarks = [75, 92, 51, 64, 76, 68, 59, 85, 65];
console.log("Student Marks:", studentMarks);

const sort_marks = [...studentMarks].sort((a,b)=>a-b);
console.log(sort_marks)
