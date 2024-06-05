"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { IHomeForm } from "@interfaces/IHomeForm";
import {
  Checkbox,
  Select,
  Button,
  Input,
  SelectItem,
  Card,
} from "@nextui-org/react";
import homeSchema from "@schemas/homeSchema";
import useModelStore from "@store/modelStore";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const HomeForm = () => {
  const { getResult, loading, message } = useModelStore();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm<IHomeForm>({
    resolver: zodResolver(homeSchema),
  });

  const onSubmit = (data: IHomeForm) => {
    getResult(data);
  };

  useEffect(() => {
    if (message) {
      toast(message.description, {
        type: message.status,
        autoClose: false,
        closeOnClick: false,
      });
    }
  }, [message]);

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-foreground min-h-[calc(100vh-65px)] py-6">
      <div className="container max-w-4xl px-6 md:px-0 flex flex-col items-center">
        <Card className="w-full p-8 shadow-2xl rounded-lg bg-white text-foreground">
          <div className="flex justify-center mb-4 gap-4">
            <h2 className="text-4xl font-bold text-center text-foreground">
              Formulario
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                {...register("area")}
                label="Área (m²)"
                type="number"
                fullWidth
                isInvalid={Boolean(errors.area)}
                errorMessage={errors.area?.message}
              />
              <Input
                {...register("habitaciones")}
                label="Habitaciones"
                type="number"
                fullWidth
                isInvalid={Boolean(errors.habitaciones)}
                errorMessage={errors.habitaciones?.message}
              />
              <Input
                {...register("banos")}
                label="Baños"
                type="number"
                fullWidth
                isInvalid={Boolean(errors.banos)}
                errorMessage={errors.banos?.message}
              />
              <Input
                {...register("parqueaderos")}
                label="Parqueaderos"
                type="number"
                fullWidth
                isInvalid={Boolean(errors.parqueaderos)}
                errorMessage={errors.parqueaderos?.message}
              />
              <Input
                {...register("estrato")}
                label="Estrato"
                type="number"
                fullWidth
                isInvalid={Boolean(errors.estrato)}
                errorMessage={errors.estrato?.message}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="jacuzzi"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Jacuzzi
                  </Checkbox>
                )}
              />
              <Controller
                name="chimenea"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Chimenea
                  </Checkbox>
                )}
              />
              <Controller
                name="permite_mascotas"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Permite Mascotas
                  </Checkbox>
                )}
              />
              <Controller
                name="gimnasio"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Gimnasio
                  </Checkbox>
                )}
              />
              <Controller
                name="ascensor"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Ascensor
                  </Checkbox>
                )}
              />
              <Controller
                name="conjunto_cerrado"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Conjunto Cerrado
                  </Checkbox>
                )}
              />
              <Controller
                name="piscina"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Piscina
                  </Checkbox>
                )}
              />
              <Controller
                name="terraza"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Terraza
                  </Checkbox>
                )}
              />
              <Controller
                name="vigilancia"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    isSelected={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked ? 1 : 0)}
                  >
                    Vigilancia
                  </Checkbox>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="antiguedad"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Antigüedad"
                    isInvalid={Boolean(errors.antiguedad)}
                    errorMessage={errors.antiguedad?.message}
                  >
                    <SelectItem key="MENOS DE 5 ANOS">
                      MENOS DE 5 AÑOS
                    </SelectItem>
                    <SelectItem key="ENTRE 5 Y 10 ANOS">
                      ENTRE 5 Y 10 AÑOS
                    </SelectItem>
                    <SelectItem key="MAS DE 10 ANOS">MÁS DE 10 AÑOS</SelectItem>
                  </Select>
                )}
              />
              <Controller
                name="localidad"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Localidad"
                    isInvalid={Boolean(errors.localidad)}
                    errorMessage={errors.localidad?.message}
                  >
                    <SelectItem key="USAQUEN">USAQUÉN</SelectItem>
                    <SelectItem key="CHAPINERO">CHAPINERO</SelectItem>
                    <SelectItem key="SUBA">SUBA</SelectItem>
                  </Select>
                )}
              />
            </div>
            <Button type="submit" isLoading={loading}>
              Enviar
            </Button>
          </form>
        </Card>
        <ToastContainer />
      </div>
    </div>
  );
};

export default HomeForm;
