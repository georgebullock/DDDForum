import type { ComponentPropsWithoutRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

const registrationFields = [
  { name: "email", type: "email", placeholder: "email" },
  { name: "username", type: "text", placeholder: "username" },
  { firstname: "firstName", type: "text", placeholder: "first name" },
  { name: "lastName", type: "text", placeholder: "last name" },
];

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
    try {
      console.log("data:", data);

      reset();
      console.log("Registration successful");
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
      >
        {registrationFields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            {...register(field.firstName)}
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
