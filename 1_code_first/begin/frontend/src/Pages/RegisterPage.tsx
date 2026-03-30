import PageLayout from "../Layout/ContentContainer";
import Header from "../Layout/Header";
import MainContent from "../Layout/MainContent";
import RegistrationForm from "../Components/RegistrationForm";

function RegisterPage() {
  // ToDo: Validate the form
  // ToDo: If the form is invalid
  // ToDo: Show an error toast (for invalid input)
  // ToDo: If the form is valid, start isLoading
  // ToDo: Make the API call
  // ToDo: If the API call is successful
  // ToDo: Save the user details to the cache
  // ToDo: Stop the spinner
  // ToDo: Show the toast
  // ToDo: In 3 seconds, redirect to the main page
  // ToDo: If the call failed
  // ToDo: Stop the spinner
  // ToDo: Show the toast (for unknown error)

  return (
    <PageLayout className="mx-5 my-10 flex flex-col md:max-w-3xl">
      <Header hasNav={false} className="flex flex-col justify-center gap-5" />
      <MainContent className={"flex flex-col justify-center gap-2"}>
        <RegistrationForm
          className={"my-5 flex flex-col gap-5 border border-yellow-600 p-6"}
        />
      </MainContent>
    </PageLayout>
  );
}

export default RegisterPage;
