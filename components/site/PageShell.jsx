import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ children }) {
  return (
    <div className="theme-slick">
      <div className="page" id="top">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
