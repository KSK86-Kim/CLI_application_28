const listContacts = require("./listContacts");
const updateContacts = require("./writeUpdate");

async function update(contactID, updateInfo) {
    try {
      const contacts = await listContacts();
      const index = contacts.findIndex((contact) => contact.id === contactID);
      console.log(index);
      
      if (index === -1) throw new Error(`Contact with id=${id} not found`);
     contacts[index] = {...contacts[index], ...updateInfo}
     console.log( contacts[index]);
     
     console.table(contacts);
     await updateContacts(contacts)
     return contacts[index]
    } catch (error) {
      console.log(error.message);
    }
  }
  
  module.exports = update;
  