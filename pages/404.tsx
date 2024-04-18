import { ContentContainer, Page } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { TfiFaceSad } from "react-icons/tfi";

export default function NotFoundPage() {
  const handleGoBack = () => {
    if (window == null) return;
    window.history.back();
  };
  return (
    <Page>
      <NavBar />
      <ContentContainer>
        <h2 className={`my-5 flex justify-center text-2xl font-bold font-fang-zheng-xiao-biao-song`}>
          {"404 NOT FOUND"}
        </h2>
        <Separator />
        <div className="my-5 flex flex-col justify-center">
          <TfiFaceSad className="mx-auto my-4" size={"6em"} />
          <p className={`font-source-serif-screen mx-auto my-3 text-center text-xl`}>
            {"This page does not exist for it might be removed or closed."}
          </p>
          <div className="my-5 flex justify-center">
            <Button className="font-bold" onClick={handleGoBack}>
              {"GO BACK"}
            </Button>
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
