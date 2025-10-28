import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/flaticon/flaticon_zirox.css";
import "@/assets/scss/style.scss";
import InitAOS from "@/utils/InitAOS";
import BootstrapForBrowser from "@/components/shared/bootstrapForBrowser";


export const metadata: Metadata = {
  title: "BMS CONSULTING - Business Solutions in Kosovo & Balkans",
  description: "BMS CONSULTING - Premier consulting firm for business establishment, management, and growth in Kosovo and the Balkans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BootstrapForBrowser />
      <InitAOS/>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
