/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'gatsby-store-mseitech.myshopify.com',
      storefrontAccessToken: 'b3e5e9e12b3f72cc71b5d487dd97ff38',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '439811342612',
        node: document.getElementById('collection-component-1679164075749'),
        moneyFormat: '%7B%7Bamount_no_decimals%7D%7D%20kr',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(50% - 40px)",
          "margin-left": "40px",
          "margin-bottom": "50px",
          "width": "calc(50% - 40px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        ":hover": {
          "background-color": "#954459"
        },
        "background-color": "#a64b63",
        ":focus": {
          "background-color": "#954459"
        },
        "border-radius": "40px"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-40px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        ":hover": {
          "background-color": "#954459"
        },
        "background-color": "#a64b63",
        ":focus": {
          "background-color": "#954459"
        },
        "border-radius": "40px"
      }
    },
    "googleFonts": [
      "Montserrat"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        ":hover": {
          "background-color": "#954459"
        },
        "background-color": "#a64b63",
        ":focus": {
          "background-color": "#954459"
        },
        "border-radius": "40px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "background-color": "#a64b63",
        ":hover": {
          "background-color": "#954459"
        },
        ":focus": {
          "background-color": "#954459"
        }
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  }
},
      });
    });
  }
})();
/*]]>*/