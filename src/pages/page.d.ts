import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";


export type NextPageWithLayout<P = {}> = NextPage<p> & {
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};