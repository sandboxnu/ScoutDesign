import { TextInputProps } from "react-native";

interface formFieldProps {
  placeholder?: string;
  value?: string | number;
  onInputChange: (value: string | number) => void;
  disabled?: boolean;
}

export type TextFieldProps = TextInputProps & formFieldProps;
