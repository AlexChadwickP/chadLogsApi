import server from "./src/server.js";
import dotenv from "dotenv";
import {cleanup} from "./utils/database.js";

dotenv.config();

const PORT =  process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`🚀 Application launched on http://localhost${PORT}`);
});

process.on("SIGTERM", () => {
    server.close(() => {
        console.debug("Closing mongo client...");
        cleanup();
        console.debug("Mongo client closed");
        console.debug("Server closed");
    })
})
