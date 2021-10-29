import axios from "axios";

axios.defaults.baseURL =
  "https://my-json-server.typicode.com/Kosano20/goit-react-hw-07-phonebook";

export async function getContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
  return id;
}
