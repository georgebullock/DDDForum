import PageLayout from "./layout/PageLayout";
import Header from "./layout/Header";
import MainContent from "./layout/MainContent";

function App() {
  return (
    <>
      <PageLayout className={"mx-5 my-10 flex flex-col md:max-w-3xl"}>
        <Header className={"flex flex-col justify-center gap-5"}></Header>
        <MainContent className={"flex flex-col justify-center gap-2"} />
      </PageLayout>
    </>
  );
}

export default App;
