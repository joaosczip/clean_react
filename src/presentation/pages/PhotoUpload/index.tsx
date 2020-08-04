import React, { useState, useCallback } from "react";
import { SendImage } from "../../../domain/usecases/send-image";
import {
  Container,
  PhotoPickerContainer,
  PhotoPicker,
  Camera,
  FileInput,
  TextInput,
  SubmitButton,
} from "./styles";

type Props = {
  sendImage: SendImage;
};

const PhotoUpload: React.FC<Props> = ({ sendImage }) => {
  const [file, setFile] = useState<File>();
  const [fileUrl, setFileUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSelectPicture = useCallback((event) => {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setFileUrl(e.target.result as string);
    };
    fileReader.readAsDataURL(selectedFile);
    setFile(selectedFile);
  }, []);

  const handleSendPicture = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      await sendImage.send({
        file,
        description,
      });
    },
    [sendImage, file, description]
  );

  return (
    <Container>
      <PhotoPickerContainer>
        <h3>Select a picture</h3>
        <div>
          <PhotoPicker>
            {fileUrl && <img src={fileUrl} alt="Choosen Pic" />}
            <label htmlFor="file-input">
              <Camera size={60} fill="#fff" />
            </label>
          </PhotoPicker>
          <FileInput
            id="file-input"
            type="file"
            accept="image/jpg,image/png,image/jpeg"
            onChange={handleSelectPicture}
          />
          <TextInput>
            <input
              type="text"
              placeholder="Photo description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </TextInput>
          <SubmitButton onClick={handleSendPicture}>Send</SubmitButton>
        </div>
      </PhotoPickerContainer>
    </Container>
  );
};

export default PhotoUpload;
