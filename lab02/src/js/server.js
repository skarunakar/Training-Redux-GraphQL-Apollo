let app = require("express")();
let cors = require("cors");
let { buildSchema } = require("graphql");
let resolver =  require("./resolvers");

let graphqlHTML = require("express-graphql");
let schema = buildSchema(require("./schema"));
app.use("https://localhost:4000/graphql", cors(),  graphqlHTML({
    schema,
    rootValue: resolver
    
}));
app.get("/", (req,res) => {
    console.log("Started server")
})
app.listen(4000);