export interface SendImage {
  send(params: SendImage.Params): Promise<any>;
}

export namespace SendImage {
  export type Params = {
    file: File;
    description: string;
  };
}
