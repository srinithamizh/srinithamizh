import { Button, FormField, Icon } from "@/components/ui";
import { useContactForm } from "@/hooks";

export default function ContactForm() {
  const { isValid, submitted, getFieldProps, getError, handleSubmit, reset } = useContactForm();

  return (
    <div className="flex min-h-[400px] items-center rounded-[15px] border border-line bg-bg p-8 max-phone:min-h-0 max-phone:px-5 max-phone:py-6">
      {submitted ? (
        <div className="m-auto max-w-[380px] text-center" role="status">
          <span
            aria-hidden="true"
            className="mx-auto mb-6 grid size-[66px] place-items-center rounded-full bg-success/10 text-success"
          >
            <Icon name="check" size={30} />
          </span>
          <h3 className="mb-3 font-display text-[27px] font-semibold">Almost there.</h3>
          <p className="mb-6 text-sm leading-[1.6] text-muted">
            Your email app should have opened with the message ready. Just hit send, and I'll get back to you within a
            couple of days.
          </p>
          <Button variant="secondary" onClick={reset}>
            Send another
          </Button>
        </div>
      ) : (
        <form className="flex w-full flex-col gap-[19px]" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-4 max-phone:grid-cols-1">
            <FormField
              label="Name"
              autoComplete="name"
              placeholder="Your name"
              error={getError("name")}
              {...getFieldProps("name")}
            />
            <FormField
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              error={getError("email")}
              {...getFieldProps("email")}
            />
          </div>
          <FormField
            label="Subject"
            placeholder="What's this about?"
            {...getFieldProps("subject")}
          />
          <FormField
            multiline
            label="Message"
            rows={5}
            placeholder="Tell me a little about your project..."
            error={getError("message")}
            {...getFieldProps("message")}
          />
          <Button type="submit" disabled={!isValid} className="mt-1 self-start">
            Send email <Icon name="arrow" />
          </Button>
        </form>
      )}
    </div>
  );
}
