var studentInfo = [
    {
    Name: "Hanif",
    Id: 1,
    class: 12,
    TamilMark:90,
    EnglishMark:75,
    MathsMark:98,
    ScienceMark:100,
    SocialMark:99,
    Total:450,
    MaximumMark:500
},
  {
    Name: "Abdul",
    Id: 2,
    class: 12,
    TamilMark:95,
    EnglishMark:75,
    MathsMark:98,
    ScienceMark:100,
    SocialMark:99,
    Total:430,
    MaximumMark:500
  },
  {
    Name: "Hameed",
    Id: 3,
    class: 12,
    TamilMark:80,
    EnglishMark:75,
    MathsMark:98,
    ScienceMark:100,
    SocialMark:99,
    Total:410,
    MaximumMark:500
  },
 
]

var temp = [];
studentInfo.map((e,i)=>{
temp.push(`<tr><td>`+studentInfo[i].Name+`</td><td>`+studentInfo[i].Id+`</td><td>`+studentInfo[i].class+`</td><td>`+studentInfo[i].TamilMark+`</td><td>`+studentInfo[i].EnglishMark+`</td><td>`+studentInfo[i].MathsMark+`</td><td>`+studentInfo[i].ScienceMark+`</td><td>`+studentInfo[i].SocialMark+`</td><td>`+studentInfo[i].Total+`</td><td>`+studentInfo[i].MaximumMark+`</td><td><button type = "button" onclick = "Edit(`+i+`)">Edit</button></td><td><button type = "button" onclick = "Delete(`+i+`)">Delete</button></td></tr>`)
document.getElementById('details').innerHTML = temp.join("");
})

function Delete(i){
    var temp1 = [];
    studentInfo.splice(i, 1)
    studentInfo.map((e,i)=>{
      temp1.push(`<tr><td>`+studentInfo[i].Name+`</td><td>`+studentInfo[i].Id+`</td><td>`+studentInfo[i].class+`</td><td>`+studentInfo[i].TamilMark+`</td><td>`+studentInfo[i].EnglishMark+`</td><td>`+studentInfo[i].MathsMark+`</td><td>`+studentInfo[i].ScienceMark+`</td><td>`+studentInfo[i].SocialMark+`</td><td>`+studentInfo[i].Total+`</td><td>`+studentInfo[i].MaximumMark+`</td><td><button type = "button" onclick = "Edit(`+i+`)">Edit</button></td><td><button type = "button" onclick = "Delete(`+i+`)">Delete</button></td></tr>`)
      document.getElementById('details').innerHTML = temp1.join("");
})

}
var Editindex = 0;
var isedit = false;

function Edit(index){
    Editindex = index;
    isedit = true;
    document.getElementById('sumbit').innerHTML = 'Update';
    document.getElementById('name').value = studentInfo[index].Name;
    document.getElementById('Id').value = studentInfo[index].Id;
    document.getElementById('class').value = studentInfo[index].class;
    document.getElementById('Tamil').value = studentInfo[index].TamilMark;
    document.getElementById('English').value = studentInfo[index].EnglishMark;
    document.getElementById('Maths').value = studentInfo[index].MathsMark;
    document.getElementById('Science').value = studentInfo[index].ScienceMark;
    document.getElementById('Social').value = studentInfo[index].SocialMark;
    document.getElementById('Max').value = studentInfo[index].MaximumMark;
}
function sumbittext(){
    var temp2 = [];
    var updateValue = {
    Name:document.getElementById('name').value,
    Id:document.getElementById('Id').value,
    class:document.getElementById('class').value,
    TamilMark:document.getElementById('Tamil').value,
    EnglishMark:document.getElementById('English').value,
    MathsMark:document.getElementById('Maths').value,
    ScienceMark:document.getElementById('Science').value,
    SocialMark:document.getElementById('Social').value,
    Total : Number(document.getElementById('Tamil').value) + Number(document.getElementById('English').value )+
    Number(document.getElementById('Maths').value)+ Number(document.getElementById('Science').value) + Number(document.getElementById('Social').value),
    MaximumMark: document.getElementById('Max').value
    }
  
    if(isedit){
        studentInfo[Editindex] = updateValue;
    }else{
       studentInfo.push(updateValue)
    }
      studentInfo.map((e,i)=>{
        temp2.push(`<tr><td>`+studentInfo[i].Name+`</td><td>`+studentInfo[i].Id+`</td><td>`+studentInfo[i].class+`</td><td>`+studentInfo[i].TamilMark+`</td><td>`+studentInfo[i].EnglishMark+`</td><td>`+studentInfo[i].MathsMark+`</td><td>`+studentInfo[i].ScienceMark+`</td><td>`+studentInfo[i].SocialMark+`</td><td>`+studentInfo[i].Total+`</td><td>`+studentInfo[i].MaximumMark+`</td><td><button type = "button" onclick = "Edit(`+i+`)">Edit</button></td><td><button type = "button" onclick = "Delete(`+i+`)">Delete</button></td></tr>`)
        document.getElementById('details').innerHTML = temp2.join("");
    })
        
        document.getElementById('name').value ="";
        document.getElementById('Id').value ="";
        document.getElementById('class').value ="";
        document.getElementById('Tamil').value ="";
        document.getElementById('English').value ="";
        document.getElementById('Maths').value ="";
        document.getElementById('Science').value ="";
        document.getElementById('Social').value ="";
        document.getElementById('Max').value ="";
        document.getElementById('sumbit').innerHTML = 'AddNew'; 
        isedit = false;
}  

