import { IHomeForm, IMessage } from ".";

export type IModelStore = {
  result: number | null;
  loading: boolean;
  message: IMessage | null;
  getResult: (data: IHomeForm) => Promise<void>;
};
