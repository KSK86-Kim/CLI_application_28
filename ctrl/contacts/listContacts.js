 const contactPath = require('../../ContactPath')
 const fs = require('fs').promises
 
 async function listContacts() {
    try {
        const data = await fs.readFile(contactPath, "utf-8")
        const contacts = JSON.parse(data)   
        return contacts

    } catch (error) {
        console.log(error.message);
    }
}

module.exports  = listContacts