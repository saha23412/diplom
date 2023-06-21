export interface SelectProps {
  options: { name: string; value: string }[];
  defaultValue?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
