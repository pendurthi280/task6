var contactManager = new ContactManager();


function enterdetails() {
  document.getElementById('iframediv').style.display = 'block';
  document.getElementById('output').style.display = 'none';
}


function addContact1(contactModel) 
{
  var username = document.getElementById("Name");
  var useremail = document.getElementById("Email");
  var mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  var  phone = document.getElementById("Phone");
  var phonematch=/^[91][0-9]{11}$/;
  var landline=document.getElementById("Landline");
  var website=document.getElementById("WebSite");
  var address=document.getElementById("Address");
  if(username.value !=""  && phone.value !="" && website.value !=""  && address.value !="" &&  useremail.value !="" &&  useremail.value.match(mailformat) && phone.value.match(phonematch))
  {
  contactModel.Name = document.getElementById('Name').value;
  contactModel.Email = document.getElementById('Email').value;
  contactModel.Phone = document.getElementById('Phone').value;
  contactModel.Landline = document.getElementById('Landline').value;
  contactModel.Website = document.getElementById('WebSite').value;
  contactModel.Address = document.getElementById('Address').value;
  var addContact = contactManager.addContact(contactModel);
  console.log(addContact);
  displayUserData(addContact);
  }
  else
  {
    alert("enter correct data and full data");
  }
}

function displayUserData(addContact)
{
  var ul = document.getElementById("unorder");
  var li = document.createElement("li");
  li.id = "list";

  var heading = document.createElement("h1");
  heading.id = "heading";
  heading.appendChild(document.createTextNode(addContact.Name));

  var paragraph1 = document.createElement("p");
  paragraph1.id = "p1";
  paragraph1.appendChild(document.createTextNode(addContact.Email));

  var paragraph2 = document.createElement("p");
  paragraph2.id = "p2";
  //paragraph2.setAttribute('phoneli',phone.value);
  paragraph2.appendChild(document.createTextNode(addContact.Phone));

  var anchore = document.createElement("a");
  anchore.href = '#';
  anchore.onclick = function () 
  {
    displayContacts(addContact.id);
  }

  anchore.appendChild(heading);
  anchore.appendChild(paragraph1);
  anchore.appendChild(paragraph2);

  li.appendChild(anchore);
  ul.appendChild(li);

  document.body.appendChild(ul);
  document.getElementById('formData').reset();
  document.getElementById('iframediv').style.display = 'none';
}

var count=0;
 function generateUniqueId() 
 {
    if(count==0)
    {
      count=1;
    }
    else
    {
      count++;
    }
   return count;
 }










function editContact1(id) {
  mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  var phonematch=/^[91][0-9]{11}$/;
  var editedContact = contactManager.getById(id);
  console.log(editedContact);
  if (editedContact) {
    editedContact.Email = prompt("Enter the new email for " + id + ":", editedContact.email);
    editedContact.Phone = prompt("Enter the new phone number for " + id + ":", editedContact.phoneNumber);
    editedContact.Website = prompt("Enter the new  wedsite for " + id + ":", editedContact.wedsite);
    editedContact.Address = prompt("Enter the new  address for " + id + ":", editedContact.Address);
    if(editedContact.Email !="" && editedContact.Phone !="" && editedContact.Website  !=""  &&   editedContact.Address!="" &&    editedContact.Email.match(mailformat) && editedContact.Phone.match(phonematch) )
    {
     var updatedContact = contactManager.editContact(id, editedContact);
     console.log(updatedContact);
     displayContacts();
    }
    else
    {
      alert("enter correct data and full data");
    }
  }
  else {
    console.log("Contact not found.");
  }
}


function deleteAndReturnStatus(id) {
  var deletionStatus = contactManager.deleteContact(id);
  console.log(deletionStatus);
  displayContacts();
}


function displayContacts(id) 
{
  contactManager. getById(id);
  contactManager.get(id);
  document.getElementById('output').style.display = 'block';
  document.getElementById('iframediv').style.display = 'none';
  display(id);
}


 function display(id) 
{
  var output = document.getElementById("output");
  output.innerHTML = "";

  for (var i = 0; i < contactManager.contacts.length; i++) 
  {
    var contact = contactManager.contacts[i];
    if (contact.id == id) 
    {
      output.innerHTML += 
       "<div class=div1>"+ "<h2 class=style1>" + contact.Name + "</h2>" +
        
       "<div class=display1>"+ "<div class=imgedit>"+"<img src=Edit-icon.png class=image1>"+"<a onclick='editContact1(" + contact.id + ")'>Edit</a>"+"</div>"+
                              "<img src=delete2.png class=.image2>"+"<a  onclick='deleteAndReturnStatus(" + contact.id + ")'>Delete</a>"+"</div>" +"</div>"+
        "<p>" + "Email:" + contact.Email + "</P>"  +
        "<div>" + "Phone Number:"  + contact.Phone + "</div>" +
        "<div>" + "LandLine:" + contact.Landline + "</div>" +
        "<p>" + "Wedsite: " + contact.Website + "</p>" +
        "<p>" + "Address:" + contact.Address + "</p>";
    }
  }
}



  
    









