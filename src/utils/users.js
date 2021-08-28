import db from '../firebase/firebase'

const addUser = (email, password, name, lastName, phoneNumber) => {
    return db.collection("users").add({
        email,
        password,
        name,
        lastName,
        phoneNumber
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

export default addUser;
