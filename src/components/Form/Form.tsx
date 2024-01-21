import { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Resolver,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";

interface FormProps<TFieldValues extends FieldValues> {
  children: (arg0: UseFormReturn<TFieldValues>) => ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
  resolver: Resolver<TFieldValues>;
  defaultValues?: DefaultValues<TFieldValues>;
}

const Form = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: FormProps<TFieldValues>) => {
  const methods = useForm<TFieldValues>({ resolver: resolver, defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
    </FormProvider>
  );
};

export { Form };
