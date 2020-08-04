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
  const [description, setDescription] = useState("");

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
            <img src="" />
            <label htmlFor="file-input">
              <Camera size={40} fill="#fff" />
            </label>
          </PhotoPicker>
          <FileInput
            id="file-input"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
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
