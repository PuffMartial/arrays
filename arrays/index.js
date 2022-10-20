// const fruits = ["apple","orange","watermelon","peach"
// ]
// console.log(fruits[1])

// const fruits = ["apple","orange","watermelon","peach"
// ]
// const fruits2 = [...fruits]
// fruits2.push("bluebarries")
// console.log(fruits, fruits2)


// const fruits = ["apple","orange","watermelon","peach"
// ]
// fruits.push("grapes");
// fruits.push("pineapple");
// console.log(fruits)
// fruits.pop("apple")


// const fruits = ["apple","orange","watermelon","peach"
// ]
// fruits.push("grapes");
// fruits.push("pineapple");
// fruits.pop();
// fruits.unshift("coconut");
// console.log(fruits)

// const fruits = ["apple","orange","watermelon","peach"
// ]
// const waterlonIdex = fruits.indexOf("watermelon");

// console.log(fruits[fruits.length-1]);


// const fruits = ["apple","orange","watermelon","peach"
// ]
// const watermelonIndex = fruits.indexOf("watermelon");
// fruits[watermelonIndex] = "blue watermelon";
// console.log(fruits);


// const fruits = ["apple","orange","watermelon","peach"
// ]
// const watermelonIndex = fruits.indexOf("watermelon");
// fruits[watermelonIndex] = "blue watermelon";
// console.log(fruits);
// if(fruits.includes("orange")){
//     console.log("Throw an alert")
// };

// const fruits = ["apple","orange","watermelon","peach"]
// const waterlonIdex = fruits.indexOf("watermelon")
// fruits.splice(waterlonIdex, 3);
// console.log(fruits);

// const fruits = ["apple","orange","watermelon","peach"]
// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i], i);
// }
// const fruits = ["apple","orange","watermelon","peach"]
// fruits.forEach((fruits, index) =>{
//  console.log(fruits, index);
// });



// const post = {
//     id:"rrrrrr999999",
//     likes: 0,
//     username: "kevinmhlambiso",
//     timelamp: "13:50",
//     Comments: []
// }

// const posts = [{
//     id:"rrrrrr999999",
//     likes: 30,
//     username: "kevinmhlambiso",
//     timelamp: "13:50",
//     Comments: [
//         {
//          id:"8uy84op5395",
//          username:"kevinmhlambiso",
//          comment:"cool pic"
//         }
//     ]
// }];
// posts.push(post,{
//     id:"rrrrrr999999",
//     likes: 0,
//     username: "Ziadadavids",
//     timelamp: "13:50",
//     Comments: []
// },
//     {
//     id:"rrrrrr999999",
//     likes: 0,
//     username: "kevinmhlambiso",
//     timelamp: "13:50",
//     Comments: []
// },
// {
//     id:"rrrrrr999999",
//     likes: 0,
//     username: "kevinmhlambiso",
//     timelamp: "13:50",
//     Comments: []
// },
// {
//     id:"oourrr99ytd9",
//     likes: 100,
//     username: "asandadavis",
//     timelamp: "20:50",
//     Comments: []
// }

// );


// posts.pop(post,{
//     id:"oourrr99ytd9",
//     likes: 100,
//     username: "asandadavis",
//     timelamp: "20:50",
//     Comments: []
// })
// console.log(posts.map((item, index) => {
//     return{...item, shares: 0}
// }))

// console.log(posts.map((item, index) => {
//     return{...item, duration: 0}
// }))

// console.log(posts.filter((item) => item.Comments.length === 0))

// );
// posts.map((item, index) => {
//     return { ...item, shares: 0}
// }).forEach((item, index) => {
//   console.log(`
//   ${item.username}  | ${item.timelamp}
//   IMAGE
//   ${item.likes} likes | ${item.comments.length} comments | ${item.shares} shares
// `)
// })
// console.log(posts.filter((item, index) => {
//    return (item.likes < 50);
// }))
// console.log(posts.find((item) => item.id == 0 ));

