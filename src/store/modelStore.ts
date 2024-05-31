import { IModelStore } from "@interfaces/IModelStore";
import axios from "axios";
import { create } from "zustand";

const useModelStore = create<IModelStore>()((set) => ({
  result: null,
  loading: false,
  message: null,
  getResult: async (dataToSend) => {
    try {
      set(() => ({ loading: true, message: null }));
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/predict`,
        dataToSend
      );
      const formatter = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
      });

      set(() => ({
        result: data.result,
        message: {
          description: `El precio es ${formatter.format(data.price)}.`,
          status: "success",
        },
      }));
    } catch (error) {
      set(() => ({
        message: {
          description: "Ha ocurrido un error desconocido.",
          status: "error",
        },
      }));
    } finally {
      set(() => ({ loading: false }));
    }
  },
}));

export default useModelStore;
