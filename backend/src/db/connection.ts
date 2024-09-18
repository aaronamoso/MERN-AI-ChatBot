import { connect, disconnect } from "mongoose";

async function connectToDatabase () {

    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error ("Cannot connect to MongoDB");
    }

}

async function disconnectFromDatabase() {
    try {
        await disconnect(); //if something goes wrong, this disconnects it from the DB for security purposes
    } catch (error) {
        console.log(error);
        throw new Error ("Cannot disconnect to MongoDB");
    }
}

export {connectToDatabase, disconnectFromDatabase};