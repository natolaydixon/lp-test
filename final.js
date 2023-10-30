const jsonInfo = [
    {
      "selector": "#main-content > div > div.product-list > div.products-wrapper.mc--2.dc--4.mm--large.dm--none.di--none > div:nth-child(3)",
      "utm_tag": "bra",
      "replacement_html": "<h1 style='font-size: 24px;'><a href='https://www.missmary.com/se/accessories'>Checkout our new gifts cards here</a></h1><button ><a href='https://www.missmary.com/se/accessories'>Click here</a></button>",
      "replacement_css": "grid-column: span 2; background-color: #c5bfb0;"
    }
  ];
  

  for (const data of jsonInfo) {
    const utmTag = data.utm_tag;
    const currentUrl = window.location.href;
console.log(currentUrl)
  
    if (currentUrl.includes(utmTag)) {
      const element = document.querySelector(data.selector);
      if (element) {
        if (data.replacement_html) {
          element.innerHTML = data.replacement_html;
        }
        if (data.replacement_css) {
          element.style.cssText = data.replacement_css;
        }
      }
    }
  }
