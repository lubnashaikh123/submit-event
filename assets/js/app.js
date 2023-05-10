//alert("hello----");

let cl = console.log;

const stdContainer = document.getElementById("stdContainer");
const stdForm = document.getElementById("stdForm");
const fnameControl = document.getElementById("fname");
const lnameControl = document.getElementById("lname");
const emailControl = document.getElementById("email");
const contactControl = document.getElementById("contact");

let stdArray =[
    {
        fname :"lubna",
        lname :"shaikh",
        email :"lubna@shaikh.com",
        contact :1234567890,
    },
    {
        fname :"Maryam",
        lname :"shaikh",
        email :"maryam@shaikh.com",
        contact :1245678934,
    },
    {
        fname :"Bushra",
        lname :"shaikh",
        email :"bushra@shaikh.com",
        contact :123456789,
    },
    {
        fname :"Heena",
        lname :"shaikh",
        email :"heena@shaikh.com",
        contact :12334567,
    }
    
    

]

const templating =(arr) => {
    let result = "";
             arr.forEach((std,i) =>{
             result += `
             <tr>
            <td>${i+1}</td>
            <td>${std.fname}</td>
            <td>${std.lname}</td>
            <td>${std.email}</td>
            <td>${std.contact}</td>
             </tr>`
})

stdContainer.innerHTML= result;
}

templating(stdArray);

const onStdSubmit=(eve)=>{
     eve.preventDefault();
     cl(`Std Is added`);
     let stdObj ={
        fname :fnameControl.value,
        lname :lnameControl.value,
        email :emailControl.value,
        contact:contactControl.value,
    }
    
   //cl(stdObj);
   stdArray.push(stdObj);
    eve.target.reset();
   templating(stdArray);

}
stdForm.addEventListener("submit",onStdSubmit)