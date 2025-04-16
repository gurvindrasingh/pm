import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

export async function logUserActivity(userId: string, action: string) {
  const command = new PutItemCommand({
    TableName: "UserActivity",
    Item: {
      userId: { S: userId },
      timestamp: { S: new Date().toISOString() },
      action: { S: action },
    },
  });
  await client.send(command);
}
