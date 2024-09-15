// ----------------es5----------------
// var a = "uzaima";
// let fullName="uzaima bari";
// const name ="uzaima";
// var a =" sheikh";
// console.log(a);

// =============template - literals========
// let firstName ="uzaima";
// let lastName ="bari"
// let age = 19;
// console.log("I am " + firstName , lastName + "\n" + "I am " + age + " year old" )
// console.log(`I am ${firstName} ${lastName}
// I am ${age} year old`);
// ;
// ==========arrow function ========
// let sum =()=>
//     {
//     let value1=+prompt()
//     let value2=+prompt()
// return value1+value2

// }
//  console.log (sum());
// let araa=[1,2,3];
// let ara1=[7,8,9]
// let m =[...araa,4,5,6,...ara1]
// console.log(m);
// function myfun(a,b,...c){
//     let f=a+ b+c
// }
// myfun(20,20,30,40,40)

// function myfun ( a,b,...c){
//     let sum =a+b+c
//     console.log(sum);

// }
//   myfun(30,20,40,40);

// let =""
// let hello= (a,b,c)=>{
//   // return "helloworld"
//   return
//    a+b+c
// }
// console.log(hello(10,20,30));

// console.log("uzaima");
// console.log("bari");
// setInterval(() => {
//   console.log("uzaima2");

// }, 3000);
// console.log("hassan");
// console.log("saqib");

// let myArra=["sunday","monday","tuesday","wednsday","thursday","friday","saturday"];

// let num=[1,2,3]
// let num2=[6,7,8,9]
// let sum=[...num,4,5,...num2]
// console.log(sum);

// var fun=()=>{
//   console.log(1,2,4);

// }
// // fun()
// function mfun(a,b,fun){
//   return a+b+fun

// }
// mfun(12 ,23,2)
// let promis = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
// let pasiawapis = prompt("enter yor value")
// if(pasiawapis==="yes"){
//   resolve("pasia mil gya")
// }    else{
//   reject("police report")
// }
//   },1000)
// });

// promis.then((massage)=>{
//   console.log(massage);
// alert(massage)
// }).catch((error)=>{
//   console.log(error);
//   alert(error)

// })
// console.log(promis);

// ================= Async a wait============
// async function fetchgithub() {
//   console.log("Inside async function");
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response);

//   const user = await response.json();
//   console.log(user);
//   return user
// }
// fetchgithub();
// console.log(fetchgithub());

// let userdata =fetchgithub()
// userdata.then((data)=>{
// console.log(data);

// }).catch((error)=>{
//   console.log(error);

// })

// let  promis =new Promise( (resolve,reject)=>{
//     setTimeout(()=>{
// let pasiawapis=prompt("Enter Your Value")
// if (pasiawapis==="yes"){
//     resolve("pasia mil gya")

// }else{
//     reject("police complain")
// }
//     },100)
// } );
// promis.then((massage)=>{
// console.log(massage);

// }).catch((error)=>{
//     console.log(error);

// })
// console.log(promis);
// async function fatchapi() {
//     const responce =await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(responce);

//     const user = await responce.json()
//    console.log(user);
//    return user
// };
// fatchapi();
// let userdata= fatchapi()
// userdata.then((massage)=>{
//     console.log(massage);

//     }).catch((error)=>{
//         console.log(error);

//     });
// async function fatchData(){
//     let div =document.getElementById("box").value;
//     const post =await fetch("https://jsonplaceholder.typicode.com/posts");

//     console.log(post);
//     let post1 = await post.json()

//     console.log(post1);
// const user = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(user);
//     let user1 =await user.json()
//     console.log(user1);
//     for (let i=0;i<user1.)
// };
// fatchData();
let mainDiv = document.getElementById("main");

async function fatchData() {
  let user = await fetch("https://jsonplaceholder.typicode.com/users");
  // console.log(user);

  let user1 = await user.json();
  console.log(user1);

  let post = await fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log(post);
  let post1 = await post.json();
  console.log(post1);

  return { user1, post1 };

  // main.appendChild(post1)
}
fatchData();
let userData = fatchData();
userData
  .then(({ user1, post1 }) => {
    for (let i = 0; i < user1.length; i++) {
      let mainUser = user1[i];
      let userid = document.createElement("h1");
      userid.innerHTML = `userid ${mainUser.id}`;
      mainDiv.appendChild(userid);
      let username = document.createElement("h2");
      username.innerHTML = `username: ${mainUser.name}`;
      mainDiv.appendChild(username);
      for (let j = 0; j < post1.length; j++) {
        let mainpost = post1[j];
        if (mainpost.userId === mainUser.id) {
          let postId = document.createElement("p");
          postId.innerHTML = `postId ${mainpost.userId}`;
          mainDiv.appendChild(postId);
          let title = document.createElement("p");
          title.innerHTML = `post title: ${mainpost.title}`;
          mainDiv.appendChild(title);

             let body = document.createElement("p");
          body.innerHTML = `post body: ${mainpost.body}`;
          mainDiv.appendChild(body);
          
        }
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
