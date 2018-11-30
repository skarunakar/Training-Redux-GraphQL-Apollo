let { graphql, buildSchema} = require('graphql');

let schema = buildSchema(`type Query {now: String, temperature: Float, boring:Boolean}`);

let dataForSchema = {
    now: () => new Date().toString(),
    temperature: () => Math.random() * 100,
    boring: true
}
let query1 = `{now, temperature, boring}`;

graphql(schema, query1, dataForSchema).then(response => console.log(response.data));