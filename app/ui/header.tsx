import { NavLink } from "~/ui/link";
import { Wordmark } from "./logo";

export function Header({
  forceDark,
  to = "/",
  className = "",
}: {
  forceDark?: boolean;
  to?: string;
  className?: string;
}) {
  return (
    <header
      className={
        "flex items-center justify-between px-6 py-9 lg:px-12" +
        " " +
        (forceDark ? "text-white " : "text-gray-900 dark:text-white ") +
        className
      }
    >
      <NavLink
        onContextMenu={(event) => {
          let NODE_ENV = window.__env && window.__env.NODE_ENV;
          if (NODE_ENV !== "development") {
            event.preventDefault();
            window.location.href =
              "https://drive.google.com/drive/u/0/folders/1pbHnJqg8Y1ATs0Oi8gARH7wccJGv4I2c";
          }
        }}
        to={to}
        prefetch="intent"
        aria-label="Remix"
      >
        <Wordmark aria-hidden />
      </NavLink>

      <nav className="flex" aria-label="Main">
        <HeaderLink to="/blog" children="Blog" />{" "}
        <HeaderLink to="/docs/en/main" children="Docs" />{" "}
        <HeaderLink
          to="https://github.com/remix-run"
          children="GitHub"
          className="hidden sm:block"
        />{" "}
        <HeaderLink to="/conf" children="Remix Conf" />
      </nav>
    </header>
  );
}

function HeaderLink({
  to,
  children,
  className = "",
  prefetch = "none",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: "none" | "intent";
}) {
  return (
    <NavLink
      prefetch={prefetch}
      x-comp="HeaderLink"
      className={
        "mx-2 text-base font-semibold opacity-80 last:mr-0 hover:opacity-100 sm:mx-4 " +
        className
      }
      to={to}
      children={children}
    />
  );
}