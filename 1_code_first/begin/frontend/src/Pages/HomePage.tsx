import PageLayout from "../Layout/ContentContainer";
import Header from "../Layout/Header";
import MainContent from "../Layout/MainContent";
import MainContentControls from "../Components/MainContentControls";
import PostList from "../Components/PostList";

function HomePage() {
  return (
    <>
      <PageLayout className={"mx-5 my-10 flex flex-col md:max-w-3xl"}>
        <Header
          hasNav={true}
          className={"flex flex-col justify-center gap-5"}
        ></Header>
        <MainContent className={"flex flex-col justify-center gap-2"}>
          <MainContentControls />
          <PostList className={"my-5"} />
        </MainContent>
      </PageLayout>
    </>
  );
}

export default HomePage;
