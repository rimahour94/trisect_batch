let obj = {
    fullname: "Tanya",
    id: 123,
    address: "Noida",
    fun: function () {
      console.log("Regular function");
    },
    funArrow: () => {
      console.log("Arrow Function");
    },
    employmentHistory: {
      compnayName: "Facebook",
      salary: 3000000,
      companyAddr: "New York",
    },
  };
  
  Object.freeze(obj);
  
  obj.company = "GOOGLE";
  // delete obj.address;
  // let a=90
  
  // newObj.fun();
  // newObj.funArrow();
  
  console.log(obj.employmentHistory.compnayName);
  // ES6
  // object destructuring
  const { fullname, address, fun, funArrow, company, employmentHistory } = obj;
  const { companyAddr, compnayName, salary } = employmentHistory;
  // console.log(fullname, address, employmentHistory);
  // console.log(salary);
  
  // assigning old object to new Object
  // ES6-> spread operator
  let newObj = { ...obj };
  newObj.fullname = "Tanya ABCDE";
  
  // console.log(newObj,obj)
  
  obj = { ...obj, college: "DU" };
  
  console.log(obj);
  
  // get keys and get values
  
  let getKeys = Object.keys(obj);
  
  // console.log(getKeys);
  
  let getValues = Object.values(obj);
  
  // console.log(getValues);
  
  // const myObj = Object.create({});
  // myObj.myname="Ritesh"
  // console.log(myObj);
  
  
  
  const me = Object.create({
      isHuman: false,
      printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      },
    });
    console.log(me);
  
  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
  //me.isHuman = true; // Inherited properties can be overwritten
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"
  