var bookMarkName=document.getElementById('bookmarkName');
var bookMarkUrl=document.getElementById('bookmarkURL');
var rowData=document.getElementById('rowData');
var bookMarklist;

if (localStorage.getItem('bookmarks')!=null) {
      bookMarklist=JSON.parse(localStorage.getItem('bookmarks'));
      displayRow(bookMarklist);

}
else{
    bookMarklist=[];
}



function addBookMark() {
      if (bookMarkName.value==""||bookMarkUrl.value=="") {
        window.alert("Please Enter Bookmark and Website")

    }
    else{
     

    var urlRegex = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    if (!urlRegex.test(bookMarkUrl.value)) {
        window.alert("Please enter a valid URL (must start with http:// or https://)");
        return;
    }

        
  var bookMark={
        name:bookMarkName.value,
        site:bookMarkUrl.value,


    }
  
  bookMarklist.push(bookMark);
  console.log(bookMarklist)
  clearInputs();
  localStorage.setItem('bookmarks',JSON.stringify(bookMarklist))
  displayRow(bookMarklist);



    }
    
  
}

function clearInputs() {
    bookMarkName.value=null;
    bookMarkUrl.value=null;

}

function displayRow(arr) {
     var box='';
    for (var i = 0; i < arr.length; i++) {
        
        box+=`
             <tr> <th scope="row" class="fw-bold">${i+1}</th>
            <td class="text-capitalize">${arr[i].name}</td>
            <td><a  href="${arr[i].site}" target="_blank" class="text-decoration-none"><button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>Visit </button></a></td>
            <td><button onclick="deleteRow(${i});" class="btn btn-delete pe-2" data-index="0"><i class="fa-solid fa-trash-can"></i> Delete </button></td>
            </tr>
          
            `
          
            

    }
    rowData.innerHTML=box;
    

}


function deleteRow(rowIndex) {
     console.log(rowIndex);
    bookMarklist.splice(rowIndex,1);
    console.log(bookMarklist)
    localStorage.setItem('bookmarks',JSON.stringify(bookMarklist));
    displayRow(bookMarklist)     

}