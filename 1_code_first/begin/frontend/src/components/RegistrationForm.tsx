import type { ComponentPropsWithoutRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Done: Validate the form
// Done: If the form is invalid
// Done: Show an error message
// ToDo: If the form is valid, start isSubmitting
// ToDo: Make the API call
// ToDo: If the API call is successful
// ToDo: Save the user details to the cache
// ToDo: Stop the spinner
// ToDo: Show the toast
// ToDo: In 3 seconds, redirect to the main page
// ToDo: If the call failed
// ToDo: Stop the spinner
// ToDo: Show the toast (for unknown error)

type RegistrationFormProps = ComponentPropsWithoutRef<"section">;

const registrationFormSchema = z.object({
  email: z.string().min(1, "Email is required"),
  username: z
    .string()
    .min(1, "Username is required")
    .max(20, "Username cannot have more than 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must have at least two characters")
    .regex(/^[a-zA-Z]+$/, "First name can only have letters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must have at least two characters")
    .regex(/^[a-zA-Z]+$/, "Last name can only have letters"),
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;

function RegistrationForm({ className, ...rest }: RegistrationFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    const url = "http://localhost:3000/users/new";

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });

      console.log("response:", response);

      reset();
    } catch (error) {
      console.log("Registration failed:", error);
      setError("root", {
        type: "server",
        message: "An unexpected error occurred. Please try again",
      });
    }
  };

  return (
    <section className={className} {...rest}>
      <h3 className="text-3xl">Create Account</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
        aria-label="Registration form"
        noValidate
      >
        {errors.root && (
          <div role="alert" className="mt-1 text-rose-500">
            {errors.root.message}
          </div>
        )}

        <div className="flex flex-col">
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
            className="border border-yellow-600 px-3 py-2"
          />
          {errors.email && (
            <span id="email-error" role="alert" className="mt-1 text-rose-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            {...register("username")}
            placeholder="Username"
            className="border border-yellow-600 px-3 py-2"
          />
          {errors.username && (
            <span
              id="username-error"
              role="alert"
              className="mt-1 text-rose-500"
            >
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            {...register("firstName")}
            placeholder="First name"
            className="border border-yellow-600 px-3 py-2"
          />
          {errors.firstName && (
            <span
              id="firstName-error"
              role="alert"
              className="mt-1 text-rose-500"
            >
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            {...register("lastName")}
            placeholder="Last name"
            className="border border-yellow-600 px-3 py-2"
          />
          {errors.lastName && (
            <span
              id="lastName-error"
              role="alert"
              className="mt-1 text-rose-500"
            >
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm">
            Already have an account? <a href="/login">Login</a>
          </p>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegistrationForm;
