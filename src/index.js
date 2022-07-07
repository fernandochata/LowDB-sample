import app from "./app.js";
import { createConnection } from "./database/db.js";

createConnection();

app.listen(app.get('PORT'));
console.log(`Server running on http://localhost:${app.get('PORT')}/products`);