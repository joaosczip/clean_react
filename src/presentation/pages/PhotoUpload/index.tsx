import React, { useState, useCallback } from "react";

import { SendImage } from "../../../domain/usecases/send-image";
import { Container, FileInput, TextInput, SubmitButton } from "./styles";

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
    [file, description]
  );

  return (
    <Container>
      <h3>Select a picture</h3>
      <FileInput type="file" />
      <TextInput
        type="text"
        placeholder="Photo description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <SubmitButton onClick={handleSendPicture}>Send</SubmitButton>
    </Container>
  );
};

export default PhotoUpload;
