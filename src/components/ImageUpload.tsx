import React, { useEffect, useState } from "react";

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setImage(null);
      return;
    }

    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (!image) {
      setImageURL(null);
      return;
    }

    const _imageURL = URL.createObjectURL(image);
    setImageURL(_imageURL);
  }, [image]);

  return (
    <>
      <input type="file" accept="image/*" onChange={onImageChange} />
      <br />
      {imageURL}
      <br />
      {imageURL && <img src={imageURL} alt="Preview" />}
    </>
  );
};

export default ImageUpload;
