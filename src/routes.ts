import TextBoxes from "@/components/textBox";
import Accordions from "./components/accordion";
import TabMenus from "./components/tabMenu";
import ToolTips from "./components/tooltip";
import LineClamps from "@/components/lineClamp";
import LazyLoad1 from "./components/lazyLoading/1_r";
import LazyLoad1_V from "./components/lazyLoading/2_v";
import InfiniteScrollR from "./components/infiniteScroll/react";
import InfiniteScrollV from "./components/infiniteScroll/vanilla";
import ScrollBox from "./components/scrollBox";
import ScrollSpy1 from "@/components/scrollSpy/1_r";
import ScrollSpy2 from "@/components/scrollSpy/2_r";
import ScrollSpy3V from "@/components/scrollSpy/3_v";
import ScrollSpy4 from "@/components/scrollSpy/4_r";

export const routePaths = [
  "/",
  "/accordion",
  "/tabMenu",
  "/tooltip",
  "/textBox",
  "/lineClamp",
  "/lazyLoading",
  "/lazyLoading/1_r",
  "/lazyLoading/1_v",
  "/infiniteScroll",
  "/infiniteScroll/react",
  "/infiniteScroll/js",
  "/scrollBox",
  "/scrollSpy",
  "/scrollSpy/1_r",
  "/scrollSpy/2_r",
  "/scrollSpy/3_v",
  "/scrollSpy/4_r",
] as const;
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: [
      "/accordion",
      "/tabMenu",
      "/tooltip",
      "/textBox",
      "/lineClamp",
      "/lazyLoading",
      "/infiniteScroll",
      "/scrollBox",
      "/scrollSpy",
    ],
  },
  "/accordion": {
    key: "/accordion",
    link: "/accordion",
    name: "01. 아코디언",
    children: Accordions,
  },
  "/tabMenu": {
    key: "/tabMenu",
    link: "/tabMenu",
    name: "02. 탭메뉴",
    children: TabMenus,
  },
  "/tooltip": {
    key: "/tooltip",
    link: "/tooltip",
    name: "03. 툴팁",
    children: ToolTips,
  },
  "/textBox": {
    key: "/textBox",
    link: "/textBox",
    name: "04. 반응형 텍스트박스",
    children: TextBoxes,
  },
  "/lineClamp": {
    key: "/lineClamp",
    link: "/lineClamp",
    name: "05. 여러줄 말줄임",
    children: LineClamps,
  },
  "/lazyLoading": {
    key: "/lazyLoading",
    link: "/lazyLoading/1_r",
    name: "06. 지연 로딩",
    children: ["/lazyLoading/1_r", "/lazyLoading/1_v"],
  },
  "/lazyLoading/1_r": {
    key: "/lazyLoading/1_r",
    link: "/lazyLoading/1_r",
    name: "React1",
    children: LazyLoad1,
  },
  "/lazyLoading/1_v": {
    key: "/lazyLoading/1_v",
    link: "/lazyLoading/1_v",
    name: "Vanilla",
    children: LazyLoad1_V,
  },
  "/infiniteScroll": {
    key: "/infiniteScroll",
    link: "/infiniteScroll/react",
    name: "07. 무한 스크롤",
    children: ["/infiniteScroll/react", "/infiniteScroll/js"],
  },
  "/infiniteScroll/react": {
    key: "/infiniteScroll/react",
    link: "/infiniteScroll/react",
    name: "무한스크롤 리액트",
    children: InfiniteScrollR,
  },
  "/infiniteScroll/js": {
    key: "/infiniteScroll/js",
    link: "/infiniteScroll/js",
    name: "무한스크롤 바닐라",
    children: InfiniteScrollV,
  },
  "/scrollBox": {
    key: "/scrollBox",
    link: "/scrollBox",
    name: "08. 횡 스크롤 박스",
    children: ScrollBox,
  },
  "/scrollSpy": {
    key: "/scrollSpy",
    link: "/scrollSpy/1_r",
    name: "스크롤 스파이",
    children: [
      "/scrollSpy/1_r",
      "/scrollSpy/2_r",
      "/scrollSpy/3_v",
      "/scrollSpy/4_r",
    ],
  },
  "/scrollSpy/1_r": {
    key: "/scrollSpy/1_r",
    link: "/scrollSpy/1_r",
    name: "R - scroll",
    children: ScrollSpy1,
  },
  "/scrollSpy/2_r": {
    key: "/scrollSpy/2_r",
    link: "/scrollSpy/2_r",
    name: "R - IO",
    children: ScrollSpy2,
  },
  "/scrollSpy/3_v": {
    key: "/scrollSpy/3_v",
    link: "/scrollSpy/3_v",
    name: "JS",
    children: ScrollSpy3V,
  },
  "/scrollSpy/4_r": {
    key: "/scrollSpy/4_r",
    link: "/scrollSpy/4_r",
    name: "R - 스크롤 Box 응용",
    children: ScrollSpy4,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
