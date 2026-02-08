const Footer = () => {
  const socialIcons = [
    {
      name: "facebook",
      link: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z"
          ></path>
        </svg>
      ),
    },

    {
      name: "twitter",
      link: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M21.98 4.003a16.6 16.6 0 0 1-2.66 1.015a4.22 4.22 0 0 0-3.698-1.28a4.316 4.316 0 0 0-3.477 4.945a.4.4 0 0 0 0 .11a11.88 11.88 0 0 1-8.666-4.338a4.184 4.184 0 0 0 1.292 5.597a4.14 4.14 0 0 1-1.899-.519v.056a4.23 4.23 0 0 0 3.312 4.117c-.361.09-.732.135-1.104.133a3.7 3.7 0 0 1-.795-.066a4.23 4.23 0 0 0 3.919 2.914a8.47 8.47 0 0 1-5.2 1.788A8 8 0 0 1 2 18.42a11.73 11.73 0 0 0 6.425 1.888A11.855 11.855 0 0 0 20.457 8.374v-.54a4.55 4.55 0 0 0 1.524-3.831"
          ></path>
        </svg>
      ),
    },

    {
      name: "github",
      link: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z"
          ></path>
        </svg>
      ),
    },

    {
      name: "instagram",
      link: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0a5 5 0 0 1-10 0"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#23262F] text-gray-300 font-saira">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="text-white text-xl font-semibold">FurniShop</h2>

          <div className="flex gap-4 justify-around">
            {socialIcons.map((soc) => (
              <a
                key={soc.name}
                href={soc.link}
                className="w-[48px] h-[48px] rounded-full bg-[#2b3142] 
              flex items-center justify-center 
              hover:bg-[#3a4157] transition
              transform hover:scale-110"
              >
                <span className="w-5 h-5 flex items-center justify-center text-white">
                  {soc.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-[#EAEEF3] my-8" />

        <div className=" gap-8 grid grid-cols-2 md:grid-cols-5 place-items-center">
          <FooterCol
            title="Our Products"
            items={["The Support Suite", "The Sales Suite", "Support", "Guide"]}
          />

          <FooterCol
            title="Top Features"
            items={[
              "Ticketing System",
              "Knowledge Base",
              "Community Forums",
              "Help Desk Software",
            ]}
          />

          <FooterCol
            title="Resources"
            items={[
              "Product Support",
              "Request Demo",
              "Library",
              "Peoplepower Blog",
            ]}
          />

          <FooterCol
            title="Company"
            items={["About Us", "Press", "Investors", "Events"]}
          />

          <FooterCol
            title="Favourite Things"
            items={[
              "For Enterprise",
              "For Startups",
              "For Benchmark",
              "For Small Business",
            ]}
          />
        </div>

        <div className=" mt-10 pt-6 text-sm text-center">
          © NameBrand 2022 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, items }) => (
  <div>
    <h4 className="text-white font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item} className="hover:text-white cursor-pointer transition">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
