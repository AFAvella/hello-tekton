import { connect } from "mongoose";

export async function startConn() {
  // Cambiar la ruta y el puerto
  await connect("mongodb://169.48.255.194:32513/clientsdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Database is connected");
}
