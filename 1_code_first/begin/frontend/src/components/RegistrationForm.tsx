import type { ComponentPropsWithoutRef } from "react";

type RegistrationFormProps = ComponentPropsWithoutRef<"section">;

const registrationFields = [
  { name: "email", type: "email", placeholder: "email" },
  { name: "username", type: "text", placeholder: "username" },
  { name: "firstName", type: "text", placeholder: "first name" },
  { name: "lastName", type: "text", placeholder: "last name" },
];

function RegistrationForm({ className, ...rest }: RegistrationFormProps) {
  return (
    <section className={className} {...rest}>
      <h3 className="text-3xl">Create Account</h3>

      <form className="flex flex-col gap-3" aria-label="Registration form">
        {registrationFields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className="border border-yellow-600 px-3 py-2"
          />
        ))}

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm">
            Already have an account? <a href="/login">Login</a>
          </p>
          <button type="button">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default RegistrationForm;
