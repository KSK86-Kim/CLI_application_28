const {v4} = require('uuid')
const fs = require('fs').promises
const listContacts = require('./listContacts')
const ContactPath = require('../../ContactPath')

async function addContact({ email, name, phone}) {
    try {
        const contacts = await listContacts()
        const id = v4()
        const dataCreat = new Date()
        const newContact = { id, email, name, phone, dataCreat}
        const newContacts = [...contacts, newContact];
        const newContactStr = JSON.stringify(newContacts)
        await fs.writeFile(ContactPath, newContactStr)
        return newContact;
        
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = addContact