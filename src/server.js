import dotenv from "dotenv";

import { httpServer } from "./app.js";

dotenv.config();
const port = (+process.env.PORT || 3000);
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
