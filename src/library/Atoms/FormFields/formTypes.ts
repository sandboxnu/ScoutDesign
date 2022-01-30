export interface FormFieldStates {
  disabled?: boolean;
  valid?: boolean;
  error?: string;
}

export interface FormFieldProps extends FormFieldStates {
  value?: string | number;
  onValueChange: (value: string | number) => void;
}
