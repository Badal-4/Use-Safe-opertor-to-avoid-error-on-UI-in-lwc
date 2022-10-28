let fName = this.template.querySelector("fname").value; -----> It will throw an error on UI 

Insted of this we should do like this

let fName = this.template.querySelector("fname")?.value;
