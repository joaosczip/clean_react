import { DetectedImage } from "../models/detected-image";

export interface SendImage {
  send(params: SendImage.Params): Promise<DetectedImage>;
}

export namespace SendImage {
  export type Params = {
    file: File;
    description: string;
  };
}
