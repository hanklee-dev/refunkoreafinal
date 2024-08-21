import React, { useState } from "react";
import { uploadScreenshot } from "@/lib/api/refundApi";

interface FileUploadProps {
  onUpload: (url: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploading(true);
      try {
        const url = await uploadScreenshot(file);
        onUpload(url);
      } catch (error) {
        console.error("File upload failed:", error);
        // Handle error (e.g., show error message)
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        disabled={uploading}
      />
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default FileUpload;
