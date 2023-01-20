function Myform(event){
    event.preventDefault();

    const myformdata=new FormData(event.target);

    const forData={ };

    myformdata.forEach((value,key) =>{
        forData[key]=value;
    });
    console.log(forData);
};



const form=document.getElementById("form");
form.addEventListener("submit",Myform);