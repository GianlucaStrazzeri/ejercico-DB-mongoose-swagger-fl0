const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const { dbConnection,} = require('./config/config');
const routes = require('./routes');
app.use(express.json());
app.use('/', routes);


//Codigo copiado desde power point de swagger diapo 8
//Se han eliminado requires repetidos(express, app, port que apuntaba al puerto 3000) y un app.listen (3000)
//Se ha modificado el import de la const MONGO_URI para que apuntara al .env y se ha insertado en .env las credenciales 
//de mongodb este punto creo que puede tener el fallo de como se exporta del .env??
//He movido el bloque de codigo por encima de app.listen para que se pueda escuchar en el 8080
const { MONGO_URI } = require("./.env");
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))
//



dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




