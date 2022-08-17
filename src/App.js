import "./App.css";
import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import StoreItems from "./StoreItems";
import { ShopingProvider } from "./context/ShopingContext";

function App() {
  // let [ToggleEle, setToggleEle] = useState({
  //   0: "ON",
  //   1: "",
  //   2: "",
  //   3: "",
  // });

  // const { t } = useTranslation();

  const language = [
    { code: "fr", name: "Français", country_code: "fr" },
    { code: "en", name: "English", country_code: "gb" },
    { code: "ar", name: "عربى", country_code: "sa" },
  ];

  let DataArray = [
    {
      id: 0,
      ItemName: "Item 1",
      ProductPrize: 400,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_319,h_425,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp",
    },
    {
      id: 1,
      ItemName: "Item 2",
      ProductPrize: 600,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_319,h_425,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.webp",
    },
    {
      id: 2,
      ItemName: "Item 3",
      ProductPrize: 550,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_281,h_375,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.webp",
    },
    {
      id: 3,
      ItemName: "Item 4",
      ProductPrize: 699,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_319,h_425,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.webp",
    },
  ];
  return (
    <ShopingProvider>
      <div className="top_bar d-flex justify-content-end">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            {language.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="cardContainer">
        {DataArray.map((item, key) => {
          return (
            <StoreItems
              id={item.id}
              Name={item.ItemName}
              Prize={item.ProductPrize}
              ImgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </ShopingProvider>
  );
}

export default App;
