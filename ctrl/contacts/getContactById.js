const listContacts = require("./listContacts")

async function getContactById(contactId) {
    try {
        const contacts = await listContacts()
        const requestedContact = contacts.find(contact => contact.id === contactId)
        if (!requestedContact) throw new Error(`Contact with id: ${contactId} not foud`);
        return requestedContact
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getContactById