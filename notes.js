console.log("smroto");
//if user add somthing in storage
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
    let addtxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesobj=[];

    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj))
    addtxt.value="";
    //console.log(notesobj);
    showNotes();


})

//code for showing notes that we added..
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesobj=[];

    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index) {
        
    
    html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> Note ${index + 1}</h5>
      <hr>
      <p class ="card-text" id="gr">${element}</p>
      <button id="${index}" onclick="deleteNotes(this.id)" class="bttnprim">Delete</button>
    </div>
  </div>`;
    });
    let noteselem=document.getElementById("notes");
    if(notesobj.length!=0)
    {
        noteselem.innerHTML=html;
    }
    else
    {
        noteselem.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
//function to delete..
function deleteNotes(index){
    let notes=localStorage.getItem("notes");
    if(notes == null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
}