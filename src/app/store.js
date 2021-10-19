import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export default configureStore({
//     reduce: {},
//     middleware: getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   });
