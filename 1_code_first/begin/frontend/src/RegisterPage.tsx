import Header from "./layout/Header";
import PageLayout from "./layout/PageLayout";

const registrationFields = [
  { name: "email", type: "email", placeholder: "email" },
  { name: "username", type: "text", placeholder: "username" },
  { name: "firstName", type: "text", placeholder: "first name" },
  { name: "lastName", type: "text", placeholder: "last name" },
];

function RegisterPage() {
  return (
    <PageLayout className="mx-5 my-10 flex flex-col md:max-w-3xl">
      <Header className="flex flex-col justify-center gap-5" />

      <main className="mt-8">
        <section className="flex flex-col gap-5 border border-yellow-600 p-6">
          <h2 className="text-3xl">Create Account</h2>

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
              <button type="button" className="border border-yellow-600 px-4 py-2">
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </PageLayout>
  );
}

export default RegisterPage;