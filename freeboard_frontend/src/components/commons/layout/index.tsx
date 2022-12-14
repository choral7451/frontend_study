import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation/Navigation.container";

interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN_HEADERS = ["/test"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "100px", height: "700px", backgroundColor: "orange" }}
        >
          여기는 사이드바입니다!!
        </div>
        <div>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
