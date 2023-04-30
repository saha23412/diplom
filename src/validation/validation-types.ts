export interface Rules {
  required: string | boolean;
  validate: (value: string) => string | boolean;
}
export interface ErrorRules {
  [key: string]: Rules;
}
