export interface FormFieldStates {
  disabled?: boolean;
  valid?: boolean;
  error?: string;
}

export interface FormFieldProps extends FormFieldStates {
  onValueChange: (value: string | number) => void;
}
