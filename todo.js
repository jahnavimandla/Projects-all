function addTask()
{
  var taskinput=document.getElementById("taskinput").value
  var tasklist =document.getElementById("tasklist")
  if(taskinput=="")
    {
      alert("please enter the task")
      return
    }  
   var listItems =document.createElement('li')
   listItems.innerText=taskinput
   tasklist.appendChild(listItems)
     
   var buttoncontainer=document.createElement('div')
   listItems.appendChild(buttoncontainer)
   buttoncontainer.className="task-button"
   
   var deleteButton=document.createElement('button')
   buttoncontainer.appendChild(deleteButton)
   deleteButton.innerText="Delete"
   deleteButton.onclick=function()
   {
    tasklist.removeChild(listItems)
   }

   var CompleteButton=document.createElement('button')
   buttoncontainer.appendChild(CompleteButton)
   CompleteButton.innerText="Complete"
   CompleteButton.onclick=function()
   {
    listItems.classList.toggle('Completed')
   }
   taskinput.value==" "

}