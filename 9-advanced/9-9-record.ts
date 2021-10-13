{
  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  // like map: key & value
  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}