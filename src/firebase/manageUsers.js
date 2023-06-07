//Importar acceso a firebase
import {
  db,
  ref,
  uploadBytes,
  storage,
  getDownloadURL, collection, addDoc
} from "../firebase/config.js";

async function createUser(user) {
  const { email, password, name, lastname, image } = user;
  let imageUrl = "";
  //Primero se sube la imagen
  if (!image) {
    console.log("No se ha seleccionado ninguna imagen");
    return;
  }

  const file = image;
  const storageRef = ref(storage, "images/" + file.name);

  try {
    await uploadBytes(storageRef, file);
    console.log("La imagen se cargó correctamente");

    imageUrl = await getDownloadURL(storageRef);
    console.log("URL de la imagen:", imageUrl);
  } catch (error) {
    console.log("Error al cargar la imagen:", error);
    return false;
  }

  try {
    const docRef = await addDoc(collection(db, "users"), {
      email,
      password,
      name,
      lastname,
      image: imageUrl,
    });
    console.log("DocRef: ", docRef);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export { createUser };
