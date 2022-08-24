import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const S3_BUCKET = "pwc-nft-storage";
const REGION = "us-east-2";

AWS.config.update({
  accessKeyId: "AKIAIWYZ6FLNO5I3HLZQ",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

export async function uploadFileToAws(file) {
  console.log("---------file------>", file);
  const fileName = `${uuidv4()}.${file.name.split(".").pop()}`;
  const params = {
    ACL: "public-read",
    Body: file,
    Bucket: S3_BUCKET,
    Key: fileName,
  };

  await myBucket
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      // setProgress(Math.round((evt.loaded / evt.total) * 100))
    })
    .send((err) => {
      if (err) console.log(err);
    });

  return `https://pwc-nft-storage.s3.us-east-2.amazonaws.com/${fileName}`;
}
