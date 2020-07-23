import { SendImage } from "../../../domain/usecases/send-image";
import { DetectedImage } from "../../../domain/models/detected-image";

export class RemoteSendImage {
  constructor() {}

  async send(params: SendImage.Params): Promise<void> {}
}
