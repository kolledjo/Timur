const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDB(clientParams);
const params = {
  TableName: "Table",
  Item: marshall({
    HashKey: "hashKey",
    NumAttribute: 1,
    BoolAttribute: true,
    ListAttribute: [1, "two", false],
    MapAttribute: { foo: "bar" },
    NullAttribute: null,
  }),
};

await client.putItem(params);
