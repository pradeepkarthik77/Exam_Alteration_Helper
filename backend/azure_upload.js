const { BlobServiceClient } = require("@azure/storage-blob");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const config = require('./config.json');
const connectionString = config.AZURE_CONNECTION_STRING;
const containerName = "mahesh";
const localFilePath = "level1.png";

async function uploadFile() {    

        const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
        const containerClient = blobServiceClient.getContainerClient(containerName);

        await containerClient.setAccessPolicy("container"); // Set container-level public access

        const blobName = uuidv4()+".jpg";
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);

        const uploadBlobResponse = await blockBlobClient.uploadFile(localFilePath);
        console.log(`File uploaded: ${uploadBlobResponse.requestId}`);

        const blobUrl = blockBlobClient.url;
        console.log(`Public link for the uploaded file: ${blobUrl}`);
}

uploadFile();
