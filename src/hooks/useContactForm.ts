import { useState, type ChangeEvent, type FormEvent } from "react";
import { profile } from "@/data";
import { buildMailto } from "@/utils/mailto";
import { validateContact, type ContactValues } from "@/utils/validation";

type FieldName = keyof ContactValues;

const EMPTY: ContactValues = { name: "", email: "", subject: "", message: "" };

/**
 * Controlled contact form with live validation.
 * - Errors appear once a field has been touched (blurred) or after a submit attempt.
 * - `isValid` drives the disabled state of the submit button.
 * - On submit it opens the visitor's email app with a pre-filled message to `profile.email`
 *   (swap for an API call if you add a backend).
 */
export function useContactForm() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validateContact(values);
  const isValid = Object.keys(errors).length === 0;

  /** Props to spread on a field: { name, value, onChange, onBlur }. */
  const getFieldProps = (name: FieldName) => ({
    name,
    value: values[name],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [name]: event.target.value })),
    onBlur: () => setTouched((current) => ({ ...current, [name]: true })),
  });

  /** Error message to show for a field (only after it has been touched). */
  const getError = (name: FieldName) => (touched[name] ? errors[name] : undefined);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) {
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    const body = `${values.message.trim()}\n\n--\n${values.name.trim()}\n${values.email.trim()}`;
    const subject = values.subject.trim() || profile.defaultSubject;
    window.location.href = buildMailto({ to: profile.email, subject, body });
    setSubmitted(true);
  };

  const reset = () => {
    setValues(EMPTY);
    setTouched({});
    setSubmitted(false);
  };

  return { isValid, submitted, getFieldProps, getError, handleSubmit, reset };
}
