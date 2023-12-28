class ContactManager
 {
  constructor() {
    this.contacts = [];
  }



  addContact(contactModel) {
    var id = generateUniqueId();
    contactModel.id = id;
    this.contacts.push(contactModel);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    return contactModel;
  }

  editContact(id, updatedContactModel) {
    var index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts[index] = updatedContactModel;
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
    return updatedContactModel;
  }


  deleteContact(id) {

    var index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      return true;
    }
    return false;

  }
   getById(id) 
  {
    return this.contacts.find(contact => contact.id === id) || null;
        
  }
    
  
}
