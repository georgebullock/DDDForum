import "./App.css";
import PageLayout from "./layout/PageLayout";
import Header from "./layout/Header";
import ContentContainer from "./layout/Content";

function App() {
  return (
    <>
      <PageLayout className={" flex justify-center flex-col my-10"}>
        <Header className={"flex flex-col gap-2"}></Header>
        <ContentContainer />
      </PageLayout>
    </>
  );
}

export default App;
