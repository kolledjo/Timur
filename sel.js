const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDB(clientParams);
const params = {
  TableName: "Table",
  Key: marshall({
    HashKey: "hashKey",
  }),
};

const { Item } = await client.getItem(params);
unmarshall(Item);
