import mongoose from "mongoose";

export const conectDB= async()=>{
  try {
    console.time("DB time in conection : ")
    await mongoose.connect("mongodb+srv://user1:Rki9t7e9q8GQt0pW@cluster0.nzkvch6.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB conected succesfully");
    console.timeEnd("DB time in conection : ")
  } catch (error) {
    console.log(error);
    console.log("An error ocurring during the conection to the DB");
  }
}