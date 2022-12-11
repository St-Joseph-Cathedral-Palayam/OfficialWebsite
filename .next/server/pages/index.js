(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"stjoseph__header": "Home_stjoseph__header___1WiX",
	"stjoseph__header_content": "Home_stjoseph__header_content___nile",
	"stjoseph__header_content__input": "Home_stjoseph__header_content__input__zs6dP",
	"gradient__text": "Home_gradient__text__fXPM8",
	"stjoseph__header_image": "Home_stjoseph__header_image__jYB7Z",
	"home__possibility": "Home_home__possibility__t5i_2",
	"home__possibility_image": "Home_home__possibility_image__SQLK6",
	"home__possibility_image_tag": "Home_home__possibility_image_tag__lu90w",
	"home__possibility_content": "Home_home__possibility_content__T_vXk",
	"stjoseph__brand_container": "Home_stjoseph__brand_container__3mQwz",
	"stjoseph__blog_container__article": "Home_stjoseph__blog_container__article__swmtQ",
	"stjoseph__blog_container__article_content": "Home_stjoseph__blog_container__article_content___nj7Q",
	"stjoseph__brand_container_cards": "Home_stjoseph__brand_container_cards__rnMxp",
	"stjoseph__facebook_container": "Home_stjoseph__facebook_container__NMW_r",
	"stjoseph__facebook_wrapper": "Home_stjoseph__facebook_wrapper__ieDHK",
	"stjoseph__brand_row": "Home_stjoseph__brand_row__VtBsw",
	"stjoseph__brand_facilities": "Home_stjoseph__brand_facilities__HLhlK",
	"stjoseph__brand_facilities_col": "Home_stjoseph__brand_facilities_col__vTkzP",
	"church__features_container__feature": "Home_church__features_container__feature__YEb8F",
	"church__features_container__feature_title": "Home_church__features_container__feature_title__BaERo",
	"church__features_container_feature_text": "Home_church__features_container_feature_text__arcTM",
	"text1": "Home_text1__ZEUKv",
	"image_div": "Home_image_div__tu0ML",
	"church__timing": "Home_church__timing__5_b7p",
	"church__timing-feature": "Home_church__timing-feature__xMdWK",
	"church__timing_heading": "Home_church__timing_heading__lVycp",
	"church__timing_container": "Home_church__timing_container__WmOSg",
	"church__timing_contained": "Home_church__timing_contained__6_NTW",
	"church__features_container__feature-text": "Home_church__features_container__feature-text__F2MdG",
	"stjoseph__blog_container__article_image": "Home_stjoseph__blog_container__article_image__Mt9JK",
	"gpt3__whatgpt3_heading": "Home_gpt3__whatgpt3_heading__s3baf",
	"gpt3__whatgpt3_container": "Home_gpt3__whatgpt3_container__8XU_z",
	"gpt3__features_container__feature": "Home_gpt3__features_container__feature__LR1_A"
};


/***/ }),

/***/ 7651:
/***/ ((module) => {

// Exports
module.exports = {
	"stjoseph_updates_container": "Update_stjoseph_updates_container__Bb2Ue",
	"stjoseph_updates_cards": "Update_stjoseph_updates_cards__PYXIC",
	"stjoseph_updates_updates": "Update_stjoseph_updates_updates__Bh_5x",
	"stjoseph_updates_news": "Update_stjoseph_updates_news__YCmrl",
	"stjoseph_updates_unit": "Update_stjoseph_updates_unit__ZA5eQ",
	"gradient__text": "Update_gradient__text__8_DwK",
	"stjoseph_updates_news_title": "Update_stjoseph_updates_news_title__8vEtR",
	"arrowButton": "Update_arrowButton__YmQwG",
	"updatesGrid": "Update_updatesGrid__L1jbL",
	"stjoseph_updates_image": "Update_stjoseph_updates_image__HowZ6",
	"stjoseph_gallery_container": "Update_stjoseph_gallery_container__ezI49"
};


/***/ }),

/***/ 3446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ pages_getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "typed.js"
const external_typed_js_namespaceObject = require("typed.js");
var external_typed_js_default = /*#__PURE__*/__webpack_require__.n(external_typed_js_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/bloglist/Blogitem.js





const getStaticProps = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            ninjas: data
        }
    };
};
const Blogitem_Blogitem = ({ blog: { id , description , title , createdAt , author , category , cover  }  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.blogitem_wrap,
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: cover,
                alt: "cover",
                className: styles.blogitem_cover,
                width: "350",
                height: "300",
                layout: "fill"
            }),
            /*#__PURE__*/ _jsx("p", {
                className: styles.chip,
                children: category
            }),
            /*#__PURE__*/ _jsx("h3", {
                children: title
            }),
            /*#__PURE__*/ _jsx("p", {
                className: styles.blogItem_desc,
                children: description
            }),
            /*#__PURE__*/ _jsxs("footer", {
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "blogitem-author",
                        children: /*#__PURE__*/ _jsxs("div", {
                            children: [
                                /*#__PURE__*/ _jsx("h6", {
                                    children: author
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: createdAt
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        className: styles.blogItem_link,
                        href: `/${id}`,
                        children: "ReadMore"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const bloglist_Blogitem = ((/* unused pure expression or super */ null && (Blogitem_Blogitem)));

;// CONCATENATED MODULE: ./components/bloglist/Bloglist.js




const Bloglist = ({ blogs  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: styles.bloglist_wrap,
        children: blogs?.map((blog)=>/*#__PURE__*/ _jsx(Blogitem, {
                blog: blog
            }, blog.id))
    });
};
/* harmony default export */ const bloglist_Bloglist = ((/* unused pure expression or super */ null && (Bloglist)));

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./config/data.js
var config_data = __webpack_require__(1274);
// EXTERNAL MODULE: ./styles/Update.module.css
var Update_module = __webpack_require__(7651);
var Update_module_default = /*#__PURE__*/__webpack_require__.n(Update_module);
;// CONCATENATED MODULE: external "react-grid-gallery"
const external_react_grid_gallery_namespaceObject = require("react-grid-gallery");
// EXTERNAL MODULE: ./components/NewsCard.js
var NewsCard = __webpack_require__(6464);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
// EXTERNAL MODULE: ./config/images.js
var config_images = __webpack_require__(5187);
;// CONCATENATED MODULE: ./components/Updates.js









const Updates = ({ data  })=>{
    const images = config_images/* imagelist.map */.X.map((e)=>({
            src: e.src
        }));
    const currentData = Object.values(data);
    config_data/* blogList.slice */.D.slice(0, 5);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Update_module_default()).stjoseph_updates_container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Update_module_default()).stjoseph_updates_news,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/updates",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Update_module_default()).stjoseph_updates_news_title,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (Update_module_default()).gradient__text,
                                    children: "Latest News "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillArrowRightCircleFill, {
                                    className: (Update_module_default()).arrowButton
                                })
                            ]
                        })
                    }),
                    currentData.map((e)=>e.category === "Updates" && /*#__PURE__*/ jsx_runtime_.jsx(NewsCard/* default */.Z, {
                            title: e.title,
                            body: e.category,
                            id: e.id
                        }, e.id))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Update_module_default()).stjoseph_updates_updates,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/gallery",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Update_module_default()).stjoseph_updates_news_title,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: (Update_module_default()).gradient__text,
                                    children: "Gallery "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillArrowRightCircleFill, {
                                    className: (Update_module_default()).arrowButton
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Update_module_default()).stjoseph_gallery_container,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_grid_gallery_namespaceObject.Gallery, {
                            images: images
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Updates = (Updates);

// EXTERNAL MODULE: ./components/unit/UnitCard.js
var UnitCard = __webpack_require__(8079);
// EXTERNAL MODULE: ./styles/Unit.module.css
var Unit_module = __webpack_require__(478);
var Unit_module_default = /*#__PURE__*/__webpack_require__.n(Unit_module);
// EXTERNAL MODULE: ./config/unit.js
var unit = __webpack_require__(9977);
;// CONCATENATED MODULE: ./components/unit/Unit.js







const Unit = ()=>{
    const filteredList = unit/* unitList.slice */.d.slice(0, 5);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Unit_module_default()).stjoseph__brand_container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/units",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: (Unit_module_default()).gradient__text,
                    children: [
                        "Units",
                        /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillArrowRightCircleFill, {
                            className: (Unit_module_default()).arrowButton
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Unit_module_default()).cards_wrapper,
                children: filteredList.map((e)=>/*#__PURE__*/ jsx_runtime_.jsx(UnitCard/* default */.Z, {
                        month: e.month,
                        img: e.img,
                        file: e.file
                    }, e.id))
            })
        ]
    });
};
/* harmony default export */ const unit_Unit = (Unit);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js
/* eslint-disable react/no-unescaped-entities */ 









const pages_getStaticProps = async ()=>{
    return {
        props: {
            data: config_data/* blogList */.D
        }
    };
};
const Feature = ({ title , text1 , text , text2 , text3  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).church__features_container__feature,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).church__features_container__feature_title,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).church__features_container_feature_text,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Home_module_default()).text1,
                        children: text1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: text
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Home_module_default()).text1,
                        children: text2
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: text3
                    })
                ]
            })
        ]
    });
function Home({ data  }) {
    const el = (0,external_react_.useRef)(null);
    const typed = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const options = {
            strings: [
                "“നിങ്ങൾ ചെയ്യുന്നതെല്ലാം സ്നേഹത്തിൽ ചെയ്‍വിൻ.” — 1 കൊരിന്ത്യർ 16:14",
                "“Everything should be done in love.” — 1 Corinthians 16:14"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            backDelay: 2700,
            loopCount: Infinity,
            showCursor: false
        };
        typed.current = new (external_typed_js_default())(el.current, options);
        return ()=>{
            typed.current.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
                    async: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).stjoseph__header,
                id: "home",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).stjoseph__header_content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Home_module_default()).gradient__text,
                                ref: el
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Welcome to the official website of the St. Joseph’s Metropolitan Cathedral, Trivandrum, Kerala. The St. Joseph’s Cathedral located at Palayam is an ancient church in India where believers from far and wide flock to receive heavenly blessings."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Home_module_default()).stjoseph__header_content__input,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    children: "For Queries"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).stjoseph__header_image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/churchp.png",
                            alt: "Picture of the author",
                            width: "1750",
                            height: "1700"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Updates, {
                data: data
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).home__possibility,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).home__possibility_image,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: (Home_module_default()).home__possibility_image_tag,
                            src: "/assets/stjoseph.jpg",
                            alt: "joseph",
                            width: "650",
                            height: "600"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).home__possibility_content,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Our Patron Saint"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Home_module_default()).gradient__text,
                                children: "St Joseph"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "“In Joseph … heads of the household are blessed with the unsurpassed model of fatherly watchfulness and care.”"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: 'Everything we know about the husband of Mary and the foster father of Jesus comes from Scripture and that has seemed too little for those who made up legends about him. We know he was a carpenter, a working man, for the skeptical Nazarenes ask about Jesus, "Is this not the carpenter\'s son?" (Matthew 13:55). He wasn\'t rich for when he took Jesus to the Temple to be circumcised and Mary to be purified he offered the sacrifice of two turtledoves or a pair of pigeons, allowed only for those who could not afford a lamb (Luke 2:24). Despite his humble work and means, Joseph came from a royal lineage. Luke and Matthew disagree some about the details of Joseph\'s genealogy but they both mark his descent from David, the greatest king of Israel (Matthew 1:1-16 and Luke 3:23-38). Indeed the angel who first tells Joseph about Jesus greets him as "son of David," a royal title used also for Jesus'
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).church__timing,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).church__timing_heading,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (Home_module_default()).gradient__text,
                            children: "Mass Timings"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).church__timing_container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Home_module_default()).church__timing_contained,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                                    title: "St.Joseph’s Cathedral, Palayam",
                                    text1: "Sunday ",
                                    text: " 5:45am (English) 7.00 am 8.45 am 5.00pm",
                                    text2: "Weekdays",
                                    text3: "5.45am 6.30am 5.30pm"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).church__timing_contained,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                                        title: "St.Antony’s Chapel, Alummoodu",
                                        text1: "Sunday ",
                                        text: "8.30 am"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                                        title: "SantaMaria Oldage Home",
                                        text1: "Sunday ",
                                        text: "6.00 am",
                                        text2: "Weekdays",
                                        text3: "6.30 pm"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).church__timing_contained,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                                        title: "Kunnukuzhi Chapel",
                                        text1: "Sunday ",
                                        text: "10.30 am"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                                        title: "St.Joseph’s HSS Chapels",
                                        text1: "Sunday ",
                                        text: "6.30 am",
                                        text2: "Tuesday",
                                        text3: "6.00 pm"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).church__timing_contained,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                                        title: "Jubilee Hospital Chapel",
                                        text1: "Everyday ",
                                        text: "6.00 am"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                                        title: "FatimaMata Chapel, VanrosJn",
                                        text1: "Sunday ",
                                        text: "5.30 pm",
                                        text2: "Saturday",
                                        text3: "5.30 pm"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).stjoseph__brand_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Home_module_default()).gradient__text,
                        children: ' "OUR SPIRITUAL FATHERS" '
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "-Walk by faith not by light-"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Home_module_default()).stjoseph__brand_container_cards,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).stjoseph__blog_container__article,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Home_module_default()).stjoseph__blog_container__article_image,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/DSC00595.jpg",
                                            alt: "blog",
                                            width: "400",
                                            height: "400"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).stjoseph__blog_container__article_content,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Most Rev. Dr. Thomas J Netto"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Arch Bishop"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).stjoseph__blog_container__article,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Home_module_default()).stjoseph__blog_container__article_image,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/011.JPG",
                                            alt: "blog",
                                            width: "400",
                                            height: "400"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).stjoseph__blog_container__article_content,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Most Rev. Dr. Christudas Rajappan"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Auxiliary Bishop"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Home_module_default()).stjoseph__blog_container__article,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (Home_module_default()).stjoseph__blog_container__article_image,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/assets/DSC01943.JPG",
                                            alt: "blog",
                                            width: "400",
                                            height: "400"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Home_module_default()).stjoseph__blog_container__article_content,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: "Very Rev. Msgr. Nicholas T"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Parish Priest"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).stjoseph__facebook_container,
                children: /*#__PURE__*/ jsx_runtime_.jsx(unit_Unit, {})
            })
        ]
    });
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [398,675,676,664,546,187,564], () => (__webpack_exec__(3446)));
module.exports = __webpack_exports__;

})();