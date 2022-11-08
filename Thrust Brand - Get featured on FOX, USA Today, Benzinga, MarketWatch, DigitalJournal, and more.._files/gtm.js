// Copyright 2012 Google Inc. All rights reserved.
(function () {
  var data = {
    resource: {
      version: "40",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__gas",
          vtp_cookieDomain: "auto",
          vtp_doubleClick: false,
          vtp_setTrackerName: false,
          vtp_useDebugVersion: false,
          vtp_useHashAutoLink: false,
          vtp_decorateFormsAutoLink: false,
          vtp_enableLinkId: false,
          vtp_enableEcommerce: false,
          vtp_trackingId: "UA-76478250-7",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableGA4Schema: true,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__gaawc",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendPageView: true,
          vtp_measurementId: "G-9L3PH9PWR7",
          vtp_enableUserProperties: true,
          vtp_enableEuid: false,
          tag_id: 3,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: true,
          vtp_trackType: "TRACK_PAGEVIEW",
          vtp_trackingId: "UA-76478250-7",
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_enableGA4Schema: true,
          tag_id: 4,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 7 },
        {
          function: "__sp",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableDynamicRemarketing: false,
          vtp_conversionId: "1006793247",
          vtp_customParamsFormat: "NONE",
          vtp_rdp: false,
          vtp_enableOgtRmktParams: true,
          vtp_enableUserId: true,
          vtp_url: ["macro", 1],
          vtp_enableRdpCheckbox: true,
          vtp_enableConversionLinkingSettings: true,
          tag_id: 8,
        },
        { function: "__paused", vtp_originalTagType: "awct", tag_id: 10 },
        {
          function: "__hjtc",
          metadata: ["map"],
          once_per_event: true,
          vtp_hotjar_site_id: "2144052",
          tag_id: 11,
        },
        { function: "__paused", vtp_originalTagType: "ua", tag_id: 14 },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: true,
          vtp_enableUrlPassthrough: true,
          vtp_acceptIncoming: true,
          vtp_formDecoration: false,
          vtp_urlPosition: "query",
          vtp_enableCookieOverrides: false,
          vtp_enableCrossDomainFeature: true,
          tag_id: 15,
        },
        {
          function: "__cvt_36056130_16",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableFirstPartyCookies: true,
          vtp_id: "t2_4crl8nk6",
          vtp_eventType: "PageVisit",
          tag_id: 17,
        },
        {
          function: "__cvt_36056130_16",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableFirstPartyCookies: true,
          vtp_id: "t2_4crl8nk6",
          vtp_eventType: "Purchase",
          tag_id: 18,
        },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_36056130_16",
          tag_id: 19,
        },
        {
          function: "__qpx",
          metadata: ["map"],
          once_per_event: true,
          vtp_pixel_id: "8dbcab1ad4f6440b91dee0aad9610907",
          vtp_pixel_event: "ViewContent",
          tag_id: 20,
        },
        {
          function: "__qpx",
          metadata: ["map"],
          once_per_event: true,
          vtp_pixel_id: "8dbcab1ad4f6440b91dee0aad9610907",
          vtp_pixel_event: "Purchase",
          tag_id: 21,
        },
        {
          function: "__baut",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "17526548",
          vtp_uetqName: "uetq",
          vtp_eventType: "PAGE_LOAD",
          tag_id: 22,
        },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_36056130_23",
          tag_id: 26,
        },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_36056130_23",
          tag_id: 29,
        },
        {
          function: "__ua",
          metadata: ["map"],
          once_per_event: true,
          vtp_overrideGaSettings: false,
          vtp_trackType: "TRACK_TRANSACTION",
          vtp_gaSettings: ["macro", 5],
          vtp_enableRecaptchaOption: false,
          vtp_enableUaRlsa: false,
          vtp_enableUseInternalVersion: false,
          vtp_enableFirebaseCampaignData: true,
          vtp_trackTypeIsTransaction: true,
          vtp_enableGA4Schema: true,
          tag_id: 31,
        },
        {
          function: "__qpx",
          metadata: ["map"],
          once_per_event: true,
          vtp_pixel_id: "8dbcab1ad4f6440b91dee0aad9610907",
          vtp_pixel_event: "InitiateCheckout",
          tag_id: 36,
        },
        {
          function: "__baut",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "17526548",
          vtp_uetqName: "uetq",
          vtp_eventType: "VARIABLE_REVENUE",
          tag_id: 37,
        },
        {
          function: "__opt",
          metadata: ["map"],
          once_per_event: true,
          vtp_optimizeContainerId: "OPT-MT2M2C9",
          vtp_gaSettings: ["macro", 5],
          tag_id: 39,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "1006793247",
          vtp_conversionLabel: "M7gyCLaFjZ8CEJ_kieAD",
          vtp_rdp: false,
          vtp_url: ["macro", 1],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 41,
        },
        {
          function: "__cvt_36056130_16",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableFirstPartyCookies: true,
          vtp_id: "t2_4crl8nk6",
          vtp_eventType: "AddToCart",
          tag_id: 42,
        },
        {
          function: "__bzi",
          metadata: ["map"],
          once_per_event: true,
          vtp_id: "2936306",
          tag_id: 43,
        },
        {
          function: "__paused",
          vtp_originalTagType: "twitter_website_tag",
          tag_id: 44,
        },
        {
          function: "__paused",
          vtp_originalTagType: "twitter_website_tag",
          tag_id: 45,
        },
        {
          function: "__paused",
          vtp_originalTagType: "twitter_website_tag",
          tag_id: 46,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "1006793247",
          vtp_conversionLabel: "VsFyCKGYycsDEJ_kieAD",
          vtp_rdp: false,
          vtp_url: ["macro", 1],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          tag_id: 50,
        },
        { function: "__cl", tag_id: 54 },
        { function: "__cl", tag_id: 55 },
        {
          function: "__html",
          vtp_html:
            '\n\u003Cscript nonce="VSJwP0hy" type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1076628589495532");fbq("set","agent","tmgoogletagmanager","1076628589495532");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1076628589495532\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 40,
        },
        {
          function: "__html",
          vtp_html:
            '\n\t\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CB1FRGRC77U5B8MNKHU0");a.page()}(window,document,"ttq");\u003C/script\u003E\n\t',
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 47,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("CB1FVQRC77U5TKNGBHEG");a.page()}(window,document,"ttq");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 48,
        },
        {
          function: "__html",
          metadata: ["map"],
          setup_tags: ["list", ["tag", 23, 0]],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Etwq("event","tw-o68v0-oca8l",{});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 52,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version="1.1",a.queue=[],b=e.createElement(f),b.async=!0,b.src="https://static.ads-twitter.com/uwt.js",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,"script");twq("config","o68v0");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 53,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "payment-notification.php",
        },
        { function: "_cn", arg0: ["macro", 2], arg1: "e=" },
        { function: "_eq", arg0: ["macro", 3], arg1: "order-form-pay-button" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 4], arg1: "intercom-button" },
        {
          function: "_sw",
          arg0: ["macro", 2],
          arg1: "https://www.thrustbrand.co/order",
        },
        { function: "_eq", arg0: ["macro", 6], arg1: "/" },
        {
          function: "_cn",
          arg0: ["macro", 2],
          arg1: "https://www.thrustbrand.co/affiliates/login.php?e=4",
        },
      ],
      rules: [
        [
          ["if", 0],
          ["add", 0, 1, 2, 3, 5, 7, 8, 11, 13, 22, 23, 29, 30, 31, 33, 27, 28],
        ],
        [
          ["if", 0, 1],
          ["unless", 2],
          ["add", 4, 9, 12, 18, 24],
          ["block", 23, 33],
        ],
        [
          ["if", 3, 4],
          ["add", 6, 10],
        ],
        [
          ["if", 4, 5],
          ["add", 14, 15],
        ],
        [
          ["if", 0, 1],
          ["add", 16],
        ],
        [
          ["if", 0, 6],
          ["add", 17, 20, 21, 25, 32],
        ],
        [
          ["if", 0, 7],
          ["add", 19],
        ],
        [
          ["if", 0, 8],
          ["add", 26],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_36056130_16",
        [46, "a"],
        [41, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
        [3, "b", ["require", "injectScript"]],
        [3, "c", ["require", "copyFromWindow"]],
        [3, "d", ["require", "setInWindow"]],
        [3, "e", ["require", "callInWindow"]],
        [3, "f", ["require", "createQueue"]],
        [3, "g", ["require", "makeTableMap"]],
        [
          3,
          "h",
          [
            51,
            "",
            [7],
            [41, "l", "m"],
            [3, "l", ["c", "rdt"]],
            [22, [15, "l"], [46, [36, [15, "l"]]]],
            [
              "d",
              "rdt",
              [
                51,
                "",
                [7],
                [41, "n"],
                [3, "n", ["c", "rdt.sendEvent"]],
                [
                  22,
                  [15, "n"],
                  [
                    46,
                    ["e", "rdt.sendEvent.apply", [15, "l"], [15, "arguments"]],
                  ],
                  [46, ["m", [15, "arguments"]]],
                ],
              ],
            ],
            [3, "m", ["f", "rdt.callQueue"]],
            [36, ["c", "rdt"]],
          ],
        ],
        [
          3,
          "i",
          [
            39,
            [
              1,
              [17, [15, "a"], "advancedMatchingParams"],
              [17, [17, [15, "a"], "advancedMatchingParams"], "length"],
            ],
            ["g", [17, [15, "a"], "advancedMatchingParams"], "name", "value"],
            [8],
          ],
        ],
        [43, [15, "i"], "integration", "gtm"],
        [43, [15, "i"], "useDecimalCurrencyValues", true],
        [3, "j", ["h"]],
        [
          22,
          [28, [17, [15, "j"], "advertiserId"]],
          [46, ["j", "init", [17, [15, "a"], "id"], [15, "i"]]],
        ],
        [
          22,
          [28, [17, [15, "a"], "enableFirstPartyCookies"]],
          [46, ["j", "disableFirstPartyCookies"]],
        ],
        [
          3,
          "k",
          [
            8,
            "currency",
            [17, [15, "a"], "currency"],
            "value",
            [17, [15, "a"], "transactionValue"],
          ],
        ],
        [
          22,
          [
            1,
            [29, [17, [15, "a"], "eventType"], "AddToCart"],
            [29, [17, [15, "a"], "eventType"], "AddToWishlist"],
          ],
          [
            46,
            [43, [15, "k"], "transactionId", [17, [15, "a"], "transactionId"]],
          ],
        ],
        [
          22,
          [
            1,
            [29, [17, [15, "a"], "eventType"], "SignUp"],
            [29, [17, [15, "a"], "eventType"], "Lead"],
          ],
          [46, [43, [15, "k"], "itemCount", [17, [15, "a"], "itemCount"]]],
        ],
        [
          22,
          [
            1,
            [12, [17, [15, "a"], "eventType"], "Custom"],
            [17, [15, "a"], "customEventName"],
          ],
          [
            46,
            [
              43,
              [15, "k"],
              "customEventName",
              [17, [15, "a"], "customEventName"],
            ],
          ],
        ],
        ["j", "track", [17, [15, "a"], "eventType"], [15, "k"]],
        [
          "b",
          "https://www.redditstatic.com/ads/pixel.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          "rdtPixel",
        ],
      ],
      [
        50,
        "__baut",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "callInWindow"]],
        [52, "d", ["require", "makeTableMap"]],
        [
          38,
          [17, [15, "a"], "eventType"],
          [46, "PAGE_LOAD", "VARIABLE_REVENUE", "CUSTOM"],
          [
            46,
            [5, [46, [43, [15, "a"], "eventType", "pageView"], [4]]],
            [5, [46, [43, [15, "a"], "eventType", "variableRevenue"], [4]]],
            [5, [46, [43, [15, "a"], "eventType", "custom"]]],
          ],
        ],
        [
          22,
          [17, [15, "a"], "eventCategory"],
          [
            46,
            [
              43,
              [15, "a"],
              "p_event_category",
              [17, [15, "a"], "eventCategory"],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "eventLabel"],
          [46, [43, [15, "a"], "p_event_label", [17, [15, "a"], "eventLabel"]]],
        ],
        [
          22,
          [17, [15, "a"], "eventValue"],
          [46, [43, [15, "a"], "p_event_value", [17, [15, "a"], "eventValue"]]],
        ],
        [
          22,
          [17, [15, "a"], "goalValue"],
          [
            46,
            [43, [15, "a"], "p_revenue_value", [17, [15, "a"], "goalValue"]],
          ],
        ],
        [
          52,
          "e",
          [
            51,
            "",
            [7],
            [
              52,
              "i",
              [
                39,
                [
                  30,
                  [20, [17, [15, "a"], "eventType"], "pageView"],
                  [28, [17, [15, "a"], "customParamTable"]],
                ],
                [8],
                [
                  "d",
                  [17, [15, "a"], "customParamTable"],
                  "customParamName",
                  "customParamValue",
                ],
              ],
            ],
            [
              52,
              "j",
              [
                8,
                "pageViewSpa",
                [7, "page_path", "page_title"],
                "variableRevenue",
                [7, "currency", "revenue_value"],
                "custom",
                [
                  7,
                  "event_category",
                  "event_label",
                  "event_value",
                  "currency",
                  "revenue_value",
                ],
                "ecommerce",
                [
                  7,
                  "ecomm_prodid",
                  "ecomm_pagetype",
                  "ecomm_totalvalue",
                  "ecomm_category",
                ],
                "hotel",
                [
                  7,
                  "currency",
                  "hct_base_price",
                  "hct_booking_xref",
                  "hct_checkin_date",
                  "hct_checkout_date",
                  "hct_length_of_stay",
                  "hct_partner_hotel_id",
                  "hct_total_price",
                  "hct_pagetype",
                ],
                "travel",
                [
                  7,
                  "travel_destid",
                  "travel_originid",
                  "travel_pagetype",
                  "travel_startdate",
                  "travel_enddate",
                  "travel_totalvalue",
                ],
              ],
            ],
            [
              65,
              "k",
              [30, [16, [15, "j"], [17, [15, "a"], "eventType"]], [7]],
              [
                46,
                [
                  43,
                  [15, "i"],
                  [15, "k"],
                  [
                    30,
                    [16, [15, "i"], [15, "k"]],
                    [16, [15, "a"], [0, "p_", [15, "k"]]],
                  ],
                ],
              ],
            ],
            [43, [15, "i"], "tpp", "1"],
            [36, [15, "i"]],
          ],
        ],
        [
          52,
          "f",
          [
            51,
            "",
            [7],
            [
              52,
              "i",
              [
                39,
                [28, [17, [15, "a"], "customConfigTable"]],
                [8],
                [
                  "d",
                  [17, [15, "a"], "customConfigTable"],
                  "customConfigName",
                  "customConfigValue",
                ],
              ],
            ],
            [
              54,
              "k",
              [15, "i"],
              [
                46,
                [
                  22,
                  [20, [16, [15, "i"], [15, "k"]], "true"],
                  [46, [43, [15, "i"], [15, "k"], true]],
                  [
                    46,
                    [
                      22,
                      [20, [16, [15, "i"], [15, "k"]], "false"],
                      [46, [43, [15, "i"], [15, "k"], false]],
                    ],
                  ],
                ],
              ],
            ],
            [
              52,
              "j",
              [
                7,
                "navTimingApi",
                "storeConvTrackCookies",
                "removeQueryFromUrls",
                "disableAutoPageView",
              ],
            ],
            [
              65,
              "k",
              [15, "j"],
              [
                46,
                [
                  43,
                  [15, "i"],
                  [15, "k"],
                  [
                    30,
                    [16, [15, "i"], [15, "k"]],
                    [16, [15, "a"], [0, "c_", [15, "k"]]],
                  ],
                ],
              ],
            ],
            [43, [15, "i"], "ti", [17, [15, "a"], "tagId"]],
            [43, [15, "i"], "tm", "gtm002"],
            [36, [15, "i"]],
          ],
        ],
        [
          52,
          "g",
          [
            51,
            "",
            [7],
            [
              22,
              [20, [17, [15, "a"], "eventType"], "pageView"],
              [
                46,
                [
                  53,
                  [52, "i", ["f"]],
                  ["c", "UET_init", [17, [15, "a"], "uetqName"], [15, "i"]],
                  ["c", "UET_push", [17, [15, "a"], "uetqName"], "pageLoad"],
                ],
              ],
              [
                46,
                [
                  53,
                  [52, "i", ["e"]],
                  [
                    22,
                    [20, [17, [15, "a"], "eventType"], "pageViewSpa"],
                    [
                      46,
                      [
                        "c",
                        "UET_push",
                        [17, [15, "a"], "uetqName"],
                        "event",
                        "page_view",
                        [15, "i"],
                      ],
                    ],
                    [
                      46,
                      [
                        53,
                        [
                          52,
                          "j",
                          [
                            30,
                            [
                              30,
                              [17, [15, "a"], "customEventAction"],
                              [17, [15, "a"], "eventAction"],
                            ],
                            "",
                          ],
                        ],
                        [
                          "c",
                          "UET_push",
                          [17, [15, "a"], "uetqName"],
                          "event",
                          [15, "j"],
                          [15, "i"],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
            ],
            [2, [15, "a"], "gtmOnSuccess", [7]],
          ],
        ],
        [52, "h", "https://bat.bing.com/bat.js"],
        ["b", [15, "h"], [15, "g"], [17, [15, "a"], "gtmOnFailure"], [15, "h"]],
      ],
      [
        50,
        "__qpx",
        [46, "a"],
        [
          50,
          "n",
          [46, "o", "p"],
          [41, "q"],
          [
            3,
            "q",
            [
              0,
              [
                0,
                [
                  0,
                  [
                    0,
                    [0, "https://q.quora.com/_/ad/", [15, "h"]],
                    "/pixel?tag=",
                  ],
                  [15, "o"],
                ],
                "&i=gtm&u=",
              ],
              [15, "m"],
            ],
          ],
          [
            22,
            [15, "p"],
            [46, [3, "q", [0, [15, "q"], [0, "&em=", [15, "p"]]]]],
          ],
          ["b", [15, "q"]],
        ],
        [52, "b", ["require", "sendPixel"]],
        [52, "c", ["require", "setInWindow"]],
        [52, "d", ["require", "copyFromWindow"]],
        [52, "e", ["require", "getUrl"]],
        [52, "f", ["require", "encodeUriComponent"]],
        [52, "g", ["require", "sha256"]],
        [52, "h", [17, [15, "a"], "pixel_id"]],
        [52, "i", [17, [15, "a"], "pixel_event"]],
        [52, "j", [17, [15, "a"], "email"]],
        [52, "k", ["d", "qp"]],
        [52, "l", ["e", [45]]],
        [52, "m", ["f", [15, "l"]]],
        [
          22,
          [29, [15, "i"], "ViewContent"],
          [
            46,
            [
              22,
              [15, "j"],
              [
                46,
                [
                  "g",
                  [15, "j"],
                  [51, "", [7, "o"], ["n", [15, "i"], [15, "o"]]],
                  [17, [15, "a"], "gtmOnFailure"],
                ],
              ],
              [46, ["n", [15, "i"], [45]]],
            ],
          ],
        ],
        [
          22,
          [28, [15, "k"]],
          [
            46,
            [
              "b",
              [
                0,
                [
                  0,
                  [0, "https://q.quora.com/_/ad/", [15, "h"]],
                  "/pixel?tag=ViewContent&i=gtm&u=",
                ],
                [15, "m"],
              ],
            ],
          ],
        ],
        ["c", "qp", "1", true],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__bzi",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "setInWindow"]],
        ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
        [
          "b",
          "https://snap.licdn.com/li.lms-analytics/insight.min.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__hjtc",
        [46, "a"],
        [52, "b", ["require", "createArgumentsQueue"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "setInWindow"]],
        ["b", "hj", "hj.q"],
        [52, "g", [17, [15, "a"], "hotjar_site_id"]],
        [
          "f",
          "_hjSettings",
          [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
        ],
        [
          "d",
          [
            0,
            [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]],
            ".js?sv=7",
          ],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
    ],
    permissions: {
      __cvt_36056130_16: {
        inject_script: { urls: ["https://www.redditstatic.com/ads/pixel.js"] },
        access_globals: {
          keys: [
            { key: "rdt", read: true, write: true, execute: false },
            { key: "rdt.callQueue", read: true, write: true, execute: false },
            {
              key: "rdt.sendEvent.apply",
              read: true,
              write: false,
              execute: true,
            },
            {
              key: "rdt.callQueue.push",
              read: false,
              write: false,
              execute: true,
            },
            { key: "rdt.sendEvent", read: true, write: false, execute: false },
            {
              key: "rdt.advertiserId",
              read: true,
              write: false,
              execute: false,
            },
          ],
        },
      },
      __baut: {
        inject_script: { urls: ["https://bat.bing.com/bat.js"] },
        access_globals: {
          keys: [
            { key: "UET_push", read: false, write: false, execute: true },
            { key: "UET_init", read: false, write: false, execute: true },
          ],
        },
      },
      __qpx: {
        send_pixel: { urls: ["https://q.quora.com/"] },
        access_globals: {
          keys: [{ key: "qp", read: true, write: true, execute: false }],
        },
        get_url: { urlParts: "any" },
      },
      __bzi: {
        access_globals: {
          keys: [
            {
              key: "_linkedin_data_partner_id",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://snap.licdn.com/li.lms-analytics/insight.min.js"],
        },
      },
      __hjtc: {
        access_globals: {
          keys: [
            { key: "hj", read: true, write: true, execute: false },
            { key: "hj.q", read: true, write: true, execute: false },
            { key: "_hjSettings", read: true, write: true, execute: false },
          ],
        },
        inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
      },
    },
    sandboxed_scripts: ["__cvt_36056130_16"],
    security_groups: {
      nonGooglePixels: ["__qpx"],
      nonGoogleScripts: ["__baut", "__bzi", "__hjtc"],
    },
  };

  var productSettings = {
    "AW-1006793247": { preAutoPii: true },
  };

  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ba,
    ca = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    da = function (a) {
      return (a.raw = a);
    },
    ea =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
  else {
    var ha;
    a: {
      var ja = { a: !0 },
        ka = {};
      try {
        ka.__proto__ = ja;
        ha = ka.a;
        break a;
      } catch (a) {}
      ha = !1;
    }
    fa = ha
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var la = fa,
    ma = function (a, b) {
      a.prototype = ea(b.prototype);
      a.prototype.constructor = a;
      if (la) la(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.sl = b.prototype;
    },
    na = this || self,
    oa = function (a) {
      return a;
    };
  var pa = function (a, b) {
    this.h = a;
    this.B = b;
  };
  var ra = function (a) {
      return (
        ("number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ("string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10))
      );
    },
    sa = function () {
      this.D = {};
      this.F = !1;
      this.I = {};
    },
    ta = function (a, b) {
      var c = [],
        d;
      for (d in a.D)
        if (a.D.hasOwnProperty(d))
          switch (((d = d.substr(5)), b)) {
            case 1:
              c.push(d);
              break;
            case 2:
              c.push(a.get(d));
              break;
            case 3:
              c.push([d, a.get(d)]);
          }
      return c;
    };
  sa.prototype.get = function (a) {
    return this.D["dust." + a];
  };
  sa.prototype.set = function (a, b) {
    this.F || ((a = "dust." + a), this.I.hasOwnProperty(a) || (this.D[a] = b));
  };
  sa.prototype.has = function (a) {
    return this.D.hasOwnProperty("dust." + a);
  };
  var ua = function (a, b) {
    b = "dust." + b;
    a.F || a.I.hasOwnProperty(b) || delete a.D[b];
  };
  sa.prototype.Mb = function () {
    this.F = !0;
  };
  sa.prototype.Me = function () {
    return this.F;
  };
  var va = function (a) {
    this.B = new sa();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) &&
        (ra(b) ? (this.h[Number(b)] = a[Number(b)]) : this.B.set(b, a[b]));
  };
  ba = va.prototype;
  ba.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d
        ? b.push("")
        : d instanceof va
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(d.toString());
    }
    return b.join(",");
  };
  ba.set = function (a, b) {
    if (!this.D)
      if ("length" === a) {
        if (!ra(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.h.length = Number(b);
      } else ra(a) ? (this.h[Number(a)] = b) : this.B.set(a, b);
  };
  ba.get = function (a) {
    return "length" === a
      ? this.length()
      : ra(a)
      ? this.h[Number(a)]
      : this.B.get(a);
  };
  ba.length = function () {
    return this.h.length;
  };
  ba.Lb = function () {
    for (var a = ta(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new va(a);
  };
  var wa = function (a, b) {
    ra(b) ? delete a.h[Number(b)] : ua(a.B, b);
  };
  ba = va.prototype;
  ba.pop = function () {
    return this.h.pop();
  };
  ba.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  ba.shift = function () {
    return this.h.shift();
  };
  ba.splice = function (a, b, c) {
    return new va(this.h.splice.apply(this.h, arguments));
  };
  ba.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  ba.has = function (a) {
    return (ra(a) && this.h.hasOwnProperty(a)) || this.B.has(a);
  };
  ba.Mb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.B.Mb();
  };
  ba.Me = function () {
    return this.D;
  };
  var xa = function () {
    this.quota = {};
  };
  xa.prototype.reset = function () {
    this.quota = {};
  };
  var ya = function (a, b) {
    this.T = a;
    this.I = function (c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.B = new sa();
    this.h = this.F = void 0;
  };
  ya.prototype.add = function (a, b) {
    za(this, a, b, !1);
  };
  var za = function (a, b, c, d) {
    if (!a.B.Me())
      if (d) {
        var e = a.B;
        e.set(b, c);
        e.I["dust." + b] = !0;
      } else a.B.set(b, c);
  };
  ya.prototype.set = function (a, b) {
    this.B.Me() ||
      (!this.B.has(a) && this.D && this.D.has(a)
        ? this.D.set(a, b)
        : this.B.set(a, b));
  };
  ya.prototype.get = function (a) {
    return this.B.has(a) ? this.B.get(a) : this.D ? this.D.get(a) : void 0;
  };
  ya.prototype.has = function (a) {
    return !!this.B.has(a) || !(!this.D || !this.D.has(a));
  };
  var Aa = function (a) {
    var b = new ya(a.T, a);
    a.F && (b.F = a.F);
    b.I = a.I;
    b.h = a.h;
    return b;
  };
  var Ba = function () {},
    Ca = function (a) {
      return "function" === typeof a;
    },
    k = function (a) {
      return "string" === typeof a;
    },
    Da = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ea = Array.isArray,
    Ha = function (a, b) {
      if (a && Ea(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ja = function (a, b) {
      if (!Da(a) || !Da(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    La = function (a, b) {
      for (var c = new Ka(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    Ma = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Na = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Oa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Pa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Qa = function (a) {
      var b = [];
      if (Ea(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ra = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Sa = function () {
      return new Date(Date.now());
    },
    Ta = function () {
      return Sa().getTime();
    },
    Ka = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ka.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ka.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ua = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Va = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Wa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Xa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    ab = function (a, b) {
      var c = m;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    bb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    cb = /^\w{1,9}$/,
    db = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      Ma(a, function (d, e) {
        cb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    eb = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var fb = function (a, b) {
    sa.call(this);
    this.T = a;
    this.Ca = b;
  };
  ma(fb, sa);
  fb.prototype.toString = function () {
    return this.T;
  };
  fb.prototype.Lb = function () {
    return new va(ta(this, 1));
  };
  fb.prototype.h = function (a, b) {
    return this.Ca.apply(
      new gb(this, a),
      Array.prototype.slice.call(arguments, 1)
    );
  };
  fb.prototype.B = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var ib = function (a, b) {
      for (
        var c, d = 0;
        d < b.length && !((c = hb(a, b[d])), c instanceof pa);
        d++
      );
      return c;
    },
    hb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof fb))
          throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.F;
        d && d(e, b.context ? { id: b[0], line: b.context.line } : null);
        throw e;
      }
    },
    gb = function (a, b) {
      this.B = a;
      this.h = b;
    },
    z = function (a, b) {
      return Ea(b) ? hb(a.h, b) : b;
    },
    F = function (a) {
      return a.B.T;
    };
  var jb = function () {
    sa.call(this);
  };
  ma(jb, sa);
  jb.prototype.Lb = function () {
    return new va(ta(this, 1));
  };
  var kb = {
    map: function (a) {
      for (var b = new jb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = z(this, arguments[c]) + "",
          e = z(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    list: function (a) {
      for (var b = new va(), c = 0; c < arguments.length; c++) {
        var d = z(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = z(this, b);
      if (!(e instanceof va))
        throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new fb(
        a,
        (function () {
          return function (g) {
            var h = Aa(d);
            void 0 === h.h && (h.h = this.h.h);
            for (
              var l = Array.prototype.slice.call(arguments, 0), n = 0;
              n < l.length;
              n++
            )
              if (((l[n] = z(this, l[n])), l[n] instanceof pa)) return l[n];
            for (var p = e.get("length"), q = 0; q < p; q++)
              q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
            h.add("arguments", new va(l));
            var r = ib(h, f);
            if (r instanceof pa) return "return" === r.h ? r.B : r;
          };
        })()
      );
    },
    control: function (a, b) {
      return new pa(a, z(this, b));
    },
    undefined: function () {},
  };
  var lb = function () {
      this.D = new xa();
      this.h = new ya(this.D);
    },
    mb = function (a, b, c) {
      var d = new fb(b, c);
      d.Mb();
      a.h.set(b, d);
    },
    nb = function (a, b, c) {
      kb.hasOwnProperty(b) && mb(a, c || b, kb[b]);
    };
  lb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.B(c);
  };
  lb.prototype.B = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = hb(this.h, arguments[c]);
    return b;
  };
  lb.prototype.F = function (a, b) {
    var c = Aa(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = hb(c, arguments[e]);
    return d;
  };
  function ob() {
    for (var a = pb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function qb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var pb, rb;
  function sb(a) {
    pb = pb || qb();
    rb = rb || ob();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        h = e ? a.charCodeAt(c + 2) : 0,
        l = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (h >> 6),
        q = h & 63;
      e || ((q = 64), d || (p = 64));
      b.push(pb[l], pb[n], pb[p], pb[q]);
    }
    return b.join("");
  }
  function tb(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = rb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return l;
    }
    pb = pb || qb();
    rb = rb || ob();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != g &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        64 != h && (c += String.fromCharCode(((g << 6) & 192) | h)));
    }
  }
  var ub = {},
    vb = function (a, b) {
      ub[a] = ub[a] || [];
      ub[a][b] = !0;
    },
    wb = function () {
      delete ub.GA4_EVENT;
    },
    xb = function (a) {
      var b = ub[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return sb(c.join("")).replace(/\.+$/, "");
    };
  var yb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var zb,
    Ab = function () {
      if (void 0 === zb) {
        var a = null,
          b = na.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: oa,
              createScript: oa,
              createScriptURL: oa,
            });
          } catch (c) {
            na.console && na.console.error(c.message);
          }
          zb = a;
        } else zb = a;
      }
      return zb;
    };
  var Cb = function (a, b) {
    this.h = b === Bb ? a : "";
  };
  Cb.prototype.toString = function () {
    return this.h + "";
  };
  var Db = function (a) {
      return a instanceof Cb && a.constructor === Cb
        ? a.h
        : "type_error:TrustedResourceUrl";
    },
    Bb = {},
    Eb = function (a) {
      var b = a,
        c = Ab(),
        d = c ? c.createScriptURL(b) : b;
      return new Cb(d, Bb);
    };
  var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  function Gb() {
    var a = na.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  function Hb(a) {
    return -1 != Gb().indexOf(a);
  }
  function Ib() {
    return Hb("Firefox") || Hb("FxiOS");
  }
  function Jb() {
    return ((Hb("Chrome") || Hb("CriOS")) && !Hb("Edge")) || Hb("Silk");
  }
  var Kb = {},
    Lb = function (a, b) {
      this.h = b === Kb ? a : "";
    };
  Lb.prototype.toString = function () {
    return this.h.toString();
  };
  var Mb = function (a) {
      return a instanceof Lb && a.constructor === Lb
        ? a.h
        : "type_error:SafeHtml";
    },
    Nb = function (a) {
      var b = a,
        c = Ab(),
        d = c ? c.createHTML(b) : b;
      return new Lb(d, Kb);
    }; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var Ob = {};
  var Pb = function () {},
    Qb = function (a) {
      this.h = a;
    };
  ma(Qb, Pb);
  Qb.prototype.toString = function () {
    return this.h;
  };
  function Rb(a, b) {
    var c = [new Qb(Sb[0].toLowerCase(), Ob)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Qb) g = f.h;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return 0 !== e.indexOf(f);
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Tb(a) {
    if ("script" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase())
      throw Error("Use setTextContent with a SafeStyleSheet.");
  }
  var m = window,
    G = document,
    Ub = navigator,
    Vb = G.currentScript && G.currentScript.src,
    Wb = function (a, b) {
      var c = m[a];
      m[a] = void 0 === c ? b : c;
      return m[a];
    },
    Xb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Yb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Zb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function $b(a, b, c) {
    b &&
      Ma(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var ac = function (a, b, c, d, e) {
      var f = G.createElement("script");
      $b(f, d, Yb);
      f.type = "text/javascript";
      f.async = !0;
      var g = Eb(a);
      f.src = Db(g);
      var h,
        l,
        n,
        p =
          null ==
          (n = (l = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : n.call(l, "script[nonce]");
      (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", h);
      Xb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var q = G.getElementsByTagName("script")[0] || G.body || G.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    bc = function () {
      if (Vb) {
        var a = Vb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    cc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        h = !1;
      g || ((g = G.createElement("iframe")), (h = !0));
      $b(g, c, Zb);
      d &&
        Ma(d, function (n, p) {
          g.dataset[n] = p;
        });
      f &&
        ((g.height = "0"),
        (g.width = "0"),
        (g.style.display = "none"),
        (g.style.visibility = "hidden"));
      if (h) {
        var l = (G.body && G.body.lastChild) || G.body || G.head;
        l.parentNode.insertBefore(g, l);
      }
      Xb(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    dc = function (a, b, c) {
      var d = new Image(1, 1);
      d.onload = function () {
        d.onload = null;
        b && b();
      };
      d.onerror = function () {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    ec = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    fc = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    H = function (a) {
      m.setTimeout(a, 0);
    },
    gc = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    hc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    ic = function (a) {
      var b = G.createElement("div"),
        c = b,
        d = Nb("A<div>" + a + "</div>");
      void 0 !== c.tagName && Tb(c);
      c.innerHTML = Mb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    jc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    kc = function (a) {
      var b;
      try {
        b = Ub.sendBeacon && Ub.sendBeacon(a);
      } catch (c) {
        vb("TAGGING", 15);
      }
      b || dc(a);
    },
    lc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    mc = function () {
      var a = m.performance;
      if (a && Ca(a.now)) return a.now();
    };
  var nc = function (a, b) {
      return z(this, a) && z(this, b);
    },
    oc = function (a, b) {
      return z(this, a) === z(this, b);
    },
    pc = function (a, b) {
      return z(this, a) || z(this, b);
    },
    rc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    sc = function (a, b) {
      a = String(z(this, a));
      b = String(z(this, b));
      return a.substring(0, b.length) === b;
    },
    tc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      switch (a) {
        case "pageLocation":
          var c = m.location.href;
          b instanceof jb &&
            b.get("stripProtocol") &&
            (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var vc = function () {
    this.h = new lb();
    uc(this);
  };
  vc.prototype.execute = function (a) {
    return this.h.B(a);
  };
  var uc = function (a) {
    nb(a.h, "map");
    var b = function (c, d) {
      mb(a.h, c, d);
    };
    b("and", nc);
    b("contains", rc);
    b("equals", oc);
    b("or", pc);
    b("startsWith", sc);
    b("variable", tc);
  };
  var wc = function (a) {
    if (a instanceof wc) return a;
    this.Ya = a;
  };
  wc.prototype.toString = function () {
    return String(this.Ya);
  };
  var yc = function (a) {
    sa.call(this);
    this.h = a;
    this.set("then", xc(this));
    this.set("catch", xc(this, !0));
    this.set("finally", xc(this, !1, !0));
  };
  ma(yc, jb);
  var xc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new fb("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof fb || (d = void 0);
      e instanceof fb || (e = void 0);
      var f = Aa(this.h),
        g = function (l) {
          return function (n) {
            return c ? (l.h(f), a.h) : l.h(f, n);
          };
        },
        h = a.h.then(d && g(d), e && g(e));
      return new yc(h);
    });
  }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var zc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Ac = function (a) {
      if (null == a) return String(a);
      var b = zc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Bc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Cc = function (a) {
      if (!a || "object" != Ac(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Bc(a, "constructor") &&
          !Bc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Bc(a, b);
    },
    I = function (a, b) {
      var c = b || ("array" == Ac(a) ? [] : {}),
        d;
      for (d in a)
        if (Bc(a, d)) {
          var e = a[d];
          "array" == Ac(e)
            ? ("array" != Ac(c[d]) && (c[d] = []), (c[d] = I(e, c[d])))
            : Cc(e)
            ? (Cc(c[d]) || (c[d] = {}), (c[d] = I(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var Ec = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, l) {
          for (var n = ta(h, 1), p = 0; p < n.length; p++)
            l[n[p]] = g(h.get(n[p]));
        },
        g = function (h) {
          var l = d.indexOf(h);
          if (-1 < l) return e[l];
          if (h instanceof va) {
            var n = [];
            d.push(h);
            e.push(n);
            for (var p = h.Lb(), q = 0; q < p.length(); q++)
              n[p.get(q)] = g(h.get(p.get(q)));
            return n;
          }
          if (h instanceof yc) return h.h;
          if (h instanceof jb) {
            var r = {};
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          if (h instanceof fb) {
            var u = function () {
              for (
                var v = Array.prototype.slice.call(arguments, 0), w = 0;
                w < v.length;
                w++
              )
                v[w] = Dc(v[w], b, c);
              var x = new ya(b ? b.T : new xa());
              b && (x.h = b.h);
              return g(h.h.apply(h, [x].concat(v)));
            };
            d.push(h);
            e.push(u);
            f(h, u);
            return u;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (h instanceof wc && t) return h.Ya;
          switch (typeof h) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return h;
            case "object":
              if (null === h) return null;
          }
        };
      return g(a);
    },
    Dc = function (a, b, c) {
      var d = [],
        e = [],
        f = function (h, l) {
          for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n]));
        },
        g = function (h) {
          var l = d.indexOf(h);
          if (-1 < l) return e[l];
          if (Ea(h) || Na(h)) {
            var n = new va([]);
            d.push(h);
            e.push(n);
            for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
            return n;
          }
          if (Cc(h)) {
            var q = new jb();
            d.push(h);
            e.push(q);
            f(h, q);
            return q;
          }
          if ("function" === typeof h) {
            var r = new fb("", function (y) {
              for (
                var A = Array.prototype.slice.call(arguments, 0), B = 0;
                B < A.length;
                B++
              )
                A[B] = Ec(z(this, A[B]), b, c);
              return g((0, this.h.I)(h, h, A));
            });
            d.push(h);
            e.push(r);
            f(h, r);
            return r;
          }
          var w = typeof h;
          if (null === h || "string" === w || "number" === w || "boolean" === w)
            return h;
          var x = !1;
          switch (c) {
            case 1:
              x = !0;
              break;
            case 2:
              x = !1;
              break;
            default:
          }
          if (void 0 !== h && x) return new wc(h);
        };
      return g(a);
    };
  var Fc = function (a) {
      for (var b = [], c = 0; c < a.length(); c++)
        a.has(c) && (b[c] = a.get(c));
      return b;
    },
    Gc = function (a) {
      if (void 0 === a || Ea(a) || Cc(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var Hc = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e] instanceof va)
          for (var f = arguments[e], g = 0; g < f.length(); g++)
            c.push(f.get(g));
        else c.push(arguments[e]);
      return new va(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new va(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.h(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new va(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;
      else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;
      else {
        if (0 === d)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--)
        this.has(h) && (e = b.h(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function () {
      for (var a = Fc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new va(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Fc(this);
      void 0 === b
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.h(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1)
      );
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var Ic =
      "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(
        " "
      ),
    Jc = new pa("break"),
    Kc = new pa("continue"),
    Lc = function (a, b) {
      return z(this, a) + z(this, b);
    },
    Mc = function (a, b) {
      return z(this, a) && z(this, b);
    },
    Nc = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (!(c instanceof va))
        throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = Ec(c.get(0));
            try {
              return a.toString(e);
            } catch (q) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= Ic.indexOf(b)) {
          var f = Ec(c);
          return Dc(a[b].apply(a, f), this.h);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof va) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof fb) {
            var h = Fc(c);
            h.unshift(this.h);
            return g.h.apply(g, h);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= Hc.supportedMethods.indexOf(b)) {
          var l = Fc(c);
          l.unshift(this.h);
          return Hc[b].apply(a, l);
        }
      }
      if (a instanceof fb || a instanceof jb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof fb) {
            var p = Fc(c);
            p.unshift(this.h);
            return n.h.apply(n, p);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof fb ? a.T : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, Fc(c));
      }
      if (a instanceof wc && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Oc = function (a, b) {
      a = z(this, a);
      if ("string" !== typeof a)
        throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a))
        throw Error("Attempting to assign to undefined value " + b);
      var d = z(this, b);
      c.set(a, d);
      return d;
    },
    Pc = function (a) {
      var b = Aa(this.h),
        c = ib(b, Array.prototype.slice.apply(arguments));
      if (c instanceof pa) return c;
    },
    Qc = function () {
      return Jc;
    },
    Rc = function (a) {
      for (var b = z(this, a), c = 0; c < b.length; c++) {
        var d = z(this, b[c]);
        if (d instanceof pa) return d;
      }
    },
    Sc = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = z(this, arguments[c + 1]);
          za(b, d, e, !0);
        }
      }
    },
    Tc = function () {
      return Kc;
    },
    Uc = function (a, b, c) {
      var d = new va();
      b = z(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(
        Array.prototype.splice.call(arguments, 2, arguments.length - 2)
      );
      this.h.add(a, z(this, f));
    },
    Vc = function (a, b) {
      return z(this, a) / z(this, b);
    },
    Wc = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      var c = a instanceof wc,
        d = b instanceof wc;
      return c || d ? (c && d ? a.Ya == b.Ya : !1) : a == b;
    },
    Xc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]);
      return b;
    };
  function Yc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = ib(f, d);
      if (g instanceof pa) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Zc(a, b, c) {
    if ("string" === typeof b)
      return Yc(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (b instanceof jb || b instanceof va || b instanceof fb) {
      var d = b.Lb(),
        e = d.length();
      return Yc(
        a,
        function () {
          return e;
        },
        function (f) {
          return d.get(f);
        },
        c
      );
    }
  }
  var $c = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Zc(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    ad = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Zc(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    bd = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return Zc(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    },
    dd = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return cd(
        function (e) {
          d.set(a, e);
          return d;
        },
        b,
        c
      );
    },
    ed = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return cd(
        function (e) {
          var f = Aa(d);
          za(f, a, e, !0);
          return f;
        },
        b,
        c
      );
    },
    fd = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      var d = this.h;
      return cd(
        function (e) {
          var f = Aa(d);
          f.add(a, e);
          return f;
        },
        b,
        c
      );
    };
  function cd(a, b, c) {
    if ("string" === typeof b)
      return Yc(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof va)
      return Yc(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    throw new TypeError("The value is not iterable.");
  }
  var gd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var u = f.get(r);
          q.add(u, p.get(u));
        }
      }
      var f = z(this, a);
      if (!(f instanceof va))
        throw Error(
          "TypeError: Non-List argument given to ForLet instruction."
        );
      var g = this.h;
      d = z(this, d);
      var h = Aa(g);
      for (e(g, h); hb(h, b); ) {
        var l = ib(h, d);
        if (l instanceof pa) {
          if ("break" === l.h) break;
          if ("return" === l.h) return l;
        }
        var n = Aa(g);
        e(h, n);
        hb(n, c);
        h = n;
      }
    },
    hd = function (a) {
      a = z(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    id = function (a, b) {
      var c;
      a = z(this, a);
      b = z(this, b);
      if (void 0 === a || null === a)
        throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof jb || a instanceof va || a instanceof fb) c = a.get(b);
      else if ("string" === typeof a)
        "length" === b ? (c = a.length) : ra(b) && (c = a[b]);
      else if (a instanceof wc) return;
      return c;
    },
    jd = function (a, b) {
      return z(this, a) > z(this, b);
    },
    kd = function (a, b) {
      return z(this, a) >= z(this, b);
    },
    ld = function (a, b) {
      a = z(this, a);
      b = z(this, b);
      a instanceof wc && (a = a.Ya);
      b instanceof wc && (b = b.Ya);
      return a === b;
    },
    md = function (a, b) {
      return !ld.call(this, a, b);
    },
    nd = function (a, b, c) {
      var d = [];
      z(this, a) ? (d = z(this, b)) : c && (d = z(this, c));
      var e = ib(this.h, d);
      if (e instanceof pa) return e;
    },
    od = function (a, b) {
      return z(this, a) < z(this, b);
    },
    pd = function (a, b) {
      return z(this, a) <= z(this, b);
    },
    qd = function (a, b) {
      return z(this, a) % z(this, b);
    },
    rd = function (a, b) {
      return z(this, a) * z(this, b);
    },
    sd = function (a) {
      return -z(this, a);
    },
    td = function (a) {
      return !z(this, a);
    },
    ud = function (a, b) {
      return !Wc.call(this, a, b);
    },
    vd = function () {
      return null;
    },
    wd = function (a, b) {
      return z(this, a) || z(this, b);
    },
    xd = function (a, b) {
      var c = z(this, a);
      z(this, b);
      return c;
    },
    yd = function (a) {
      return z(this, a);
    },
    zd = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    Ad = function (a) {
      return new pa("return", z(this, a));
    },
    Bd = function (a, b, c) {
      a = z(this, a);
      b = z(this, b);
      c = z(this, c);
      if (null === a || void 0 === a)
        throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof fb || a instanceof va || a instanceof jb) && a.set(b, c);
      return c;
    },
    Cd = function (a, b) {
      return z(this, a) - z(this, b);
    },
    Dd = function (a, b, c) {
      a = z(this, a);
      var d = z(this, b),
        e = z(this, c);
      if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, h = 0; h < d.length; h++)
        if (g || a === z(this, d[h]))
          if (((f = z(this, e[h])), f instanceof pa)) {
            var l = f.h;
            if ("break" === l) return;
            if ("return" === l || "continue" === l) return f;
          } else g = !0;
      if (
        e.length === d.length + 1 &&
        ((f = z(this, e[e.length - 1])),
        f instanceof pa && ("return" === f.h || "continue" === f.h))
      )
        return f;
    },
    Ed = function (a, b, c) {
      return z(this, a) ? z(this, b) : z(this, c);
    },
    Fd = function (a) {
      a = z(this, a);
      return a instanceof fb ? "function" : typeof a;
    },
    Jd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    Kd = function (a, b, c, d) {
      var e = z(this, d);
      if (z(this, c)) {
        var f = ib(this.h, e);
        if (f instanceof pa) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; z(this, a); ) {
        var g = ib(this.h, e);
        if (g instanceof pa) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        z(this, b);
      }
    },
    Ld = function (a) {
      return ~Number(z(this, a));
    },
    Md = function (a, b) {
      return Number(z(this, a)) << Number(z(this, b));
    },
    Nd = function (a, b) {
      return Number(z(this, a)) >> Number(z(this, b));
    },
    Od = function (a, b) {
      return Number(z(this, a)) >>> Number(z(this, b));
    },
    Pd = function (a, b) {
      return Number(z(this, a)) & Number(z(this, b));
    },
    Qd = function (a, b) {
      return Number(z(this, a)) ^ Number(z(this, b));
    },
    Rd = function (a, b) {
      return Number(z(this, a)) | Number(z(this, b));
    };
  var Td = function () {
    this.h = new lb();
    Sd(this);
  };
  Td.prototype.execute = function (a) {
    return Ud(this.h.B(a));
  };
  var Vd = function (a, b, c) {
      return Ud(a.h.F(b, c));
    },
    Sd = function (a) {
      var b = function (d, e) {
        nb(a.h, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        mb(a.h, String(d), e);
      };
      c(0, Lc);
      c(1, Mc);
      c(2, Nc);
      c(3, Oc);
      c(53, Pc);
      c(4, Qc);
      c(5, Rc);
      c(52, Sc);
      c(6, Tc);
      c(9, Rc);
      c(50, Uc);
      c(10, Vc);
      c(12, Wc);
      c(13, Xc);
      c(47, $c);
      c(54, ad);
      c(55, bd);
      c(63, gd);
      c(64, dd);
      c(65, ed);
      c(66, fd);
      c(15, hd);
      c(16, id);
      c(17, id);
      c(18, jd);
      c(19, kd);
      c(20, ld);
      c(21, md);
      c(22, nd);
      c(23, od);
      c(24, pd);
      c(25, qd);
      c(26, rd);
      c(27, sd);
      c(28, td);
      c(29, ud);
      c(45, vd);
      c(30, wd);
      c(32, xd);
      c(33, xd);
      c(34, yd);
      c(35, yd);
      c(46, zd);
      c(36, Ad);
      c(43, Bd);
      c(37, Cd);
      c(38, Dd);
      c(39, Ed);
      c(40, Fd);
      c(41, Jd);
      c(42, Kd);
      c(58, Ld);
      c(57, Md);
      c(60, Nd);
      c(61, Od);
      c(56, Pd);
      c(62, Qd);
      c(59, Rd);
    };
  function Ud(a) {
    if (
      a instanceof pa ||
      a instanceof fb ||
      a instanceof va ||
      a instanceof jb ||
      a instanceof wc ||
      null === a ||
      void 0 === a ||
      "string" === typeof a ||
      "number" === typeof a ||
      "boolean" === typeof a
    )
      return a;
  }
  var Wd = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      yi: a("consent"),
      yg: a("convert_case_to"),
      zg: a("convert_false_to"),
      Ag: a("convert_null_to"),
      Bg: a("convert_true_to"),
      Cg: a("convert_undefined_to"),
      fl: a("debug_mode_metadata"),
      cb: a("function"),
      zf: a("instance_name"),
      mj: a("live_only"),
      nj: a("malware_disabled"),
      oj: a("metadata"),
      rj: a("original_activity_id"),
      ml: a("original_vendor_template_id"),
      kl: a("once_on_load"),
      qj: a("once_per_event"),
      Eh: a("once_per_load"),
      nl: a("priority_override"),
      ol: a("respected_consent_types"),
      Ih: a("setup_tags"),
      fd: a("tag_id"),
      Jh: a("teardown_tags"),
    };
  })();
  var re;
  var se = [],
    te = [],
    ue = [],
    ve = [],
    we = [],
    xe = {},
    ze,
    Ae,
    Ce = function () {
      var a = Be;
      Ae = Ae || a;
    },
    De,
    Ee = function (a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Fe = function (a, b) {
      var c = a["function"],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = xe[c],
        f = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e && d && d.Oh && d.Oh(a[g]),
          (f[void 0 !== e ? g : g.substr(4)] = a[g]));
      e && d && d.Nh && (f.vtp_gtmCachedValues = d.Nh);
      if (b) {
        if (null == b.name) {
          var h;
          a: {
            var l = b.index;
            if (null == l) h = "";
            else {
              var n;
              switch (b.type) {
                case 2:
                  n = se[l];
                  break;
                case 1:
                  n = ve[l];
                  break;
                default:
                  h = "";
                  break a;
              }
              var p = n && n[Wd.zf];
              h = p ? String(p) : "";
            }
          }
          b.name = h;
        }
        e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name));
      }
      return void 0 !== e ? e(f) : re(c, f, b);
    },
    He = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Ge(a[e], b, c));
      return d;
    },
    Ge = function (a, b, c) {
      if (Ea(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Ge(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = se[f];
            if (!g || b.Vf(g)) return;
            c[f] = !0;
            var h = String(g[Wd.zf]);
            try {
              var l = He(g, b, c);
              l.vtp_gtmEventId = b.id;
              b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
              d = Fe(l, { event: b, index: f, type: 2, name: h });
              De && (d = De.Ej(d, l));
            } catch (y) {
              b.ai && b.ai(y, Number(f), h), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[Ge(a[n], b, c)] = Ge(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = Ge(a[q], b, c);
              Ae && (p = p || r === Ae.se);
              d.push(r);
            }
            return Ae && p ? Ae.Fj(d) : d.join("");
          case "escape":
            d = Ge(a[1], b, c);
            if (Ae && Ea(a[1]) && "macro" === a[1][0] && Ae.gk(a))
              return Ae.Bk(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Xd[a[u]] && (d = Xd[a[u]](d));
            return d;
          case "tag":
            var t = a[1];
            if (!ve[t])
              throw Error("Unable to resolve tag reference " + t + ".");
            return (d = { Th: a[2], index: t });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v["function"] = a[1];
            var w = Ie(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Ie = function (a, b, c) {
      try {
        return ze(He(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Je = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.B = a;
    this.h = c;
  };
  ma(Je, Error);
  function Ke(a, b) {
    if (Ea(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Ke(a[c], b[c]);
    }
  }
  var Le = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.wk = a;
    this.B = b;
    this.h = [];
  };
  ma(Le, Error);
  var Ne = function () {
    return function (a, b) {
      a instanceof Le || (a = new Le(a, Me));
      b && a.h.push(b);
      throw a;
    };
  };
  function Me(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  var Qe = function (a) {
      function b(r) {
        for (var u = 0; u < r.length; u++) d[r[u]] = !0;
      }
      for (var c = [], d = [], e = Oe(a), f = 0; f < te.length; f++) {
        var g = te[f],
          h = Pe(g, e);
        if (h) {
          for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var p = [], q = 0; q < ve.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Pe = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var h = b(f[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Oe = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Ie(ue[c], a));
        return b[c];
      };
    };
  var Re = {
    Ej: function (a, b) {
      b[Wd.yg] &&
        "string" === typeof a &&
        (a = 1 == b[Wd.yg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Wd.Ag) && null === a && (a = b[Wd.Ag]);
      b.hasOwnProperty(Wd.Cg) && void 0 === a && (a = b[Wd.Cg]);
      b.hasOwnProperty(Wd.Bg) && !0 === a && (a = b[Wd.Bg]);
      b.hasOwnProperty(Wd.zg) && !1 === a && (a = b[Wd.zg]);
      return a;
    },
  };
  var Se = function () {
    this.h = {};
  };
  function Te(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e].call(void 0, b, c, d)), (g += ".");
        } catch (h) {
          g =
            "string" === typeof h
              ? g + (": " + h)
              : h instanceof Error
              ? g + (": " + h.message)
              : g + ".";
        }
        if (!f) throw new Je(c, d, g);
      }
  }
  function Ue(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Te(e, b, d, g);
          Te(f, b, d, g);
        }
      }
    };
  }
  var Ye = function () {
      var a = data.permissions || {},
        b = Ve.N,
        c = this;
      this.B = new Se();
      this.h = {};
      var d = {},
        e = Ue(this.B, b, function () {
          var f = arguments[0];
          return f && d[f]
            ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      Ma(a, function (f, g) {
        var h = {};
        Ma(g, function (l, n) {
          var p = We(l, n);
          h[l] = p.assert;
          d[l] || (d[l] = p.ca);
        });
        c.h[f] = function (l, n) {
          var p = h[l];
          if (!p)
            throw Xe(
              l,
              {},
              "The requested permission " + l + " is not configured."
            );
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    $e = function (a) {
      return Ze.h[a] || function () {};
    };
  function We(a, b) {
    var c = Ee(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Xe;
    try {
      return Fe(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Je(e, {}, "Permission " + e + " is unknown.");
        },
        ca: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f)
            e["arg" + (f + 1)] = arguments[f];
          return e;
        },
      };
    }
  }
  function Xe(a, b, c) {
    return new Je(a, b, c);
  }
  var af = !1;
  var bf = {};
  bf.bl = Pa("");
  bf.Ij = Pa("");
  var cf = af,
    df = bf.Ij,
    ef = bf.bl;
  var gf = [];
  gf[7] = !0;
  gf[9] = !0;
  gf[27] = !0;
  gf[6] = !0;
  gf[12] = !0;
  gf[11] = !0;
  gf[13] = !0;
  gf[15] = !0;
  gf[18] = !0;
  gf[23] = !0;
  gf[29] = !0;
  gf[33] = !0;
  gf[35] = !0;
  gf[36] = !0;
  gf[38] = !0;
  gf[43] = !0;
  gf[44] = !0;
  hf(46, 47);
  gf[51] = !0;
  gf[54] = !0;
  gf[57] = !0;
  function hf(a, b) {
    for (var c, d, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? (gf[a] = !0) : (gf[b] = !0);
  }
  var K = function (a) {
    return !!gf[a];
  };
  var xf = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    yf = function (a, b) {
      var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
      xf(b, "/*") && (b = b.slice(0, -2));
      xf(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && 1 === d.length) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (-1 === e || (0 === f && 0 !== e)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var h = d[d.length - 1];
      return a.lastIndexOf(h) === a.length - h.length;
    },
    zf = /^[a-z0-9-]+$/i,
    Af = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
    Cf = function (a, b) {
      var c;
      if (!(c = !Bf(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (2 > e.length) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!zf.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var h;
        var l = a,
          n = b[g];
        if (!Af.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var u = l.hostname,
          t = q;
        if (0 !== t.indexOf("*.")) r = u.toLowerCase() === t.toLowerCase();
        else {
          t = t.slice(2);
          var v = u.toLowerCase().indexOf(t.toLowerCase());
          r =
            -1 === v
              ? !1
              : u.length === t.length
              ? !0
              : u.length !== t.length + v
              ? !1
              : "." === u[v - 1];
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          h = yf(l.pathname + l.search, w) ? !0 : !1;
        } else h = !1;
        if (h) return !0;
      }
      return !1;
    },
    Bf = function (a) {
      return "https:" === a.protocol && (!a.port || "443" === a.port);
    };
  var Df = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ef(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      (a << 2) | b
    ];
  }
  var Ff =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    If = { Fn: "function", DustMap: "Object", List: "Array" },
    L = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Ff.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          h = e[3],
          l = c[d];
        if (null == l) {
          if (g)
            throw Error(
              "Error in " + a + ". Required argument " + f + " not supplied."
            );
        } else if ("*" !== h) {
          var n = typeof l;
          l instanceof fb
            ? (n = "Fn")
            : l instanceof va
            ? (n = "List")
            : l instanceof jb
            ? (n = "DustMap")
            : l instanceof wc && (n = "OpaqueValue");
          if (n != h)
            throw Error(
              "Error in " +
                a +
                ". Argument " +
                f +
                " has type " +
                (If[n] || n) +
                ", which does not match required type " +
                (If[h] || h) +
                "."
            );
        }
      }
    };
  function Jf(a) {
    return "" + a;
  }
  function Kf(a, b) {
    var c = [];
    return c;
  }
  var Lf = function (a, b) {
      var c = new fb(a, function () {
        for (
          var d = Array.prototype.slice.call(arguments, 0), e = 0;
          e < d.length;
          e++
        )
          d[e] = z(this, d[e]);
        return b.apply(this, d);
      });
      c.Mb();
      return c;
    },
    Mf = function (a, b) {
      var c = new jb(),
        d;
      for (d in b)
        if (b.hasOwnProperty(d)) {
          var e = b[d];
          Ca(e)
            ? c.set(d, Lf(a + "_" + d, e))
            : (Da(e) || k(e) || "boolean" === typeof e) && c.set(d, e);
        }
      c.Mb();
      return c;
    };
  var Nf = function (a, b) {
    L(F(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new jb();
    return (d = Mf("AssertApiSubject", c));
  };
  var Of = function (a, b) {
    L(F(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof yc)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new jb();
    return (d = Mf("AssertThatSubject", c));
  };
  function Pf(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
        b.push(Ec(arguments[d], c));
      return Dc(a.apply(null, b));
    };
  }
  var Rf = function () {
    for (var a = Math, b = Qf, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Pf(a[e].bind(a)));
    }
    return c;
  };
  var Sf = function (a) {
    var b;
    return b;
  };
  var Tf = function (a) {
    var b;
    return b;
  };
  var Uf = function (a) {
    return encodeURI(a);
  };
  var Vf = function (a) {
    return encodeURIComponent(a);
  };
  var Wf = function (a) {
    L(F(this), ["message:?string"], arguments);
  };
  var Xf = function (a, b) {
    L(F(this), ["min:!number", "max:!number"], arguments);
    return Ja(a, b);
  };
  var M = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    d.Cj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var Yf = function () {
    M(this, "read_container_data");
    var a = new jb();
    a.set("containerId", "GTM-P46CGK5");
    a.set("version", "40");
    a.set("environmentName", "");
    a.set("debugMode", cf);
    a.set("previewMode", ef);
    a.set("environmentMode", df);
    a.Mb();
    return a;
  };
  var Zf = function () {
    return new Date().getTime();
  };
  var $f = function (a) {
    if (null === a) return "null";
    if (a instanceof va) return "array";
    if (a instanceof fb) return "function";
    if (a instanceof wc) {
      a = a.Ya;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var ag = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (cf || ef) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return Dc(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(Ec(c));
      }),
    };
  };
  var bg = function (a) {
    return Oa(Ec(a, this.h));
  };
  var cg = function (a) {
    return Number(Ec(a, this.h));
  };
  var dg = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var eg = function (a, b, c) {
    var d = null,
      e = !1;
    L(
      F(this),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new jb();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof jb &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  };
  var Qf = "floor ceil round max min abs pow sqrt".split(" ");
  var fg = function () {
      var a = {};
      return {
        Tj: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Tk: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        },
      };
    },
    gg = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return fb.prototype.h.apply(a, c);
      };
    },
    hg = function (a, b) {
      L(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var ig = {};
  ig.keys = function (a) {
    return new va();
  };
  ig.values = function (a) {
    return new va();
  };
  ig.entries = function (a) {
    return new va();
  };
  ig.freeze = function (a) {
    return a;
  };
  ig.delete = function (a, b) {
    return !1;
  };
  var kg = function () {
    this.h = {};
    this.B = {};
  };
  kg.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  kg.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a))
      throw "Attempting to add a function which already exists: " + a + ".";
    if (this.B.hasOwnProperty(a))
      throw (
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.h[a] = c ? void 0 : Ca(b) ? Lf(a, b) : Mf(a, b);
  };
  function lg(a, b) {
    var c = void 0;
    return c;
  }
  function mg() {
    var a = {};
    return a;
  }
  var og = function (a) {
      return ng ? G.querySelectorAll(a) : null;
    },
    pg = function (a, b) {
      if (!ng) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!G.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    qg = !1;
  if (G.querySelectorAll)
    try {
      var rg = G.querySelectorAll(":root");
      rg && 1 == rg.length && rg[0] == G.documentElement && (qg = !0);
    } catch (a) {}
  var ng = qg;
  var P = function (a) {
    vb("GTM", a);
  };
  var sg = function (a) {
      return null == a ? "" : k(a) ? Ra(String(a)) : "e0";
    },
    ug = function (a) {
      return a.replace(tg, "");
    },
    wg = function (a) {
      return vg(a.replace(/\s/g, ""));
    },
    vg = function (a) {
      return Ra(a.replace(xg, "").toLowerCase());
    },
    zg = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return yg.test(a) ? a : "e0";
    },
    Bg = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Ag.test(c)) return c;
      }
      return "e0";
    },
    Eg = function (a, b) {
      window.Promise || b([]);
      Promise.all(
        a.map(function (c) {
          return c.value && -1 !== Cg.indexOf(c.name)
            ? Dg(c.value).then(function (d) {
                c.value = d;
              })
            : Promise.resolve();
        })
      )
        .then(function () {
          b(a);
        })
        .catch(function () {
          b([]);
        });
    },
    Dg = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (m.crypto && m.crypto.subtle) {
        if (Fg.test(a)) return Promise.resolve(a);
        try {
          var b = Gg(a);
          return m.crypto.subtle
            .digest("SHA-256", b)
            .then(function (c) {
              var d = Array.from(new Uint8Array(c))
                .map(function (e) {
                  return String.fromCharCode(e);
                })
                .join("");
              return m
                .btoa(d)
                .replace(/\+/g, "-")
                .replace(/\//g, "_")
                .replace(/=+$/, "");
            })
            .catch(function () {
              return "e2";
            });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Gg = function (a) {
      var b;
      if (m.TextEncoder) b = new m.TextEncoder("utf-8").encode(a);
      else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e
            ? c.push(e)
            : 2048 > e
            ? c.push(192 | (e >> 6), 128 | (e & 63))
            : 55296 > e || 57344 <= e
            ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
            : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
              c.push(
                240 | (e >> 18),
                128 | ((e >> 12) & 63),
                128 | ((e >> 6) & 63),
                128 | (e & 63)
              ));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    xg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Ag = /^\S+@\S+\.\S+$/,
    yg = /^\+\d{10,15}$/,
    tg = /[.~]/g,
    Hg = /^[0-9A-Za-z_-]{43}$/,
    Fg = /^[0-9A-Fa-f]{64}$/,
    Ig = {},
    Jg =
      ((Ig.email = "em"),
      (Ig.phone_number = "pn"),
      (Ig.first_name = "fn"),
      (Ig.last_name = "ln"),
      (Ig.street = "sa"),
      (Ig.city = "ct"),
      (Ig.region = "rg"),
      (Ig.country = "co"),
      (Ig.postal_code = "pc"),
      (Ig.error_code = "ec"),
      Ig),
    Kg = {},
    Lg =
      ((Kg.email = "sha256_email_address"),
      (Kg.phone_number = "sha256_phone_number"),
      (Kg.first_name = "sha256_first_name"),
      (Kg.last_name = "sha256_last_name"),
      (Kg.street = "sha256_street"),
      Kg),
    Mg = function (a, b) {
      function c(u, t, v, w) {
        var x = sg(u);
        "" !== x &&
          (Fg.test(x)
            ? l.push({ name: t, value: x, index: w })
            : l.push({ name: t, value: v(x), index: w }));
      }
      function d(u, t) {
        var v = u;
        if (k(v) || Ea(v)) {
          v = Ea(u) ? u : [u];
          for (var w = 0; w < v.length; ++w) {
            var x = sg(v[w]),
              y = Fg.test(x);
            t && !y && P(89);
            !t && y && P(88);
          }
        }
      }
      function e(u, t) {
        var v = u[t];
        d(v, !1);
        var w = Lg[t];
        u.hasOwnProperty(w) &&
          (u.hasOwnProperty(t) && P(90), (v = u[w]), d(v, !0));
        return v;
      }
      function f(u, t, v) {
        var w = e(u, t);
        w = Ea(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], t, v);
      }
      function g(u, t, v, w) {
        var x = e(u, t);
        c(x, t, v, w);
      }
      function h(u) {
        return function (t) {
          P(64);
          return u(t);
        };
      }
      var l = [];
      if ("https:" === m.location.protocol) {
        f(a, "email", Bg);
        f(a, "phone_number", zg);
        f(a, "first_name", h(wg));
        f(a, "last_name", h(wg));
        var n = a.home_address || {};
        f(n, "street", h(vg));
        f(n, "city", h(vg));
        f(n, "postal_code", h(ug));
        f(n, "region", h(vg));
        f(n, "country", h(ug));
        var p = a.address || {};
        p = Ea(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, "first_name", wg, q);
          g(r, "last_name", wg, q);
          g(r, "street", vg, q);
          g(r, "city", vg, q);
          g(r, "postal_code", ug, q);
          g(r, "region", vg, q);
          g(r, "country", ug, q);
        }
        Eg(l, b);
      } else l.push({ name: "error_code", value: "e3", index: void 0 }), b(l);
    },
    Ng = function (a, b) {
      Mg(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            h = c[f].value,
            l = c[f].index,
            n = Jg[g];
          n &&
            h &&
            (-1 === Cg.indexOf(g) ||
              /^e\d+$/.test(h) ||
              Hg.test(h) ||
              Fg.test(h)) &&
            (void 0 !== l && (n += l), d.push(n + "." + h), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Og = function (a) {
      if (m.Promise)
        try {
          return new Promise(function (b) {
            Ng(a, function (c, d) {
              b({ Cd: c, Ak: d });
            });
          });
        } catch (b) {}
    },
    Cg = Object.freeze([
      "email",
      "phone_number",
      "first_name",
      "last_name",
      "street",
    ]);
  var S = {
      g: {
        J: "ad_storage",
        Z: "analytics_storage",
        Ue: "region",
        xg: "consent_updated",
        Ve: "wait_for_update",
        Ci: "app_remove",
        Di: "app_store_refund",
        Ei: "app_store_subscription_cancel",
        Fi: "app_store_subscription_convert",
        Gi: "app_store_subscription_renew",
        Dg: "add_payment_info",
        Eg: "add_shipping_info",
        Dc: "add_to_cart",
        Ec: "remove_from_cart",
        Fg: "view_cart",
        Yb: "begin_checkout",
        Fc: "select_item",
        Fb: "view_item_list",
        Zb: "select_promotion",
        Gb: "view_promotion",
        Ja: "purchase",
        Gc: "refund",
        Oa: "view_item",
        Gg: "add_to_wishlist",
        Hi: "first_open",
        Ii: "first_visit",
        Da: "gtag.config",
        Ka: "gtag.get",
        Ji: "in_app_purchase",
        Hc: "page_view",
        Ki: "session_start",
        Xe: "user_engagement",
        ac: "gclid",
        na: "ads_data_redaction",
        fa: "allow_ad_personalization_signals",
        Ye: "allow_custom_scripts",
        Li: "allow_display_features",
        Ic: "allow_enhanced_conversions",
        Jc: "allow_google_signals",
        Ea: "allow_interest_groups",
        Td: "auid",
        Mi: "auto_detection_enabled",
        kb: "aw_remarketing",
        Ud: "aw_remarketing_only",
        Kc: "discount",
        Lc: "aw_feed_country",
        Mc: "aw_feed_language",
        ia: "items",
        Nc: "aw_merchant_id",
        Hg: "aw_basket_type",
        Vd: "campaign_content",
        Wd: "campaign_id",
        Xd: "campaign_medium",
        Yd: "campaign_name",
        Oc: "campaign",
        Zd: "campaign_source",
        ae: "campaign_term",
        xb: "client_id",
        Ni: "content_group",
        Oi: "content_type",
        La: "conversion_cookie_prefix",
        Pc: "conversion_id",
        lb: "conversion_label",
        ya: "conversion_linker",
        Ze: "conversion_api",
        nb: "cookie_domain",
        Pa: "cookie_expires",
        ob: "cookie_flags",
        Qc: "cookie_name",
        af: "cookie_path",
        Za: "cookie_prefix",
        Hb: "cookie_update",
        bc: "country",
        va: "currency",
        Rc: "customer_lifetime_value",
        Sc: "custom_map",
        Pi: "debug_mode",
        ja: "developer_id",
        Ig: "disable_merchant_reported_purchases",
        Qi: "dc_custom_params",
        Ri: "dc_natural_search",
        bf: "dynamic_event_settings",
        Si: "affiliation",
        Jg: "checkout_option",
        Kg: "checkout_step",
        Ti: "coupon",
        Lg: "item_list_name",
        Mg: "list_name",
        Ui: "promotions",
        Tc: "shipping",
        Ng: "tax",
        be: "engagement_time_msec",
        Uc: "enhanced_client_id",
        Vc: "enhanced_conversions",
        Og: "enhanced_conversions_automatic_settings",
        Wc: "estimated_delivery_date",
        cf: "euid_logged_in_state",
        cc: "event_callback",
        fc: "event_developer_id_string",
        Pg: "event",
        ce: "event_settings",
        de: "event_timeout",
        Vi: "experiments",
        df: "firebase_id",
        ee: "first_party_collection",
        fe: "_x_20",
        Ib: "_x_19",
        Qg: "fledge",
        Rg: "flight_error_code",
        Sg: "flight_error_message",
        Tg: "gac_gclid",
        he: "gac_wbraid",
        Ug: "gac_wbraid_multiple_conversions",
        Xc: "ga_restrict_domain",
        ef: "ga_temp_client_id",
        Vg: "gdpr_applies",
        Wg: "geo_granularity",
        pb: "value_callback",
        ab: "value_key",
        hc: "global_developer_id_string",
        il: "google_ono",
        yb: "google_signals",
        ie: "google_tld",
        je: "groups",
        Xg: "gsa_experiment_id",
        Yg: "iframe_state",
        ke: "ignore_referrer",
        ff: "internal_traffic_results",
        me: "is_legacy_loaded",
        Zg: "is_passthrough",
        Qa: "language",
        hf: "legacy_developer_id_string",
        za: "linker",
        ic: "accept_incoming",
        jc: "decorate_forms",
        aa: "domains",
        Yc: "url_position",
        ah: "method",
        kc: "new_customer",
        bh: "non_interaction",
        Wi: "optimize_id",
        Ra: "page_location",
        jf: "page_path",
        Sa: "page_referrer",
        mc: "page_title",
        dh: "passengers",
        eh: "phone_conversion_callback",
        Xi: "phone_conversion_country_code",
        fh: "phone_conversion_css_class",
        Yi: "phone_conversion_ids",
        gh: "phone_conversion_number",
        hh: "phone_conversion_options",
        ih: "quantity",
        Zc: "redact_device_info",
        kf: "redact_enhanced_user_id",
        Zi: "redact_ga_client_id",
        aj: "redact_user_id",
        ne: "referral_exclusion_definition",
        zb: "restricted_data_processing",
        bj: "retoken",
        jh: "screen_name",
        Jb: "screen_resolution",
        cj: "search_term",
        Fa: "send_page_view",
        Kb: "send_to",
        ad: "session_duration",
        oe: "session_engaged",
        lf: "session_engaged_time",
        Ab: "session_id",
        pe: "session_number",
        nc: "delivery_postal_code",
        kh: "tc_privacy_string",
        lh: "temporary_client_id",
        dj: "tracking_id",
        nf: "traffic_type",
        Ma: "transaction_id",
        wa: "transport_url",
        mh: "trip_type",
        bd: "update",
        qb: "url_passthrough",
        pf: "_user_agent_architecture",
        qf: "_user_agent_bitness",
        rf: "_user_agent_full_version_list",
        nh: "_user_agent_mobile",
        sf: "_user_agent_model",
        tf: "_user_agent_platform",
        uf: "_user_agent_platform_version",
        oh: "_user_agent_wait",
        vf: "_user_agent_wow64",
        ka: "user_data",
        ph: "user_data_auto_latency",
        qh: "user_data_auto_meta",
        rh: "user_data_auto_multi",
        sh: "user_data_auto_selectors",
        th: "user_data_auto_status",
        uh: "user_data_mode",
        wf: "user_data_settings",
        Aa: "user_id",
        Ta: "user_properties",
        vh: "us_privacy_string",
        ra: "value",
        qe: "wbraid",
        wh: "wbraid_multiple_conversions",
        zh: "_host_name",
        Ah: "_in_page_command",
        Bh: "_is_linker_valid",
        Ch: "_is_passthrough_cid",
        Dh: "non_personalized_ads",
      },
    },
    Pg = {},
    Qg = Object.freeze(
      ((Pg[S.g.fa] = 1),
      (Pg[S.g.Ic] = 1),
      (Pg[S.g.Jc] = 1),
      (Pg[S.g.ia] = 1),
      (Pg[S.g.nb] = 1),
      (Pg[S.g.Pa] = 1),
      (Pg[S.g.ob] = 1),
      (Pg[S.g.Qc] = 1),
      (Pg[S.g.af] = 1),
      (Pg[S.g.Za] = 1),
      (Pg[S.g.Hb] = 1),
      (Pg[S.g.Sc] = 1),
      (Pg[S.g.ja] = 1),
      (Pg[S.g.bf] = 1),
      (Pg[S.g.cc] = 1),
      (Pg[S.g.ce] = 1),
      (Pg[S.g.de] = 1),
      (Pg[S.g.ee] = 1),
      (Pg[S.g.Xc] = 1),
      (Pg[S.g.yb] = 1),
      (Pg[S.g.ie] = 1),
      (Pg[S.g.je] = 1),
      (Pg[S.g.ff] = 1),
      (Pg[S.g.me] = 1),
      (Pg[S.g.za] = 1),
      (Pg[S.g.kf] = 1),
      (Pg[S.g.ne] = 1),
      (Pg[S.g.zb] = 1),
      (Pg[S.g.Fa] = 1),
      (Pg[S.g.Kb] = 1),
      (Pg[S.g.ad] = 1),
      (Pg[S.g.lf] = 1),
      (Pg[S.g.nc] = 1),
      (Pg[S.g.wa] = 1),
      (Pg[S.g.bd] = 1),
      (Pg[S.g.wf] = 1),
      (Pg[S.g.Ta] = 1),
      Pg)
    );
  Object.freeze([
    S.g.Ra,
    S.g.Sa,
    S.g.mc,
    S.g.Qa,
    S.g.jh,
    S.g.Aa,
    S.g.df,
    S.g.Ni,
  ]);
  var Rg = {},
    Sg = Object.freeze(
      ((Rg[S.g.Ci] = 1),
      (Rg[S.g.Di] = 1),
      (Rg[S.g.Ei] = 1),
      (Rg[S.g.Fi] = 1),
      (Rg[S.g.Gi] = 1),
      (Rg[S.g.Hi] = 1),
      (Rg[S.g.Ii] = 1),
      (Rg[S.g.Ji] = 1),
      (Rg[S.g.Ki] = 1),
      (Rg[S.g.Xe] = 1),
      Rg)
    ),
    Tg = {},
    Ug = Object.freeze(
      ((Tg[S.g.Dg] = 1),
      (Tg[S.g.Eg] = 1),
      (Tg[S.g.Dc] = 1),
      (Tg[S.g.Ec] = 1),
      (Tg[S.g.Fg] = 1),
      (Tg[S.g.Yb] = 1),
      (Tg[S.g.Fc] = 1),
      (Tg[S.g.Fb] = 1),
      (Tg[S.g.Zb] = 1),
      (Tg[S.g.Gb] = 1),
      (Tg[S.g.Ja] = 1),
      (Tg[S.g.Gc] = 1),
      (Tg[S.g.Oa] = 1),
      (Tg[S.g.Gg] = 1),
      Tg)
    ),
    Vg = Object.freeze([S.g.fa, S.g.Jc, S.g.Hb]),
    Wg = Object.freeze([].concat(Vg)),
    Xg = Object.freeze([S.g.Pa, S.g.de, S.g.ad, S.g.lf, S.g.be]),
    Yg = Object.freeze([].concat(Xg)),
    Zg = {},
    $g = ((Zg[S.g.J] = "1"), (Zg[S.g.Z] = "2"), Zg),
    ah = {},
    bh = Object.freeze(
      ((ah[S.g.fa] = 1),
      (ah[S.g.Ic] = 1),
      (ah[S.g.Ea] = 1),
      (ah[S.g.kb] = 1),
      (ah[S.g.Ud] = 1),
      (ah[S.g.Kc] = 1),
      (ah[S.g.Lc] = 1),
      (ah[S.g.Mc] = 1),
      (ah[S.g.ia] = 1),
      (ah[S.g.Nc] = 1),
      (ah[S.g.La] = 1),
      (ah[S.g.ya] = 1),
      (ah[S.g.nb] = 1),
      (ah[S.g.Pa] = 1),
      (ah[S.g.ob] = 1),
      (ah[S.g.Za] = 1),
      (ah[S.g.va] = 1),
      (ah[S.g.Rc] = 1),
      (ah[S.g.ja] = 1),
      (ah[S.g.Ig] = 1),
      (ah[S.g.Vc] = 1),
      (ah[S.g.Wc] = 1),
      (ah[S.g.df] = 1),
      (ah[S.g.ee] = 1),
      (ah[S.g.me] = 1),
      (ah[S.g.Qa] = 1),
      (ah[S.g.kc] = 1),
      (ah[S.g.Ra] = 1),
      (ah[S.g.Sa] = 1),
      (ah[S.g.eh] = 1),
      (ah[S.g.fh] = 1),
      (ah[S.g.gh] = 1),
      (ah[S.g.hh] = 1),
      (ah[S.g.zb] = 1),
      (ah[S.g.Fa] = 1),
      (ah[S.g.Kb] = 1),
      (ah[S.g.nc] = 1),
      (ah[S.g.Ma] = 1),
      (ah[S.g.wa] = 1),
      (ah[S.g.bd] = 1),
      (ah[S.g.qb] = 1),
      (ah[S.g.ka] = 1),
      (ah[S.g.Aa] = 1),
      (ah[S.g.ra] = 1),
      ah)
    );
  Object.freeze(S.g);
  var ch = {},
    dh = (m.google_tag_manager = m.google_tag_manager || {}),
    eh = Math.random();
  ch.ed = "b20";
  ch.Cf = Number("0") || 0;
  ch.ma = "dataLayer";
  ch.Ai =
    "ChAI8LadmwYQgOOQ6bm534c7EiQA1oAc8NzwrbFIHORXT9sFCTvBze3M5v9Fv9lts9vrxqFXDWsaAk3n";
  var fh = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
    },
    gh = { __paused: !0, __tg: !0 },
    hh;
  for (hh in fh) fh.hasOwnProperty(hh) && (gh[hh] = !0);
  var ih = Pa(""),
    jh = Pa(""),
    kh,
    lh = !1;
  kh = lh;
  var mh,
    nh = !1;
  mh = nh;
  var oh,
    ph = !1;
  oh = ph;
  var qh,
    rh = !1;
  qh = rh;
  ch.Sd = "www.googletagmanager.com";
  var sh = "" + ch.Sd + (kh ? "/gtag/js" : "/gtm.js"),
    th = null,
    uh = null,
    vh = {},
    wh = {},
    xh = {},
    yh = function () {
      var a = dh.sequence || 1;
      dh.sequence = a + 1;
      return a;
    };
  ch.zi = "";
  var zh = "";
  ch.we = zh;
  var Ah = new Ka(),
    Bh = {},
    Ch = {},
    Mh = {
      name: ch.ma,
      set: function (a, b) {
        I(bb(a, b), Bh);
        Kh();
      },
      get: function (a) {
        return Lh(a, 2);
      },
      reset: function () {
        Ah = new Ka();
        Bh = {};
        Kh();
      },
    },
    Lh = function (a, b) {
      return 2 != b ? Ah.get(a) : Nh(a);
    },
    Nh = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Bh, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Oh = function (a, b) {
      Ch.hasOwnProperty(a) || (Ah.set(a, b), I(bb(a, b), Bh), Kh());
    },
    Ph = function () {
      for (
        var a = [
            "gtm.allowlist",
            "gtm.blocklist",
            "gtm.whitelist",
            "gtm.blacklist",
            "tagTypeBlacklist",
          ],
          b = 0;
        b < a.length;
        b++
      ) {
        var c = a[b],
          d = Lh(c, 1);
        if (Ea(d) || Cc(d)) d = I(d);
        Ch[c] = d;
      }
    },
    Kh = function (a) {
      Ma(Ch, function (b, c) {
        Ah.set(b, c);
        I(bb(b), Bh);
        I(bb(b, c), Bh);
        a && delete Ch[b];
      });
    },
    Qh = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Nh(a) : Ah.get(a);
      "array" === Ac(d) || "object" === Ac(d) ? (c = I(d)) : (c = d);
      return c;
    };
  var Rh,
    Sh = !1;
  function Th() {
    Sh = !0;
    (Rh = productSettings), (productSettings = void 0);
    Rh = Rh || {};
  }
  var Uh = function (a) {
    Sh || Th();
    return Rh[a];
  };
  var Vh = function () {
      var a = m.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    Wh = function (a) {
      if (G.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle)
        return !0;
      var c = m.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var h = g.indexOf("opacity(");
          0 <= h &&
            ((g = g.substring(h + 8, g.indexOf(")", h))),
            "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
            (f = Math.min(g, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = m.getComputedStyle(d, null));
      }
      return !1;
    };
  var ei = /:[0-9]+$/,
    fi = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var h = f[g].split("=");
        if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
          var l = h.slice(1).join("=");
          if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
          e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    ii = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = gi(a.protocol) || gi(m.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : m.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || m.location.hostname)
            .replace(ei, "")
            .toLowerCase());
      return hi(a, b, c, d, e);
    },
    hi = function (a, b, c, d, e) {
      var f,
        g = gi(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = ji(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(ei, "").toLowerCase();
          if (c) {
            var h = /^www\d*\./.exec(f);
            h && h[0] && (f = f.substr(h[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || vb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var l = f.split("/");
          0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
          f = l.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = fi(f, e, !1));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    gi = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    ji = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    ki = function (a) {
      var b = G.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || vb("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(ei, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port,
      };
    },
    li = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = ki(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        h = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === h[0] && (h = h.substring(1));
      g = c(g);
      h = c(h);
      "" !== g && (g = "?" + g);
      "" !== h && (h = "#" + h);
      var l = "" + f + g + h;
      "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
      return l;
    };
  var mi = {};
  var oi = function (a, b, c) {
      if (a) {
        var d = a.element,
          e = { Xa: a.Xa, tagName: d.tagName, type: 1 };
        b && (e.querySelector = ni(d));
        c && (e.isVisible = !Wh(d));
        return e;
      }
    },
    ri = function (a) {
      if (0 != a.length) {
        var b;
        b = pi(a, function (c) {
          return !qi.test(c.Xa);
        });
        b = pi(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = pi(b, function (c) {
          return !Wh(c.element);
        });
        return b[0];
      }
    },
    pi = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    ni = function (a) {
      var b;
      if (a === G.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = ni(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    si = !0,
    ti = !1;
  mi.wi = "true";
  var ui = function (a) {
      if ("false" === mi.wi || !si) return !1;
      if (ti) return !0;
      var b = Uh("AW-" + a);
      return !!b && !!b.preAutoPii;
    },
    vi = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    wi = /@(gmail|googlemail)\./i,
    qi = /support|noreply/i,
    xi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    yi = ["BR"],
    zi = {},
    Ai = function (a) {
      a = a || { Ob: !0, Pb: !0 };
      a.rb = a.rb || { email: !0, phone: !0, address: !0 };
      var b,
        c = a,
        d = !!c.Ob + "." + !!c.Pb;
      c && c.od && c.od.length && (d += "." + c.od.join("."));
      c &&
        c.rb &&
        (d += "." + c.rb.email + "." + c.rb.phone + "." + c.rb.address);
      b = d;
      var e = zi[b];
      if (e && 200 > Ta() - e.timestamp) return e.result;
      var f;
      var g = [],
        h = G.body;
      if (h) {
        for (
          var l = h.querySelectorAll("*"), n = 0;
          n < l.length && 1e4 > n;
          n++
        ) {
          var p = l[n];
          if (
            !(0 <= xi.indexOf(p.tagName.toUpperCase())) &&
            p.children instanceof HTMLCollection
          ) {
            for (var q = !1, r = 0; r < p.childElementCount && 1e4 > r; r++)
              if (!(0 <= yi.indexOf(p.children[r].tagName.toUpperCase()))) {
                q = !0;
                break;
              }
            q || g.push(p);
          }
        }
        f = { elements: g, status: 1e4 < l.length ? "2" : "1" };
      } else f = { elements: g, status: "4" };
      var u = f,
        t = u.status,
        v = [],
        w;
      if (a.rb && a.rb.email) {
        for (var x = u.elements, y = [], A = 0; A < x.length; A++) {
          var B = x[A],
            C = B.textContent;
          "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
          if (C) {
            var E = C.match(vi);
            if (E) {
              var J = E[0],
                D;
              if (m.location) {
                var N = hi(m.location, "host", !0);
                D = 0 <= J.toLowerCase().indexOf(N);
              } else D = !1;
              D || y.push({ element: B, Xa: J });
            }
          }
        }
        var Q = a && a.od;
        if (Q && 0 !== Q.length) {
          for (var V = [], qa = 0; qa < y.length; qa++) {
            for (var R = !0, O = 0; O < Q.length; O++) {
              var ia = Q[O];
              if (ia && pg(y[qa].element, ia)) {
                R = !1;
                break;
              }
            }
            R && V.push(y[qa]);
          }
          v = V;
        } else v = y;
        w = ri(v);
        10 < y.length && (t = "3");
      }
      var aa = [];
      !a.qg && w && (v = [w]);
      for (var W = 0; W < v.length; W++) aa.push(oi(v[W], a.Ob, a.Pb));
      var Fa = { elements: aa.slice(0, 10), Ne: oi(w, a.Ob, a.Pb), status: t };
      zi[b] = { timestamp: Ta(), result: Fa };
      return Fa;
    },
    Bi = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Xa.length + ":" + wi.test(a.Xa)
      );
    };
  var Ci = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), h = 0; h < g.length; h++) {
          var l = g[h].trim();
          if (l) {
            if (0 === l.indexOf("dataLayer.")) f = Lh(l.substring(10));
            else {
              var n = l.split(".");
              f = m[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && ng) {
        var q = og(e);
        if (q && 0 < q.length) {
          f = [];
          for (
            var r = 0;
            r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1);
            r++
          )
            f.push(hc(q[r]) || Ra(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? ((a[b] = f), !0) : !1;
    },
    Di = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Ci(b, "email", a.email) || c;
        c = Ci(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Ci(f, "first_name", d[e].first_name) || c;
          c = Ci(f, "last_name", d[e].last_name) || c;
          c = Ci(f, "street", d[e].street) || c;
          c = Ci(f, "city", d[e].city) || c;
          c = Ci(f, "region", d[e].region) || c;
          c = Ci(f, "country", d[e].country) || c;
          c = Ci(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Ei = function (a) {
      return a.D[S.g.wf];
    },
    Fi = function (a) {
      if (!Cc(a)) return !1;
      var b = a.mode;
      return (
        "auto_detect" === b ||
        "selectors" === b ||
        "code" === b ||
        !!a.enable_code
      );
    },
    Gi = function (a) {
      if (a) {
        if ("selectors" === a.mode || Cc(a.selectors)) return Di(a.selectors);
        if ("auto_detect" === a.mode || Cc(a.auto_detect)) {
          var b;
          var c = a.auto_detect;
          if (c) {
            var d = Ai({
                Ob: !1,
                Pb: !1,
                od: c.exclude_element_selectors,
                rb: {
                  email: !!c.email,
                  phone: !!c.phone,
                  address: !!c.address,
                },
              }).elements,
              e = {};
            if (0 < d.length)
              for (var f = 0; f < d.length; f++) {
                var g = d[f];
                if (1 === g.type) {
                  e.email = g.Xa;
                  break;
                }
              }
            b = e;
          } else b = void 0;
          return b;
        }
      }
    };
  var Hi = function (a) {
      var b = (Ub && Ub.userAgent) || "";
      if (
        0 > b.indexOf("Safari") ||
        /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)
      )
        return !1;
      var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
      if ("" === c) return !1;
      for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
        if (void 0 === d[f]) return !0;
        if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
      }
      return e.length >= d.length;
    },
    Ii = function () {
      return !0 === m._gtmpcm ? !0 : Hi("14.1.1");
    };
  var Ki = function (a, b) {
      var c;
      if (a)
        a: {
          switch (a.enhanced_conversions_mode) {
            case "manual":
              if (b && Cc(b)) {
                c = b;
                break a;
              }
              var d = a.enhanced_conversions_manual_var;
              c = void 0 !== d ? d : m.enhanced_conversion_data;
              break a;
            case "automatic":
              c = Di(a[S.g.Og]);
              break a;
          }
          c = void 0;
        }
      else c = m.enhanced_conversion_data;
      var e = c,
        f = (a || {}).enhanced_conversions_mode,
        g;
      if (!e) return { Xa: e, xc: void 0 };
      if ("manual" === f)
        switch (e._tag_mode) {
          case "CODE":
            g = "c";
            break;
          case "AUTO":
            g = "a";
            break;
          case "MANUAL":
            g = "m";
            break;
          default:
            g = "c";
        }
      else g = "automatic" === f ? (Ji(a) ? "a" : "m") : "c";
      return { Xa: e, xc: g };
    },
    Li = function (a, b) {
      if (m.Promise) {
        var c = Ki(a, b),
          d = c.Xa,
          e = c.xc;
        try {
          return d
            ? Og(d).then(function (f) {
                f.xc = e;
                return f;
              })
            : Promise.resolve({ Cd: "", xc: e });
        } catch (f) {}
      }
    },
    Ji = function (a) {
      var b = a && a[S.g.Og];
      return b && b[S.g.Mi];
    },
    Mi = function () {
      return -1 !== Ub.userAgent.toLowerCase().indexOf("firefox");
    },
    Ni = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date
            ? b.push("" + d.estimated_delivery_date)
            : b.push("");
        }
        return b.join(",");
      }
    };
  var Oi = {},
    Pi = function (a, b) {
      if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a))
        return m._gtmexpgrp[a];
      void 0 === Oi[a] && (Oi[a] = Math.floor(Math.random() * b));
      return Oi[a];
    };
  var Qi = function () {
    if (ih || (!0 !== m._gtmdgs && !Hi("11"))) return -1;
    var a = Oa("1");
    return Pi(1, 100) < a ? Pi(2, 2) : -1;
  };
  var Ri = { Kf: "IN", gi: "IN-KL" };
  var Si = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Ti = function (a) {
    Ti[" "](a);
    return a;
  };
  Ti[" "] = function () {};
  var Vi = function () {
    var a = Ui,
      b = "Tf";
    if (a.Tf && a.hasOwnProperty(b)) return a.Tf;
    var c = new a();
    return (a.Tf = c);
  };
  var Ui = function () {
    var a = {};
    this.h = function () {
      var b = Si.h,
        c = Si.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[Si.h] = !0;
    };
  };
  var Wi = [];
  function Xi() {
    var a = Wb("google_tag_data", {});
    a.ics ||
      (a.ics = {
        entries: {},
        set: Yi,
        update: Zi,
        addListener: $i,
        notifyListeners: aj,
        active: !1,
        usedDefault: !1,
        usedUpdate: !1,
        accessedDefault: !1,
        accessedAny: !1,
        wasSetLate: !1,
      });
    return a.ics;
  }
  function Yi(a, b, c, d, e, f) {
    var g = Xi();
    g.usedDefault ||
      (!g.accessedDefault && !g.accessedAny) ||
      (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries,
        l = h[a] || {},
        n = l.region,
        p = c && k(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === l.update),
          r = {
            region: p,
            initial: "granted" === b,
            update: l.update,
            quiet: q,
          };
        if ("" !== d || !1 !== l.initial) h[a] = r;
        q &&
          m.setTimeout(function () {
            h[a] === r &&
              r.quiet &&
              ((r.quiet = !1), bj(a), aj(), vb("TAGGING", 2));
          }, f);
      }
    }
  }
  function Zi(a, b) {
    var c = Xi();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = cj(c, a),
        e = c.entries,
        f = (e[a] = e[a] || {});
      f.update = "granted" === b;
      var g = cj(c, a);
      f.quiet ? ((f.quiet = !1), bj(a)) : g !== d && bj(a);
    }
  }
  function $i(a, b) {
    Wi.push({ If: a, Nj: b });
  }
  function bj(a) {
    for (var b = 0; b < Wi.length; ++b) {
      var c = Wi[b];
      Ea(c.If) && -1 !== c.If.indexOf(a) && (c.di = !0);
    }
  }
  function aj(a, b) {
    for (var c = 0; c < Wi.length; ++c) {
      var d = Wi[c];
      if (d.di) {
        d.di = !1;
        try {
          d.Nj({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  }
  function cj(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial;
  }
  var dj = function (a) {
      var b = Xi();
      b.accessedAny = !0;
      return cj(b, a);
    },
    ej = function (a) {
      var b = Xi();
      b.accessedDefault = !0;
      return (b.entries[a] || {}).initial;
    },
    fj = function (a) {
      var b = Xi();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    gj = function () {
      if (!Vi().h()) return !1;
      var a = Xi();
      a.accessedAny = !0;
      return a.active;
    },
    hj = function () {
      var a = Xi();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    ij = function (a, b) {
      Xi().addListener(a, b);
    },
    jj = function (a, b) {
      Xi().notifyListeners(a, b);
    },
    kj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!fj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        ij(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    lj = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var h = d[g];
          !1 === dj(h) || e[h] || (f.push(h), (e[h] = !0));
        }
        return f;
      }
      var d = k(b) ? [b] : b,
        e = {};
      c().length !== d.length &&
        ij(d, function (f) {
          var g = c();
          0 < g.length && ((f.If = g), a(f));
        });
    };
  function mj() {}
  function nj() {}
  function oj(a) {
    for (var b = [], c = 0; c < pj.length; c++) {
      var d = a(pj[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
    }
    return b.join("");
  }
  var pj = [S.g.J, S.g.Z],
    qj = function (a) {
      var b = a[S.g.Ue];
      b && P(40);
      var c = a[S.g.Ve];
      c && P(41);
      for (
        var d = Ea(b) ? b : [b], e = { zc: 0 };
        e.zc < d.length;
        e = { zc: e.zc }, ++e.zc
      )
        Ma(
          a,
          (function (f) {
            return function (g, h) {
              if (g !== S.g.Ue && g !== S.g.Ve) {
                var l = d[f.zc],
                  n = Ri.Kf,
                  p = Ri.gi;
                Xi().set(g, h, l, n, p, c);
              }
            };
          })(e)
        );
    },
    rj = 0,
    sj = function (a, b) {
      Ma(a, function (e, f) {
        Xi().update(e, f);
      });
      jj(b.eventId, b.priorityId);
      var c = Ta(),
        d = c - rj;
      rj && 0 <= d && 1e3 > d && P(66);
      rj = c;
    },
    tj = function (a) {
      var b = dj(a);
      return void 0 != b ? b : !0;
    },
    uj = function () {
      return "G1" + oj(dj);
    },
    vj = function (a, b) {
      ij(a, b);
    },
    wj = function (a, b) {
      lj(a, b);
    },
    xj = function (a, b) {
      kj(a, b);
    };
  var yj = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = 0 !== c ? b ^ (c >> 21) : b);
    return b;
  };
  var zj = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var l = g
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        l && c && (l = decodeURIComponent(l));
        d.push(l);
      }
    }
    return d;
  };
  var Aj = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Bj = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  function Cj(a) {
    return "null" !== a.origin;
  }
  var Fj = function (a, b, c, d) {
      return Dj(d) ? zj(a, String(b || Ej()), c) : [];
    },
    Ij = function (a, b, c, d, e) {
      if (Dj(e)) {
        var f = Gj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Hj(
            f,
            function (g) {
              return g.De;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Hj(
            f,
            function (g) {
              return g.Dd;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Jj(a, b, c, d) {
    var e = Ej(),
      f = window;
    Cj(f) && (f.document.cookie = a);
    var g = Ej();
    return e != g || (void 0 != c && 0 <= Fj(b, g, !1, d).indexOf(c));
  }
  var Nj = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete h[x], w;
        h[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete h[x], w;
        h[x] = !0;
        return w + "; " + x;
      }
      if (!Dj(c.Db)) return 2;
      var g;
      void 0 == b
        ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Kj(b)),
          (g = a + "=" + b));
      var h = {};
      g = e(g, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      g = e(g, "expires", l);
      g = e(g, "max-age", c.sk);
      g = e(g, "samesite", c.Mk);
      c.Ok && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Lj(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
          var t = "none" !== p[u] ? p[u] : void 0,
            v = e(g, "domain", t);
          v = f(v, c.flags);
          try {
            d && d(a, h);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Mj(t, c.path) && Jj(v, a, b, c.Db)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, h);
      return Mj(n, c.path) ? 1 : Jj(g, a, b, c.Db) ? 0 : 1;
    },
    Oj = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Nj(a, b, c);
    };
  function Hj(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g],
        l = b(h);
      l === c
        ? d.push(h)
        : void 0 === f || l < f
        ? ((e = [h]), (f = l))
        : l === f && e.push(h);
    }
    return 0 < d.length ? d : e;
  }
  function Gj(a, b, c) {
    for (var d = [], e = Fj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var l = g.shift();
        l &&
          ((l = l.split("-")),
          d.push({ id: g.join("."), De: 1 * l[0] || 1, Dd: 1 * l[1] || 1 }));
      }
    }
    return d;
  }
  var Kj = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Pj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Qj = /(^|\.)doubleclick\.net$/i,
    Mj = function (a, b) {
      return (
        Qj.test(window.document.location.hostname) || ("/" === b && Pj.test(a))
      );
    },
    Ej = function () {
      return Cj(window) ? window.document.cookie : "";
    },
    Lj = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Qj.test(e) || Pj.test(e) || a.push("none");
      return a;
    },
    Dj = function (a) {
      if (!Vi().h() || !a || !gj()) return !0;
      if (!fj(a)) return !1;
      var b = dj(a);
      return null == b ? !0 : !!b;
    };
  var Rj = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ (yj(a) & 2147483647)) : String(b);
    },
    Sj = function (a) {
      return [Rj(a), Math.round(Ta() / 1e3)].join(".");
    },
    Vj = function (a, b, c, d, e) {
      var f = Tj(b);
      return Ij(a, f, Uj(c), d, e);
    },
    Wj = function (a, b, c, d) {
      var e = "" + Tj(c),
        f = Uj(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Tj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Uj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Xj = function () {
    dh.dedupe_gclid || (dh.dedupe_gclid = "" + Sj());
    return dh.dedupe_gclid;
  };
  var Yj = function () {
    var a = !1;
    return a;
  };
  var Ve = { N: "GTM-P46CGK5", Xb: "36056130" },
    Zj = { bi: "GTM-P46CGK5", ci: "GTM-P46CGK5" };
  Ve.Af = Pa("");
  var ak = function () {
      return Zj.bi ? Zj.bi.split("|") : [Ve.N];
    },
    bk = function () {
      if (Zj.ci) return Zj.ci.split("|");
      P(84);
      return [];
    },
    ck = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
    },
    ek = function () {
      for (var a = dk(), b = ak(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        !d || Da(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2);
      }
      for (var e = bk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && P(93);
        g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 });
      }
      a.canonical[Ve.Xb] = 2;
    },
    fk = function (a) {
      return !!dk().container[a];
    },
    gk = function () {
      var a = dk().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b)) {
          var c = a[b];
          if (Da(c)) {
            if (1 === c) return !0;
          } else if (1 === c.state) return !0;
        }
      return !1;
    },
    hk = function () {
      var a = {};
      Ma(dk().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    };
  function dk() {
    var a = dh.tidr;
    a || ((a = new ck()), (dh.tidr = a));
    return a;
  }
  var ik = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      GT: "t",
      HA: "h",
      MC: "m",
      GTM: "g",
      OPT: "o",
    },
    jk = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    kk = function (a) {
      var b = Ve.N.split("-"),
        c = b[0].toUpperCase();
      if (K(45)) {
        var d = {};
        d.Gj = Ve.N;
        d.Ik = ch.Cf;
        d.Lk = ch.ed;
        d.qk = Ve.Af ? 2 : 1;
        kh ? ((d.Qe = jk[c]), d.Qe || (d.Qe = 0)) : (d.Qe = qh ? 13 : 10);
        oh ? (d.Zh = 1) : Yj() && (d.Zh = 2);
        var e;
        var f = d.Qe,
          g = d.Zh;
        void 0 === f
          ? (e = "")
          : (g || (g = 0),
            (e =
              "" +
              Ef(1, 1) +
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                (f << 2) | g
              ]));
        var h = d.pl,
          l =
            4 +
            e +
            (h
              ? "" +
                Ef(2, 1) +
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
                  h
                ]
              : ""),
          n,
          p = d.Lk;
        n = p && Df.test(p) ? "" + Ef(3, 2) + p : "";
        var q,
          r = d.Ik;
        q = r
          ? "" +
            Ef(4, 1) +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              r
            ]
          : "";
        var u;
        var t = d.Gj;
        if (t && a) {
          var v = t.split("-"),
            w = v[0].toUpperCase();
          if ("GTM" !== w && "OPT" !== w) u = "";
          else {
            var x = v[1];
            u = "" + Ef(5, 3) + (1 + x.length) + (d.qk || 0) + x;
          }
        } else u = "";
        return l + n + q + u;
      }
      var y = ik[c] || "i",
        A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        B = "w";
      kh && (B = Yj() ? "s" : "o");
      mh
        ? ("w" === B && (B = "x"), "o" === B && (B = "q"))
        : oh
        ? ("w" === B && (B = "y"), "o" === B && (B = "r"))
        : qh && (B = "z");
      return "2" + B + y + (4 === ch.ed.length ? ch.ed.slice(1) : ch.ed) + A;
    };
  function lk(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var mk = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function nk() {
    return Hb("iPhone") && !Hb("iPod") && !Hb("iPad");
  }
  function ok() {
    nk() || Hb("iPad") || Hb("iPod");
  }
  Hb("Opera");
  Hb("Trident") || Hb("MSIE");
  Hb("Edge");
  !Hb("Gecko") ||
    (-1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge")) ||
    Hb("Trident") ||
    Hb("MSIE") ||
    Hb("Edge");
  -1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge") && Hb("Mobile");
  Hb("Macintosh");
  Hb("Windows");
  Hb("Linux") || Hb("CrOS");
  var pk = na.navigator || null;
  pk && (pk.appVersion || "").indexOf("X11");
  Hb("Android");
  nk();
  Hb("iPad");
  Hb("iPod");
  ok();
  Gb().toLowerCase().indexOf("kaios");
  var qk = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var h = a.charCodeAt(e + f);
          if (!h || 61 == h || 38 == h || 35 == h) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    rk = /#|$/,
    sk = function (a, b) {
      var c = a.search(rk),
        d = qk(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    tk = /[?&]($|#)/,
    uk = function (a, b, c) {
      for (
        var d, e = a.search(rk), f = 0, g, h = [];
        0 <= (g = qk(a, f, b, e));

      )
        h.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      h.push(a.slice(f));
      d = h.join("").replace(tk, "$1");
      var l,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var u = d.indexOf("?"),
          t;
        0 > u || u > r ? ((u = r), (t = "")) : (t = d.substring(u + 1, r));
        q = [d.slice(0, u), t, d.slice(r)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        l = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else l = d;
      return l;
    };
  var vk = function (a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  };
  function wk(a) {
    if (!a || !G.head) return null;
    var b = xk("META");
    G.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var yk = function () {
      if (m.top == m) return 0;
      var a = m.location.ancestorOrigins;
      if (a) return a[a.length - 1] == m.location.origin ? 1 : 2;
      var b;
      var c = m.top;
      try {
        var d;
        if ((d = !!c && null != c.location.href))
          b: {
            try {
              Ti(c.foo);
              d = !0;
              break b;
            } catch (e) {}
            d = !1;
          }
        b = d;
      } catch (e) {
        b = !1;
      }
      return b ? 1 : 2;
    },
    xk = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function zk(a, b, c) {
    a.google_image_requests || (a.google_image_requests = []);
    var d = xk("IMG", a.document);
    if (c) {
      var e = function () {
        if (c) {
          var f = a.google_image_requests,
            g = yb(f, d);
          0 <= g && Array.prototype.splice.call(f, g, 1);
        }
        d.removeEventListener && d.removeEventListener("load", e, !1);
        d.removeEventListener && d.removeEventListener("error", e, !1);
      };
      mk(d, "load", e);
      mk(d, "error", e);
    }
    d.src = b;
    a.google_image_requests.push(d);
  }
  var Bk = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      vk(a, function (d, e) {
        d && (c += "&" + e + "=" + encodeURIComponent(d));
      });
      Ak(c, b);
    },
    Ak = function (a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      c.fetch
        ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : zk(c, a, void 0 === b ? !1 : b);
    };
  var Ck = function () {};
  var Dk = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Ek = function (a, b, c) {
      this.B = a;
      this.h = null;
      this.I = {};
      this.Ca = 0;
      this.T = void 0 === b ? 500 : b;
      this.F = void 0 === c ? !1 : c;
      this.D = null;
    };
  ma(Ek, Ck);
  Ek.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.F },
      d = Bj(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (g, h) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Dk(c)),
          (c.internalBlockOnErrors = b.F),
          (h && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), h || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Fk(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Ek.prototype.removeEventListener = function (a) {
    a && a.listenerId && Fk(this, "removeEventListener", null, a.listenerId);
  };
  var Hk = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (0 === g) return !1;
      var h = c;
      2 === c
        ? ((h = 0), 2 === g && (h = 1))
        : 3 === c && ((h = 1), 1 === g && (h = 0));
      var l;
      if (0 === h)
        if (a.purpose && a.vendor) {
          var n = Gk(a.vendor.consents, void 0 === d ? "755" : d);
          l =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && Gk(a.purpose.consents, b);
        } else l = !0;
      else
        l =
          1 === h
            ? a.purpose && a.vendor
              ? Gk(a.purpose.legitimateInterests, b) &&
                Gk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return l;
    },
    Gk = function (a, b) {
      return !(!a || !a[b]);
    },
    Fk = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Ik(a)) {
        Jk(a);
        var f = ++a.Ca;
        a.I[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage(
            ((g.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            g),
            "*"
          );
        }
      } else c({}, !1);
    },
    Ik = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (h) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (h) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Jk = function (a) {
      a.D ||
        ((a.D = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.I[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        mk(a.B, "message", a.D));
    },
    Kk = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Dk(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Bk({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var Lk = !0;
  Lk = !1;
  var Mk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
    Nk = lk("", 550),
    Ok = lk("", 500);
  function Pk() {
    var a = dh.tcf || {};
    return (dh.tcf = a);
  }
  var Uk = function () {
    var a = Pk(),
      b = new Ek(m, Lk ? 3e3 : -1);
    if (
      !0 === m.gtag_enable_tcf_support &&
      !a.active &&
      ("function" === typeof m.__tcfapi ||
        "function" === typeof b.B.__tcfapi ||
        null != Ik(b))
    ) {
      a.active = !0;
      a.Gd = {};
      Qk();
      var c = null;
      Lk
        ? (c = m.setTimeout(function () {
            Rk(a);
            Sk(a);
            c = null;
          }, Ok))
        : (a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), (c = null));
          if (0 !== d.internalErrorState) Rk(a), Sk(a);
          else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) (e = Tk()), b.removeEventListener(d);
            else if (
              "tcloaded" === d.eventStatus ||
              "useractioncomplete" === d.eventStatus ||
              "cmpuishown" === d.eventStatus
            ) {
              var f = {},
                g;
              for (g in Mk)
                if (Mk.hasOwnProperty(g))
                  if ("1" === g) {
                    var h,
                      l = d,
                      n = !0;
                    n = void 0 === n ? !1 : n;
                    h = Kk(l)
                      ? !1 === l.gdprApplies ||
                        "tcunavailable" === l.tcString ||
                        (void 0 === l.gdprApplies && !n) ||
                        "string" !== typeof l.tcString ||
                        !l.tcString.length
                        ? !0
                        : Hk(l, "1", 0)
                      : !1;
                    f["1"] = h;
                  } else f[g] = Hk(d, g, Mk[g]);
              e = f;
            }
            e && ((a.tcString = d.tcString || "tcempty"), (a.Gd = e), Sk(a));
          }
        });
      } catch (d) {
        c && (clearTimeout(c), (c = null)), Rk(a), Sk(a);
      }
    }
  };
  function Rk(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    Lk && (a.Gd = Tk());
  }
  function Qk() {
    var a = {},
      b = ((a.ad_storage = "denied"), (a.wait_for_update = Nk), a);
    qj(b);
  }
  function Tk() {
    var a = {},
      b;
    for (b in Mk) Mk.hasOwnProperty(b) && (a[b] = !0);
    return a;
  }
  function Sk(a) {
    var b = {},
      c = ((b.ad_storage = a.Gd["1"] ? "granted" : "denied"), b);
    sj(
      c,
      { eventId: 0 },
      { gdprApplies: a ? a.gdprApplies : void 0, tcString: Vk() }
    );
  }
  var Vk = function () {
      var a = Pk();
      return a.active ? a.tcString || "" : "";
    },
    Wk = function () {
      var a = Pk();
      return a.active && void 0 !== a.gdprApplies
        ? a.gdprApplies
          ? "1"
          : "0"
        : "";
    },
    Xk = function (a) {
      if (!Mk.hasOwnProperty(String(a))) return !0;
      var b = Pk();
      return b.active && b.Gd ? !!b.Gd[String(a)] : !0;
    };
  function Yk(a, b, c, d) {
    var e,
      f = Number(null != a.hb ? a.hb : void 0);
    0 !== f && (e = new Date((b || Ta()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Db: d,
    };
  }
  var Zk = ["1"],
    $k = {},
    al = {},
    cl = function (a) {
      return $k[bl(a)];
    },
    fl = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = bl(a.prefix);
      if (!$k[c] && !dl(c, a.path, a.domain) && b) {
        var d = bl(a.prefix),
          e = Sj();
        if (0 === el(d, e, a)) {
          var f = Wb("google_tag_data", {});
          f._gcl_au ? vb("GTM", 57) : (f._gcl_au = e);
        }
        dl(c, a.path, a.domain);
      }
    };
  function el(a, b, c, d) {
    var e = Wj(b, "1", c.domain, c.path),
      f = Yk(c, d);
    f.Db = "ad_storage";
    return Oj(a, e, f);
  }
  function dl(a, b, c) {
    var d = Vj(a, b, c, Zk, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length
      ? (($k[a] = e.slice(0, 2).join(".")),
        (al[a] = { id: e.slice(2, 4).join("."), Yh: Number(e[4]) || 0 }))
      : 3 === e.length
      ? (al[a] = { id: e.slice(0, 2).join("."), Yh: Number(e[2]) || 0 })
      : ($k[a] = d);
    return !0;
  }
  function bl(a) {
    return (a || "_gcl") + "_au";
  }
  var gl;
  var kl = function () {
      var a = hl,
        b = il,
        c = jl(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        ec(G, "mousedown", d);
        ec(G, "keyup", d);
        ec(G, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    ll = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      jl().decorators.push(f);
    },
    ml = function (a, b, c) {
      for (var d = jl().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          h;
        if ((h = !c || g.forms))
          a: {
            var l = g.domains,
              n = a,
              p = !!g.sameHost;
            if (l && (p || n !== G.location.hostname))
              for (var q = 0; q < l.length; q++)
                if (l[q] instanceof RegExp) {
                  if (l[q].test(n)) {
                    h = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(l[q]) ||
                  (p && 0 <= l[q].indexOf(n))
                ) {
                  h = !0;
                  break a;
                }
            h = !1;
          }
        if (h) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Wa(e, g.callback());
        }
      }
      return e;
    };
  function jl() {
    var a = Wb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var nl = /(.*?)\*(.*?)\*(.*)/,
    El = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Fl = /^(?:www\.|m\.|amp\.)+/,
    Gl = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Hl(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Jl = function (a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        void 0 !== d &&
          d === d &&
          null !== d &&
          "[object Object]" !== d.toString() &&
          (b.push(c), b.push(sb(String(d))));
      }
    var e = b.join("*");
    return ["1", Il(e), e].join("*");
  };
  function Il(a, b) {
    var c = [
        m.navigator.userAgent,
        new Date().getTimezoneOffset(),
        Ub.userLanguage || Ub.language,
        Math.floor(Ta() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = gl)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    gl = d;
    for (var l = 4294967295, n = 0; n < c.length; n++)
      l = (l >>> 8) ^ gl[(l ^ c.charCodeAt(n)) & 255];
    return ((l ^ -1) >>> 0).toString(36);
  }
  function Kl() {
    return function (a) {
      var b = ki(m.location.href),
        c = b.search.replace("?", ""),
        d = fi(c, "_gl", !1, !0) || "";
      a.query = Ll(d) || {};
      var e = ii(b, "fragment").match(Hl("_gl"));
      a.fragment = Ll((e && e[3]) || "") || {};
    };
  }
  function Ml(a, b) {
    var c = Hl(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Nl = function (a, b) {
      b || (b = "_gl");
      var c = Gl.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Ml(b, (c[2] || "").slice(1)),
        f = Ml(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Ol = function (a) {
      var b = Kl(),
        c = jl();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Wa(d, e.query), a && Wa(d, e.fragment));
      return d;
    },
    Ll = function (a) {
      try {
        var b = Pl(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              g = tb(d[e + 1]);
            c[f] = g;
          }
          vb("TAGGING", 6);
          return c;
        }
      } catch (h) {
        vb("TAGGING", 8);
      }
    };
  function Pl(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = nl.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3],
          l;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === Il(h, p)) {
              l = !0;
              break a;
            }
          l = !1;
        }
        if (l) return h;
        vb("TAGGING", 7);
      }
    }
  }
  function Ql(a, b, c, d) {
    function e(p) {
      p = Ml(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Gl.exec(c);
    if (!f) return "";
    var g = f[1],
      h = f[2] || "",
      l = f[3] || "",
      n = a + "=" + b;
    d ? (l = "#" + e(l.substring(1))) : (h = "?" + e(h.substring(1)));
    return "" + g + h + l;
  }
  function Rl(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = ml(b, 1, c),
      e = ml(b, 2, c),
      f = ml(b, 3, c);
    if (Xa(d)) {
      var g = Jl(d);
      c ? Sl("_gl", g, a) : Tl("_gl", g, a, !1);
    }
    if (!c && Xa(e)) {
      var h = Jl(e);
      Tl("_gl", h, a, !0);
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            q = a;
          if (q.tagName) {
            if ("a" === q.tagName.toLowerCase()) {
              Tl(n, p, q);
              break a;
            }
            if ("form" === q.tagName.toLowerCase()) {
              Sl(n, p, q);
              break a;
            }
          }
          "string" == typeof q && Ql(n, p, q);
        }
  }
  function Tl(a, b, c, d) {
    if (c.href) {
      var e = Ql(a, b, c.href, void 0 === d ? !1 : d);
      Fb.test(e) && (c.href = e);
    }
  }
  function Sl(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var l = G.createElement("input");
          l.setAttribute("type", "hidden");
          l.setAttribute("name", a);
          l.setAttribute("value", b);
          c.appendChild(l);
        }
      } else if ("post" === d) {
        var n = Ql(a, b, c.action);
        Fb.test(n) && (c.action = n);
      }
    }
  }
  function hl(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || Rl(e, e.hostname);
      }
    } catch (g) {}
  }
  function il(a) {
    try {
      if (a.action) {
        var b = ii(ki(a.action), "host");
        Rl(a, b);
      }
    } catch (c) {}
  }
  var Ul = function (a, b, c, d) {
      kl();
      ll(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Vl = function (a, b) {
      kl();
      ll(a, [hi(m.location, "host", !0)], b, !0, !0);
    },
    Wl = function () {
      var a = G.location.hostname,
        b = El.exec(G.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var h = a.replace(Fl, ""),
        l = e.replace(Fl, ""),
        n;
      if (!(n = h === l)) {
        var p = "." + l;
        n = h.substring(h.length - p.length, h.length) === p;
      }
      return n;
    },
    Xl = function (a, b) {
      return !1 === a ? !1 : a || b || Wl();
    };
  var Yl = {};
  var Zl = function (a) {
    for (
      var b = [],
        c = G.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          sg: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp;
    });
    return b;
  };
  function $l(a, b) {
    var c = Zl(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].sg] || (d[c[e].sg] = []);
        var g = { version: f[0], timestamp: 1e3 * Number(f[1]), la: f[2] };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].sg].push(g);
      }
    }
    return d;
  }
  var am = /^\w+$/,
    bm = /^[\w-]+$/,
    cm = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
    dm = function () {
      if (!Vi().h() || !gj()) return !0;
      var a = dj("ad_storage");
      return null == a ? !0 : !!a;
    },
    em = function (a, b) {
      fj("ad_storage")
        ? dm()
          ? a()
          : lj(a, "ad_storage")
        : b
        ? vb("TAGGING", 3)
        : kj(
            function () {
              em(a, !0);
            },
            ["ad_storage"]
          );
    },
    gm = function (a) {
      return fm(a).map(function (b) {
        return b.la;
      });
    },
    fm = function (a) {
      var b = [];
      if (!Cj(m) || !G.cookie) return b;
      var c = Fj(a, G.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = { Nd: d.Nd }, e++) {
        var f = hm(c[e]);
        if (null != f) {
          var g = f,
            h = g.version;
          d.Nd = g.la;
          var l = g.timestamp,
            n = g.labels,
            p = Ha(
              b,
              (function (q) {
                return function (r) {
                  return r.la === q.Nd;
                };
              })(d)
            );
          p
            ? ((p.timestamp = Math.max(p.timestamp, l)),
              (p.labels = im(p.labels, n || [])))
            : b.push({ version: h, la: d.Nd, timestamp: l, labels: n });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return jm(b);
    };
  function im(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++)
      (c[a[e]] = !0), d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function km(a) {
    return a && "string" == typeof a && a.match(am) ? a : "_gcl";
  }
  var mm = function () {
      var a = ki(m.location.href),
        b = ii(a, "query", !1, void 0, "gclid"),
        c = ii(a, "query", !1, void 0, "gclsrc"),
        d = ii(a, "query", !1, void 0, "wbraid"),
        e = ii(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || fi(f, "gclid", !1);
        c = c || fi(f, "gclsrc", !1);
        d = d || fi(f, "wbraid", !1);
      }
      return lm(b, c, e, d);
    },
    lm = function (a, b, c, d) {
      var e = {},
        f = function (g, h) {
          e[h] || (e[h] = []);
          e[h].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && bm.test(d) && ((e.gbraid = d), f(d, "gb"));
      if (void 0 !== a && a.match(bm))
        switch (b) {
          case void 0:
            f(a, "aw");
            break;
          case "aw.ds":
            f(a, "aw");
            f(a, "dc");
            break;
          case "ds":
            f(a, "dc");
            break;
          case "3p.ds":
            f(a, "dc");
            break;
          case "gf":
            f(a, "gf");
            break;
          case "ha":
            f(a, "ha");
        }
      c && f(c, "dc");
      return e;
    },
    om = function (a) {
      var b = mm();
      em(function () {
        nm(b, !1, a);
      });
    };
  function nm(a, b, c, d, e) {
    function f(w, x) {
      var y = pm(w, g);
      y && (Oj(y, x, h), (l = !0));
    }
    c = c || {};
    e = e || [];
    var g = km(c.prefix);
    d = d || Ta();
    var h = Yk(c, d, !0);
    h.Db = "ad_storage";
    var l = !1,
      n = Math.round(d / 1e3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (
      (void 0 == Yl.enable_gbraid_cookie_write
        ? 0
        : Yl.enable_gbraid_cookie_write) &&
      !l &&
      a.gb
    ) {
      var q = a.gb[0],
        r = pm("gb", g),
        u = !1;
      if (!b)
        for (var t = fm(r), v = 0; v < t.length; v++)
          t[v].la === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f("gb", p(q));
    }
  }
  var rm = function (a, b) {
      var c = Ol(!0);
      em(function () {
        for (var d = km(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== cm[f]) {
            var g = pm(f, d),
              h = c[g];
            if (h) {
              var l = Math.min(qm(h), Ta()),
                n;
              b: {
                var p = l;
                if (Cj(m))
                  for (
                    var q = Fj(g, G.cookie, void 0, "ad_storage"), r = 0;
                    r < q.length;
                    ++r
                  )
                    if (qm(q[r]) > p) {
                      n = !0;
                      break b;
                    }
                n = !1;
              }
              if (!n) {
                var u = Yk(b, l, !0);
                u.Db = "ad_storage";
                Oj(g, h, u);
              }
            }
          }
        }
        nm(lm(c.gclid, c.gclsrc), !1, b);
      });
    },
    pm = function (a, b) {
      var c = cm[a];
      if (void 0 !== c) return b + c;
    },
    qm = function (a) {
      return 0 !== sm(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function hm(a) {
    var b = sm(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          la: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function sm(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !bm.test(a[2])
      ? []
      : a;
  }
  var tm = function (a, b, c, d, e) {
      if (Ea(b) && Cj(m)) {
        var f = km(e),
          g = function () {
            for (var h = {}, l = 0; l < a.length; ++l) {
              var n = pm(a[l], f);
              if (n) {
                var p = Fj(n, G.cookie, void 0, "ad_storage");
                p.length && (h[n] = p.sort()[p.length - 1]);
              }
            }
            return h;
          };
        em(function () {
          Ul(g, b, c, d);
        });
      }
    },
    jm = function (a) {
      return a.filter(function (b) {
        return bm.test(b.la);
      });
    },
    um = function (a, b) {
      if (Cj(m)) {
        for (var c = km(b.prefix), d = {}, e = 0; e < a.length; e++)
          cm[a[e]] && (d[a[e]] = cm[a[e]]);
        em(function () {
          Ma(d, function (f, g) {
            var h = Fj(c + g, G.cookie, void 0, "ad_storage");
            h.sort(function (u, t) {
              return qm(t) - qm(u);
            });
            if (h.length) {
              var l = h[0],
                n = qm(l),
                p = 0 !== sm(l.split(".")).length ? l.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== sm(l.split(".")).length ? l.split(".")[2] : void 0;
              q[f] = [r];
              nm(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function vm(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var wm = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (gj()) {
        var c = mm();
        if (vm(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Vl(function () {
            return d;
          }, 3);
          Vl(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    xm = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!dm()) return e;
      var f = fm(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++)
        -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var h = f[0],
          l = f[0].timestamp,
          n = [h.version, Math.round(l / 1e3), h.la]
            .concat(h.labels || [], [b])
            .join("."),
          p = Yk(c, l, !0);
        p.Db = "ad_storage";
        Oj(a, n, p);
      }
      return e;
    };
  function ym(a, b) {
    var c = km(b),
      d = pm(a, c);
    if (!d) return 0;
    for (var e = fm(d), f = 0, g = 0; g < e.length; g++)
      f = Math.max(f, e[g].timestamp);
    return f;
  }
  function zm(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Am = function (a) {
    var b = Math.max(ym("aw", a), zm(dm() ? $l() : {}));
    return Math.max(ym("gb", a), zm(dm() ? $l("_gac_gb", !0) : {})) > b;
  };
  var Bm = function (a, b) {
      var c = a && !tj(S.g.J);
      return b && c ? "0" : b;
    },
    Em = function (a) {
      function b(t) {
        var v;
        dh.reported_gclid || (dh.reported_gclid = {});
        v = dh.reported_gclid;
        var w,
          x = g;
        w =
          !g || (gj() && !tj(S.g.J))
            ? l + (t ? "gcu" : "gcs")
            : l + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
        if (!v[w]) {
          v[w] = !0;
          var y = [],
            A = {},
            B = function (Q, V) {
              V && (y.push(Q + "=" + encodeURIComponent(V)), (A[Q] = !0));
            },
            C = "https://www.google.com";
          if (gj()) {
            var E = tj(S.g.J);
            B("gcs", uj());
            t && B("gcu", "1");
            hj() && B("gcd", "G1" + oj(ej));
            B("rnd", Xj());
            if ((!l || (n && "aw.ds" !== n)) && tj(S.g.J)) {
              var J = gm("_gcl_aw");
              B("gclaw", J.join("."));
            }
            B("url", String(m.location).split(/[?#]/)[0]);
            B("dclid", Bm(d, p));
            E || (C = "https://pagead2.googlesyndication.com");
          }
          B("gdpr_consent", Vk());
          B("gdpr", Wk());
          "1" === Ol(!1)._up && B("gtm_up", "1");
          B("gclid", Bm(d, l));
          B("gclsrc", n);
          if (
            !(A.gclid || A.dclid || A.gclaw) &&
            (B("gbraid", Bm(d, q)), !A.gbraid && gj() && tj(S.g.J))
          ) {
            var D = gm("_gcl_gb");
            0 < D.length && B("gclgb", D.join("."));
          }
          B("gtm", kk(!e));
          g && tj(S.g.J) && (fl(f || {}), x && B("auid", cl(f.prefix) || ""));
          Dm || (a.ld && B("did", a.ld));
          a.Ke && B("gdid", a.Ke);
          a.Fe && B("edid", a.Fe);
          var N = C + "/pagead/landing?" + y.join("&");
          kc(N);
        }
      }
      var c = !!a.Be,
        d = !!a.uc,
        e = a.da,
        f = void 0 === a.Cb ? {} : a.Cb,
        g = void 0 === a.yd ? !0 : a.yd,
        h = mm(),
        l = h.gclid || "",
        n = h.gclsrc,
        p = h.dclid || "",
        q = h.gbraid || "",
        r = !c && ((!l || (n && "aw.ds" !== n) ? !1 : !0) || q),
        u = gj();
      if (r || u)
        u
          ? xj(
              function () {
                b();
                tj(S.g.J) ||
                  wj(function (t) {
                    return b(!0, t.consentEventId, t.consentPriorityId);
                  }, S.g.J);
              },
              [S.g.J]
            )
          : b();
    },
    Cm = function (a) {
      var b = String(m.location).split(/[?#]/)[0],
        c = ch.Ai || m._CONSENT_MODE_SALT;
      return a ? (c ? String(yj(b + a + c)) : "0") : "";
    },
    Dm = !1;
  var Fm = /[A-Z]+/,
    Gm = /\s/,
    Hm = function (a) {
      if (k(a)) {
        a = Ra(a);
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Fm.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e] || (Gm.test(d[e]) && ("AW" !== c || 1 !== e))) return;
            return { id: a, prefix: c, V: c + "-" + d[0], M: d };
          }
        }
      }
    },
    Jm = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Hm(a[c]);
        d && (b[d.id] = d);
      }
      Im(b);
      var e = [];
      Ma(b, function (f, g) {
        e.push(g);
      });
      return e;
    };
  function Im(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.M[1] && b.push(d.V);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Lm = function (a, b, c, d) {
      return (2 === Km() || d || "http:" != m.location.protocol ? a : b) + c;
    },
    Km = function () {
      var a = bc(),
        b;
      if (1 === a)
        a: {
          var c = sh;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              f = 1,
              g = G.getElementsByTagName("script"),
              h = 0;
            h < g.length && 100 > h;
            h++
          ) {
            var l = g[h].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === f && 0 === l.indexOf(d) && (f = 2);
            }
          }
          b = f;
        }
      else b = a;
      return b;
    };
  var Nm = function (a, b, c) {
      if (m[a.functionName]) return b.gg && H(b.gg), m[a.functionName];
      var d = Mm();
      m[a.functionName] = d;
      if (a.ze)
        for (var e = 0; e < a.ze.length; e++) m[a.ze[e]] = m[a.ze[e]] || Mm();
      a.Le && void 0 === m[a.Le] && (m[a.Le] = c);
      ac(Lm("https://", "http://", a.pg), b.gg, b.vk);
      return d;
    },
    Mm = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Om = {
      functionName: "_googWcmImpl",
      Le: "_googWcmAk",
      pg: "www.gstatic.com/wcm/loader.js",
    },
    Pm = {
      functionName: "_gaPhoneImpl",
      Le: "ga_wpid",
      pg: "www.gstatic.com/gaphone/loader.js",
    },
    Qm = { xi: "", tj: "5" },
    Rm = {
      functionName: "_googCallTrackingImpl",
      ze: [Pm.functionName, Om.functionName],
      pg:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Qm.xi || Qm.tj) +
        ".js",
    },
    Sm = {},
    Tm = function (a, b, c, d) {
      P(22);
      if (c) {
        d = d || {};
        var e = Nm(Om, d, a),
          f = { ak: a, cl: b };
        void 0 === d.tb && (f.autoreplace = c);
        e(2, d.tb, f, c, 0, Sa(), d.options);
      }
    },
    Um = function (a, b, c, d) {
      P(21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: Sa(),
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var g = a[f];
          Sm[g.id] ||
            (g && "AW" === g.prefix && !e.adData && 2 <= g.M.length
              ? ((e.adData = { ak: g.M[0], cl: g.M[1] }), (Sm[g.id] = !0))
              : g &&
                "UA" === g.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: g.V }), (Sm[g.id] = !0)));
        }
        (e.gaData || e.adData) && Nm(Rm, d)(d.tb, e, d.options);
      }
    },
    Vm = function () {
      var a = !1;
      return a;
    },
    Wm = function (a, b) {
      if (a)
        if (Yj()) {
        } else {
          if (k(a)) {
            var c = Hm(a);
            if (!c) return;
            a = c;
          }
          var d = void 0,
            e = !1,
            f = T(b, S.g.Yi);
          if (f && Ea(f)) {
            d = [];
            for (var g = 0; g < f.length; g++) {
              var h = Hm(f[g]);
              h &&
                (d.push(h),
                (a.id === h.id || (a.id === a.V && a.V === h.V)) && (e = !0));
            }
          }
          if (!d || e) {
            var l = T(b, S.g.gh),
              n;
            if (l) {
              Ea(l) ? (n = l) : (n = [l]);
              var p = T(b, S.g.eh),
                q = T(b, S.g.fh),
                r = T(b, S.g.hh),
                u = T(b, S.g.Xi),
                t = p || q,
                v = 1;
              "UA" !== a.prefix || d || (v = 5);
              for (var w = 0; w < n.length; w++)
                if (w < v)
                  if (d) Um(d, n[w], u, { tb: t, options: r });
                  else if ("AW" === a.prefix && a.M[1])
                    Vm()
                      ? Um([a], n[w], u || "US", { tb: t, options: r })
                      : Tm(a.M[0], a.M[1], n[w], { tb: t, options: r });
                  else if ("UA" === a.prefix)
                    if (Vm()) Um([a], n[w], u || "US", { tb: t });
                    else {
                      var x = a.V,
                        y = n[w],
                        A = { tb: t };
                      P(23);
                      if (y) {
                        A = A || {};
                        var B = Nm(Pm, A, x),
                          C = {};
                        void 0 !== A.tb ? (C.receiver = A.tb) : (C.replace = y);
                        C.ga_wpid = x;
                        C.destination = y;
                        B(2, Sa(), C);
                      }
                    }
            }
          }
        }
    };
  var Xm = function (a, b, c) {
      this.target = a;
      this.eventName = b;
      this.s = c;
      this.C = {};
      this.metadata = I(c.eventMetadata || {});
      this.K = !1;
    },
    Ym = function (a, b, c) {
      var d = T(a.s, b);
      void 0 !== d ? (a.C[b] = d) : void 0 !== c && (a.C[b] = c);
    },
    Zm = function (a, b, c) {
      var d = Uh(a.target.V);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function $m(a) {
    return {
      getDestinationId: function () {
        return a.target.V;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        return void (a.eventName = b);
      },
      getHitData: function (b) {
        return a.C[b];
      },
      setHitData: function (b, c) {
        return void (a.C[b] = c);
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.C[b] && (a.C[b] = c);
      },
      copyToHitData: function (b, c) {
        Ym(a, b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        return void (a.metadata[b] = c);
      },
      abort: function () {
        return void (a.K = !0);
      },
      getProcessedEvent: function () {
        return a;
      },
      getFromEventContext: function (b) {
        return T(a.s, b);
      },
    };
  }
  var bn = function (a) {
      var b = an[a.target.V];
      if (!a.K && b)
        for (var c = $m(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.K = !0;
          }
          if (a.K) break;
        }
    },
    cn = function (a, b) {
      var c = an[a];
      c || (c = an[a] = []);
      c.push(b);
    },
    an = {};
  var fn = function (a) {
      a = a || {};
      var b;
      if (!gj() || dj(dn)) {
        (b = en(a)) || (b = Sj());
        var c = a,
          d = bl(c.prefix),
          e = bl(c.prefix),
          f = $k[e];
        if (f) {
          var g = f.split(".");
          if (2 === g.length) {
            var h = Number(g[1]) || 0;
            if (h) {
              var l = f;
              b && (l = f + "." + b + "." + Math.floor(Ta() / 1e3));
              el(e, l, c, 1e3 * h);
            }
          }
        }
        delete $k[d];
        delete al[d];
        dl(d, c.path, c.domain);
        return en(a);
      }
    },
    en = function (a) {
      if (!gj() || dj(dn)) {
        a = a || {};
        fl(a, !1);
        var b = al[bl(km(a.prefix))];
        if (b && !(18e5 < Ta() - 1e3 * b.Yh)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864e5 < Ta() - 1e3 * (Number(d[1]) || 0)))
            return c;
        }
      }
    },
    dn = S.g.J;
  var gn = function (a) {
      var b = [];
      Ma(a, function (c, d) {
        d = jm(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].la);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    kn = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = hn("gcl" + a);
        if (d) return d.split(".");
      }
      var e = km(b);
      if ("_gcl" == e) {
        c = void 0 === c ? !0 : c;
        var f = !tj(jn) && c,
          g;
        g = mm()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var h = pm(a, e);
      return h ? gm(h) : [];
    },
    hn = function (a) {
      var b = ki(m.location.href),
        c = ii(b, "host", !1);
      if (c && c.match(ln)) {
        var d = ii(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    },
    mn = function (a, b) {
      fj(jn)
        ? tj(jn)
          ? a()
          : lj(a, jn)
        : b
        ? P(42)
        : xj(
            function () {
              mn(a, !0);
            },
            [jn]
          );
    },
    ln = /^\d+\.fls\.doubleclick\.net$/,
    jn = S.g.J,
    nn = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    on = function (a, b) {
      return kn("aw", a, b);
    },
    pn = function (a, b) {
      return kn("dc", a, b);
    },
    qn = function (a) {
      var b = hn("gac");
      return b
        ? !tj(jn) && a
          ? "0"
          : decodeURIComponent(b)
        : gn(dm() ? $l() : {});
    },
    rn = function (a) {
      var b = hn("gacgb");
      return b
        ? !tj(jn) && a
          ? "0"
          : decodeURIComponent(b)
        : gn(dm() ? $l("_gac_gb", !0) : {});
    },
    sn = function (a) {
      var b = mm(),
        c = [],
        d = b.gclid,
        e = b.dclid,
        f = b.gclsrc || "aw";
      !d ||
        ("aw.ds" !== f && "aw" !== f && "ds" !== f) ||
        c.push({ la: d, He: f });
      e && c.push({ la: e, He: "ds" });
      0 === c.length && b.gbraid && c.push({ la: b.gbraid, He: "gb" });
      mn(function () {
        fl(a);
        var g = cl(a.prefix);
        if (g) {
          var h = ["auid=" + g];
          if (K(15)) {
            var l = G.referrer ? ii(ki(G.referrer), "host") : "";
            0 === c.length && nn.test(l) && c.push({ la: "", He: "" });
            if (0 === c.length) return;
            l && h.push("ref=" + encodeURIComponent(l));
            var n = 1 === yk() ? m.top.location.href : m.location.href;
            n = n.replace(/[\?#].*$/, "");
            h.push("url=" + encodeURIComponent(n));
            h.push("tft=" + Ta());
            var p = mc();
            void 0 !== p && h.push("tfd=" + Math.round(p));
          }
          if (0 < c.length)
            for (
              var q = (dh.joined_auid = dh.joined_auid || {}), r = 0;
              r < c.length;
              r++
            ) {
              var u = c[r],
                t = u.la,
                v = u.He,
                w = (a.prefix || "_gcl") + "." + v + "." + t;
              if (!q[w]) {
                var x =
                  "https://adservice.google.com/pagead/regclk?" + h.join("&");
                "" !== t &&
                  (x =
                    "gb" === v
                      ? x + "&wbraid=" + t
                      : x + "&gclid=" + t + "&gclsrc=" + v);
                kc(x);
                q[w] = !0;
              }
            }
        }
      });
    },
    tn = function (a) {
      return hn("gclaw") || hn("gac") || 0 < (mm().aw || []).length
        ? !1
        : 0 < (mm().gb || []).length
        ? !0
        : Am(a);
    };
  var un = ["L", "S", "Y"],
    vn = ["S", "E"],
    wn = { sampleRate: "0.005000", ui: "", si: Number("5"), ri: Number("") },
    xn =
      0 <= G.location.search.indexOf("?gtm_latency=") ||
      0 <= G.location.search.indexOf("&gtm_latency="),
    yn;
  if (!(yn = xn)) {
    var zn = Math.random(),
      An = wn.sampleRate;
    yn = zn < An;
  }
  var Bn = yn,
    Cn = "https://www.googletagmanager.com/a?id=" + Ve.N + "&cv=40",
    Dn = {
      label: Ve.N + " Container",
      children: [{ label: "Initialization", children: [] }],
    };
  function En() {
    return [Cn, "&v=3&t=t", "&pid=" + Ja(), "&rv=" + ch.ed].join("");
  }
  var Fn = En();
  function Gn() {
    Fn = En();
  }
  var Hn = {},
    In = "",
    Jn = "",
    Kn = "",
    Ln = "",
    Mn = [],
    Nn = "",
    On = {},
    Pn = !1,
    Qn = {},
    Rn = {},
    Sn = {},
    Tn = "",
    Un = void 0,
    Vn = {},
    Wn = {},
    Xn = void 0,
    Yn = 5;
  0 < wn.si && (Yn = wn.si);
  var Zn = (function (a, b) {
      for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
      return {
        hk: function () {
          return c < a ? !1 : Ta() - d[c % a] < b;
        },
        Fk: function () {
          var f = c++ % a;
          d[f] = Ta();
        },
      };
    })(Yn, 1e3),
    $n = 1e3;
  function ao(a, b) {
    var c = Un;
    if (void 0 === c) return "";
    var d = xb("GTM"),
      e = xb("TAGGING"),
      f = xb("HEALTH"),
      g = Fn,
      h = Hn[c] ? "" : "&es=1",
      l = Vn[c],
      n = bo(c),
      p = co(),
      q = In,
      r = Jn,
      u = Tn,
      t = eo(a),
      v = Kn,
      w = Ln,
      x = fo(a, b),
      y;
    return [
      g,
      h,
      l,
      n,
      d ? "&u=" + d : "",
      e ? "&ut=" + e : "",
      f ? "&h=" + f : "",
      p,
      q,
      r,
      u,
      t,
      v,
      w,
      x,
      y,
      Nn ? "&dl=" + encodeURIComponent(Nn) : "",
      0 < Mn.length ? "&tdp=" + Mn.join(".") : "",
      ch.Cf ? "&x=" + ch.Cf : "",
      "&z=0",
    ].join("");
  }
  function ho(a) {
    Xn && (m.clearTimeout(Xn), (Xn = void 0));
    if (void 0 !== Un && (!Hn[Un] || In || Jn || io(a)))
      if (void 0 === jo[Un] && (Wn[Un] || Zn.hk() || 0 >= $n--))
        P(1), (Wn[Un] = !0);
      else {
        void 0 === jo[Un] && Zn.Fk();
        var b = ao(!0, a);
        a ? kc(b) : dc(b);
        if (Ln || (Nn && 0 < Mn.length)) {
          var c = b.replace("/a?", "/td?");
          dc(c);
        }
        Hn[Un] = !0;
        Nn = Ln = Kn = Tn = Jn = In = "";
        Mn = [];
      }
  }
  function ko() {
    Xn || (Xn = m.setTimeout(ho, 500));
  }
  function lo(a) {
    return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*";
  }
  function mo() {
    2022 <= ao().length && ho();
  }
  function co() {
    return (
      "&tc=" +
      ve.filter(function (a) {
        return a;
      }).length
    );
  }
  var oo = function (a, b) {
      if (Bn && !Wn[a] && Un !== a) {
        ho();
        Un = a;
        Kn = In = "";
        Vn[a] = "&e=" + lo(b) + "&eid=" + a;
        ko();
      }
    },
    po = function (a, b, c, d) {
      if (Bn && b) {
        var e,
          f = String(b[Wd.cb] || "").replace(/_/g, "");
        0 === f.indexOf("cvt") && (f = "cvt");
        e = f;
        var g = c + e;
        if (!Wn[a]) {
          a !== Un && (ho(), (Un = a));
          In = In ? In + "." + g : "&tr=" + g;
          var l = b["function"];
          if (!l)
            throw Error("Error: No function name given for function call.");
          var n = (xe[l] ? "1" : "2") + e;
          Kn = Kn ? Kn + "." + n : "&ti=" + n;
          ko();
          mo();
        }
      }
    };
  function eo(a) {}
  function bo(a) {}
  var wo = function (a, b, c) {
      if (Bn && void 0 !== a && !Wn[a]) {
        a !== Un && (ho(), (Un = a));
        var d = c + b;
        Jn = Jn ? Jn + "." + d : "&epr=" + d;
        ko();
        mo();
      }
    },
    xo = function (a, b, c) {},
    yo = ["S", "P", "C", "Z"],
    zo = {},
    Ao = ((zo[1] = 5), (zo[2] = 5), (zo[3] = 5), zo),
    Bo = {},
    jo = {},
    go = void 0,
    Co = function (a, b) {
      var c = !1;
      if (!Bn || jo[a] || 0 === Ao[b]) return !1;
      --Ao[b];
      jo[a] = b;
      c = !0;
      return c;
    },
    Do = function (a, b, c) {
      if (!Bn || !jo[a]) return;
      var d = Bo[a];
      d || (Bo[a] = d = {});
      d[b] = c;
    };
  function fo(a, b) {
    var c;
    if (!Un || !io(b)) return "";
    var d = Bo[Un];
    c =
      "&al=" +
      yo
        .filter(function (e) {
          return void 0 !== d[e];
        })
        .map(function (e) {
          return e + Math.floor(d[e]);
        })
        .join(".") +
      (".Z" + jo[Un]);
    a && delete Bo[Un];
    return c;
  }
  function io(a) {
    var b = !1;
    if (!Un || !Bo[Un]) return !1;
    b = a || "C" in Bo[Un];
    return b;
  }
  var Eo = function () {
    if (Bn) {
      m.setInterval(Gn, 864e5);
      ec(m, "pagehide", function () {
        Un && jo[Un] && ho(!0);
        for (var a in Bo) Bo.hasOwnProperty(a) && ((Un = Number(a)), ho(!0));
      });
    }
  };
  var Fo = function (a, b, c, d, e, f, g, h, l, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.I = d;
      this.B = e;
      this.F = f;
      this.T = g;
      this.D = h;
      this.eventMetadata = l;
      this.X = n;
      this.W = p;
      this.H = q;
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.I[b]) return a.I[b];
      if (void 0 !== a.B[b]) return a.B[b];
      Bn && Go(a, a.F[b], a.T[b]) && (P(71), P(79));
      return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c;
    },
    Ho = function (a) {
      function b(g) {
        for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.I);
      b(a.B);
      b(a.F);
      if (Bn)
        for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
          var f = d[e];
          if (
            "event" !== f &&
            "gtm" !== f &&
            "tagTypeBlacklist" !== f &&
            !c.hasOwnProperty(f)
          ) {
            P(71);
            P(80);
            break;
          }
        }
      return Object.keys(c);
    },
    Io = function (a, b, c) {
      function d(l) {
        Cc(l) &&
          Ma(l, function (n, p) {
            f = !0;
            e[n] = p;
          });
      }
      var e = {},
        f = !1;
      (c && 1 !== c) || (d(a.D[b]), d(a.F[b]), d(a.B[b]), d(a.I[b]));
      (c && 2 !== c) || d(a.h[b]);
      if (Bn) {
        var g = f,
          h = e;
        e = {};
        f = !1;
        (c && 1 !== c) || (d(a.D[b]), d(a.T[b]), d(a.B[b]), d(a.I[b]));
        (c && 2 !== c) || d(a.h[b]);
        if (f !== g || Go(a, e, h)) P(71), P(81);
        f = g;
        e = h;
      }
      return f ? e : void 0;
    },
    Jo = function (a) {
      var b = [S.g.Oc, S.g.Vd, S.g.Wd, S.g.Xd, S.g.Yd, S.g.Zd, S.g.ae],
        c = {},
        d = !1,
        e = function (h) {
          for (var l = 0; l < b.length; l++)
            void 0 !== h[b[l]] && ((c[b[l]] = h[b[l]]), (d = !0));
          return d;
        };
      if (e(a.h) || e(a.I) || e(a.B)) return c;
      e(a.F);
      if (Bn) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        Go(a, c, f) && (P(71), P(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.D);
      return c;
    },
    Go = function (a, b, c) {
      if (!Bn) return !1;
      try {
        if (b === c) return !1;
        var d = Ac(b);
        if (d !== Ac(c) || !((Cc(b) && Cc(c)) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Go(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b)
            if (!c.hasOwnProperty(g) || Go(a, b[g], c[g])) return !0;
        }
      } catch (h) {
        P(72);
      }
      return !1;
    },
    Ko = function (a, b) {
      this.gj = a;
      this.ij = b;
      this.F = {};
      this.xh = {};
      this.h = {};
      this.I = {};
      this.B = {};
      this.cd = {};
      this.D = {};
      this.Cc = function () {};
      this.Ca = function () {};
      this.T = !1;
    },
    Lo = function (a, b) {
      a.F = b;
      return a;
    },
    Mo = function (a, b) {
      a.xh = b;
      return a;
    },
    No = function (a, b) {
      a.h = b;
      return a;
    },
    Oo = function (a, b) {
      a.I = b;
      return a;
    },
    Po = function (a, b) {
      a.B = b;
      return a;
    },
    Qo = function (a, b) {
      a.cd = b;
      return a;
    },
    Ro = function (a, b) {
      a.D = b || {};
      return a;
    },
    So = function (a, b) {
      a.Cc = b;
      return a;
    },
    To = function (a, b) {
      a.Ca = b;
      return a;
    },
    Uo = function (a) {
      a.T = !0;
      return a;
    },
    Vo = function (a) {
      return new Fo(
        a.gj,
        a.ij,
        a.F,
        a.xh,
        a.h,
        a.I,
        a.B,
        a.cd,
        a.D,
        a.Cc,
        a.Ca,
        a.T
      );
    };
  var Xo = function (a, b) {
      var c = a.cg,
        d = a.ug;
      a.Jf &&
        (Xl(c[S.g.ic], !!c[S.g.aa]) && rm(Wo, b), om(b), um(Wo, b), sn(b));
      c[S.g.aa] && tm(Wo, c[S.g.aa], c[S.g.Yc], !!c[S.g.jc], b.prefix);
      d && wm(["aw", "dc", "gb"]);
    },
    Yo = function (a, b, c, d) {
      var e = a.vg,
        f = a.callback,
        g = a.eg;
      if ("function" === typeof f)
        if (e === S.g.ac && void 0 === g) {
          var h = d(b.prefix, c);
          0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h);
        } else e === S.g.Td ? (P(65), fl(b, !1), f(cl(b.prefix))) : f(g);
    },
    Wo = ["aw", "dc", "gb"];
  var Zo = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e
        ? (b[c++] = e)
        : (2048 > e
            ? (b[c++] = (e >> 6) | 192)
            : (55296 == (e & 64512) &&
              d + 1 < a.length &&
              56320 == (a.charCodeAt(d + 1) & 64512)
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  Ib();
  nk() || Hb("iPod");
  Hb("iPad");
  !Hb("Android") || Jb() || Ib() || Hb("Opera") || Hb("Silk");
  Jb();
  !Hb("Safari") ||
    Jb() ||
    Hb("Coast") ||
    Hb("Opera") ||
    Hb("Edge") ||
    Hb("Edg/") ||
    Hb("OPR") ||
    Ib() ||
    Hb("Silk") ||
    Hb("Android") ||
    ok();
  var $o = {},
    ap = null,
    bp = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!ap) {
        ap = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            h = ["+/=", "+/", "-_=", "-_.", "-_"],
            l = 0;
          5 > l;
          l++
        ) {
          var n = g.concat(h[l].split(""));
          $o[l] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === ap[q] && (ap[q] = p);
          }
        }
      }
      for (
        var r = $o[f],
          u = Array(Math.floor(b.length / 3)),
          t = r[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (A >> 6)],
          J = r[A & 63];
        u[w++] = "" + B + C + E + J;
      }
      var D = 0,
        N = t;
      switch (b.length - v) {
        case 2:
          (D = b[v + 1]), (N = r[(D & 15) << 2] || t);
        case 1:
          var Q = b[v];
          u[w] = "" + r[Q >> 2] + r[((Q & 3) << 4) | (D >> 4)] + N + t;
      }
      return u.join("");
    };
  var cp =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function dp(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : (a.google_tag_data = {});
  }
  function ep() {
    var a = m.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function fp() {
    var a, b;
    return null !=
      (b = null == (a = m.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function gp(a) {
    var b, c;
    return (
      "function" ===
      typeof (null == (b = a.navigator)
        ? void 0
        : null == (c = b.userAgentData)
        ? void 0
        : c.getHighEntropyValues)
    );
  }
  function hp() {
    var a = m;
    if (!gp(a)) return null;
    var b = dp(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(cp)
      .then(function (d) {
        null != b.uach || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var ip,
    jp = function () {
      if (gp(m) && ((ip = Ta()), !fp())) {
        var a = hp();
        a &&
          (a.then(function () {
            P(95);
          }),
          a.catch(function () {
            P(96);
          }));
      }
    },
    lp = function (a) {
      var b = kp.al,
        c = function (g, h) {
          try {
            a(g, h);
          } catch (l) {}
        },
        d = ep();
      if (d) c(d);
      else {
        var e = fp();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = m.setTimeout(function () {
            c.zd || ((c.zd = !0), P(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.zd || ((c.zd = !0), P(104), m.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.zd || ((c.zd = !0), P(105), m.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    mp = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      a &&
        ((b.C[S.g.pf] = a.architecture),
        (b.C[S.g.qf] = a.bitness),
        a.fullVersionList &&
          (b.C[S.g.rf] = a.fullVersionList
            .map(function (d) {
              return (
                encodeURIComponent(d.brand || "") +
                ";" +
                encodeURIComponent(d.version || "")
              );
            })
            .join("|")),
        c && (b.C[S.g.nh] = a.mobile ? "1" : "0"),
        (b.C[S.g.sf] = a.model),
        (b.C[S.g.tf] = a.platform),
        (b.C[S.g.uf] = a.platformVersion),
        (b.C[S.g.vf] = a.wow64 ? "1" : "0"));
    };
  function np() {
    return "attribution-reporting";
  }
  function op(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var pp = !1;
  function qp() {
    if (op("join-ad-interest-group") && Ca(Ub.joinAdInterestGroup)) return !0;
    pp ||
      (wk(
        "A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (pp = !0));
    return op("join-ad-interest-group") && Ca(Ub.joinAdInterestGroup);
  }
  function rp(a, b) {
    var c = void 0;
    try {
      c = G.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6e4 > Ta() - d) {
        vb("TAGGING", 9);
        return;
      }
    } else
      try {
        if (
          50 <=
          G.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length
        ) {
          vb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    cc(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ta() },
      c
    );
  }
  function sp() {
    return K(60)
      ? "https://td.doubleclick.net"
      : "https://googleads.g.doubleclick.net";
  }
  var tp = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    up = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    vp = /^\d+\.fls\.doubleclick\.net$/,
    wp = /;gac=([^;?]+)/,
    xp = /;gacgb=([^;?]+)/,
    yp = /;gclaw=([^;?]+)/,
    zp = /;gclgb=([^;?]+)/;
  function Ap(a, b) {
    if (vp.test(G.location.host)) {
      var c = G.location.href.match(b);
      return c && 2 == c.length && c[1].match(tp)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].la);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Bp = function (a, b, c) {
    var d = dm() ? $l("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var h = xm("_gac_gb_" + g, a, b, c);
      f =
        f ||
        (0 !== h.length &&
          h.some(function (l) {
            return 1 === l;
          }));
      e.push(g + ":" + h.join(","));
    }
    return { Qj: f ? e.join(";") : "", Pj: Ap(d, xp) };
  };
  function Cp(a, b, c) {
    if (vp.test(G.location.host)) {
      var d = G.location.href.match(c);
      if (d && 2 == d.length && d[1].match(up)) return [{ la: d[1] }];
    } else return fm((a || "_gcl") + b);
    return [];
  }
  var Dp = function (a) {
      return Cp(a, "_aw", yp)
        .map(function (b) {
          return b.la;
        })
        .join(".");
    },
    Ep = function (a) {
      return Cp(a, "_gb", zp)
        .map(function (b) {
          return b.la;
        })
        .join(".");
    },
    Fp = function (a, b) {
      var c = xm(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Gp = function () {
    if (Ca(m.__uspapi)) {
      var a = "";
      try {
        m.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Hp = function () {
      var a = G.title;
      if (void 0 == a || "" == a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c)); ) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    Ip = function (a, b) {
      Ea(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    },
    Jp = function (a) {
      var b = a.target.M[0];
      if (b) {
        a.C[S.g.Pc] = b;
        var c = a.target.M[1];
        c && (a.C[S.g.lb] = c);
      } else a.K = !0;
    },
    Kp = function (a) {
      if (
        Ip(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.C[S.g.lb],
          c = !0 === T(a.s, S.g.Ud);
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && (a.metadata.speculative = !1);
            Mi() && (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.K = !0);
            break;
          case "remarketing":
            if (c || !b) a.metadata.speculative = !1;
        }
        a.C[S.g.zh] = a.metadata.is_gcp_conversion
          ? "www.google.com"
          : "www.googleadservices.com";
      }
    },
    Lp = function (a) {
      Ip(a, ["conversion", "remarketing"]);
    },
    Mp = function (a) {
      if (Ip(a, ["conversion", "remarketing"])) {
        var b = yk();
        a.C[S.g.Yg] = b;
        var c = T(a.s, S.g.Ra);
        c || (c = 1 === b ? m.top.location.href : m.location.href);
        var d = a.C,
          e = S.g.Ra,
          f;
        if (null != c) {
          var g = String(c).substring(0, 512),
            h = g.indexOf("#");
          f = -1 == h ? g : g.substring(0, h);
        } else f = "";
        d[e] = f;
        Ym(a, S.g.Sa, G.referrer);
        a.C[S.g.mc] = Hp();
        Ym(a, S.g.Qa);
        var l = Vh();
        a.C[S.g.Jb] = l.width + "x" + l.height;
      }
    },
    Np = function (a) {
      Ip(a, ["conversion", "remarketing"]) &&
        (Ym(a, S.g.Ma),
        Ym(a, S.g.ra),
        Ym(a, S.g.va),
        "remarketing" === a.metadata.hit_type && Ym(a, S.g.Aa));
    },
    Op = function (a) {
      if (K(13))
        if (!gp(m)) P(87);
        else if (void 0 !== ip) {
          P(85);
          var b = ep();
          b ? mp(b, a, !1) : P(86);
        }
    },
    Qp = function (a) {
      Ip(a, ["conversion"]) &&
        (Ii()
          ? (a.C[S.g.Ze] = "2")
          : K(7) &&
            (Pp ||
              op(np()) ||
              (wk(
                "A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
              ),
              (Pp = !0)),
            op(np()) && (a.C[S.g.Ze] = "1")));
    },
    Rp = function (a) {
      Ip(a, ["conversion", "remarketing"]) &&
        K(9) &&
        tj(S.g.J) &&
        !1 !== T(a.s, S.g.Ea) &&
        !1 !== T(a.s, S.g.fa) &&
        !1 !== T(a.s, S.g.kb) &&
        !1 !== T(a.s, S.g.Fa) &&
        qp() &&
        ((a.C[S.g.Qg] = "1"), (a.metadata.send_fledge_experiment = !0));
    },
    Sp = function (a) {
      var b = function (d) {
        return T(a.s, d);
      };
      a.metadata.conversion_linker_enabled = !1 !== b(S.g.ya);
      var c = {
        prefix: b(S.g.La) || b(S.g.Za),
        domain: b(S.g.nb),
        hb: b(S.g.Pa),
        flags: b(S.g.ob),
      };
      a.metadata.cookie_options = c;
      a.metadata.redact_ads_data = null != b(S.g.na) && !1 !== b(S.g.na);
      a.metadata.allow_ad_personalization = !1 !== b(S.g.fa);
    },
    Tp = function (a) {
      if (Zm(a, "ccd_add_1p_data", !1) && tj(S.g.J)) {
        var b = Ei(a.s);
        if (Fi(b)) {
          if (b.enable_code) {
            var c = T(a.s, S.g.ka);
            if (Cc(c) || null === c) a.metadata.user_data_from_code = c;
          }
          Cc(b.selectors) &&
            (a.metadata.user_data_from_manual = Di(b.selectors));
        }
      }
    },
    Up = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Ip(a, ["conversion", "user_data_web"]),
        c = !Zm(a, "ccd_add_1p_data", !1) && Ip(a, "user_data_lead");
      if ((b || c) && tj(S.g.J)) {
        var d = "conversion" === a.metadata.hit_type,
          e = a.s,
          f = void 0,
          g = T(e, S.g.ka);
        if (d) {
          var h = (T(e, S.g.Vc) || {})[a.C[S.g.lb]];
          if (!0 === T(e, S.g.Ic) || h) {
            var l = Ki(h, g),
              n = l.xc;
            f = l.Xa;
            a.C[S.g.uh] = n;
          }
        } else {
          if (a.metadata.is_config_command) return;
          Fi(Ei(a.s)) &&
            null !== g &&
            (Cc(g) ? (f = g) : (f = Gi(Ei(a.s))),
            f && (a.metadata.speculative = !1));
        }
        a.metadata.user_data = f;
      }
    },
    Vp = function (a) {
      Ip(a, ["conversion", "remarketing"]) &&
        (a.s.H
          ? "conversion" !== a.metadata.hit_type &&
            a.eventName &&
            (a.C[S.g.Pg] = a.eventName)
          : (a.C[S.g.Pg] = a.eventName),
        Ma(a.s.h, function (b, c) {
          bh[b.split(".")[0]] || (a.C[b] = c);
        }));
    },
    Wp = function (a) {
      if (
        a.eventName === S.g.Da &&
        ((a.metadata.is_config_command = !0),
        Ip(a, "conversion") && (a.metadata.speculative = !0),
        !Ip(a, "remarketing") ||
          (!1 !== T(a.s, S.g.kb) && !1 !== T(a.s, S.g.Fa)) ||
          (a.metadata.speculative = !0),
        Ip(a, "landing_page"))
      ) {
        var b = T(a.s, S.g.Hb),
          c = T(a.s, S.g.za) || {},
          d = T(a.s, S.g.qb),
          e = a.metadata.conversion_linker_enabled,
          f = a.metadata.cookie_options;
        Xo({ Jf: e, Ph: b, cg: c, ug: d }, f);
        Wm(a.target, a.s);
        Em({
          Be: !1,
          uc: a.metadata.redact_ads_data,
          da: a.target.id,
          eventId: a.s.eventId,
          priorityId: a.s.priorityId,
          Cb: e ? f : void 0,
          yd: e,
          ld: a.C[S.g.hf],
          Ke: a.C[S.g.hc],
          Fe: a.C[S.g.fc],
        });
        a.K = !0;
      }
    },
    Xp = function (a) {
      if (!Zm(a, "hasPreAutoPiiCcdRule", !1)) {
        var b = K(50);
        if ((!K(49) || b || a.s.H) && Ip(a, "conversion") && tj(S.g.J)) {
          var c = (T(a.s, S.g.Vc) || {})[a.C[S.g.lb]],
            d = a.C[S.g.Pc];
          if (Ji(c) || ui(d)) {
            var e = Ta(),
              f = Ai({ Ob: !0, Pb: !0, qg: !0 });
            if (0 !== f.elements.length) {
              for (var g = [], h = 0; h < f.elements.length; ++h) {
                var l = f.elements[h];
                g.push(l.querySelector + "*" + Bi(l) + "*" + l.type);
              }
              a.C[S.g.rh] = g.join("~");
              var n = f.Ne;
              n && ((a.C[S.g.sh] = n.querySelector), (a.C[S.g.qh] = Bi(n)));
              a.C[S.g.ph] = String(Ta() - e);
              a.C[S.g.th] = f.status;
            }
          }
        }
      }
    },
    Yp = function (a) {
      if (a.eventName === S.g.Ka && !a.s.H) {
        if (!a.metadata.consent_updated && Ip(a, "conversion")) {
          var b = T(a.s, S.g.pb);
          if ("function" !== typeof b) return;
          var c = String(T(a.s, S.g.ab)),
            d = a.C[c],
            e = T(a.s, c);
          c === S.g.ac || c === S.g.Td
            ? Yo(
                { vg: c, callback: b, eg: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                on
              )
            : b(d || e);
        }
        a.K = !0;
      }
    },
    Zp = function (a) {
      if (Ip(a, "conversion") && tj(S.g.J) && (a.C[S.g.qe] || a.C[S.g.he])) {
        var b = a.C[S.g.lb],
          c = I(a.metadata.cookie_options),
          d = km(c.prefix);
        c.prefix = "_gcl" === d ? "" : d;
        if (a.C[S.g.qe]) {
          var e = Fp(b, c);
          e && (a.C[S.g.wh] = e);
        }
        if (a.C[S.g.he]) {
          var f = Bp(b, c).Qj;
          f && (a.C[S.g.Ug] = f);
        }
      }
    },
    $p = function (a) {
      var b = K(4),
        c = a.s,
        d,
        e,
        f;
      if (!b) {
        var g = Io(c, S.g.ja);
        d = db(Cc(g) ? g : {});
      }
      var h = Io(c, S.g.ja, 1),
        l = Io(c, S.g.ja, 2);
      e = db(Cc(h) ? h : {}, ".");
      f = db(Cc(l) ? l : {}, ".");
      b || (a.C[S.g.hf] = d);
      a.C[S.g.hc] = e;
      a.C[S.g.fc] = f;
    },
    aq = function (a) {
      if (Ip(a, ["conversion", "remarketing"])) {
        var b = "conversion" === a.metadata.hit_type;
        (b && a.eventName !== S.g.Ja) ||
          (Ym(a, S.g.ia),
          b &&
            (Ym(a, S.g.Nc),
            Ym(a, S.g.Lc),
            Ym(a, S.g.Mc),
            Ym(a, S.g.Kc),
            (a.C[S.g.Hg] = a.eventName)));
      }
    },
    bq = function (a) {
      if (Ip(a, ["conversion", "remarketing"])) {
        var b = a.s,
          c = T(b, S.g.zb);
        if (!0 === c || !1 === c) a.C[S.g.zb] = c;
        var d = T(b, S.g.fa);
        if (!0 === d || !1 === d) a.C[S.g.Dh] = !d;
        !1 === d && Ip(a, "remarketing") && (a.K = !0);
      }
    },
    cq = function (a) {
      Ip(a, "conversion") &&
        (Ym(a, S.g.kc),
        Ym(a, S.g.Rc),
        Ym(a, S.g.nc),
        Ym(a, S.g.Wc),
        Ym(a, S.g.bc),
        Ym(a, S.g.Tc));
    },
    dq = function (a) {
      bn(a);
    },
    eq = function (a) {
      if (Ip(a, ["conversion", "remarketing"]) && m.__gsaExp && m.__gsaExp.id) {
        var b = m.__gsaExp.id;
        if (Ca(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.C[S.g.Xg] = c);
          } catch (d) {}
      }
    },
    fq = function (a) {
      if (Ip(a, ["conversion", "remarketing"])) {
        var b = Gp();
        void 0 !== b && (a.C[S.g.vh] = b || "error");
        var c = Wk();
        c && (a.C[S.g.Vg] = c);
        var d = Vk();
        d && (a.C[S.g.kh] = d);
      }
    },
    gq = function (a) {
      Ip(a, ["conversion"]) && "1" === Ol(!1)._up && (a.C[S.g.Zg] = !0);
    },
    hq = function (a) {
      Ip(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !tj(S.g.J));
    },
    iq = function (a) {
      if (
        Ip(a, ["conversion", "user_data_lead", "user_data_web"]) &&
        tj(S.g.J) &&
        a.metadata.conversion_linker_enabled
      ) {
        var b = a.metadata.cookie_options,
          c = km(b.prefix);
        "_gcl" === c && (c = "");
        var d = c;
        if (
          vp.test(G.location.host)
            ? yp.test(G.location.href) || wp.test(G.location.href)
            : !Am(d)
        ) {
          var e = Dp(c);
          e && (a.C[S.g.ac] = e);
          if (!c) {
            var f = Ap(dm() ? $l() : {}, wp);
            f && (a.C[S.g.Tg] = f);
          }
        } else {
          var g = Ep(c);
          g && (a.C[S.g.qe] = g);
          if (!c) {
            var h = a.C[S.g.lb];
            b = I(b);
            b.prefix = c;
            var l = Bp(h, b, !0).Pj;
            l && (a.C[S.g.he] = l);
          }
        }
      }
    },
    jq = function (a) {
      if (
        Ip(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        tj(S.g.J)
      ) {
        var b = !K(3);
        if ("remarketing" !== a.metadata.hit_type || b) {
          var c = a.metadata.cookie_options;
          fl(c, "conversion" === a.metadata.hit_type && a.eventName !== S.g.Ka);
          a.C[S.g.Td] = cl(c.prefix);
        }
      }
    },
    kq = function (a) {
      if (K(10) && Ip(a, ["conversion"])) {
        var b = en(a.metadata.cookie_options);
        if (b && !a.C[S.g.Ma]) {
          var c = Sj(a.C[S.g.lb]);
          a.C[S.g.Ma] = c;
        }
        b && ((a.C[S.g.Ab] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    lq = function (a) {
      var b = !tj(S.g.J);
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.K = !(!b && !a.metadata.consent_updated);
          break;
        case "remarketing":
          a.K = b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.C[S.g.xg] = !0);
      }
    },
    mq = function (a) {
      Ip(a, ["conversion"]) &&
        a.s.eventMetadata.is_external_event &&
        (a.C[S.g.Ah] = !0);
    },
    nq = function (a) {
      var b;
      if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            a.metadata.speculative = !1;
            break;
          case "user_data_lead":
            b = 98;
            a.metadata.speculative = !1;
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && P(b);
      !0 === a.metadata.speculative && (a.K = !0);
    },
    Pp = !1;
  var oq = function (a) {
    if (tj(S.g.J)) return a;
    a = a.replace(/&url=([^&#]+)/, function (b, c) {
      var d = li(decodeURIComponent(c));
      return "&url=" + encodeURIComponent(d);
    });
    return (a = a.replace(/&ref=([^&#]+)/, function (b, c) {
      var d = li(decodeURIComponent(c));
      return "&ref=" + encodeURIComponent(d);
    }));
  };
  var pq = function (a, b) {
    var c = m,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var qq = function (a, b) {
    var c = sk(a, "fmt");
    if (b) {
      var d = sk(a, "random"),
        e = sk(a, "label") || "";
      if (!d) return !1;
      var f = bp(
        decodeURIComponent(e.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(d.replace(/\+/g, " "))
      );
      if (!pq(f, b)) return !1;
    }
    c && 4 != c && (a = uk(a, "rfmt", c));
    var g = uk(a, "fmt", 4);
    ac(
      g,
      function () {
        m.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((m.google_noFurtherRedirects = null), b());
      },
      void 0,
      void 0,
      G.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var rq = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          h;
        for (h in d)
          "google_business_vertical" !== h &&
            (h in g || (g[h] = []), g[h].push(d[h]));
      }
      return Object.keys(b).map(function (l) {
        return b[l];
      });
    },
    sq = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = d.id),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    tq = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d &&
          b.push({
            item_id: d.id,
            quantity: d.quantity,
            value: d.price,
            start_date: d.start_date,
            end_date: d.end_date,
          });
      }
      return b;
    },
    vq = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d &&
          (e.push(uq(d.value)),
          e.push(uq(d.quantity)),
          e.push(uq(d.item_id)),
          e.push(uq(d.start_date)),
          e.push(uq(d.end_date)),
          b.push("(" + e.join("*") + ")"));
      }
      return 0 < b.length ? b.join("") : "";
    },
    uq = function (a) {
      return "number" !== typeof a && "string" !== typeof a ? "" : a.toString();
    },
    xq = function (a, b) {
      var c = wq(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    wq = function (a) {
      if (!a || "object" !== typeof a || "function" === typeof a.join)
        return "";
      var b = [];
      Ma(a, function (c, d) {
        var e, f;
        if (Ea(d)) {
          for (var g = [], h = 0; h < d.length; ++h) {
            var l = yq(d[h]);
            void 0 != l && g.push(l);
          }
          f = 0 !== g.length ? g.join(",") : void 0;
        } else f = yq(d);
        e = f;
        var n = yq(c);
        n && void 0 != e && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    yq = function (a) {
      var b = typeof a;
      if (null != a && "object" !== b && "function" !== b)
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    zq = function (a, b) {
      var c = [],
        d = function (f, g) {
          null != g &&
            "" !== g &&
            (!0 === g && (g = 1),
            !1 === g && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      ("conversion" !== e && "remarketing" !== e) ||
        d("random", a.metadata.event_start_timestamp_ms);
      Ma(b, d);
      return c.join("&");
    },
    Aq = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.C[S.g.Pc],
        e = tj(S.g.J),
        f = [],
        g,
        h = a.s.X,
        l,
        n = Yj() ? 2 : 3,
        p = 0,
        q = function (w) {
          f.push(w);
          w.jb && p++;
        };
      switch (c) {
        case "conversion":
          l = "pagead/conversion";
          var r = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com/"), (l = "pagead/1p-conversion"))
              : (g = "https://www.googleadservices.com/")
            : (g = "https://pagead2.googlesyndication.com/");
          a.metadata.is_gcp_conversion &&
            (r = "&gcp=1&sscte=1&ct_cookie_present=1");
          q({
            sb: "" + g + l + "/" + d + "/?" + zq(a, b) + r,
            format: n,
            jb: !0,
          });
          a.metadata.send_ccm_parallel_ping &&
            q({
              sb: "" + g + "ccm/conversion/" + d + "/?" + zq(a, b) + r,
              format: 2,
              jb: !0,
            });
          a.metadata.is_gcp_conversion &&
            ((r = "&gcp=1&ct_cookie_present=1"),
            q({
              sb:
                "" +
                (e ? "https://googleads.g.doubleclick.net/" : g) +
                "pagead/viewthroughconversion/" +
                d +
                "/?" +
                zq(a, b) +
                r,
              format: n,
              jb: !0,
            }));
          break;
        case "remarketing":
          var u = b.data || "",
            t = rq(sq(a.C[S.g.ia]));
          if (t.length) {
            for (var v = 0; v < t.length; v++)
              (b.data = xq(u, t[v])),
                q({
                  sb:
                    "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    zq(a, b),
                  format: n,
                  jb: !0,
                }),
                a.metadata.send_fledge_experiment &&
                  q({
                    sb: sp() + "/td/rul/" + d + "?" + zq(a, b),
                    format: 4,
                    jb: !1,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            q({
              sb:
                "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" +
                d +
                "/?" +
                zq(a, b),
              format: n,
              jb: !0,
            });
          break;
        case "user_data_lead":
          q({
            sb: "https://google.com/pagead/form-data/" + d + "?" + zq(a, b),
            format: 1,
            jb: !0,
          });
          break;
        case "user_data_web":
      }
      1 < f.length && Ca(a.s.X) && (h = eb(a.s.X, p));
      Yj() ||
        ("conversion" !== c && "remarketing" !== c) ||
        !a.metadata.send_fledge_experiment ||
        q({ sb: sp() + "/td/rul/" + d + "?" + zq(a, b), format: 4, jb: !1 });
      return { X: h, bk: f };
    },
    Bq = function (a, b, c, d, e) {
      c.metadata.record_aw_latency &&
        Do(c.s.eventId, "P", Ta() - c.metadata.event_start_timestamp_ms);
      var f = function () {
        K(6) &&
          c.metadata.record_aw_latency &&
          Do(c.s.eventId, "C", Ta() - c.metadata.event_start_timestamp_ms);
        e && e();
      };
      switch (b) {
        case 1:
          kc(a);
          e && e();
          break;
        case 2:
          dc(a, f);
          break;
        case 3:
          var g = !1;
          try {
            g = qq(a, f);
          } catch (n) {
            g = !1;
          }
          g || Bq(a, 2, c, d, f);
          break;
        case 4:
          var h = "AW-" + c.C[S.g.Pc],
            l = c.C[S.g.lb];
          l && (h = h + "/" + l);
          rp(a, h);
      }
    },
    Cq = {},
    Dq =
      ((Cq[S.g.xg] = "gcu"),
      (Cq[S.g.ac] = "gclaw"),
      (Cq[S.g.Td] = "auid"),
      (Cq[S.g.Kc] = "dscnt"),
      (Cq[S.g.Lc] = "fcntr"),
      (Cq[S.g.Mc] = "flng"),
      (Cq[S.g.Nc] = "mid"),
      (Cq[S.g.Hg] = "bttype"),
      (Cq[S.g.lb] = "label"),
      (Cq[S.g.Ze] = "capi"),
      (Cq[S.g.va] = "currency_code"),
      (Cq[S.g.Rc] = "vdltv"),
      (Cq[S.g.Pi] = "_dbg"),
      (Cq[S.g.Wc] = "oedeld"),
      (Cq[S.g.fc] = "edid"),
      (Cq[S.g.Qg] = "fledge"),
      (Cq[S.g.Tg] = "gac"),
      (Cq[S.g.he] = "gacgb"),
      (Cq[S.g.Ug] = "gacmcov"),
      (Cq[S.g.Vg] = "gdpr"),
      (Cq[S.g.hc] = "gdid"),
      (Cq[S.g.Xg] = "gsaexp"),
      (Cq[S.g.Yg] = "frm"),
      (Cq[S.g.Zg] = "gtm_up"),
      (Cq[S.g.hf] = "did"),
      (Cq[S.g.kc] = void 0),
      (Cq[S.g.Ra] = "url"),
      (Cq[S.g.Sa] = "ref"),
      (Cq[S.g.mc] = "tiba"),
      (Cq[S.g.zb] = "rdp"),
      (Cq[S.g.Ab] = "ecsid"),
      (Cq[S.g.nc] = "delopc"),
      (Cq[S.g.kh] = "gdpr_consent"),
      (Cq[S.g.Ma] = "oid"),
      (Cq[S.g.ph] = "ec_lat"),
      (Cq[S.g.qh] = "ec_meta"),
      (Cq[S.g.rh] = "ec_m"),
      (Cq[S.g.sh] = "ec_sel"),
      (Cq[S.g.th] = "ec_s"),
      (Cq[S.g.uh] = "ec_mode"),
      (Cq[S.g.Aa] = "userId"),
      (Cq[S.g.vh] = "us_privacy"),
      (Cq[S.g.ra] = "value"),
      (Cq[S.g.qe] = "gclgb"),
      (Cq[S.g.wh] = "mcov"),
      (Cq[S.g.zh] = "hn"),
      (Cq[S.g.Ah] = "gtm_ee"),
      (Cq[S.g.Dh] = "npa"),
      (Cq[S.g.Pc] = null),
      (Cq[S.g.Jb] = null),
      (Cq[S.g.Qa] = null),
      (Cq[S.g.ia] = null),
      Cq),
    Fq = function (a) {
      Eq(a, function (b) {
        var c = a.metadata.hit_type;
        ("conversion" !== c && "remarketing" !== c) ||
          !K(6) ||
          ((a.metadata.record_aw_latency = Co(a.s.eventId, 3)),
          a.metadata.record_aw_latency &&
            Do(a.s.eventId, "S", Ta() - a.metadata.event_start_timestamp_ms));
        for (var d = Aq(a, b), e = d.X, f = d.bk, g = 0; g < f.length; g++) {
          var h = f[g],
            l = h.sb,
            n = h.format,
            p = h.jb,
            q = a.metadata.redact_ads_data ? oq(l) : l;
          Bq(q, n, a, b, p ? e : void 0);
        }
      });
    },
    Eq = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f = [],
        g = a.metadata.event_start_timestamp_ms;
      if ("conversion" === c || "remarketing" === c)
        (d.cv = "11"),
          (d.fst = g),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1");
      d.gtm = kk();
      gj() &&
        "remarketing" !== c &&
        ((d.gcs = uj()), hj() && (d.gcd = "G1" + oj(ej)));
      if (a.C[S.g.Jb]) {
        var h = a.C[S.g.Jb].split("x");
        2 === h.length && ((d.u_w = h[0]), (d.u_h = h[1]));
      }
      if (a.C[S.g.Qa]) {
        var l = a.C[S.g.Qa];
        2 === l.length
          ? (d.hl = l)
          : 5 === l.length &&
            ((d.hl = l.substring(0, 2)), (d.gl = l.substring(3, 5)));
      }
      K(13) &&
        ((Dq[S.g.pf] = "uaa"),
        (Dq[S.g.qf] = "uab"),
        (Dq[S.g.rf] = "uafvl"),
        (Dq[S.g.sf] = "uam"),
        (Dq[S.g.tf] = "uap"),
        (Dq[S.g.uf] = "uapv"),
        (Dq[S.g.vf] = "uaw"));
      Ma(a.C, function (t, v) {
        if (Dq.hasOwnProperty(t)) {
          var w = Dq[t];
          w && (d[w] = v);
        } else e[t] = v;
      });
      var n = a.C[S.g.kc];
      void 0 != n && "" !== n && (d.vdnc = String(n));
      var p = a.C[S.g.Tc];
      void 0 !== p && (d.shf = p);
      var q = a.C[S.g.bc];
      void 0 !== q && (d.delc = q);
      d.data = wq(e);
      var r = a.C[S.g.ia];
      r && "conversion" === c && ((d.iedeld = Ni(r)), (d.item = vq(tq(r))));
      if (
        ("conversion" === c ||
          "user_data_lead" === c ||
          "user_data_web" === c) &&
        a.metadata.user_data
      ) {
        var u = Og(a.metadata.user_data);
        u &&
          f.push(
            u.then(function (t) {
              d.em = t.Cd;
              if (K(10) && "user_data_web" === c && 0 < t.Ak) {
                var v = fn(a.metadata.cookie_options);
                d.ecsid = v;
              }
            })
          );
      }
      if (f.length)
        try {
          Promise.all(f).then(function () {
            b(d);
          });
          return;
        } catch (t) {}
      b(d);
    };
  var Gq = function () {
      this.h = {};
    },
    Hq = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Iq = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    Kq = function (a, b, c, d, e) {
      if (!gj()) {
        Jq(a, b, c, d, e);
        return;
      }
      xj(
        function () {
          tj(S.g.J) ? Jq(a, b, c, d, e) : d && d();
        },
        [S.g.J]
      );
    };
  var Lq = function (a, b, c) {
      c = void 0 === c ? !0 : c;
      var d = {
          gclgb: function () {
            return kn("gb", b, c).join(".");
          },
          gacgb: function () {
            return rn(c);
          },
          gclaw: function () {
            return on(b, c).join(".");
          },
          gac: function () {
            return qn(c);
          },
        },
        e = tn(b),
        f = e ? "gclgb" : "gclaw",
        g = e ? "gacgb" : "gac",
        h = d[g],
        l = (0, d[f])(),
        n = "_gcl" !== b ? "" : h();
      l && Hq(a, f, l);
      n && Hq(a, g, n);
    },
    Jq = function (a, b, c, d, e) {
      c = c || {};
      var f = c.Cb || {},
        g = new Gq();
      Ng(b, function (h, l) {
        Hq(g, "em", h);
        Hq(g, "gtm", kk());
        gj() && (Hq(g, "gcs", uj()), Hq(g, "gcd", "G1" + oj(ej)));
        Lq(g, km(f.prefix), c.uc);
        Hq(g, "auid", cl(f.prefix));
        e && e.Ie && Hq(g, "gdid", e.Ie);
        e && e.Ee && Hq(g, "edid", e.Ee);
        var p = Iq(g);
        kc("https://google.com/pagead/form-data/" + a + "?" + p);
        d && d();
      });
    };
  function Mq(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return ki("" + c + b).href;
    }
  }
  function Nq(a, b) {
    return mh || oh ? Mq(a, b) : void 0;
  }
  function Oq() {
    return !!ch.we && "SGTM_TOKEN" !== ch.we.split("@@").join("");
  }
  var Qq = function (a, b, c, d) {
      if (!Pq() && !fk(a)) {
        var e = c ? "/gtag/js" : "/gtm.js",
          f = "?id=" + encodeURIComponent(a) + "&l=" + ch.ma,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        var h = Oq();
        h && (f += "&sign=" + ch.we);
        var l = Nq(b, e + f);
        if (!l) {
          var n = ch.Sd + e;
          h &&
            Vb &&
            g &&
            (n = Vb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          l = Lm("https://", "http://", n + f);
        }
        dk().container[a] = { state: 1, context: d };
        ac(l);
      }
    },
    Rq = function (a, b, c) {
      var d;
      if ((d = !Pq())) {
        var e = dk().destination[a];
        d = !(e && e.state);
      }
      if (d)
        if (gk())
          (dk().destination[a] = { state: 0, transportUrl: b, context: c }),
            P(91);
        else {
          var f =
            "/gtag/destination?id=" +
            encodeURIComponent(a) +
            "&l=" +
            ch.ma +
            "&cx=c";
          Oq() && (f += "&sign=" + ch.we);
          var g = Nq(b, f);
          g || (g = Lm("https://", "http://", ch.Sd + f));
          dk().destination[a] = { state: 1, context: c };
          ac(g);
        }
    };
  function Pq() {
    if (Yj()) {
      return !0;
    }
    return !1;
  }
  var Sq = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Tq = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Uq = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Vq =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Yq = function (a) {
      var b = Lh("gtm.allowlist") || Lh("gtm.whitelist");
      b && P(9);
      kh && (b = ["google", "gtagfl", "lcl", "zone"]);
      Wq &&
        Xq() &&
        ((b = []),
        window.console &&
          window.console.log &&
          window.console.log("GTM blocked. See go/13687728."));
      var c = b && Ya(Qa(b), Tq),
        d = Lh("gtm.blocklist") || Lh("gtm.blacklist");
      d || ((d = Lh("tagTypeBlacklist")) && P(3));
      d ? P(8) : (d = []);
      Xq() &&
        ((d = Qa(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Qa(d).indexOf("google") && P(2);
      var e = d && Ya(Qa(d), Uq),
        f = {};
      return function (g) {
        var h = g && g[Wd.cb];
        if (!h || "string" != typeof h) return !0;
        h = h.replace(/^_*/, "");
        if (void 0 !== f[h]) return f[h];
        var l = wh[h] || [],
          n = a(h, l);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(h))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > c.indexOf(l[q])) {
                      P(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var r = !1;
        if (d) {
          var u = 0 <= e.indexOf(h);
          if (u) r = u;
          else {
            var t = La(e, l || []);
            t && P(10);
            r = t;
          }
        }
        var v = !n || r;
        v ||
          !(0 <= l.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = La(e, Vq));
        return (f[h] = v);
      };
    },
    Wq = !1;
  var Xq = function () {
    return Sq.test(m.location && m.location.hostname);
  };
  var Zq = { initialized: 11, complete: 12, interactive: 13 },
    $q = {},
    ar = Object.freeze((($q[S.g.Fa] = !0), $q)),
    br =
      0 <= G.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= G.location.search.indexOf("&gtm_diagnostics="),
    dr = function (a, b, c) {
      if (Bn && "config" === a && !(1 < Hm(b).M.length)) {
        var d,
          e = Wb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = I(c.F);
        I(c.h, f);
        var g = [],
          h;
        for (h in d) {
          var l = cr(d[h], f);
          l.length && (br && console.log(l), g.push(h));
        }
        if (g.length) {
          if (g.length) {
            var n = b + "*" + g.join(".");
            Ln = Ln ? Ln + "!" + n : "&tdc=" + n;
          }
          vb("TAGGING", Zq[G.readyState] || 14);
        }
        d[b] = f;
      }
    };
  function er(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function cr(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var u = r[q];
        return void 0 === u ? ar[q] : u;
      },
      f;
    for (f in er(a, b)) {
      var g = (d ? d + "." : "") + f,
        h = e(f, a),
        l = e(f, b),
        n = "object" === Ac(h) || "array" === Ac(h),
        p = "object" === Ac(l) || "array" === Ac(l);
      if (n && p) cr(h, l, c, g);
      else if (n || p || h !== l) c[g] = !0;
    }
    return Object.keys(c);
  }
  var fr = !1,
    gr = 0,
    hr = [];
  function ir(a) {
    if (!fr) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        fr = !0;
        for (var e = 0; e < hr.length; e++) H(hr[e]);
      }
      hr.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function jr() {
    if (!fr && 140 > gr) {
      gr++;
      try {
        G.documentElement.doScroll("left"), ir();
      } catch (a) {
        m.setTimeout(jr, 50);
      }
    }
  }
  var kr = function (a) {
    fr ? a() : hr.push(a);
  };
  var mr = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Ve.N,
    };
  };
  var or = function (a, b) {
      this.h = !1;
      this.F = [];
      this.I = { tags: [] };
      this.T = !1;
      this.B = this.D = 0;
      nr(this, a, b);
    },
    pr = function (a, b, c, d) {
      if (gh.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Cc(d) && (e = I(d, e));
      e.id = c;
      e.status = "timeout";
      return a.I.tags.push(e) - 1;
    },
    qr = function (a, b, c, d) {
      var e = a.I.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    rr = function (a) {
      if (!a.h) {
        for (var b = a.F, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.F.length = 0;
      }
    },
    nr = function (a, b, c) {
      void 0 !== b && a.ye(b);
      c &&
        m.setTimeout(function () {
          return rr(a);
        }, Number(c));
    };
  or.prototype.ye = function (a) {
    var b = this,
      c = Va(function () {
        return H(function () {
          a(Ve.N, b.I);
        });
      });
    this.h ? c() : this.F.push(c);
  };
  var sr = function (a) {
      a.D++;
      return Va(function () {
        a.B++;
        a.T && a.B >= a.D && rr(a);
      });
    },
    tr = function (a) {
      a.T = !0;
      a.B >= a.D && rr(a);
    };
  var ur = function () {
      function a(d) {
        return !Da(d) || 0 > d ? 0 : d;
      }
      if (!dh._li && m.performance && m.performance.timing) {
        var b = m.performance.timing.navigationStart,
          c = Da(Mh.get("gtm.start")) ? Mh.get("gtm.start") : 0;
        dh._li = { cst: a(c - b), cbt: a(uh - b) };
      }
    },
    vr = function (a) {
      m.performance && m.performance.mark(Ve.N + "_" + a + "_start");
    },
    wr = function (a) {
      if (m.performance) {
        var b = Ve.N + "_" + a + "_start",
          c = Ve.N + "_" + a + "_duration";
        m.performance.measure(c, b);
        var d = m.performance.getEntriesByName(c)[0];
        m.performance.clearMarks(b);
        m.performance.clearMeasures(c);
        var e = dh._p || {};
        void 0 === e[a] && ((e[a] = d.duration), (dh._p = e));
        return d.duration;
      }
    },
    xr = function () {
      var a = mc();
      if (void 0 !== a) {
        var b = dh._p || {};
        b.PAGEVIEW = a;
        dh._p = b;
      }
    };
  var yr = {},
    zr = function () {
      return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    },
    Ar = !1;
  var Br = function (a) {
      m.GoogleAnalyticsObject || (m.GoogleAnalyticsObject = a || "ga");
      var b = m.GoogleAnalyticsObject;
      if (m[b]) m.hasOwnProperty(b) || P(12);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Sa());
        m[b] = c;
      }
      ur();
      return m[b];
    },
    Cr = function (a) {
      if (gj()) {
        var b = zr();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Dr() {
    return m.GoogleAnalyticsObject || "ga";
  }
  var Er = function (a) {},
    Fr = function (a, b) {
      return function () {
        var c = zr(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              h = f.get("hitCallback"),
              l = 0 > g.indexOf("&tid=" + b);
            l &&
              (f.set(
                "hitPayload",
                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            l &&
              (f.set("hitPayload", g, !0),
              f.set("hitCallback", h, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  function Kr(a, b, c, d) {
    var e = ve[a],
      f = Lr(a, b, c, d);
    if (!f) return null;
    var g = Ge(e[Wd.Ih], c, []);
    if (g && g.length) {
      var h = g[0];
      f = Kr(
        h.index,
        { X: f, W: 1 === h.Th ? b.terminate : f, terminate: b.terminate },
        c,
        d
      );
    }
    return f;
  }
  function Lr(a, b, c, d) {
    function e() {
      if (f[Wd.nj]) h();
      else {
        var w = He(f, c, []),
          x = w[Wd.yi];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!tj(x[y])) {
              h();
              return;
            }
        var A = pr(c.Bb, String(f[Wd.cb]), Number(f[Wd.fd]), w[Wd.oj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var J = Ta() - E;
            po(c.id, ve[a], "5", J);
            qr(c.Bb, A, "success", J);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var J = Ta() - E;
            po(c.id, ve[a], "6", J);
            qr(c.Bb, A, "failure", J);
            h();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        po(c.id, f, "1");
        var C = function () {
          var J = Ta() - E;
          po(c.id, f, "7", J);
          qr(c.Bb, A, "exception", J);
          B || ((B = !0), h());
        };
        var E = Ta();
        try {
          Fe(w, { event: c, index: a, type: 1 });
        } catch (J) {
          C(J);
        }
      }
    }
    var f = ve[a],
      g = b.X,
      h = b.W,
      l = b.terminate;
    if (c.Vf(f)) return null;
    var n = Ge(f[Wd.Jh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Kr(p.index, { X: g, W: h, terminate: l }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.Th ? l : q;
    }
    if (f[Wd.Eh] || f[Wd.qj]) {
      var r = f[Wd.Eh] ? we : c.Uk,
        u = g,
        t = h;
      if (!r[a]) {
        e = Va(e);
        var v = Mr(a, r, e);
        g = v.X;
        h = v.W;
      }
      return function () {
        r[a](u, t);
      };
    }
    return e;
  }
  function Mr(a, b, c) {
    var d = [],
      e = [];
    b[a] = Nr(d, e, c);
    return {
      X: function () {
        b[a] = Or;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      W: function () {
        b[a] = Pr;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Nr(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Or(a) {
    a();
  }
  function Pr(a, b) {
    b();
  }
  var Rr = function (a, b) {
      return 1 === arguments.length ? Qr("set", a) : Qr("set", a, b);
    },
    Sr = function (a, b) {
      return 1 === arguments.length ? Qr("config", a) : Qr("config", a, b);
    },
    Tr = function (a, b, c) {
      c = c || {};
      c[S.g.Kb] = a;
      return Qr("event", b, c);
    };
  function Qr(a) {
    return arguments;
  }
  var Ur = function () {
    this.h = [];
    this.B = [];
  };
  Ur.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.B.length; f++)
      try {
        this.B[f](e);
      } catch (g) {}
  };
  Ur.prototype.listen = function (a) {
    this.B.push(a);
  };
  Ur.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Ur.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Wr = function (a, b, c) {
      Vr().enqueue(a, b, c);
    },
    Yr = function () {
      var a = Xr;
      Vr().listen(a);
    };
  function Vr() {
    var a = dh.mb;
    a || ((a = new Ur()), (dh.mb = a));
    return a;
  }
  var fs = function (a) {
      var b = dh.zones;
      return b
        ? b.getIsAllowedFn(ak(), a)
        : function () {
            return !0;
          };
    },
    gs = function (a) {
      var b = dh.zones;
      return b ? b.isActive(ak(), a) : !0;
    };
  var js = function (a, b) {
    for (var c = [], d = 0; d < ve.length; d++)
      if (a[d]) {
        var e = ve[d];
        var f = sr(b.Bb);
        try {
          var g = Kr(d, { X: f, W: f, terminate: f }, b, d);
          if (g) {
            var h = c,
              l = h.push,
              n = d,
              p = e["function"];
            if (!p) throw "Error: No function name given for function call.";
            var q = xe[p];
            l.call(h, {
              mi: n,
              ei: q ? q.priorityOverride || 0 : 0,
              execute: g,
            });
          } else hs(d, b), f();
        } catch (u) {
          f();
        }
      }
    c.sort(is);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 < c.length;
  };
  function is(a, b) {
    var c,
      d = b.ei,
      e = a.ei;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var g = a.mi,
        h = b.mi;
      f = g > h ? 1 : g < h ? -1 : 0;
    }
    return f;
  }
  function hs(a, b) {
    if (Bn) {
      var c = function (d) {
        var e = b.Vf(ve[d]) ? "3" : "4",
          f = Ge(ve[d][Wd.Ih], b, []);
        f && f.length && c(f[0].index);
        po(b.id, ve[d], e);
        var g = Ge(ve[d][Wd.Jh], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var ms = !1,
    ks;
  var ss = function (a) {
    var b = Ta(),
      c = a["gtm.uniqueEventId"],
      d = a["gtm.priorityId"],
      e = a.event;
    if ("gtm.js" === e) {
      if (ms) return !1;
      ms = !0;
    }
    var h,
      l = !1;
    if (gs(c)) h = fs(c);
    else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
        return !1;
      l = !0;
      h = fs(Number.MAX_SAFE_INTEGER);
    }
    oo(c, e);
    var n = a.eventCallback,
      p = a.eventTimeout,
      q = n;
    var r = {
        id: c,
        priorityId: d,
        name: e,
        Vf: Yq(h),
        Uk: [],
        ai: function () {
          P(6);
          vb("HEALTH", 0);
        },
        Nh: os(),
        Oh: ps(c),
        Bb: new or(q, p),
      },
      u = Qe(r);
    l && (u = qs(u));
    var t = js(u, r),
      v = !1;
    tr(r.Bb);
    ("gtm.js" !== e && "gtm.sync" !== e) || Er(Ve.N);
    return rs(u, t) || v;
  };
  function ps(a) {
    return function (b) {
      Bn && (Gc(b) || xo(a, "input", b));
    };
  }
  function os() {
    var a = {};
    a.event = Qh("event", 1);
    a.ecommerce = Qh("ecommerce", 1);
    a.gtm = Qh("gtm");
    a.eventModel = Qh("eventModel");
    return a;
  }
  function qs(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(ve[c][Wd.cb]);
        if (fh[d] || void 0 !== ve[c][Wd.rj] || xh[d]) b[c] = !0;
        K(58) ||
          (0 !== ve[c][Wd.cb].indexOf("__ccd") &&
            0 !== ve[c][Wd.cb].indexOf("__ogt") &&
            "__set_product_settings" !== ve[c][Wd.cb]) ||
          (b[c] = !0);
      }
    return b;
  }
  function rs(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && ve[c] && !gh[String(ve[c][Wd.cb])]) return !0;
    return !1;
  }
  var us = function (a, b, c, d) {
      ts.push("event", [b, a], c, d);
    },
    vs = function (a, b, c, d) {
      ts.push("get", [a, b], c, d);
    },
    ws = function () {
      this.status = 1;
      this.I = {};
      this.h = {};
      this.B = {};
      this.T = null;
      this.F = {};
      this.D = !1;
    },
    xs = function (a, b, c, d) {
      var e = Ta();
      this.type = a;
      this.B = e;
      this.da = b || "";
      this.h = c;
      this.messageContext = d;
    },
    ys = function () {
      this.B = {};
      this.D = {};
      this.h = [];
    },
    zs = function (a, b) {
      var c = Hm(b);
      return (a.B[c.V] = a.B[c.V] || new ws());
    },
    As = function (a, b, c, d) {
      if (d.da) {
        var e = zs(a, d.da),
          f = e.T;
        if (f) {
          var g = I(c),
            h = I(e.I[d.da]),
            l = I(e.F),
            n = I(e.h),
            p = I(a.D),
            q = {};
          if (Bn)
            try {
              q = I(Bh);
            } catch (v) {
              P(72);
            }
          var r = Hm(d.da).prefix,
            u = function (v) {
              wo(d.messageContext.eventId, r, v);
              var w = g[S.g.cc];
              w && H(w);
            },
            t = Vo(
              To(
                So(
                  Ro(
                    Po(
                      Oo(
                        Qo(
                          No(
                            Mo(
                              Lo(
                                new Ko(
                                  d.messageContext.eventId,
                                  d.messageContext.priorityId
                                ),
                                g
                              ),
                              h
                            ),
                            l
                          ),
                          n
                        ),
                        p
                      ),
                      q
                    ),
                    d.messageContext.eventMetadata
                  ),
                  function () {
                    if (u) {
                      var v = u;
                      u = void 0;
                      v("2");
                    }
                  }
                ),
                function () {
                  if (u) {
                    var v = u;
                    u = void 0;
                    v("3");
                  }
                }
              )
            );
          try {
            wo(d.messageContext.eventId, r, "1"),
              dr(d.type, d.da, t),
              f(d.da, b, d.B, t);
          } catch (v) {
            wo(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  ys.prototype.register = function (a, b, c) {
    var d = zs(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (I(d.h, c), (d.h = c)), this.flush());
  };
  ys.prototype.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!Hm(c)) return;
      if (c) {
        var e = Hm(c);
        e &&
          1 === zs(this, c).status &&
          ((zs(this, c).status = 2), this.push("require", [{}], e.V, {}));
      }
      zs(this, c).D && (d.deferrable = !1);
    }
    this.h.push(new xs(a, c, b, d));
    d.deferrable || this.flush();
  };
  ys.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
      var f = this.h[0];
      if (f.messageContext.deferrable)
        !f.da || zs(this, f.da).D
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = zs(this, f.da);
            if (3 !== g.status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            Ma(f.h[0], function (r, u) {
              I(bb(r, u), b.D);
            });
            break;
          case "config":
            g = zs(this, f.da);
            e.ub = {};
            Ma(
              f.h[0],
              (function (r) {
                return function (u, t) {
                  I(bb(u, t), r.ub);
                };
              })(e)
            );
            var h = !!e.ub[S.g.bd];
            delete e.ub[S.g.bd];
            var l = Hm(f.da),
              n = l.V === l.id;
            h || (n ? (g.F = {}) : (g.I[f.da] = {}));
            (g.D && h) || As(this, S.g.Da, e.ub, f);
            g.D = !0;
            n ? I(e.ub, g.F) : (I(e.ub, g.I[f.da]), P(70));
            d = !0;
            break;
          case "event":
            g = zs(this, f.da);
            e.Md = {};
            Ma(
              f.h[0],
              (function (r) {
                return function (u, t) {
                  I(bb(u, t), r.Md);
                };
              })(e)
            );
            As(this, f.h[1], e.Md, f);
            break;
          case "get":
            g = zs(this, f.da);
            var p = {},
              q = ((p[S.g.ab] = f.h[0]), (p[S.g.pb] = f.h[1]), p);
            As(this, S.g.Ka, q, f);
        }
        this.h.shift();
        Bs(this, f);
      }
      e = { ub: e.ub, Md: e.Md };
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Bs = function (a, b) {
      if ("require" !== b.type)
        if (b.da)
          for (var c = zs(a, b.da).B[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.B)
            if (a.B.hasOwnProperty(e)) {
              var f = a.B[e];
              if (f && f.B)
                for (var g = f.B[b.type] || [], h = 0; h < g.length; h++)
                  g[h]();
            }
    },
    Cs = function (a, b) {
      var c = ts,
        d = I(b);
      I(zs(c, a).h, d);
      zs(c, a).h = d;
    },
    ts = new ys();
  var Ze;
  var Ds = {},
    Es = {},
    Fs = function (a) {
      for (
        var b = [], c = [], d = {}, e = 0;
        e < a.length;
        d = { Rd: d.Rd, Od: d.Od }, e++
      ) {
        var f = a[e];
        if (0 <= f.indexOf("-")) {
          if (((d.Rd = Hm(f)), d.Rd)) {
            var g = bk();
            Ha(
              g,
              (function (q) {
                return function (r) {
                  return q.Rd.V === r;
                };
              })(d)
            )
              ? b.push(f)
              : c.push(f);
          }
        } else {
          var h = Ds[f] || [];
          d.Od = {};
          h.forEach(
            (function (q) {
              return function (r) {
                return (q.Od[r] = !0);
              };
            })(d)
          );
          for (var l = ak(), n = 0; n < l.length; n++)
            if (d.Od[l[n]]) {
              b = b.concat(bk());
              break;
            }
          var p = Es[f] || [];
          p.length && (b = b.concat(p));
        }
      }
      return { rk: b, uk: c };
    },
    Gs = function (a) {
      Ma(Ds, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Hs = function (a) {
      Ma(Es, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Is = "HA GF G UA AW DC MC".split(" "),
    Js = !1,
    Ks = !1;
  function Ls(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: yh() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Ms = {
      config: function (a, b) {
        var c = Ls(a, b);
        if (!(2 > a.length) && k(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Cc(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Hm(a[1]);
          if (e) {
            oo(c.eventId, "gtag.config");
            var f = e.V,
              g = e.id !== f;
            if (g ? -1 === bk().indexOf(f) : -1 === ak().indexOf(f)) {
              if (!K(61) || !d[S.g.me]) {
                var h = d[S.g.wa] || ts.D[S.g.wa];
                g
                  ? Rq(f, h, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    })
                  : Qq(f, h, !0, {
                      source: 2,
                      fromContainerExecution: b.fromContainerExecution,
                    });
              }
            } else {
              if (jh && !g && !d[S.g.bd]) {
                var l = Ks;
                Ks = !0;
                if (l) return;
              }
              Js || P(43);
              if (!b.noTargetGroup)
                if (g) {
                  Hs(e.id);
                  var n = e.id,
                    p = d[S.g.je] || "default";
                  p = String(p).split(",");
                  for (var q = 0; q < p.length; q++) {
                    var r = Es[p[q]] || [];
                    Es[p[q]] = r;
                    0 > r.indexOf(n) && r.push(n);
                  }
                } else {
                  Gs(e.id);
                  var u = e.id,
                    t = d[S.g.je] || "default";
                  t = t.toString().split(",");
                  for (var v = 0; v < t.length; v++) {
                    var w = Ds[t[v]] || [];
                    Ds[t[v]] = w;
                    0 > w.indexOf(u) && w.push(u);
                  }
                }
              delete d[S.g.je];
              var x = b.eventMetadata || {};
              x.hasOwnProperty("is_external_event") ||
                (x.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = x;
              delete d[S.g.cc];
              for (var y = g ? [e.id] : bk(), A = 0; A < y.length; A++) {
                var B = I(b);
                ts.push("config", [d], y[A], B);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          P(39);
          var c = Ls(a, b),
            d = a[1];
          "default" === d ? qj(a[2]) : "update" === d && sj(a[2], c);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && k(c)) {
          var d;
          if (2 < a.length) {
            if ((!Cc(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = I(e)),
            e[S.g.cc] && (g.eventCallback = e[S.g.cc]),
            e[S.g.de] && (g.eventTimeout = e[S.g.de]));
          var h = Ls(a, b),
            l = h.eventId,
            n = h.priorityId;
          g["gtm.uniqueEventId"] = l;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[S.g.Kb];
          void 0 === r &&
            ((r = Lh(S.g.Kb, 2)), void 0 === r && (r = "default"));
          if (k(r) || Ea(r)) {
            var u = r.toString().replace(/\s+/g, "").split(","),
              t = Fs(u),
              v = t.rk,
              w = t.uk;
            if (w.length)
              for (
                var x = (q && q[S.g.wa]) || ts.D[S.g.wa], y = 0;
                y < w.length;
                y++
              ) {
                var A = Hm(w[y]);
                A &&
                  Rq(A.V, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Jm(v);
          } else p = void 0;
          var B = p;
          if (B) {
            oo(l, c);
            for (var C = [], E = 0; E < B.length; E++) {
              var J = B[E],
                D = I(b);
              if (-1 !== Is.indexOf(J.prefix)) {
                var N = I(d),
                  Q = D.eventMetadata || {};
                Q.hasOwnProperty("is_external_event") ||
                  (Q.is_external_event = !D.fromContainerExecution);
                D.eventMetadata = Q;
                delete N[S.g.cc];
                us(c, N, J.id, D);
              }
              C.push(J.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length
              ? (g.eventModel[S.g.Kb] = C.join())
              : delete g.eventModel[S.g.Kb];
            Js || P(43);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        P(53);
        if (4 === a.length && k(a[1]) && k(a[2]) && Ca(a[3])) {
          var c = Hm(a[1]),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Js || P(43);
            var f = ts.D[S.g.wa];
            if (
              !Ha(bk(), function (h) {
                return c.V === h;
              })
            )
              Rq(c.V, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Is.indexOf(c.prefix)) {
              Ls(a, b);
              var g = {};
              mj(I(((g[S.g.ab] = d), (g[S.g.pb] = e), g)));
              vs(
                d,
                function (h) {
                  H(function () {
                    return e(h);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Js = !0;
          var c = Ls(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (3 === a.length && k(a[1]) && Ca(a[2])) {
          var b = a[1],
            c = a[2],
            d = Ze.B;
          d.h[b] ? d.h[b].push(c) : (d.h[b] = [c]);
          if ((P(74), "all" === a[1])) {
            P(75);
            var e = !1;
            try {
              e = a[2](Ve.N, "unknown", {});
            } catch (f) {}
            e || P(76);
          }
        } else {
          P(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && Cc(a[1])
          ? (c = I(a[1]))
          : 3 == a.length &&
            k(a[1]) &&
            ((c = {}),
            Cc(a[2]) || Ea(a[2]) ? (c[a[1]] = I(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Ls(a, b),
            e = d.eventId,
            f = d.priorityId;
          I(c);
          var g = I(c);
          ts.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          K(30) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    Ns = { policy: !0 };
  var Os = function (a) {
      var b = m[ch.ma].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    Ps = function (a) {
      var b = m[ch.ma],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var Qs = !1,
    Rs = [];
  function Ss() {
    if (!Qs) {
      Qs = !0;
      for (var a = 0; a < Rs.length; a++) H(Rs[a]);
    }
  }
  var Ts = function (a) {
    Qs ? H(a) : Rs.push(a);
  };
  var Ht = function (a) {
    if (Gt(a)) return a;
    this.Ya = a;
  };
  Ht.prototype.getUntrustedMessageValue = function () {
    return this.Ya;
  };
  var Gt = function (a) {
    return !a || "object" !== Ac(a) || Cc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Ht.prototype.getUntrustedMessageValue = Ht.prototype.getUntrustedMessageValue;
  var It = 0,
    Jt = {},
    Kt = [],
    Lt = [],
    Mt = !1,
    Nt = !1;
  function Ot(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Pt = function (a) {
      return m[ch.ma].push(a);
    },
    Qt = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Pt(a);
    },
    Rt = function (a, b) {
      var c = dh[ch.ma],
        d = c ? c.subscribers : 1,
        e = 0,
        f = !1,
        g = void 0;
      b &&
        (g = m.setTimeout(function () {
          f || ((f = !0), a());
          g = void 0;
        }, b));
      return function () {
        ++e === d &&
          (g && (m.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
      };
    };
  function St(a, b) {
    var c = a._clear || b.overwriteModelFields;
    Ma(a, function (e, f) {
      "_clear" !== e && (c && Oh(e), Oh(e, f));
    });
    th || (th = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = yh()), (a["gtm.uniqueEventId"] = d), Oh("gtm.uniqueEventId", d));
    return ss(a);
  }
  function Tt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Na(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Ut() {
    var a;
    if (Lt.length) a = Lt.shift();
    else if (Kt.length) a = Kt.shift();
    else return;
    var b;
    var c = a;
    if (Mt || !Tt(c.message)) b = c;
    else {
      Mt = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = yh());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        h = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Kt.unshift(h, c);
      if (Bn && Ve.N) {
        var l;
        if (Ve.Af) {
          var n = Ve.N,
            p = dk().destination[n];
          l = p && p.context;
        } else {
          var q = Ve.N,
            r = dk().container[q];
          l = r && r.context;
        }
        var u = l,
          t,
          v = ki(m.location.href);
        t = v.hostname + v.pathname;
        var w = u && u.fromContainerExecution,
          x = u && u.source,
          y = Ve.N,
          A = Ve.Xb,
          B = Ve.Af;
        Nn || (Nn = t);
        Mn.push(
          y + ";" + A + ";" + (w ? 1 : 0) + ";" + (x || 0) + ";" + (B ? 1 : 0)
        );
      }
      b = f;
    }
    return b;
  }
  function Vt() {
    for (var a = !1, b; !Nt && (b = Ut()); ) {
      Nt = !0;
      delete Bh.eventModel;
      Kh();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Nt = !1;
      else {
        e.fromContainerExecution && Ph();
        try {
          if (Ca(d))
            try {
              d.call(Mh);
            } catch (x) {}
          else if (Ea(d)) {
            var f = d;
            if (k(f[0])) {
              var g = f[0].split("."),
                h = g.pop(),
                l = f.slice(1),
                n = Lh(g.join("."), 2);
              if (null != n)
                try {
                  n[h].apply(n, l);
                } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Na(d)) {
              a: {
                if (d.length && k(d[0])) {
                  var r = Ms[d[0]];
                  if (r && (!e.fromContainerExecution || !Ns[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && P(101);
            } else p = d;
            if (p) {
              var u = St(p, e);
              a = u || a;
              q && u && P(113);
            }
          }
        } finally {
          e.fromContainerExecution && Kh(!0);
          var t = d["gtm.uniqueEventId"];
          if ("number" === typeof t) {
            for (var v = Jt[String(t)] || [], w = 0; w < v.length; w++)
              Lt.push(Wt(v[w]));
            v.length && Lt.sort(Ot);
            delete Jt[String(t)];
            t > It && (It = t);
          }
          Nt = !1;
        }
      }
    }
    return !a;
  }
  function Xt() {
    var b = Vt();
    try {
      Os(Ve.N);
    } catch (c) {}
    return b;
  }
  function Xr(a) {
    if (It < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Jt[b] = Jt[b] || [];
      Jt[b].push(a);
    } else
      Lt.push(Wt(a)),
        Lt.sort(Ot),
        H(function () {
          Nt || Vt();
        });
  }
  function Wt(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Zt = function () {
      function a(f) {
        var g = {};
        if (Gt(f)) {
          var h = f;
          f = Gt(h) ? h.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return { message: f, messageContext: g };
      }
      var b = Wb(ch.ma, []),
        c = (dh[ch.ma] = dh[ch.ma] || {});
      !0 === c.pruned && P(83);
      Jt = Vr().get();
      Yr();
      kr(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      Ts(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < dh.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++)
            f[g] = new Ht(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var h = f.map(function (q) {
          return a(q);
        });
        Kt.push.apply(Kt, h);
        var l = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (P(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof l || l;
        return Vt() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Kt.push.apply(Kt, e);
      if (Yt()) {
        H(Xt);
      }
    },
    Yt = function () {
      var a = !0;
      return a;
    };
  function $t(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ta();
    return b < c + 3e5 && b > c - 9e5;
  }
  function au(a) {
    return a && 0 === a.indexOf("pending:") ? $t(a.substr(8)) : !1;
  }
  var Be = {};
  Be.se = new String("undefined");
  var bu = function (a) {
    this.h = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Be.se ? b : a[d]);
      return c.join("");
    };
  };
  bu.prototype.toString = function () {
    return this.h("undefined");
  };
  bu.prototype.valueOf = bu.prototype.toString;
  Be.uj = bu;
  Be.Bf = {};
  Be.Fj = function (a) {
    return new bu(a);
  };
  var cu = {};
  Be.Gk = function (a, b) {
    var c = yh();
    cu[c] = [a, b];
    return c;
  };
  Be.Qh = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = cu[c];
      if (d && "function" === typeof d[b]) d[b]();
      cu[c] = void 0;
    };
  };
  Be.gk = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Be.Bk = function (a) {
    if (a === Be.se) return a;
    var b = yh();
    Be.Bf[b] = a;
    return 'google_tag_manager["' + Ve.N + '"].macro(' + b + ")";
  };
  Be.tk = function (a, b, c) {
    a instanceof Be.uj && ((a = a.h(Be.Gk(b, c))), (b = Ba));
    return { ck: a, X: b };
  };
  var du = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": lc(a, "className"),
        "gtm.elementId": a["for"] || gc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || lc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        lc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    },
    eu = function (a) {
      dh.hasOwnProperty("autoEventsSettings") || (dh.autoEventsSettings = {});
      var b = dh.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    fu = function (a, b, c) {
      eu(a)[b] = c;
    },
    gu = function (a, b, c, d) {
      var e = eu(a),
        f = Ua(e, b, d);
      e[b] = c(f);
    },
    hu = function (a, b, c) {
      var d = eu(a);
      return Ua(d, b, c);
    },
    iu = function (a) {
      return "string" === typeof a ? a : String(yh());
    };
  var Cu = m.clearTimeout,
    Du = m.setTimeout,
    U = function (a, b, c, d) {
      if (Yj()) {
        b && H(b);
      } else return ac(a, b, c, d);
    },
    Eu = function () {
      return new Date();
    },
    Fu = function () {
      return m.location.href;
    },
    Gu = function (a) {
      return ii(ki(a), "fragment");
    },
    Hu = function (a) {
      return ji(ki(a));
    },
    Iu = function (a, b) {
      return Lh(a, b || 2);
    },
    Ju = function (a, b, c) {
      return b ? Qt(a, b, c) : Pt(a);
    },
    Ku = function (a, b) {
      m[a] = b;
    },
    X = function (a, b, c) {
      b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
      return m[a];
    },
    Lu = function (a, b, c) {
      return Fj(a, b, void 0 === c ? !0 : !!c);
    },
    Mu = function (a, b, c) {
      return 0 === Oj(a, b, c);
    },
    Nu = function (a, b) {
      if (Yj()) {
        b && H(b);
      } else cc(a, b);
    },
    Ou = function (a) {
      return !!hu(a, "init", !1);
    },
    Pu = function (a) {
      fu(a, "init", !0);
    },
    Qu = function (a, b, c) {
      Bn && (Gc(a) || xo(c, b, a));
    };

  var Ru = Be.tk;
  var nv = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function ov(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var pv = new Ka();
  function qv(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = pv.get(e);
      f || ((f = new RegExp(b, d)), pv.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function rv(a, b) {
    function c(g) {
      var h = ki(g),
        l = ii(h, "protocol"),
        n = ii(h, "host", !0),
        p = ii(h, "port"),
        q = ii(h, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" === l && "80" === p) ||
        ("https" === l && "443" === p)
      )
        (l = "web"), (p = "default");
      return [l, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function sv(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function tv(a, b) {
    return String(a) === String(b);
  }
  function uv(a, b) {
    return Number(a) >= Number(b);
  }
  function vv(a, b) {
    return Number(a) <= Number(b);
  }
  function wv(a, b) {
    return Number(a) > Number(b);
  }
  function xv(a, b) {
    return Number(a) < Number(b);
  }
  function yv(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  function zv(a) {
    return Av(a) ? 1 : 0;
  }
  function Av(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = I(a, {});
        I({ arg1: c[d], any_of: void 0 }, e);
        if (zv(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return sv(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < nv.length; g++) {
                var h = nv[g];
                if (b[h]) {
                  f = b[h](c);
                  break a;
                }
              }
            } catch (l) {}
          f = !1;
        }
        return f;
      case "_ew":
        return ov(b, c);
      case "_eq":
        return tv(b, c);
      case "_ge":
        return uv(b, c);
      case "_gt":
        return wv(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return vv(b, c);
      case "_lt":
        return xv(b, c);
      case "_re":
        return qv(b, c, a.ignore_case);
      case "_sw":
        return yv(b, c);
      case "_um":
        return rv(b, c);
    }
    return !1;
  }
  function Bv(a, b) {
    var c = this;
  }
  Bv.R = "addConsentListener";
  var Cv;
  var Dv = function (a) {
    for (var b = 0; b < a.length; ++b)
      if (Cv)
        try {
          a[b]();
        } catch (c) {
          P(77);
        }
      else a[b]();
  };
  function Ev(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Ev.P = "internal.addDataLayerEventListener";
  function Fv(a, b, c) {}
  Fv.R = "addDocumentEventListener";
  function Gv(a, b, c, d) {}
  Gv.R = "addElementEventListener";
  function Hv(a) {}
  Hv.R = "addEventCallback";
  function Lv(a) {}
  Lv.P = "internal.addFormAbandonmentListener";
  var Mv = {},
    Nv = [],
    Ov = {},
    Pv = 0,
    Qv = 0;
  function Xv(a, b) {}
  Xv.P = "internal.addFormInteractionListener";
  function dw(a, b) {}
  dw.P = "internal.addFormSubmitListener";
  function iw(a) {}
  iw.P = "internal.addGaSendListener";
  var jw = {},
    kw = [];
  var rw = function (a, b) {};
  rw.P = "internal.addHistoryChangeListener";
  function sw(a, b, c) {}
  sw.R = "addWindowEventListener";
  function tw(a, b) {
    return !0;
  }
  tw.R = "aliasInWindow";
  function uw(a, b, c) {}
  uw.P = "internal.appendRemoteConfigParameter";
  function vw() {
    var a = 2;
    return a;
  }
  function ww(a, b) {
    var c;
    L(F(this), ["path:!string"], [a]);
    M(this, "access_globals", "execute", a);
    for (
      var d = a.split("."), e = m, f = e[d[0]], g = 1;
      f && g < d.length;
      g++
    )
      if (((e = f), (f = f[d[g]]), e === m || e === G)) return;
    if ("function" !== Ac(f)) return;
    for (var h = vw(), l = [], n = 1; n < arguments.length; n++)
      l.push(Ec(arguments[n], this.h, h));
    var p = (0, this.h.I)(f, e, l);
    c = Dc(p, this.h, h);
    void 0 === c && void 0 !== p && P(45);
    return c;
  }
  ww.R = "callInWindow";
  function xw(a) {}
  xw.R = "callLater";
  function yw(a) {}
  yw.P = "callOnDomReady";
  function zw(a) {}
  zw.P = "callOnWindowLoad";
  function Aw(a) {
    var b;
    return b;
  }
  Aw.P = "internal.computeGtmParameter";
  function Bw(a, b) {
    var c;
    var d = Dc(c, this.h, vw());
    void 0 === d && void 0 !== c && P(45);
    return d;
  }
  Bw.R = "copyFromDataLayer";
  function Cw(a) {
    var b;
    L(F(this), ["path:!string"], arguments);
    M(this, "access_globals", "read", a);
    var c = a.split("."),
      d = ab(c, [m, G]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = Dc(e, this.h, vw());
    void 0 === b && void 0 !== e && P(45);
    return b;
  }
  Cw.R = "copyFromWindow";
  function Dw(a, b) {
    var c;
    return c;
  }
  Dw.P = "internal.copyPreHit";
  function Ew(a, b) {
    var c = null,
      d = vw();
    L(F(this), ["functionPath:!string", "arrayPath:!string"], arguments);
    M(this, "access_globals", "readwrite", a);
    M(this, "access_globals", "readwrite", b);
    var e = [m, G],
      f = a.split("."),
      g = ab(f, e),
      h = f[f.length - 1];
    if (void 0 === g) throw Error("Path " + a + " does not exist.");
    var l = g[h];
    if (l && !Ca(l)) return null;
    if (l) return Dc(l, this.h, d);
    var n;
    l = function () {
      if (!Ca(n.push))
        throw Error("Object at " + b + " in window is not an array.");
      n.push.call(n, arguments);
    };
    g[h] = l;
    var p = b.split("."),
      q = ab(p, e),
      r = p[p.length - 1];
    if (void 0 === q) throw Error("Path " + p + " does not exist.");
    n = q[r];
    void 0 === n && ((n = []), (q[r] = n));
    c = function () {
      l.apply(l, Array.prototype.slice.call(arguments, 0));
    };
    return Dc(c, this.h, d);
  }
  Ew.R = "createArgumentsQueue";
  function Fw(a) {
    var b;
    L(F(this), ["path:!string"], arguments);
    M(this, "access_globals", "readwrite", a);
    var c = a.split("."),
      d = ab(c, [m, G]),
      e = c[c.length - 1];
    if (void 0 === d) throw Error("Path " + a + " does not exist.");
    var f = d[e];
    void 0 === f && ((f = []), (d[e] = f));
    b = function () {
      if (!Ca(f.push))
        throw Error("Object at " + a + " in window is not an array.");
      f.push.apply(f, Array.prototype.slice.call(arguments, 0));
    };
    return Dc(b, this.h, vw());
  }
  Fw.R = "createQueue";
  var Gw = {},
    Hw = [],
    Iw = {},
    Jw = 0,
    Kw = 0;
  function Qw(a, b) {
    var c = this;
    return b;
  }
  Qw.P = "internal.enableAutoEventOnFormInteraction";
  function Vw(a, b) {
    var c = this;
    return b;
  }
  Vw.P = "internal.enableAutoEventOnFormSubmit";
  function $w() {
    var a = this;
  }
  $w.P = "internal.enableAutoEventOnGaSend";
  var ax = {},
    bx = [];
  function ix(a, b) {
    var c = this;
    return b;
  }
  ix.P = "internal.enableAutoEventOnHistoryChange";
  function mx(a, b) {
    var c = this;
    return b;
  }
  mx.P = "internal.enableAutoEventOnLinkClick";
  var nx, ox;
  function xx(a, b) {
    var c = this;
    return b;
  }
  xx.P = "internal.enableAutoEventOnScroll";
  var Sb = da(["data-gtm-yt-inspected-"]),
    yx = ["www.youtube.com", "www.youtube-nocookie.com"],
    zx,
    Ax = !1;
  function Kx(a, b) {
    var c = this;
    return b;
  }
  Kx.P = "internal.enableAutoEventOnYouTubeActivity";
  function Lx(a, b) {
    var c = !1;
    return c;
  }
  Lx.P = "internal.evaluateBooleanExpression";
  var Qx;
  function Rx(a) {
    var b = !1;
    return b;
  }
  Rx.P = "internal.evaluateMatchingRules";
  function Yx(a, b) {
    var c = !1;
    return c;
  }
  Yx.P = "internal.evaluatePredicates";
  var Zx = function (a) {
    var b;
    return b;
  };
  function $x(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  $x.R = "getCookieValues";
  function ay() {
    return Ri.Kf;
  }
  ay.P = "internal.getCountryCode";
  function by() {
    var a = [];
    return Dc(a);
  }
  by.P = "internal.getDestinationIds";
  function cy(a) {
    var b = null;
    return b;
  }
  cy.R = "getElementById";
  var dy = {};
  dy.enableAdsHistoryChangeEvents = K(36);
  dy.enableAlwaysSendFormStart = K(38);
  dy.enableCcdEnhancedMeasurement = K(41);
  dy.enableCcdEventBlocking = K(40);
  dy.enableCcdEventEditingAndCreation = K(26);
  dy.enableCcdGaConversions = K(39);
  dy.enableCcdPreAutoPiiDetection = K(49);
  dy.enableCcdUserData = K(16);
  dy.enableEesPagePath = K(43);
  dy.enableEmFormCcd = K(35);
  dy.enableEmFormCcdPart2 = K(31) || K(33);
  dy.enableEuidAutoMode = K(37);
  dy.enableGa4OnoRemarketing = K(34);
  dy.enableSendGtagEventId = K(44);
  dy.autoPiiEligible = !0;
  function ey() {
    return Dc(dy);
  }
  ey.P = "internal.getFlags";
  function fy(a, b) {
    var c;
    return c;
  }
  fy.P = "internal.getProductSettingsParameter";
  function gy(a, b) {
    var c;
    return c;
  }
  gy.R = "getQueryParameters";
  function hy(a, b) {
    var c;
    return c;
  }
  hy.R = "getReferrerQueryParameters";
  function iy(a) {
    var b = "";
    return b;
  }
  iy.R = "getReferrerUrl";
  function jy() {
    return Ri.gi;
  }
  jy.P = "internal.getRegionCode";
  function ky(a, b) {
    var c;
    return c;
  }
  ky.P = "internal.getRemoteConfigParameter";
  function ly(a) {
    var b = "";
    L(F(this), ["component:?string"], arguments),
      M(this, "get_url", a),
      (b = ii(ki(m.location.href), a));
    return b;
  }
  ly.R = "getUrl";
  function my() {
    M(this, "get_user_agent");
    return m.navigator.userAgent;
  }
  my.R = "getUserAgent";
  function ny(a) {
    if (!a) return {};
    var b = a.Mj;
    return mr(b.type, b.index, b.name);
  }
  function oy(a) {
    return a ? { originatingEntity: ny(a) } : {};
  }
  function qy(a, b) {}
  qy.R = "gtagSet";
  function ry(a, b) {}
  ry.R = "injectHiddenIframe";
  var sy = {};
  var ty = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          ac(
            a,
            function () {
              for (var g = e[f][0], h = 0; h < g.length; h++) H(g[h]);
              g.push = function (l) {
                H(l);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], h = 0; h < g.length; h++) H(g[h]);
              e[f] = null;
            },
            b
          ))
      : ac(a, c, d, b);
  };
  function uy(a, b, c, d) {
    if (!Yj()) {
      L(
        F(this),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      M(this, "inject_script", a);
      var e = this.h;
      ty(
        a,
        void 0,
        function () {
          b && b.B(e);
        },
        function () {
          c && c.B(e);
        },
        sy,
        d
      );
    }
  }
  var vy = Object.freeze({ dl: 1, id: 1 }),
    wy = {};
  function xy(a, b, c, d) {}
  uy.R = "injectScript";
  xy.P = "internal.injectScript";
  function yy(a) {
    var b = !0;
    return b;
  }
  yy.R = "isConsentGranted";
  var zy = function () {
    var a = ag(function (b) {
      this.h.h.log("error", b);
    });
    a.R = "JSON";
    return a;
  };
  var Ay = function () {
      return !1;
    },
    By = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {},
    };
  var Cy = ["textContent", "value", "tagName", "children", "childElementCount"];
  function Dy(a) {
    var b;
    return b;
  }
  Dy.P = "internal.locateUserData";
  function Fy() {}
  Fy.R = "logToConsole";
  function Gy(a) {
    var b = void 0;
    return b;
  }
  Gy.R = "parseUrl";
  function Hy(a) {}
  Hy.P = "internal.processAsNewEvent";
  function Iy(a, b) {
    var c = !1;
    return c;
  }
  Iy.R = "queryPermission";
  function Jy() {
    var a = "";
    return a;
  }
  Jy.R = "readCharacterSet";
  function Ky() {
    var a = "";
    return a;
  }
  Ky.R = "readTitle";
  function Ly(a, b) {
    var c = this;
  }
  Ly.P = "internal.registerCcdCallback";
  var My = Object.freeze(["config", "event", "get", "set"]);
  function Ny(a, b, c) {}
  Ny.P = "internal.registerGtagCommandListener";
  function Oy(a, b) {
    var c = !1;
    return c;
  }
  Oy.P = "internal.removeDataLayerEventListener";
  function Py() {}
  Py.R = "resetDataLayer";
  function bz() {
    return (m.gaGlobal = m.gaGlobal || {});
  }
  var cz = function () {
      var a = bz();
      a.hid = a.hid || Ja();
      return a.hid;
    },
    dz = function (a, b) {
      var c = bz();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var Az = function () {
      var a = !0;
      (Xk(7) && Xk(9) && Xk(10)) || (a = !1);
      return a;
    },
    Bz = function () {
      var a = !0;
      (Xk(3) && Xk(4)) || (a = !1);
      return a;
    };
  var dA = window,
    eA = document,
    fA = function (a) {
      var b = dA._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === dA["ga-disable-" + a]))
        return !0;
      try {
        var c = dA.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = zj("AMP_TOKEN", String(eA.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return eA.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function nA(a) {
    Ma(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[S.g.Ta] || {};
    Ma(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var wA = function (a, b) {};
  function vA(a, b) {
    var c = function () {};
    return c;
  }
  function xA(a, b, c) {}
  var yA = function (a, b) {
      var c;
      c = b
        ? [fq, gq, iq, Tp, Xp, kq, Yp, jq, dq, Up, nq, Zp, hq, Rp, lq, Op]
        : [Sp, Jp, Vp, Kp, Lp, Mp, Np, $p, aq, cq, eq, Wp, bq, Qp, mq];
      for (var d = 0; d < c.length && (c[d](a), !a.K); d++);
    },
    zA = function (a, b, c, d) {
      var e = new Xm(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Ta();
      return e;
    },
    AA = function (a) {
      var b = a.indexOf("/"),
        c = 3 <= b,
        d = a.substring(3, c ? b : a.length);
      return {
        id: a,
        prefix: "AW",
        V: "AW-" + d,
        M: [d, c ? a.substring(b + 1) : void 0],
      };
    },
    BA = function (a, b, c, d) {
      function e() {
        for (var q = 0; q < g.length; q++) {
          var r = g[q];
          r.K || (yA(g[q], !0), r.metadata.speculative || r.K || Fq(r));
        }
      }
      var f = Hm(a);
      !f && d.H && (f = AA(a));
      if (f) {
        var g = [];
        if (d.eventMetadata.hit_type_override) {
          var h = d.eventMetadata.hit_type_override;
          Array.isArray(h) || (h = [h]);
          for (var l = 0; l < h.length; l++) {
            var n = zA(h[l], f, b, d);
            n.metadata.speculative = !1;
            g.push(n);
          }
        } else
          b === S.g.Da && g.push(zA("landing_page", f, b, d)),
            g.push(zA("conversion", f, b, d)),
            g.push(zA("user_data_lead", f, b, d)),
            g.push(zA("user_data_web", f, b, d)),
            g.push(zA("remarketing", f, b, d));
        for (var p = 0; p < g.length; p++) yA(g[p], !1);
        kj(
          function () {
            for (var q = [], r = [], u = 0; u < g.length; u++) {
              var t = g[u];
              q.push(t.K);
              r.push(t.metadata.speculative);
            }
            e();
            dj(S.g.J) ||
              lj(
                function (v) {
                  for (
                    var w = v.consentEventId, x = v.consentPriorityId, y = 0;
                    y < g.length;
                    y++
                  ) {
                    var A = g[y];
                    A.metadata.consent_updated = !0;
                    A.metadata.speculative = r[y];
                    A.metadata.event_start_timestamp_ms = Ta();
                    A.K = q[y];
                    A.metadata.consent_event_id = w;
                    A.metadata.consent_priority_id = x;
                  }
                  e();
                },
                [S.g.J]
              );
          },
          [S.g.J]
        );
      }
    };
  var DA = function () {
      var a = dh.floc;
      if (a) {
        var b = a.ts,
          c = a.floc;
        if (b && c && 1e3 > Ta() - b) return Promise.resolve(c);
      }
      try {
        return Promise.race([
          G.interestCohort().then(function (d) {
            dh.floc = { ts: Ta(), floc: d };
            return d;
          }),
          new Promise(function (d) {
            m.setTimeout(function () {
              return d();
            }, CA);
          }),
        ]).catch(function () {});
      } catch (d) {}
    },
    FA = function () {
      if (!m.Promise) return !1;
      Ca(G.interestCohort) ||
        EA ||
        ((EA = !0),
        wk(
          "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ));
      return Ca(G.interestCohort);
    },
    CA = Number("200"),
    EA = !1;
  var GA = function (a, b, c, d, e) {
      if (!b && !a.h && !a.H && Fi(Ei(a.D))) {
        var f = a.O(S.g.ka);
        if (null !== f) {
          var g;
          f && Cc(f) ? (g = f) : (g = Gi(Ei(a.D)));
          g && Kq(a.T, g, { Cb: e, uc: c }, void 0, d);
        }
      }
    },
    HA = function (a, b) {},
    IA = function (a, b) {
      a.Ga("google_gtm_url_processor", function (c) {
        K(6) && a.I && Do(a.D.eventId, "P", Ta() - a.Ca);
        b && (c = oq(c));
        return c;
      });
    },
    JA = function (a, b) {
      a.Nb("gdpr_consent", Vk());
      a.Nb("gdpr", Wk());
      gj() &&
        a.h &&
        (a.ba("gcs", uj()),
        hj() && a.ba("gcd", "G1" + oj(ej)),
        b && a.ba("gcu", "1"));
    },
    KA = function (a, b) {
      if (b || ui(a.T)) {
        var c = Ta(),
          d = Ai({ Ob: !0, Pb: !0, qg: !0 });
        if (0 !== d.elements.length) {
          for (var e = [], f = 0; f < d.elements.length; ++f) {
            var g = d.elements[f];
            e.push(g.querySelector + "*" + Bi(g) + "*" + g.type);
          }
          a.ba("ec_m", e.join("~"));
          var h = d.Ne;
          h && (a.ba("ec_sel", h.querySelector), a.ba("ec_meta", Bi(h)));
          a.ba("ec_lat", String(Ta() - c));
          a.ba("ec_s", d.status);
        }
      }
    },
    LA = function (a) {
      if (!a.h)
        a.O(S.g.ia) && a.Ga("google_gtag_event_data", { items: a.O(S.g.ia) });
      else if (a.eventName == S.g.Ja) {
        a.gd({
          google_conversion_merchant_id: a.O(S.g.Nc),
          google_basket_feed_country: a.O(S.g.Lc),
          google_basket_feed_language: a.O(S.g.Mc),
          google_basket_discount: a.O(S.g.Kc),
          google_basket_transaction_type: a.eventName,
          google_disable_merchant_reported_conversions: !0 === a.O(S.g.Ig),
        });
        Yj() && a.Ga("google_disable_merchant_reported_conversions", !0);
        var b;
        var c = a.O(S.g.ia);
        if (c) {
          for (var d = [], e = 0; e < c.length; ++e) {
            var f = c[e];
            f &&
              d.push({
                item_id: f.id,
                quantity: f.quantity,
                value: f.price,
                start_date: f.start_date,
                end_date: f.end_date,
              });
          }
          b = d;
        } else b = void 0;
        var g = b;
        g && a.Ga("google_conversion_items", g);
      }
    },
    MA = function (a) {
      var b;
      var c = {};
      a.H
        ? !a.h && a.eventName && (c.event = a.eventName)
        : (c.event = a.eventName);
      var d = a.D.h;
      if (d) {
        I(d, c);
        for (var e in c)
          c.hasOwnProperty(e) && bh[e.split(".")[0]] && delete c[e];
        b = c;
      } else b = null;
      var f = b;
      f && a.Ga("google_custom_params", f);
    },
    NA = function (a) {
      Yj() &&
        (a.Ga("opt_image_generator", function () {
          return new Image();
        }),
        a.Ga("google_enable_display_cookie_match", !1));
    },
    OA = function (a) {
      var b = Ii();
      b && a.md("apcm");
      b || a.md("capi");
      if (!a.H) {
        var c = Qi();
        0 === c ? a.Nb("dg", "c") : 1 === c && a.Nb("dg", "e");
      }
    },
    PA = function (a) {
      a.gd({
        onload_callback: function () {
          K(6) && a.I && Do(a.D.eventId, "C", Ta() - a.Ca);
          a.D.X();
        },
        gtm_onFailure: a.D.W,
      });
    },
    RA = function (a, b, c, d, e) {
      var f = a.O(S.g.Hb),
        g = a.O(S.g.za) || {},
        h = a.O(S.g.qb);
      Xo({ Jf: b, Ph: f, cg: g, ug: h }, c);
      Wm(a.da, a.D);
      var l = {
        Be: !1,
        uc: d,
        da: a.da,
        eventId: a.D.eventId,
        priorityId: a.D.priorityId,
        Cb: b ? c : void 0,
        yd: b,
        ld: "",
      };
      QA ? (l.ld = void 0) : (l.ld = e.Sh || "");
      l.Ke = e.Ie;
      l.Fe = e.Ee;
      Em(l);
    },
    SA = function (a, b) {
      var c = Nq(a, "/pagead/conversion_async.js");
      if (c) return c;
      var d = Lm("https://", "http://", "www.googleadservices.com"),
        e = !b.H && 1 === Qi();
      if (Mi() || e) d = "https://www.google.com";
      return d + "/pagead/conversion_async.js";
    },
    TA = !1,
    QA = !1;
  var UA = [],
    VA = !1,
    WA = function (a) {
      var b = m.google_trackConversion,
        c = a.B.gtm_onFailure;
      "function" == typeof b ? b(a.B) || c() : c();
    },
    XA = function () {
      for (; 0 < UA.length; ) WA(UA.shift());
    },
    YA = function (a) {
      if (!TA) {
        TA = VA = !0;
        ur();
        var b = function () {
          VA = !1;
          XA();
          UA = { push: WA };
        };
        Yj()
          ? b()
          : ac(a, b, function () {
              XA();
              TA = !1;
            });
      }
    },
    ZA = function (a, b, c) {
      var d = Hm(a);
      !d && c.H && (d = this.zk(a));
      this.da = a;
      this.T = d.M[0] || "";
      this.F = d.M[1];
      this.h = void 0 !== this.F;
      this.eventName = b;
      this.H = c.H;
      this.D = c;
      this.B = {
        google_conversion_id: this.T,
        google_conversion_label: this.F,
        google_conversion_format: "3",
        google_conversion_color: "ffffff",
        google_conversion_domain: "",
        google_gtm: kk(),
      };
      K(6) && ((this.Ca = Ta()), (this.I = !1));
    };
  ba = ZA.prototype;
  ba.zk = function (a) {
    var b = a.indexOf("/"),
      c = 3 <= b,
      d = a.substring(3, c ? b : a.length);
    return {
      id: a,
      prefix: "AW",
      V: "AW-" + d,
      M: [d, c ? a.substring(b + 1) : void 0],
    };
  };
  ba.Ga = function (a, b) {
    this.B[a] = b;
  };
  ba.Jk = function () {
    delete this.B.google_transport_url;
  };
  ba.gd = function (a) {
    for (var b in a) a.hasOwnProperty(b) && (this.B[b] = a[b]);
  };
  ba.ba = function (a, b) {
    void 0 != b &&
      "" !== b &&
      ((this.B.google_additional_conversion_params =
        this.B.google_additional_conversion_params || {}),
      (this.B.google_additional_conversion_params[a] = b));
  };
  ba.Nb = function (a, b) {
    void 0 != b &&
      "" !== b &&
      ((this.B.google_additional_params =
        this.B.google_additional_params || {}),
      (this.B.google_additional_params[a] = b));
  };
  ba.md = function (a) {
    this.B.google_gtm_experiments = this.B.google_gtm_experiments || {};
    this.B.google_gtm_experiments[a] = !0;
  };
  ba.O = function (a) {
    return T(this.D, a);
  };
  var aB = function (a, b, c, d) {
    function e(D, N) {
      function Q() {
        K(6) &&
          ((D.I = Co(D.D.eventId, VA ? 1 : 2)),
          D.I && Do(D.D.eventId, "S", Ta() - D.Ca));
        UA.push(D);
      }
      var V = [];
      if (N) {
        l &&
          (K(3)
            ? D.h && (fl(A), D.ba("auid", cl(n)))
            : (fl(A, D.h), D.Nb("auid", cl(n))));
        K(9) && $A(D);
        var O = (g(S.g.Vc) || {})[D.F];
        KA(D, Ji(O));
        var ia = !0 === g(S.g.Ic) || O;
        if (D.h && ia) {
          var aa = Li(O, D.O(S.g.ka));
          aa &&
            V.push(
              aa.then(function (W) {
                D.ba("em", W.Cd);
                D.ba("ec_mode", W.xc);
              })
            );
        }
      }
      if (V.length)
        try {
          Promise.all(V).then(function () {
            Q();
          });
          return;
        } catch (W) {}
      Q();
    }
    var f = new ZA(a, b, d),
      g = function (D) {
        return T(d, D);
      },
      h = void 0 != g(S.g.na) && !1 !== g(S.g.na),
      l = !1 !== g(S.g.ya),
      n = g(S.g.La) || g(S.g.Za),
      p = g(S.g.nb),
      q = g(S.g.Pa),
      r = g(S.g.ob),
      u = {};
    if (!QA) {
      var t = Io(d, S.g.ja);
      u.Sh = db(Cc(t) ? t : {});
    }
    var v = Io(d, S.g.ja, 1),
      w = Io(d, S.g.ja, 2);
    u.Ie = db(Cc(v) ? v : {}, ".");
    u.Ee = db(Cc(w) ? w : {}, ".");
    var x = g(S.g.wa),
      y = SA(x, f);
    YA(y);
    var A = { prefix: n, domain: p, hb: q, flags: r },
      B = b == S.g.Da;
    B && !d.H && RA(f, l, A, h, u);
    if (b !== S.g.Ka || d.H) {
      var C = !1 === g(S.g.kb) || !1 === g(S.g.Fa);
      if (!B || (!f.h && !C))
        if ((!0 === g(S.g.Ud) && (f.h = !1), !1 !== g(S.g.fa) || f.h))
          f.gd({
            google_remarketing_only: !f.h,
            google_conversion_language: f.O(S.g.Qa),
            google_conversion_value: f.O(S.g.ra),
            google_conversion_currency: f.O(S.g.va),
            google_conversion_order_id: f.O(S.g.Ma),
            google_user_id: f.O(S.g.Aa),
            google_conversion_page_url: f.O(S.g.Ra),
            google_conversion_referrer_url: f.O(S.g.Sa),
          }),
            PA(f),
            f.h && f.D.eventMetadata.is_external_event && f.ba("gtm_ee", "1"),
            OA(f),
            f.h && f.Ga("google_transport_url", Mq(f.O(S.g.wa), "/")),
            f.Ga("google_restricted_data_processing", f.O(S.g.zb)),
            NA(f),
            !1 === f.O(S.g.fa) &&
              f.Ga("google_allow_ad_personalization_signals", !1),
            l
              ? f.gd({
                  google_gcl_cookie_prefix: A.prefix,
                  google_gcl_cookie_domain: A.domain,
                  google_gcl_cookie_max_age_seconds: A.hb,
                  google_gcl_cookie_flags: A.flags,
                })
              : f.Ga("google_read_gcl_cookie_opt_out", !0),
            MA(f),
            LA(f),
            "1" === Ol(!1)._up && f.ba("gtm_up", "1"),
            f.h && (f.ba("vdnc", f.O(S.g.kc)), f.ba("vdltv", f.O(S.g.Rc))),
            JA(f),
            f.h &&
              (f.ba("delopc", f.O(S.g.nc)),
              f.ba("oedeld", f.O(S.g.Wc)),
              f.ba("delc", f.O(S.g.bc)),
              f.ba("shf", f.O(S.g.Tc)),
              f.ba("iedeld", Ni(f.O(S.g.ia)))),
            QA || f.ba("did", u.Sh),
            f.ba("gdid", u.Ie),
            f.ba("edid", u.Ee),
            IA(f, h),
            HA(f, A),
            GA(f, B, h, u, A),
            gj()
              ? xj(
                  function () {
                    JA(f);
                    var D = tj(S.g.J);
                    if (f.h)
                      D ||
                        x ||
                        f.Ga(
                          "google_transport_url",
                          "https://pagead2.googlesyndication.com/"
                        ),
                        e(f, D);
                    else if (D) {
                      e(f, D);
                      return;
                    }
                    D ||
                      wj(function () {
                        var N = new ZA(a, f.eventName, d);
                        N.h = f.h;
                        N.gd(I(f.B));
                        IA(N, h);
                        !x && N.B.google_transport_url && N.Jk();
                        JA(N, !0);
                        e(N, !0);
                      }, S.g.J);
                  },
                  [S.g.J]
                )
              : e(f, !0);
    } else {
      var E = {};
      E.callback = f.O(S.g.pb);
      var J = f.O(S.g.ab);
      E.vg = J;
      E.eg = f.O(String(J));
      Yo(E, A, h, on);
    }
  };
  var $A = function (a) {
    qp() &&
      !1 !== a.O(S.g.Ea) &&
      !1 !== a.O(S.g.fa) &&
      !1 !== a.O(S.g.kb) &&
      !1 !== a.O(S.g.Fa) &&
      a.md("fledge");
  };
  var CB = function (a, b) {
      if (!b.H) {
        var c = T(b, S.g.ab),
          d = T(b, S.g.pb),
          e = T(b, c);
        if (void 0 === e) {
          var f = void 0;
          zB.hasOwnProperty(c)
            ? (f = zB[c])
            : AB.hasOwnProperty(c) && (f = AB[c]);
          1 === f && (f = BB(c));
          k(f)
            ? zr()(function () {
                var g = zr().getByName(a).get(f);
                d(g);
              })
            : d(void 0);
        } else d(e);
      }
    },
    DB = function (a, b) {
      var c = a[S.g.Yc],
        d = b + ".",
        e = a[S.g.aa] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[S.g.jc];
      e = String(e).replace(/\s+/g, "").split(",");
      var h = zr();
      h(d + "require", "linker");
      h(d + "linker:autoLink", e, f, g);
    },
    HB = function (a, b, c) {
      if (gj() && (!c.H || !EB[a])) {
        var d = !tj(S.g.Z),
          e = function (f) {
            var g,
              h,
              l = zr(),
              n = FB(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.H || GB(b, n.createOnlyFields)) {
              c.H &&
                ((g = "gtm" + yh()),
                (h = n.createOnlyFields),
                n.gtmTrackerName && (h.name = g));
              l(function () {
                var u = l.getByName(b);
                u && (p = u.get("clientId"));
                c.H || l.remove(b);
              });
              l("create", a, c.H ? h : n.createOnlyFields);
              d &&
                tj(S.g.Z) &&
                ((d = !1),
                l(function () {
                  var u = zr().getByName(c.H ? g : b);
                  !u ||
                    (u.get("clientId") == p && q) ||
                    (c.H
                      ? ((n.fieldsToSet["&gcu"] = "1"),
                        (n.fieldsToSet["&gcut"] = $g[f]))
                      : ((n.fieldsToSend["&gcu"] = "1"),
                        (n.fieldsToSend["&gcut"] = $g[f])),
                    u.set(n.fieldsToSet),
                    c.H
                      ? u.send("pageview")
                      : u.send("pageview", n.fieldsToSend));
                }));
              c.H &&
                l(function () {
                  l.remove(g);
                });
            }
          };
        wj(function () {
          return e(S.g.Z);
        }, S.g.Z);
        wj(function () {
          return e(S.g.J);
        }, S.g.J);
        c.H && (EB[a] = !0);
      }
    },
    IB = function (a, b) {
      Oq() && b && (a[S.g.Ib] = b);
    },
    RB = function (a, b, c) {
      function d() {
        var D = T(c, S.g.Sc);
        h(function () {
          if (!c.H && Cc(D)) {
            var N = t.fieldsToSend,
              Q = l().getByName(n),
              V;
            for (V in D)
              if (
                D.hasOwnProperty(V) &&
                /^(dimension|metric)\d+$/.test(V) &&
                void 0 != D[V]
              ) {
                var qa = Q.get(BB(D[V]));
                JB(N, V, qa);
              }
          }
        });
      }
      function e() {
        if (t.displayfeatures) {
          var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, { cookieName: D });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        h = c.H ? Br(T(c, "gaFunctionName")) : Br();
      if (Ca(h)) {
        var l = zr,
          n;
        c.H
          ? (n = T(c, "name") || T(c, "gtmTrackerName"))
          : (n = "gtag_" + f.split("-").join("_"));
        var p = function (D) {
            var N = [].slice.call(arguments, 0);
            N[0] = n ? n + "." + N[0] : "" + N[0];
            h.apply(window, N);
          },
          q = function (D) {
            var N = function (ia, aa) {
                for (var W = 0; aa && W < aa.length; W++) p(ia, aa[W]);
              },
              Q = c.H,
              V = Q ? KB(t) : LB(b, c);
            if (V) {
              var qa = {};
              IB(qa, D);
              p("require", "ec", "ec.js", qa);
              Q && V.Lf && p("set", "&cu", V.Lf);
              var R = V.action;
              if (Q || "impressions" === R)
                if ((N("ec:addImpression", V.Xh), !Q)) return;
              if ("promo_click" === R || "promo_view" === R || (Q && V.Fd)) {
                var O = V.Fd;
                N("ec:addPromo", O);
                if (O && 0 < O.length && "promo_click" === R) {
                  Q ? p("ec:setAction", R, V.eb) : p("ec:setAction", R);
                  return;
                }
                if (!Q) return;
              }
              "promo_view" !== R &&
                "impressions" !== R &&
                (N("ec:addProduct", V.Rb), p("ec:setAction", R, V.eb));
            }
          },
          r = function (D) {
            if (D) {
              var N = {};
              if (Cc(D))
                for (var Q in MB) MB.hasOwnProperty(Q) && NB(MB[Q], Q, D[Q], N);
              IB(N, x);
              p("require", "linkid", N);
            }
          },
          u = function () {
            if (Yj()) {
            } else {
              var D = T(c, S.g.Wi);
              D &&
                (p("require", D, { dataLayer: ch.ma }), p("require", "render"));
            }
          },
          t = FB(n, b, c),
          v = function (D, N, Q) {
            Q && (N = "" + N);
            t.fieldsToSend[D] = N;
          };
        !c.H &&
          GB(n, t.createOnlyFields) &&
          (h(function () {
            l() && l().remove(n);
          }),
          (OB[n] = !1));
        h("create", f, t.createOnlyFields);
        if (t.createOnlyFields[S.g.Ib] && !c.H) {
          var w = Nq(t.createOnlyFields[S.g.Ib], "/analytics.js");
          w && (g = w);
        }
        var x = c.H ? t.fieldsToSet[S.g.Ib] : t.createOnlyFields[S.g.Ib];
        if (x) {
          var y = c.H ? t.fieldsToSet[S.g.fe] : t.createOnlyFields[S.g.fe];
          y && !OB[n] && ((OB[n] = !0), h(Fr(n, y)));
        }
        c.H
          ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
          : (d(), r(t.linkAttribution));
        var A = t[S.g.za];
        A && A[S.g.aa] && DB(A, n);
        p("set", t.fieldsToSet);
        if (c.H) {
          if (t.enableLinkId) {
            var B = {};
            IB(B, x);
            p("require", "linkid", "linkid.js", B);
          }
          gj() && HB(f, n, c);
        }
        if (b === S.g.Hc)
          if (c.H) {
            e();
            if (t.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", { cookieName: C });
            }
            q(x);
            p("send", "pageview");
            t.createOnlyFields._useUp && Cr(n + ".");
          } else u(), p("send", "pageview", t.fieldsToSend);
        else
          b === S.g.Da
            ? (u(),
              Wm(f, c),
              T(c, S.g.qb) && (wm(["aw", "dc"]), Cr(n + ".")),
              0 != t.sendPageView && p("send", "pageview", t.fieldsToSend),
              HB(f, n, c))
            : b === S.g.Ka
            ? CB(n, c)
            : "screen_view" === b
            ? p("send", "screenview", t.fieldsToSend)
            : "timing_complete" === b
            ? ((t.fieldsToSend.hitType = "timing"),
              v("timingCategory", t.eventCategory, !0),
              c.H
                ? v("timingVar", t.timingVar, !0)
                : v("timingVar", t.name, !0),
              v("timingValue", Oa(t.value)),
              void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0),
              p("send", t.fieldsToSend))
            : "exception" === b
            ? p("send", "exception", t.fieldsToSend)
            : ("" === b && c.H) ||
              ("track_social" === b && c.H
                ? ((t.fieldsToSend.hitType = "social"),
                  v("socialNetwork", t.socialNetwork, !0),
                  v("socialAction", t.socialAction, !0),
                  v("socialTarget", t.socialTarget, !0))
                : ((c.H || PB[b]) && q(x),
                  c.H && e(),
                  (t.fieldsToSend.hitType = "event"),
                  v("eventCategory", t.eventCategory, !0),
                  v("eventAction", t.eventAction || b, !0),
                  void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0),
                  void 0 !== t.value && v("eventValue", Oa(t.value))),
              p("send", t.fieldsToSend));
        if (!QB && !c.H) {
          QB = !0;
          ur();
          var E = function () {
              c.W();
            },
            J = function () {
              l().loaded || E();
            };
          Yj() ? H(J) : ac(g, J, E);
        }
      } else H(c.W);
    },
    SB = function (a, b, c, d) {
      xj(
        function () {
          RB(a, b, d);
        },
        [S.g.Z, S.g.J]
      );
    },
    VB = function (a, b) {
      function c(f) {
        function g(n, p) {
          for (var q = 0; q < p.length; q++) {
            var r = p[q];
            if (f[r]) {
              l[n] = f[r];
              break;
            }
          }
        }
        function h() {
          if (f.category) l.category = f.category;
          else {
            for (var n = "", p = 0; p < TB.length; p++)
              void 0 !== f[TB[p]] && (n && (n += "/"), (n += f[TB[p]]));
            n && (l.category = n);
          }
        }
        var l = I(f);
        if (UB || b)
          g("id", ["id", "item_id", "promotion_id"]),
            g("name", ["name", "item_name", "promotion_name"]),
            g("brand", ["brand", "item_brand"]),
            g("variant", ["variant", "item_variant"]),
            g("list", ["list_name", "item_list_name"]),
            g("position", ["list_position", "creative_slot", "index"]),
            h();
        g("listPosition", ["list_position"]);
        g("creative", ["creative_name"]);
        g("list", ["list_name"]);
        g("position", ["list_position", "creative_slot"]);
        return l;
      }
      b = void 0 === b ? !1 : b;
      for (var d = [], e = 0; a && e < a.length; e++)
        a[e] && Cc(a[e]) && d.push(c(a[e]));
      return d.length ? d : void 0;
    },
    WB = function (a) {
      return tj(a);
    },
    XB = !1;
  var UB = !1;
  UB = !0;
  var QB,
    OB = {},
    EB = {},
    YB = {},
    zB = Object.freeze(
      ((YB.client_storage = "storage"),
      (YB.sample_rate = 1),
      (YB.site_speed_sample_rate = 1),
      (YB.store_gac = 1),
      (YB.use_amp_client_id = 1),
      (YB[S.g.xb] = 1),
      (YB[S.g.ya] = "storeGac"),
      (YB[S.g.nb] = 1),
      (YB[S.g.Pa] = 1),
      (YB[S.g.ob] = 1),
      (YB[S.g.Qc] = 1),
      (YB[S.g.af] = 1),
      (YB[S.g.Hb] = 1),
      YB)
    ),
    ZB = {},
    $B = Object.freeze(
      ((ZB._cs = 1),
      (ZB._useUp = 1),
      (ZB.allowAnchor = 1),
      (ZB.allowLinker = 1),
      (ZB.alwaysSendReferrer = 1),
      (ZB.clientId = 1),
      (ZB.cookieDomain = 1),
      (ZB.cookieExpires = 1),
      (ZB.cookieFlags = 1),
      (ZB.cookieName = 1),
      (ZB.cookiePath = 1),
      (ZB.cookieUpdate = 1),
      (ZB.legacyCookieDomain = 1),
      (ZB.legacyHistoryImport = 1),
      (ZB.name = 1),
      (ZB.sampleRate = 1),
      (ZB.siteSpeedSampleRate = 1),
      (ZB.storage = 1),
      (ZB.storeGac = 1),
      (ZB.useAmpClientId = 1),
      (ZB._cd2l = 1),
      ZB)
    ),
    aC = Object.freeze({ anonymize_ip: 1 }),
    bC = {},
    AB = Object.freeze(
      ((bC.campaign = {
        content: "campaignContent",
        id: "campaignId",
        medium: "campaignMedium",
        name: "campaignName",
        source: "campaignSource",
        term: "campaignKeyword",
      }),
      (bC.app_id = 1),
      (bC.app_installer_id = 1),
      (bC.app_name = 1),
      (bC.app_version = 1),
      (bC.description = "exDescription"),
      (bC.fatal = "exFatal"),
      (bC.language = 1),
      (bC.page_hostname = "hostname"),
      (bC.transport_type = "transport"),
      (bC[S.g.va] = "currencyCode"),
      (bC[S.g.bh] = 1),
      (bC[S.g.Ra] = "location"),
      (bC[S.g.jf] = "page"),
      (bC[S.g.Sa] = "referrer"),
      (bC[S.g.mc] = "title"),
      (bC[S.g.jh] = 1),
      (bC[S.g.Aa] = 1),
      bC)
    ),
    cC = {},
    dC = Object.freeze(
      ((cC.content_id = 1),
      (cC.event_action = 1),
      (cC.event_category = 1),
      (cC.event_label = 1),
      (cC.link_attribution = 1),
      (cC.name = 1),
      (cC[S.g.za] = 1),
      (cC[S.g.ah] = 1),
      (cC[S.g.Fa] = 1),
      (cC[S.g.ra] = 1),
      cC)
    ),
    eC = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1,
    }),
    TB = Object.freeze([
      "item_category",
      "item_category2",
      "item_category3",
      "item_category4",
      "item_category5",
    ]),
    fC = {},
    MB = Object.freeze(
      ((fC.levels = 1), (fC[S.g.Pa] = "duration"), (fC[S.g.Qc] = 1), fC)
    ),
    gC = {},
    hC = Object.freeze(
      ((gC.anonymize_ip = 1),
      (gC.fatal = 1),
      (gC.send_page_view = 1),
      (gC.store_gac = 1),
      (gC.use_amp_client_id = 1),
      (gC[S.g.ya] = 1),
      (gC[S.g.bh] = 1),
      gC)
    ),
    NB = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (hC[b] && (c = Pa(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[BB(b)] = c;
        else if (k(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    BB = function (a) {
      return a && k(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    iC = {},
    PB = Object.freeze(
      ((iC.checkout_progress = 1),
      (iC.select_content = 1),
      (iC.set_checkout_option = 1),
      (iC[S.g.Dc] = 1),
      (iC[S.g.Ec] = 1),
      (iC[S.g.Yb] = 1),
      (iC[S.g.Fc] = 1),
      (iC[S.g.Fb] = 1),
      (iC[S.g.Zb] = 1),
      (iC[S.g.Gb] = 1),
      (iC[S.g.Ja] = 1),
      (iC[S.g.Gc] = 1),
      (iC[S.g.Oa] = 1),
      iC)
    ),
    jC = {},
    kC = Object.freeze(
      ((jC.checkout_progress = 1),
      (jC.set_checkout_option = 1),
      (jC[S.g.Dg] = 1),
      (jC[S.g.Eg] = 1),
      (jC[S.g.Dc] = 1),
      (jC[S.g.Ec] = 1),
      (jC[S.g.Fg] = 1),
      (jC[S.g.Yb] = 1),
      (jC[S.g.Ja] = 1),
      (jC[S.g.Gc] = 1),
      (jC[S.g.Gg] = 1),
      jC)
    ),
    lC = {},
    mC = Object.freeze(
      ((lC.generate_lead = 1),
      (lC.login = 1),
      (lC.search = 1),
      (lC.select_content = 1),
      (lC.share = 1),
      (lC.sign_up = 1),
      (lC.view_search_results = 1),
      (lC[S.g.Fc] = 1),
      (lC[S.g.Fb] = 1),
      (lC[S.g.Zb] = 1),
      (lC[S.g.Gb] = 1),
      (lC[S.g.Oa] = 1),
      lC)
    ),
    nC = function (a) {
      var b = "general";
      kC[a]
        ? (b = "ecommerce")
        : mC[a]
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    oC = {},
    pC = Object.freeze(
      ((oC.view_search_results = 1),
      (oC[S.g.Fb] = 1),
      (oC[S.g.Gb] = 1),
      (oC[S.g.Oa] = 1),
      oC)
    ),
    JB = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    qC = function (a) {
      if (Ea(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    FB = function (a, b, c) {
      var d = function (N) {
          return T(c, N);
        },
        e = {},
        f = {},
        g = {},
        h = {},
        l = qC(d(S.g.Vi));
      !c.H && l && JB(f, "exp", l);
      g["&gtm"] = kk(!0);
      gj() && (h._cs = WB);
      var n = d(S.g.Sc);
      if (!c.H && Cc(n))
        for (var p in n)
          if (
            n.hasOwnProperty(p) &&
            /^(dimension|metric)\d+$/.test(p) &&
            void 0 != n[p]
          ) {
            var q = d(String(n[p]));
            void 0 !== q && JB(f, p, q);
          }
      for (var r = Ho(c), u = 0; u < r.length; ++u) {
        var t = r[u];
        if (c.H) {
          var v = d(t);
          eC.hasOwnProperty(t)
            ? (e[t] = v)
            : $B.hasOwnProperty(t)
            ? (h[t] = v)
            : (g[t] = v);
        } else {
          var w = void 0;
          w = t !== S.g.ja ? d(t) : Io(c, t);
          if (dC.hasOwnProperty(t)) NB(dC[t], t, w, e);
          else if (aC.hasOwnProperty(t)) NB(aC[t], t, w, g);
          else if (AB.hasOwnProperty(t)) NB(AB[t], t, w, f);
          else if (zB.hasOwnProperty(t)) NB(zB[t], t, w, h);
          else if (/^(dimension|metric|content_group)\d+$/.test(t))
            NB(1, t, w, f);
          else if (t === S.g.ja) {
            if (!XB) {
              var x = db(w);
              x && (f["&did"] = x);
            }
            var y = void 0,
              A = void 0;
            b === S.g.Da
              ? (y = db(Io(c, t), "."))
              : ((y = db(Io(c, t, 1), ".")), (A = db(Io(c, t, 2), ".")));
            y && (f["&gdid"] = y);
            A && (f["&edid"] = A);
          } else
            t === S.g.Za && 0 > r.indexOf(S.g.Qc) && (h.cookieName = w + "_ga");
        }
      }
      (!1 !== d(S.g.Li) && !1 !== d(S.g.Jc) && Az()) ||
        (g.allowAdFeatures = !1);
      (!1 !== d(S.g.fa) && Bz()) || (g.allowAdPersonalizationSignals = !1);
      !c.H && d(S.g.qb) && (h._useUp = !0);
      if (c.H) {
        h.name = h.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function () {
          Ca(B) && B();
          c.X();
        };
      } else {
        JB(h, "cookieDomain", "auto");
        JB(g, "forceSSL", !0);
        JB(e, "eventCategory", nC(b));
        pC[b] && JB(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b
          ? JB(e, "eventLabel", d(S.g.ah))
          : "search" === b || "view_search_results" === b
          ? JB(e, "eventLabel", d(S.g.cj))
          : "select_content" === b && JB(e, "eventLabel", d(S.g.Oi));
        var C = e[S.g.za] || {},
          E = C[S.g.ic];
        E || (0 != E && C[S.g.aa])
          ? (h.allowLinker = !0)
          : !1 === E && JB(h, "useAmpClientId", !1);
        f.hitCallback = c.X;
        h.name = a;
      }
      gj() &&
        ((g["&gcs"] = uj()),
        tj(S.g.Z) || (h.storage = "none"),
        tj(S.g.J) || ((g.allowAdFeatures = !1), (h.storeGac = !1)));
      var J = d(S.g.wa) || d(S.g.Ib),
        D = d(S.g.fe);
      J && (c.H || (h[S.g.Ib] = J), (h._cd2l = !0));
      D && !c.H && (h[S.g.fe] = D);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e;
    },
    KB = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Lf = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.Xh = "impressions" === b.translateIfKeyEquals ? VB(d, !0) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Fd = "promoView" === b.translateIfKeyEquals ? VB(e, !0) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Fd = "promoClick" === b.translateIfKeyEquals ? VB(f, !0) : f;
        c.eb = b.promoClick.actionField;
        return c;
      }
      for (var g in b)
        if (
          b.hasOwnProperty(g) &&
          "translateIfKeyEquals" !== g &&
          "impressions" !== g &&
          "promoView" !== g &&
          "promoClick" !== g &&
          "currencyCode" !== g
        ) {
          c.action = g;
          var h = b[g].products;
          c.Rb = "products" === b.translateIfKeyEquals ? VB(h, !0) : h;
          c.eb = b[g].actionField;
          break;
        }
      return Object.keys(c).length ? c : null;
    },
    LB = function (a, b) {
      function c(v) {
        return {
          id: d(S.g.Ma),
          affiliation: d(S.g.Si),
          revenue: d(S.g.ra),
          tax: d(S.g.Ng),
          shipping: d(S.g.Tc),
          coupon: d(S.g.Ti),
          list: e() || v,
        };
      }
      for (
        var d = function (v) {
            return T(b, v);
          },
          e = function () {
            var v;
            UB && (v = d(S.g.Lg));
            return d(S.g.Mg) || v;
          },
          f = d(S.g.ia),
          g,
          h = 0;
        f &&
        h < f.length &&
        ((g = f[h][S.g.Mg]), !g && UB && (g = f[h][S.g.Lg]), !g);
        h++
      );
      var l = d(S.g.Sc);
      if (Cc(l))
        for (var n = 0; f && n < f.length; ++n) {
          var p = f[n],
            q;
          for (q in l)
            l.hasOwnProperty(q) &&
              /^(dimension|metric)\d+$/.test(q) &&
              void 0 != l[q] &&
              JB(p, q, p[l[q]]);
        }
      var r = null,
        u = d(S.g.Ui);
      if (a === S.g.Ja || a === S.g.Gc) r = { action: a, eb: c(), Rb: VB(f) };
      else if (a === S.g.Dc) r = { action: "add", eb: c(), Rb: VB(f) };
      else if (a === S.g.Ec) r = { action: "remove", eb: c(), Rb: VB(f) };
      else if (a === S.g.Oa) r = { action: "detail", eb: c(g), Rb: VB(f) };
      else if (a === S.g.Fb) r = { action: "impressions", Xh: VB(f) };
      else if (a === S.g.Gb)
        r = { action: "promo_view", Fd: UB ? VB(u) || VB(f) : VB(u) };
      else if (
        ("select_content" === a && u && 0 < u.length) ||
        (UB && a === S.g.Zb)
      )
        r = { action: "promo_click", Fd: UB ? VB(u) || VB(f) : VB(u) };
      else if ("select_content" === a || (UB && a === S.g.Fc))
        r = { action: "click", eb: { list: e() || g }, Rb: VB(f) };
      else if (a === S.g.Yb || "checkout_progress" === a) {
        var t = { step: a === S.g.Yb ? 1 : d(S.g.Kg), option: d(S.g.Jg) };
        r = { action: "checkout", Rb: VB(f), eb: I(c(), t) };
      } else
        "set_checkout_option" === a &&
          (r = {
            action: "checkout_option",
            eb: { step: d(S.g.Kg), option: d(S.g.Jg) },
          });
      r && (r.Lf = d(S.g.va));
      return r;
    },
    rC = {},
    GB = function (a, b) {
      var c = rC[a];
      rC[a] = I(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var sC = vA;
  var tC = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  function uC(a, b, c, d) {}
  uC.P = "internal.sendGtagEvent";
  function vC(a, b, c) {
    L(F(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
    M(this, "send_pixel", a);
    var d = this.h;
    dc(
      a,
      function () {
        b instanceof fb && b.B(d);
      },
      function () {
        c instanceof fb && c.B(d);
      }
    );
  }
  vC.R = "sendPixel";
  function wC(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  wC.R = "setCookie";
  function xC(a) {
    L(F(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Lb(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e === S.g.Ue ||
        (K(17) && e === S.g.Ve) ||
        M(this, "access_consent", e, "write");
    }
    var f = this.h.h,
      g = f.eventId,
      h = oy(f),
      l = Qr("consent", "default", Ec(a));
    Wr(l, g, h);
  }
  xC.R = "setDefaultConsentState";
  function yC(a, b, c) {
    L(
      F(this),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    M(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = ab(d, [m, G]),
      f = d.pop();
    if (e && (void 0 === e[f] || c)) return (e[f] = Ec(b, this.h, vw())), !0;
    return !1;
  }
  yC.R = "setInWindow";
  function zC(a, b, c) {}
  zC.P = "internal.setProductSettingsParameter";
  function AC(a, b, c) {}
  AC.P = "internal.setRemoteConfigParameter";
  function BC(a, b, c, d) {
    var e = this;
    var f = function (t, v) {
        var w = new jb();
        w.set("name", t);
        w.set("message", v);
        return w;
      },
      g = function (t, v) {
        var w = new Uint8Array(t);
        if (2 === v) {
          for (var x = "", y = 0; y < w.length; y++) {
            var A = w[y].toString(16);
            x += 1 === A.length ? "0" + A : A;
          }
          return x;
        }
        for (var B = Array(w.length), C = 0; C < w.length; C++) B[C] = w[C];
        var E = B.map(function (J) {
          return String.fromCharCode(J);
        }).join("");
        return m.btoa(E);
      };
    L(F(this), ["input:!string", "onSuccess:!Fn", "onFailure:?Fn"], arguments);
    var h = "hex" === (d instanceof jb ? Ec(d) : {}).outputEncoding ? 2 : 1;
    c = c || new fb("emptyFn", function () {});
    for (
      var l = m.msCrypto,
        n = m.crypto,
        p = Zo(a),
        q = new Uint8Array(p.length),
        r = 0;
      r < p.length;
      r++
    )
      q[r] = p[r];
    if (n && n.subtle)
      n.subtle.digest("SHA-256", q).then(
        function (t) {
          return void b.h(e.h, g(t, h));
        },
        function (t) {
          return void c.h(e.h, f(t.name, t.message));
        }
      );
    else if (l && l.subtle) {
      var u = l.subtle.digest("SHA-256", q);
      u.oncomplete = function (t) {
        return void b.h(e.h, g(t.target.result, h));
      };
      u.onerror = function (t) {
        return void c.h(e.h, f(t.target.result.name, t.target.result.message));
      };
    } else
      c.h(
        this.h,
        f(
          "BrowserNotSupported",
          "This method is not supported in this browser."
        )
      );
  }
  BC.R = "sha256";
  function CC(a, b, c) {}
  CC.P = "internal.sortRemoteConfigParameters";
  var DC = {},
    EC = {};
  DC.R = "templateStorage";
  DC.getItem = function (a) {
    var b = null;
    return b;
  };
  DC.setItem = function (a, b) {};
  DC.removeItem = function (a) {};
  DC.clear = function () {};
  var FC = function (a) {
    var b;
    return b;
  };
  function GC(a) {
    L(F(this), ["consentSettings:!DustMap"], arguments);
    var b = Ec(a),
      c;
    for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write");
    var d = this.h.h;
    Wr(Qr("consent", "update", b), d.eventId, oy(d));
  }
  GC.R = "updateConsentState";
  var HC = function () {
    var a = new kg(),
      b = function (d) {
        var e = d.P;
        if (a.B.hasOwnProperty(e))
          throw (
            "Attempting to add a private function which already exists: " +
            e +
            "."
          );
        if (a.h.hasOwnProperty(e))
          throw (
            "Attempting to add a private function with an existing API name: " +
            e +
            "."
          );
        a.B[e] = Ca(d) ? Lf(e, d) : Mf(e, d);
      },
      c = function (d) {
        return a.add(d.R, d);
      };
    c(Bv);
    c(Hv);
    c(tw);
    c(ww);
    c(xw);
    c(Bw);
    c(Cw);
    c(Ew);
    c(zy());
    c(Fw);
    c($x);
    c(gy);
    c(hy);
    c(iy);
    c(ly);
    c(qy);
    c(ry);
    c(uy);
    c(yy);
    c(Fy);
    c(Gy);
    c(Iy);
    c(Jy);
    c(Ky);
    c(vC);
    c(wC);
    c(xC);
    c(yC);
    c(BC);
    c(DC);
    c(GC);
    a.add("Math", Rf());
    a.add("Object", ig);
    a.add("TestHelper", mg());
    a.add("assertApi", Nf);
    a.add("assertThat", Of);
    a.add("decodeUri", Sf);
    a.add("decodeUriComponent", Tf);
    a.add("encodeUri", Uf);
    a.add("encodeUriComponent", Vf);
    a.add("fail", Wf);
    a.add("generateRandom", Xf);
    a.add("getContainerVersion", Yf);
    a.add("getTimestamp", Zf);
    a.add("getTimestampMillis", Zf);
    a.add("getType", $f);
    a.add("makeInteger", bg);
    a.add("makeNumber", cg);
    a.add("makeString", dg);
    a.add("makeTableMap", eg);
    a.add("mock", hg);
    a.add("fromBase64", Zx, !("atob" in m));
    a.add("localStorage", By, !Ay());
    a.add("toBase64", FC, !("btoa" in m));
    b(Ev);
    b(Xv);
    b(dw);
    b(iw);
    b(rw);
    b(uw);
    b(zw);
    b(Dw);
    b(Qw);
    b(Vw);
    b($w);
    b(ix);
    b(mx);
    b(xx);
    b(Kx);
    b(Lx);
    b(Rx);
    b(ay);
    b(by);
    b(ey);
    b(fy);
    b(jy);
    b(ky);
    b(xy);
    b(Dy);
    b(Hy);
    b(Ly);
    b(Ny);
    b(Oy);
    b(uC);
    b(zC);
    b(AC);
    b(CC);
    return function (d) {
      var e;
      if (a.h.hasOwnProperty(d)) e = a.get(d, this);
      else {
        var f;
        if ((f = a.B.hasOwnProperty(d))) {
          var g = !1,
            h = this.h.h;
          if (h) {
            var l = h.ud();
            if (l) {
              0 !== l.indexOf("__cvt_") && (g = !0);
            }
          }
          f = g;
        }
        if (f) {
          var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
          e = n;
        } else throw Error(d + " is not a valid API name.");
      }
      return e;
    };
  };
  var IC = function () {
      return !1;
    },
    JC = function () {
      var a = {};
      return function (b, c, d) {};
    };
  var KC;
  function LC() {
    var a = KC;
    return function (b, c, d) {
      var e = d && d.event;
      MC(c);
      var f = new jb();
      Ma(c, function (q, r) {
        var u = Dc(r);
        void 0 === u && void 0 !== r && P(44);
        f.set(q, u);
      });
      a.h.h.F = Ne();
      var g = {
        Cj: $e(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        ye:
          void 0 !== e
            ? function (q) {
                return e.Bb.ye(q);
              }
            : void 0,
        ud: function () {
          return b;
        },
        log: function () {},
        Mj: { index: d && d.index, type: d && d.type, name: d && d.name },
      };
      if (IC()) {
        var h = JC(),
          l = void 0,
          n = void 0;
        g.Wa = {
          rg: [],
          hd: {},
          fb: function (q, r, u) {
            1 === r && (l = q);
            7 === r && (n = u);
            h(q, r, u);
          },
          dg: fg(),
        };
        g.log = function (q, r) {
          if (l) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(l, 4, { level: q, source: n, message: u });
          }
        };
      }
      var p = Vd(a, g, [b, f]);
      a.h.h.F = void 0;
      p instanceof pa && "return" === p.h && (p = p.B);
      return Ec(p);
    };
  }
  function MC(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ca(b) &&
      (a.gtmOnSuccess = function () {
        H(b);
      });
    Ca(c) &&
      (a.gtmOnFailure = function () {
        H(c);
      });
  }
  function NC() {
    KC.h.h.I = function (a, b, c) {
      dh.SANDBOXED_JS_SEMAPHORE = dh.SANDBOXED_JS_SEMAPHORE || 0;
      dh.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        dh.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function OC(a) {
    void 0 !== a &&
      Ma(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          wh[e] = wh[e] || [];
          wh[e].push(b);
        }
      });
  }
  var PC = encodeURI,
    Y = encodeURIComponent,
    QC = function (a, b, c) {
      dc(a, b, c);
    },
    RC = function (a, b) {
      if (!a) return !1;
      var c = ii(ki(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    SC = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Z = { m: {} };
  (Z.m.e = ["google"]),
    (function () {
      (function (a) {
        Z.__e = a;
        Z.__e.o = "e";
        Z.__e.isVendorTemplate = !0;
        Z.__e.priorityOverride = 0;
        Z.__e.isInfrastructure = !1;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Z.m.f = ["google"]),
    (function () {
      (function (a) {
        Z.__f = a;
        Z.__f.o = "f";
        Z.__f.isVendorTemplate = !0;
        Z.__f.priorityOverride = 0;
        Z.__f.isInfrastructure = !1;
      })(function (a) {
        var b = Iu("gtm.referrer", 1) || G.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? ii(
                ki(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Hu(String(b))
          : String(b);
      });
    })();
  (Z.m.cl = ["google"]),
    (function () {
      function a(b) {
        var c = b.target;
        if (c) {
          var d = du(c, "gtm.click");
          Ju(d);
        }
      }
      (function (b) {
        Z.__cl = b;
        Z.__cl.o = "cl";
        Z.__cl.isVendorTemplate = !0;
        Z.__cl.priorityOverride = 0;
        Z.__cl.isInfrastructure = !1;
      })(function (b) {
        if (!Ou("cl")) {
          var c = X("document");
          ec(c, "click", a, !0);
          Pu("cl");
        }
        H(b.vtp_gtmOnSuccess);
      });
    })();
  (Z.m.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.o = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            h = 0;
          h < c.length;
          h++
        ) {
          var l = c[h],
            n = l.key;
          l.read && e.push(n);
          l.write && f.push(n);
          l.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!k(r)) throw d(p, {}, "Key must be a string.");
            if ("read" === q) {
              if (-1 < e.indexOf(r)) return;
            } else if ("write" === q) {
              if (-1 < f.indexOf(r)) return;
            } else if ("readwrite" === q) {
              if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return;
            } else if ("execute" === q) {
              if (-1 < g.indexOf(r)) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          ca: a,
        };
      });
    })();
  (Z.m.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.o = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : Iu("gtm.url", 1)) || Fu();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Hu(String(c));
        var e = ki(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              h = b[a("vtp_queryKey").toString()] || "",
              l = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            g
              ? Ea(h)
                ? (n = h)
                : (n = String(h).replace(/\s+/g, "").split(","))
              : (n = [String(h)]);
            for (var p = 0; p < n.length; p++) {
              var q = ii(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!l || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = ii(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Z.m.v = ["google"]),
    (function () {
      (function (a) {
        Z.__v = a;
        Z.__v.o = "v";
        Z.__v.isVendorTemplate = !0;
        Z.__v.priorityOverride = 0;
        Z.__v.isInfrastructure = !1;
      })(function (a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = Iu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue;
        Qu(d, "v", a.vtp_gtmEventId);
        return d;
      });
    })();

  (Z.m.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Z.__gclidw = b;
        Z.__gclidw.o = "gclidw";
        Z.__gclidw.isVendorTemplate = !0;
        Z.__gclidw.priorityOverride = 100;
        Z.__gclidw.isInfrastructure = !1;
      })(function (b) {
        H(b.vtp_gtmOnSuccess);
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = { prefix: e, path: c, domain: d, flags: f };
        b.vtp_enableCrossDomainFeature &&
          ((b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming) ||
            ((b.vtp_enableCrossDomain || Wl()) && rm(a, g)));
        om(g);
        um(["aw", "dc"], g);
        sn(g);
        var h = e;
        if (
          b.vtp_enableCrossDomainFeature &&
          b.vtp_enableCrossDomain &&
          b.vtp_linkerDomains
        ) {
          var l = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
          tm(a, l, b.vtp_urlPosition, !!b.vtp_formDecoration, h);
        }
        var n = Iu(S.g.na);
        Em({
          eventId: b.vtp_gtmEventId,
          priorityId: b.vtp_gtmPriorityId,
          Be: !1,
          uc: void 0 != n && !1 !== n,
          Cb: g,
          yd: !0,
        });
        b.vtp_enableUrlPassthrough && wm(["aw", "dc", "gb"]);
      });
    })();

  (Z.m.paused = []),
    (function () {
      (function (a) {
        Z.__paused = a;
        Z.__paused.o = "paused";
        Z.__paused.isVendorTemplate = !0;
        Z.__paused.priorityOverride = 0;
        Z.__paused.isInfrastructure = !1;
      })(function (a) {
        H(a.vtp_gtmOnFailure);
      });
    })();

  (Z.m.gaawc = ["google"]),
    (function () {
      (function (a) {
        Z.__gaawc = a;
        Z.__gaawc.o = "gaawc";
        Z.__gaawc.isVendorTemplate = !0;
        Z.__gaawc.priorityOverride = 10;
        Z.__gaawc.isInfrastructure = !1;
      })(function (a) {
        var b = String(a.vtp_measurementId);
        if (!k(b) || 0 >= b.indexOf("-")) H(a.vtp_gtmOnFailure);
        else {
          var c = SC(a.vtp_fieldsToSet, "name", "value") || {};
          if (c.hasOwnProperty(S.g.Ta) || a.vtp_userProperties) {
            var d = c[S.g.Ta] || {};
            I(SC(a.vtp_userProperties, "name", "value"), d);
            c[S.g.Ta] = d;
          }
          a.vtp_enableSendToServerContainer &&
            a.vtp_serverContainerUrl &&
            ((c[S.g.wa] = a.vtp_serverContainerUrl), (c[S.g.ee] = !0));
          var e = a.vtp_userDataVariable;
          e && (c[S.g.ka] = e);
          tC(c, Vg, function (f) {
            return Pa(f);
          });
          tC(c, Xg, function (f) {
            return Number(f);
          });
          c.send_page_view = a.vtp_sendPageView;
          Wr(Sr(b, c), a.vtp_gtmEventId, {
            noTargetGroup: !0,
            originatingEntity: mr(1, a.vtp_gtmEntityIndex, a.vtp_gtmEntityName),
          });
          H(a.vtp_gtmOnSuccess);
        }
      });
    })();

  (Z.m.send_pixel = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__send_pixel = b;
        Z.__send_pixel.o = "send_pixel";
        Z.__send_pixel.isVendorTemplate = !0;
        Z.__send_pixel.priorityOverride = 0;
        Z.__send_pixel.isInfrastructure = !1;
      })(function (b) {
        var c = b.vtp_allowedUrls || "specific",
          d = b.vtp_urls || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!k(g)) throw e(f, {}, "URL must be a string.");
            try {
              if (
                ("any" === c && Bf(ki(g))) ||
                ("specific" === c && Cf(ki(g), d))
              )
                return;
            } catch (h) {
              throw e(f, {}, "Invalid URL filter.");
            }
            throw e(f, {}, "Prohibited URL: " + g + ".");
          },
          ca: a,
        };
      });
    })();

  (Z.m.sp = ["google"]),
    (function () {
      (function (a) {
        Z.__sp = a;
        Z.__sp.o = "sp";
        Z.__sp.isVendorTemplate = !0;
        Z.__sp.priorityOverride = 0;
        Z.__sp.isInfrastructure = !1;
      })(function (a) {
        var b,
          c = {};
        "DATA_LAYER" == a.vtp_customParamsFormat
          ? (c = a.vtp_dataLayerVariable)
          : "USER_SPECIFIED" == a.vtp_customParamsFormat &&
            (c = SC(a.vtp_customParams, "key", "value"));
        b = Cc(c) ? c : {};
        b[S.g.Ud] = !0;
        if (a.vtp_enableConversionLinkingSettings) {
          var d =
            !a.hasOwnProperty("vtp_enableConversionLinker") ||
            !!a.vtp_enableConversionLinker;
          b[S.g.La] = a.vtp_conversionCookiePrefix;
          b[S.g.ya] = d;
        }
        a.vtp_enableDynamicRemarketing &&
          (a.vtp_eventValue && (b[S.g.ra] = a.vtp_eventValue),
          a.vtp_eventItems && (b[S.g.ia] = a.vtp_eventItems));
        a.vtp_rdp && (b[S.g.zb] = !0);
        a.vtp_userId && (b[S.g.Aa] = a.vtp_userId);
        (b[S.g.Ea] = Iu(S.g.Ea)),
          (b[S.g.fa] = Iu(S.g.fa)),
          (b[S.g.kb] = Iu(S.g.kb)),
          (b[S.g.Fa] = Iu(S.g.Fa));
        var e = Vo(
            Uo(
              To(
                So(
                  Lo(new Ko(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b),
                  a.vtp_gtmOnSuccess
                ),
                a.vtp_gtmOnFailure
              )
            )
          ),
          f = "AW-" + a.vtp_conversionId;
        a.vtp_conversionLabel && (f += "/" + a.vtp_conversionLabel);
        var g = aB;
        (g = BA), (e.eventMetadata.hit_type_override = "remarketing");
        g(f, a.vtp_eventName || "", Date.now(), e);
      });
    })();

  (Z.m.ua = ["google"]),
    (function () {
      function a(l, n) {
        for (var p in l)
          if (!h[p] && l.hasOwnProperty(p)) {
            var q = g[p] ? Pa(l[p]) : l[p];
            "anonymizeIp" != p || q || (q = void 0);
            n[p] = q;
          }
      }
      function b(l) {
        var n = {};
        l.vtp_gaSettings &&
          I(SC(l.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
        I(SC(l.vtp_fieldsToSet, "fieldName", "value"), n);
        Pa(n.urlPassthrough) && (n._useUp = !0);
        l.vtp_transportUrl && (n._x_19 = l.vtp_transportUrl);
        return n;
      }
      function c(l, n) {
        return void 0 === n ? n : l(n);
      }
      function d(l, n, p) {}
      function e(l, n) {
        if (!f) {
          var p = l.vtp_useDebugVersion
            ? "u/analytics_debug.js"
            : "analytics.js";
          l.vtp_useInternalVersion &&
            !l.vtp_useDebugVersion &&
            (p = "internal/" + p);
          f = !0;
          var q = l.vtp_gtmOnFailure,
            r = Nq(n._x_19, "/analytics.js"),
            u = Lm(
              "https:",
              "http:",
              "//www.google-analytics.com/" + p,
              n && !!n.forceSSL
            );
          U(
            "analytics.js" === p && r ? r : u,
            function () {
              var t = zr();
              (t && t.loaded) || q();
            },
            q
          );
        }
      }
      var f,
        g = {
          allowAnchor: !0,
          allowLinker: !0,
          alwaysSendReferrer: !0,
          anonymizeIp: !0,
          cookieUpdate: !0,
          exFatal: !0,
          forceSSL: !0,
          javaEnabled: !0,
          legacyHistoryImport: !0,
          nonInteraction: !0,
          useAmpClientId: !0,
          useBeacon: !0,
          storeGac: !0,
          allowAdFeatures: !0,
          allowAdPersonalizationSignals: !0,
          _cd2l: !0,
        },
        h = { urlPassthrough: !0 };
      (function (l) {
        Z.__ua = l;
        Z.__ua.o = "ua";
        Z.__ua.isVendorTemplate = !0;
        Z.__ua.priorityOverride = 0;
        Z.__ua.isInfrastructure = !1;
      })(function (l) {
        function n() {
          if (
            l.vtp_doubleClick ||
            "DISPLAY_FEATURES" == l.vtp_advertisingFeaturesType
          )
            v.displayfeatures = !0;
        }
        var p = {},
          q = {},
          r = {};
        if (l.vtp_gaSettings) {
          var u = l.vtp_gaSettings;
          I(SC(u.vtp_contentGroup, "index", "group"), p);
          I(SC(u.vtp_dimension, "index", "dimension"), q);
          I(SC(u.vtp_metric, "index", "metric"), r);
          var t = I(u);
          t.vtp_fieldsToSet = void 0;
          t.vtp_contentGroup = void 0;
          t.vtp_dimension = void 0;
          t.vtp_metric = void 0;
          l = I(l, t);
        }
        I(SC(l.vtp_contentGroup, "index", "group"), p);
        I(SC(l.vtp_dimension, "index", "dimension"), q);
        I(SC(l.vtp_metric, "index", "metric"), r);
        var v = b(l),
          w = String(l.vtp_trackingId || ""),
          x = "",
          y = "",
          A = "";
        l.vtp_setTrackerName && "string" == typeof l.vtp_trackerName
          ? "" !== l.vtp_trackerName && ((A = l.vtp_trackerName), (y = A + "."))
          : ((A = "gtm" + yh()), (y = A + "."));
        var B = function (aa, W) {
          for (var Fa in W) W.hasOwnProperty(Fa) && (v[aa + Fa] = W[Fa]);
        };
        B("contentGroup", p);
        B("dimension", q);
        B("metric", r);
        l.vtp_enableEcommerce &&
          ((x = l.vtp_gtmCachedValues.event),
          (v.gtmEcommerceData = d(l, v, x)));
        if ("TRACK_EVENT" === l.vtp_trackType)
          (x = "track_event"),
            n(),
            (v.eventCategory = String(l.vtp_eventCategory)),
            (v.eventAction = String(l.vtp_eventAction)),
            (v.eventLabel = c(String, l.vtp_eventLabel)),
            (v.value = c(Oa, l.vtp_eventValue));
        else if ("TRACK_PAGEVIEW" == l.vtp_trackType) {
          if (
            ((x = S.g.Hc),
            n(),
            "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" ==
              l.vtp_advertisingFeaturesType && (v.remarketingLists = !0),
            l.vtp_autoLinkDomains)
          ) {
            var C = {};
            C[S.g.aa] = l.vtp_autoLinkDomains;
            C.use_anchor = l.vtp_useHashAutoLink;
            C[S.g.jc] = l.vtp_decorateFormsAutoLink;
            v[S.g.za] = C;
          }
        } else
          "TRACK_SOCIAL" === l.vtp_trackType
            ? ((x = "track_social"),
              (v.socialNetwork = String(l.vtp_socialNetwork)),
              (v.socialAction = String(l.vtp_socialAction)),
              (v.socialTarget = String(l.vtp_socialActionTarget)))
            : "TRACK_TIMING" == l.vtp_trackType &&
              ((x = "timing_complete"),
              (v.eventCategory = String(l.vtp_timingCategory)),
              (v.timingVar = String(l.vtp_timingVar)),
              (v.value = Oa(l.vtp_timingValue)),
              (v.eventLabel = c(String, l.vtp_timingLabel)));
        l.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
        l.vtp_enableLinkId && (v.enableLinkId = !0);
        var E = {};
        a(v, E);
        v.name || (E.gtmTrackerName = A);
        E.gaFunctionName = l.vtp_functionName;
        void 0 !== l.vtp_nonInteraction &&
          (E.nonInteraction = l.vtp_nonInteraction);
        var J = Vo(
          Uo(
            To(
              So(
                Lo(new Ko(l.vtp_gtmEventId, l.vtp_gtmPriorityId), E),
                l.vtp_gtmOnSuccess
              ),
              l.vtp_gtmOnFailure
            )
          )
        );
        SB(w, x, Date.now(), J);
        var D = Br(l.vtp_functionName);
        if (Ca(D)) {
          var N = function (aa) {
            var W = [].slice.call(arguments, 0);
            W[0] = y + W[0];
            D.apply(window, W);
          };
          if ("TRACK_TRANSACTION" == l.vtp_trackType) {
            N(
              "require",
              "ecommerce",
              "//www.google-analytics.com/plugins/ua/ecommerce.js"
            );
            var Q = function (aa) {
                return Iu("transaction" + aa, 1);
              },
              V = Q("Id");
            N("ecommerce:addTransaction", {
              id: V,
              affiliation: Q("Affiliation"),
              revenue: Q("Total"),
              shipping: Q("Shipping"),
              tax: Q("Tax"),
            });
            for (var qa = Q("Products") || [], R = 0; R < qa.length; R++) {
              var O = qa[R];
              N("ecommerce:addItem", {
                id: V,
                sku: O.sku,
                name: O.name,
                category: O.category,
                price: O.price,
                quantity: O.quantity,
              });
            }
            N("ecommerce:send");
          } else if ("DECORATE_LINK" == l.vtp_trackType) {
          } else if ("DECORATE_FORM" == l.vtp_trackType) {
          } else if ("TRACK_DATA" == l.vtp_trackType) {
          }
          e(l, v);
        } else H(l.vtp_gtmOnFailure);
      });
    })();

  (Z.m.get_url = ["google"]),
    (function () {
      function a(b, c, d) {
        return { component: c, queryKey: d };
      }
      (function (b) {
        Z.__get_url = b;
        Z.__get_url.o = "get_url";
        Z.__get_url.isVendorTemplate = !0;
        Z.__get_url.priorityOverride = 0;
        Z.__get_url.isInfrastructure = !1;
      })(function (b) {
        var c = "any" === b.vtp_urlParts ? null : [];
        c &&
          (b.vtp_protocol && c.push("protocol"),
          b.vtp_host && c.push("host"),
          b.vtp_port && c.push("port"),
          b.vtp_path && c.push("path"),
          b.vtp_extension && c.push("extension"),
          b.vtp_query && c.push("query"),
          b.vtp_fragment && c.push("fragment"));
        var d =
            c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g, h) {
            if (g) {
              if (!k(g)) throw e(f, {}, "URL component must be a string.");
              if (c && 0 > c.indexOf(g))
                throw e(f, {}, "Prohibited URL component: " + g);
              if ("query" === g && d) {
                if (!h)
                  throw e(
                    f,
                    {},
                    "Prohibited from getting entire URL query when query keys are specified."
                  );
                if (!k(h)) throw e(f, {}, "Query key must be a string.");
                if (0 > d.indexOf(h))
                  throw e(f, {}, "Prohibited query key: " + h);
              }
            } else if (c)
              throw e(
                f,
                {},
                "Prohibited from getting entire URL when components are specified."
              );
          },
          ca: a,
        };
      });
    })();
  (Z.m.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Z.__inject_script = b;
        Z.__inject_script.o = "inject_script";
        Z.__inject_script.isVendorTemplate = !0;
        Z.__inject_script.priorityOverride = 0;
        Z.__inject_script.isInfrastructure = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!k(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (Cf(ki(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          ca: a,
        };
      });
    })();
  (Z.m.opt = ["google"]),
    (function () {
      var a = function () {},
        b = function (e) {
          var f = X(ch.ma),
            g = f && f.hide;
          g && (g.end || !0 === g["GTM-P46CGK5"]) && (g[e] = !0);
        },
        c = function (e, f) {
          var g =
              (f
                ? "https://www.googleoptimize.com/optimize.js"
                : "https://www.google-analytics.com/gtm/optimize.js") +
              "?id=" +
              encodeURIComponent(e),
            h = ch.ma;
          "dataLayer" !== h && (g += "&l=" + h);
          return g;
        },
        d = function (e) {
          var f;
          f = e.vtp_functionName
            ? e.vtp_functionName
            : e.vtp_gaSettings
            ? e.vtp_gaSettings.vtp_functionName
            : void 0;
          var g = Br(f);
          if (!Ca(g)) return a;
          var h = e.vtp_optimizeContainerId;
          g(Dr() + ".require", h);
          return function () {
            g("provide", h, a);
          };
        };
      (function (e) {
        Z.__opt = e;
        Z.__opt.o = "opt";
        Z.__opt.isVendorTemplate = !0;
        Z.__opt.priorityOverride = 10;
        Z.__opt.isInfrastructure = !1;
      })(function (e) {
        var f = e.vtp_optimizeContainerId;
        b(f);
        var g = d(e),
          h = function () {
            g();
            e.vtp_gtmOnFailure();
          };
        U(
          c(f, e.vtp_useOptimizeDomain),
          function () {
            dh[f] ? e.vtp_gtmOnSuccess() : h();
          },
          h,
          { gtm: "GTM-P46CGK5" }
        );
      });
    })();
  (Z.m.gas = ["google"]),
    (function () {
      (function (a) {
        Z.__gas = a;
        Z.__gas.o = "gas";
        Z.__gas.isVendorTemplate = !0;
        Z.__gas.priorityOverride = 0;
        Z.__gas.isInfrastructure = !1;
      })(function (a) {
        var b = I(a),
          c = b;
        c[Wd.cb] = null;
        c[Wd.zf] = null;
        var d = (b = c);
        d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
        var e = d.vtp_cookieDomain;
        void 0 !== e &&
          (d.vtp_fieldsToSet.push({ fieldName: "cookieDomain", value: e }),
          delete d.vtp_cookieDomain);
        return b;
      });
    })();
  (Z.m.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g) {
          c[e] = "DATA_LAYER" === d ? Iu(g) : b[f];
        };
      }
      (function (b) {
        Z.__awct = b;
        Z.__awct.o = "awct";
        Z.__awct.isVendorTemplate = !0;
        Z.__awct.priorityOverride = 0;
        Z.__awct.isInfrastructure = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = SC(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[S.g.ra] = b.vtp_conversionValue || 0),
            (f[S.g.va] = b.vtp_currencyCode),
            (f[S.g.Ma] = b.vtp_orderId),
            (f[S.g.La] = b.vtp_conversionCookiePrefix),
            (f[S.g.ya] = c),
            (f[S.g.Ic] = d),
            (f[S.g.na] = Iu(S.g.na)),
            (f[S.g.ja] = Iu("developer_id")),
            f);
        (g[S.g.Ea] = Iu(S.g.Ea)),
          (g[S.g.fa] = Iu(S.g.fa)),
          (g[S.g.kb] = Iu(S.g.kb)),
          (g[S.g.Fa] = Iu(S.g.Fa));
        b.vtp_rdp && (g[S.g.zb] = !0);
        if (b.vtp_enableCustomParams)
          for (var h in e) bh.hasOwnProperty(h) || (g[h] = e[h]);
        if (b.vtp_enableProductReporting) {
          var l = a(b, g, b.vtp_productReportingDataSource);
          l(S.g.Nc, "vtp_awMerchantId", "aw_merchant_id");
          l(S.g.Lc, "vtp_awFeedCountry", "aw_feed_country");
          l(S.g.Mc, "vtp_awFeedLanguage", "aw_feed_language");
          l(S.g.Kc, "vtp_discount", "discount");
          l(S.g.ia, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[S.g.nc] = b.vtp_deliveryPostalCode),
          (g[S.g.Wc] = b.vtp_estimatedDeliveryDate),
          (g[S.g.bc] = b.vtp_deliveryCountry),
          (g[S.g.Tc] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[S.g.wa] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(S.g.kc, "vtp_awNewCustomer", "new_customer");
          n(S.g.Rc, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var u = {};
          g[S.g.Vc] = ((u[b.vtp_conversionLabel] = r), u);
        }
        var t = Vo(
            Uo(
              To(
                So(
                  Lo(new Ko(b.vtp_gtmEventId, b.vtp_gtmPriorityId), g),
                  b.vtp_gtmOnSuccess
                ),
                b.vtp_gtmOnFailure
              )
            )
          ),
          v = "AW-" + b.vtp_conversionId + "/" + b.vtp_conversionLabel,
          w = aB;
        (w = BA), (t.eventMetadata.hit_type_override = "conversion");
        w(v, S.g.Ja, Date.now(), t);
      });
    })();

  (Z.m.html = ["customScripts"]),
    (function () {
      function a(d, e, f, g) {
        return function () {
          try {
            if (0 < e.length) {
              var h = e.shift(),
                l = a(d, e, f, g);
              if (
                "SCRIPT" == String(h.nodeName).toUpperCase() &&
                "text/gtmscript" == h.type
              ) {
                var n = G.createElement("script");
                n.async = !1;
                n.type = "text/javascript";
                n.id = h.id;
                n.text = h.text || h.textContent || h.innerHTML || "";
                h.charset && (n.charset = h.charset);
                var p = h.getAttribute("data-gtmsrc");
                p && ((n.src = p), Xb(n, l));
                d.insertBefore(n, null);
                p || l();
              } else if (
                h.innerHTML &&
                0 <= h.innerHTML.toLowerCase().indexOf("<script")
              ) {
                for (var q = []; h.firstChild; )
                  q.push(h.removeChild(h.firstChild));
                d.insertBefore(h, null);
                a(h, q, l, g)();
              } else d.insertBefore(h, null), l();
            } else f();
          } catch (r) {
            H(g);
          }
        };
      }
      function b(d) {
        if (G.body) {
          var e = d.vtp_gtmOnFailure,
            f = Ru(d.vtp_html, d.vtp_gtmOnSuccess, e),
            g = f.ck,
            h = f.X;
          if (d.vtp_useIframe) {
          } else
            d.vtp_supportDocumentWrite ? c(g, h, e) : a(G.body, ic(g), h, e)();
        } else
          Du(function () {
            b(d);
          }, 200);
      }
      Z.__html = b;
      Z.__html.o = "html";
      Z.__html.isVendorTemplate = !0;
      Z.__html.priorityOverride = 0;
      Z.__html.isInfrastructure = !1;
    })();

  var jE = {};
  (jE.macro = function (a) {
    if (Be.Bf.hasOwnProperty(a)) return Be.Bf[a];
  }),
    (jE.onHtmlSuccess = Be.Qh(!0)),
    (jE.onHtmlFailure = Be.Qh(!1));
  jE.dataLayer = Mh;
  jE.callback = function (a) {
    vh.hasOwnProperty(a) && Ca(vh[a]) && vh[a]();
    delete vh[a];
  };
  jE.bootstrap = 0;
  jE._spx = !1;
  function kE() {
    dh[Ve.N] = dh[Ve.N] || jE;
    Ve.Xb && (dh["ctid_" + Ve.Xb] = jE);
    ek();
    gk() ||
      Ma(hk(), function (a, b) {
        Rq(a, b.transportUrl, b.context);
        P(92);
      });
    Wa(wh, Z.m);
    Ce();
    De = Re;
  }
  (function (a) {
    function b() {
      l = G.documentElement.getAttribute("data-tag-assistant-present");
      $t(l) && (h = g.ej);
    }
    if (!m["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (G.referrer) {
        var d = ki(G.referrer);
        c = "cct.google" === hi(d, "host");
      }
      if (!c) {
        var e = Fj("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((m["__TAGGY_INSTALLED"] = !0),
        ac("https://cct.google/taggy/agent.js"));
    }
    if (qh) a();
    else {
      var f = function (t) {
          var v = "GTM",
            w = "GTM";
          kh ? ((v = "OGT"), (w = "GTAG")) : qh && (w = v = "OPT");
          var x = m["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (m["google.tagmanager.debugui2.queue"] = x),
            ac(
              "https://" +
                ch.Sd +
                "/debug/bootstrap?id=" +
                Ve.N +
                "&src=" +
                w +
                "&cond=" +
                t +
                "&gtm=" +
                kk()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Vb,
              containerProduct: v,
              debug: !1,
              id: Ve.N,
              isGte: jh,
            },
          };
          y.data.resume = function () {
            a();
          };
          ch.zi && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = { jl: 1, fj: 2, sj: 3, Bi: 4, ej: 5 },
        h = void 0,
        l = void 0,
        n = ii(m.location, "query", !1, void 0, "gtm_debug");
      $t(n) && (h = g.fj);
      if (!h && G.referrer) {
        var p = ki(G.referrer);
        "tagassistant.google.com" === hi(p, "host") && (h = g.sj);
      }
      if (!h) {
        var q = Fj("__TAG_ASSISTANT");
        q.length && q[0].length && (h = g.Bi);
      }
      h || b();
      if (!h && K(54) && au(l)) {
        var r = function () {
            if (u) return !0;
            u = !0;
            b();
            h && Vb ? f(h) : a();
          },
          u = !1;
        ec(
          G,
          "TADebugSignal",
          function () {
            r();
          },
          !1
        );
        m.setTimeout(function () {
          r();
        }, 200);
      } else h && Vb ? f(h) : a();
    }
  })(function () {
    var a = !1;
    a && vr("INIT");
    Vi().B();
    Uk();
    Yl.enable_gbraid_cookie_write = !0;
    if (Ve.Xb ? dh["ctid_" + Ve.Xb] : dh[Ve.N]) {
      var b = dh.zones;
      b && b.unregisterChild(ak());
    } else {
      (K(11) || K(13) || K(55) || K(48)) && jp();
      for (
        var c = data.resource || {}, d = c.macros || [], e = 0;
        e < d.length;
        e++
      )
        se.push(d[e]);
      for (var f = c.tags || [], g = 0; g < f.length; g++) ve.push(f[g]);
      for (var h = c.predicates || [], l = 0; l < h.length; l++) ue.push(h[l]);
      for (var n = c.rules || [], p = 0; p < n.length; p++) {
        for (var q = n[p], r = {}, u = 0; u < q.length; u++)
          r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
        te.push(r);
      }
      xe = Z;
      ze = zv;
      Ze = new Ye();
      var t = data.sandboxed_scripts,
        v = data.security_groups,
        w = data.infra,
        x = data.runtime || [],
        y = data.runtime_lines;
      KC = new Td();
      NC();
      re = LC();
      var A = KC,
        B = HC();
      mb(A.h, "require", B);
      for (var C = 0; C < x.length; C++) {
        var E = x[C];
        if (!Ea(E) || 3 > E.length) {
          if (0 === E.length) continue;
          break;
        }
        y && y[C] && y[C].length && Ke(E, y[C]);
        KC.execute(E);
      }
      if (void 0 !== t)
        for (var J = ["sandboxedScripts"], D = 0; D < t.length; D++) {
          var N = t[D].replace(/^_*/, "");
          wh[N] = J;
        }
      OC(v);
      if (void 0 !== w) for (var Q = 0; Q < w.length; Q++) xh[w[Q]] = !0;
      kE();
      Zt();
      fr = !1;
      gr = 0;
      if (
        ("interactive" == G.readyState && !G.createEventObject) ||
        "complete" == G.readyState
      )
        ir();
      else {
        ec(G, "DOMContentLoaded", ir);
        ec(G, "readystatechange", ir);
        if (G.createEventObject && G.documentElement.doScroll) {
          var V = !0;
          try {
            V = !m.frameElement;
          } catch (aa) {}
          V && jr();
        }
        ec(m, "load", ir);
      }
      Qs = !1;
      "complete" === G.readyState ? Ss() : ec(m, "load", Ss);
      Eo();
      K(46) && (P(111), vb("HEALTH", 1));
      K(47) && (P(112), vb("HEALTH", 2));
      uh = Ta();
      jE.bootstrap = uh;
      if (a) {
        var ia = wr("INIT");
      }
    }
  });
})();
