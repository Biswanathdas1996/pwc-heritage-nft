import React, { useState } from "react";
import { uploadFileToAws } from "../utils/uploadFileToAws";

const UploadImageToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput} />
      <button onClick={() => uploadFileToAws(selectedFile)}> Upload to S3</button>
    </div>
  );
};

export default UploadImageToS3WithNativeSdk;
