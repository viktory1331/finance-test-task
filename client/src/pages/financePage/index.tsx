import React from "react";
import { CryptocurrencyField } from "../../component/marketHeading";
import { Header } from "../../component/header";
import { WatchListWrapper } from "../../component/sharesList";

export const FinancePage = () => {
    return (
        <>
            <Header />
            <WatchListWrapper />
            <CryptocurrencyField />
        </>
    )
};