let get = x => document.getElementById(x);
let sel = y => document.querySelector(y);

const reg = document.forms['registration'];
let users = [];

get('save').addEventListener('click', function(){
   const user = new User(reg.name.value,reg.sName.value,reg.email.value,reg.password.value);

   if(localStorage.length > 0 && localStorage.getItem('users')){
       users = JSON.parse(localStorage.getItem('users'))
   }

    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
})

class User  {
    constructor(name,lastName,email,password){
        this.firstName = name,
        this.lastName = lastName,
        this.email = email,
        this.password = password
    }
}


get('openPageIn').addEventListener('click',function(){
    get('newAc').style.display = 'none';
    get('in').style.display = 'flex';
})


get('openPageNewAc').addEventListener('click', function(){
    get('newAc').style.display = 'flex';
    get('in').style.display = 'none';
});

let emailIn = get('emailIn').value;
let passwordIn = get('passwordIn').value;

get('signIn').addEventListener('click', function(){
   
  let some = JSON.parse(localStorage.getItem('users'));
  console.log((some)[2].password); 

  for(let i = 0; i<localStorage.length;i++){
      if(password==some[i].password ){
          alert('Congratulations')
      }

      console.log(emailIn);
      console.log(passwordIn);
  }
   
})