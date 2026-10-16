import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cx } from "@/utils/classNames";

type SharedProps = {
  label: string;
  name: string;
  error?: string;
  className?: string;
};

type FormFieldProps = SharedProps &
  (
    | ({ multiline?: false } & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "className">)
    | ({ multiline: true } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "className">)
  );

const control =
  "w-full resize-y rounded-lg border border-line bg-surface px-[15px] py-3.5 font-body text-[13px] text-fg outline-none transition duration-200 focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] aria-invalid:border-danger";

/** Labelled text input / textarea with an accessible inline error. */
export default function FormField({ label, name, error, className, multiline, ...rest }: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    "aria-invalid": !!error,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className={cx("flex flex-col gap-[9px]", className)}>
      <label htmlFor={id} className="font-mono text-xs font-medium tracking-[.08em] text-fg">
        {label}
      </label>
      {multiline ? (
        <textarea
          className={cx(control, "min-h-[130px]")}
          {...shared}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input className={control} {...shared} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && (
        <p id={errorId} className="text-[10px] text-danger-soft">
          {error}
        </p>
      )}
    </div>
  );
}
