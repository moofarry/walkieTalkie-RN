import { createAction } from "@reduxjs/toolkit";

const  userActions= {
  addUser: createAction<User>("ADD_USER")
}

export default userActions;