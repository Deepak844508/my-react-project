import React from "react";//this command basically install react from the node_modules folder.
import ReactDOM from "react-dom/client";//This command install react-dom from the node_modules folder.

// const Icon=()=>{
//     return(
// <FontAwesomeIcon 
// icon="fa-solid fa-heart"/>
//     );
// }
const Header=()=>{
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfH-A2GcyGjUjwDObsFXRFs9AWtM-B7Nghn8yyr7jN4idAMiqJTdMuPy17w&s"
            alt="Header Logo"
            />
        </div>
        <div className="nav-items">
            <ul className="">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Address</li>
            </ul>

        </div>


        

    </div>
    );

}

const Restaurent=(props)=>
{
    const{resData}=props

    const{
        cloudinaryImageId,
        name,
        cuisines,
        type,
        avgRating,
        costForTwo
    }=resData?.info
    return(
     <div className="res-card">
        <img className="res-image"
        
        src={CDN_URL +cloudinaryImageId}
        
        alt="Restaurant Image"
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{type}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        
     </div>
    );
}
const CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
const restaurants= [
    {
      "info": {
        "id": "65797",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "avgRating": 4.5,
        "parentId": "371281",
        "avgRatingString": "4.5",
        "totalRatingsString": "53K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "3.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "711368",
        "name": "Salad Days",
        "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
        "locality": "BTM Layout",
        "areaName": "HSR",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Salads"
        ],
        "avgRating": 4.5,
        "parentId": "796",
        "avgRatingString": "4.5",
        "totalRatingsString": "3.4K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/salad-days-btm-layout-hsr-rest711368",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "346",
        "name": "Momoz",
        "cloudinaryImageId": "pnlkjsjxqcjgzwwya3fd",
        "locality": "2nd Stage",
        "areaName": "BTM Layout",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Thai",
          "Seafood",
          "Asian",
          "Malaysian"
        ],
        "avgRating": 4.1,
        "parentId": "2486",
        "avgRatingString": "4.1",
        "totalRatingsString": "68K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 04:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/momoz-2nd-stage-btm-layout-rest346",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "5934",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "99K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 06:55:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "4.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "596949",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "kmrzln1rfqksc1tqgb8f",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Italian"
        ],
        "avgRating": 4.3,
        "parentId": "11633",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.7",
            "ratingCount": "3"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-koramangala-rest596949",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10576",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
        "locality": "6th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "20K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 0.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "2.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23678",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
        "locality": "5th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "630",
        "avgRatingString": "4.5",
        "totalRatingsString": "63K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 02:55:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "59627",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "ntjshqsv2k7vxtv7vmib",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹251 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "4961",
        "avgRatingString": "4.4",
        "totalRatingsString": "17K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "1.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-koramangala-rest59627",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "317106",
        "name": "Nandhini Deluxe",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/1/57d8d21f-8179-4c80-9d96-0845571de765_317106.jpg",
        "locality": "4th Block",
        "areaName": "Jayanagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Andhra",
          "Biryani",
          "Chinese",
          "North Indian"
        ],
        "avgRating": 4.3,
        "parentId": "2451",
        "avgRatingString": "4.3",
        "totalRatingsString": "5.3K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 7.1,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹749",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "1.1K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/nandhini-deluxe-4th-block-jayanagar-rest317106",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "739118",
        "name": "Seoul Burgers & Shakes",
        "cloudinaryImageId": "d6a8cb3cae80e0a496e2d7fdbbbc1adb",
        "locality": "Industrial Layout ward",
        "areaName": "Kormangla",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burgers",
          "Bubble Tea",
          "Beverages",
          "Fast Food",
          "Street Food"
        ],
        "avgRating": 4.3,
        "parentId": "372969",
        "avgRatingString": "4.3",
        "totalRatingsString": "610",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-14 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/seoul-burgers-and-shakes-industrial-layout-ward-kormangla-rest739118",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "442032",
        "name": "Keventers Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/c225a4e8-4b98-4c14-939b-361c7bcae118_442032.JPG",
        "locality": "7th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "272044",
        "avgRatingString": "4.6",
        "totalRatingsString": "286",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 03:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/keventers-ice-cream-7th-block-koramangala-rest442032",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "568703",
        "name": "Baking Bad - Pizza Delivery",
        "cloudinaryImageId": "75052e31499c23c43505cf1a601a2640",
        "locality": "Indiranagar",
        "areaName": "Indiranagar",
        "costForTwo": "₹650 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "521053",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.1K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 6.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "6.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "5.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/baking-bad-pizza-delivery-indiranagar-rest568703",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "690684",
        "name": "Burgerama",
        "cloudinaryImageId": "1d52387b37dbec1712d0142aec3421a6",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.2,
        "parentId": "8993",
        "avgRatingString": "4.2",
        "totalRatingsString": "2.0K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "76"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burgerama-koramangala-rest690684",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "581523",
        "name": "Cheesecakes By CakeZone",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/3ffdc122-bebb-418e-93c3-9b65fd1fbb58_581523.jpg",
        "locality": "MADIWALA POST",
        "areaName": "ROOPENA AGRAHARA",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Sweets",
          "Ice Cream",
          "Juices",
          "Bengali"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "348057",
        "avgRatingString": "4.1",
        "totalRatingsString": "108",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/cheesecakes-by-cakezone-madiwala-post-roopena-agrahara-rest581523",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "792225",
        "name": "Wendy's Flavor Fresh Burgers",
        "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
        "locality": "B.B.M.P South",
        "areaName": "BTM 2nd Stage",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "470493",
        "avgRatingString": "4.2",
        "totalRatingsString": "12",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wendys-flavor-fresh-burgers-b-b-m-p-south-btm-2nd-stage-rest792225",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "614416",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "Kodihalli",
        "areaName": "Indiranagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.6",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
              "description": "Delivery!"
            },
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
                  }
                },
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-kodihalli-indiranagar-rest614416",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "656392",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/93b4a909-a1f1-4eb3-9e07-34a52becf7fa_656392.jpg",
        "locality": "1st Block",
        "areaName": "Koramangala",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.9K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "52954",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/187505ef-ab7b-4499-a90a-6acddc27ba4f_52954.JPG",
        "locality": "Jakkasandra",
        "areaName": "Hsr Layout 5th Sector",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "21809",
        "avgRatingString": "4.3",
        "totalRatingsString": "15K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/faasos-wraps-rolls-and-shawarma-jakkasandra-hsr-layout-5th-sector-rest52954",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "68144",
        "name": "WarmOven Cake & Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/d44b4cae-5218-49a6-8e55-76e44f3b0235_68144.JPG",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Ice Cream",
          "Beverages",
          "Cakes"
        ],
        "avgRating": 4.3,
        "parentId": "9696",
        "avgRatingString": "4.3",
        "totalRatingsString": "9.0K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-08 07:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.5",
            "ratingCount": "145"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/warmoven-cake-and-desserts-koramangala-rest68144",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "74444",
        "name": "Samosa Party",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/3de49675-5a5a-470e-a30b-0eef986793d0_74444.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "Beverages",
          "Chaat",
          "North Indian",
          "Street Food",
          "Sweets",
          "Desserts",
          "Punjabi",
          "Bakery"
        ],
        "avgRating": 4.4,
        "parentId": "6364",
        "avgRatingString": "4.4",
        "totalRatingsString": "17K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-10-14 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "25% OFF",
          "subHeader": "ABOVE ₹2500",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "214"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/samosa-party-koramangala-rest74444",
        "type": "WEBLINK"
      }
    }
    ];

const Body=()=>{

    return( 
    <div className="body">
        {restaurants.map((restaurants)=>{
            return (
                <Restaurent
                // key={restaurants.id}
                // name={restaurants.name}
                // Cuisines={restaurants.Cuisines}
                // type={restaurants.type}
                // AvgRating={restaurants.AvgRating}
                // CostForTwo={restaurants.CostForTwo}
                key={restaurants.info.id}       resData={restaurants}
                
                />

            );
        })}
        

    </div>
    );
}

const AppLayout=()=>
{
    return(
        <div className="app">
            <Header/>
            <Body/>
            

        </div>
    )
}


        

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)