import PageLayout from "../Layout/ContentContainer";
import Header from "../Layout/Header";
import MainContent from "../Layout/MainContent";
import RegistrationForm from "../Components/RegistrationForm";

function RegisterPage() {
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
