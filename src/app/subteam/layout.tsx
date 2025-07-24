import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";

export default function SubteamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="general" />
      {children}
      <Footer />
    </>
  );
}
