import { app } from "./app";
import {getAllUsersName} from "./endpoints/getAllUserName"
import {getAllUsersType} from "./endpoints/getUsersType"
import {getAllUsersByOrder} from "./endpoints/getAllUsersByOrder"
import {getAllUserPage} from "./endpoints/getAllUserPage"

app.get("/user-name", getAllUsersName)

app.get("/user-type/:type", getAllUsersType)

app.get("/user-order", getAllUsersByOrder )

app.get("/user-order-page", getAllUserPage )