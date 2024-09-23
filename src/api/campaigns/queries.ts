import { generatePath } from "react-router-dom";
import { apiClient } from "../apiClient";
import { CampaignResponse } from "./types";
import { apiEndpoints } from "../apiEndpoints";

export const generateCampaign = () =>
  apiClient
    .post<CampaignResponse>(generatePath(apiEndpoints.generateCampaign.path))
    .then(({ data }) => {
      return data;
    });

// export const generateCampaign = () =>
//   new Promise<CampaignResponse>((resolve, reject) => {
//     try {
//       resolve(res);
//     } catch (error) {
//       console.error(error);
//       reject(error);
//     }
//   });

// const res: CampaignResponse = {
//   research_report:
//     '# Festive Desserts in the UK: Comprehensive Marketing Research Report\n\n### **Executive Summary**\nThis report analyzes the keyword "festive desserts UK" across multiple platforms: Google, LinkedIn, Instagram, and Facebook. The objective is to provide a detailed overview of the current trends, content types, and consumer interests related to festive desserts in the UK. Key findings include a growing preference for innovative dessert options beyond traditional choices, increasing use of social media and digital platforms for marketing, and opportunities for creating new content that meets emerging demands in the festive dessert sector.\n\n## **Platform Analysis**\n\n### **1. Google**\n**Findings:**\n- **Top Results:** Searches for "festive desserts UK" yield a mix of recipe sites, food blogs, and mainstream supermarket pages.\n- **URLs:** \n    - Tesco’s Christmas Desserts: [Link](https://www.tesco.com/groceries/en-GB/shop/festive-food/desserts)\n    - BBC Good Food: [Link](https://www.bbcgoodfood.com/recipes/collection/christmas-desserts)\n  \n**Content Analysis:**\n- Common themes include traditional desserts like Christmas pudding alongside modern variations such as cheesecakes and chocolate-based treats.\n- Popular recipes showcase simple ingredients and accessible preparation methods to cater to home bakers.\n\n**Noteworthy Points:**\n- Keywords often present include "easy festive desserts," "tradition meets modern," and "quick recipes."\n- A growing interest in vegan and gluten-free options is noted.\n\n**Statistics:**\n- Searches for “vegan Christmas desserts” have increased by over 20% compared to previous years.\n\n**Hashtags:** Not applicable.\n\n---\n\n### **2. LinkedIn**\n**Findings:**\n1. **Pidy UK:** Focused on offering a variety of desserts for festive menus. Promotes versatility with ingredients suitable for large gatherings.\n   - URL: [Pidy UK Post](https://www.linkedin.com/posts/pidy-uk_festivemenu-festivefood-festivedesserts-activity-7132421611344826368-8H1g)\n\n2. **Tesco\'s Magical Woodland Cheesecake:** Communicating the shift towards alternative festive desserts among millennials.\n   - URL: [Gemma Williams on LinkedIn](https://www.linkedin.com/pulse/capitalising-uks-growing-demand-christmas-pudding-tescos-williams)\n\n3. **Heavenly Desserts:** Launches festive collection featuring limited-time beverages and desserts.\n   - URL: [Heavenly Desserts Post](https://www.linkedin.com/posts/heavenly-desserts_heavenlydesserts-festivecollection-festivities-activity-7000425443937951744-NkVF?trk=public_profile_like_view)\n\n**Content Analysis:**\n- Posts emphasize corporate collaborations (e.g., Pidy UK & Essential Cuisine) focusing on gourmet offerings tailored for festive menus.\n- Engagement through recipes, new product launches, and partnerships is strongly present.\n\n**Common Themes:**\n- Centerpiece desserts, storytelling behind product development, and trend awareness among chefs.\n- Focus on seasonal innovation in dessert offerings.\n\n**Noteworthy Points:**\n- Posts often receive a high number of interactions (likes, comments), indicating strong audience interest.\n\n**Trending Hashtags:** \n#FestiveMenu #ChristmasDesserts #GourmetCooking #VeganChristmas #DessertInnovation\n\n---\n\n### **3. Instagram**\n**Hypothetical Analysis:**\n- Popular accounts post visually stunning pictures of festive desserts, showcasing desserts like kitschy cakes, novelty items, and authentic British treats during the holiday season.\n- Engagement rates are higher for accounts that showcase both presentation and simple recipes via reels or stories. \n\n**Common Hashtags:**\n- #FestiveDesserts #InstaFood #ChristmasBaking #HomemadeDesserts\n\n---\n\n### **4. Facebook**\n**Findings:**\n- Groups and pages dedicated to recipe sharing have gained traction, with users exchanging creative ideas on festive desserts.\n- Community feedback on local dessert shops incorporating social media to market unique offerings plays a central role.\n\n**Engagement:**\n- Posts often include user-generated content featuring homemade treats.\n\n**Noteworthy Points:**\n- Facebook serves as a platform for engaging local communities and promoting seasonal events related to baking, such as bake sales or local dessert festivals.\n\n---\n\n## **Summary and Recommendations**\n\n### **SEO and Content Strategy Recommendations**\n1. **Content Gaps:** Identify gaps in vegetarian and vegan festive dessert content. Current competitors highlight traditional recipes while fewer options exist for dietary restrictions.\n2. **Optimization Tips:** Enhance existing content by integrating SEO strategies, including keyword-rich titles and meta descriptions. Leverage local SEO by using geo-targeted keywords.\n3. **New Content Ideas:** \n   - Launch a festive dessert recipe series that focuses on alternatives to traditional choices (e.g., gluten-free versions).\n   - Collaborate with influencers in the culinary space promoting dessert kits or ready-made items for busy holiday schedules. Consider virtual baking classes.\n\n### **Conclusion**\nThe festive dessert market in the UK showcases a unique blend of tradition and innovation, driven by consumer demands for flexibility and new experiences. As competition increases, brands must leverage digital platforms effectively while catering to evolving consumer preferences around dietary needs and experiential offerings. Analysis reveals significant opportunities to expand beyond current offerings by harnessing user engagement and focusing on unique, sharable content that resonates with holiday spirit. This approach will not only enhance visibility but also foster deeper connections with target audiences throughout the festive season.',
//   posts: [
//     {
//       platform: "instagram",
//       caption:
//         "🎄 Ready for the merriest time of the year? 🎄 At The Hummingbird Bakery, we're celebrating our 20th anniversary by filling your holidays with our iconic Christmas cakes! 🍰 \n\nFrom candy cane piñata cakes 🎁 to classic festive desserts, we've got just the treat to make your celebrations sweeter! \n\nBring a sprinkle of joy to your gatherings with our freshly baked, preservative-free delights. Perfect for families, corporate events, or just because! \n\n🎅🏽 Why wait? Order today for the most festive desserts UK has to offer and enjoy cake delivery London-wide! \n\n👉 Tap the link in our bio to explore all our festive options! \n\n#TheHummingbirdBakery #FestiveDessertsUK #ChristmasCakes #CakeDeliveryLondon #HolidayBaking #SweetCelebration",
//       design: {
//         created_at: 1727091909,
//         id: "DAGRkw6jogY",
//         title: "DAGOR5mITP0",
//         updated_at: 1727091909,
//         thumbnail: {
//           url: "https://export-download.canva.com/f07c1b3a-318f-4b80-8f8d-b1bd44e9784f/0/0001-1045276652412320361.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240922T212740Z&X-Amz-Expires=55985&X-Amz-Signature=d0e5bfc9ab0b9f9e15e00b2e4229c56b0a4e888453d0732f742f8f41cc42c9b4&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2023%20Sep%202024%2013%3A00%3A45%20GMT",
//         },
//         url: "https://www.canva.com/design/DAGRkw6jogY/edit?ui=eyJFIjp7IkE_IjoiYiIsImMiOiJEQUdPUjVtSVRQMCJ9fQ",
//         urls: {
//           edit_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTEwODU2fQ..gKPbIBQ-UrW15-m0.Ir-SVZ51ouWEzuCUNRZgQL8xB6aiK-0UAai6buJxD3DU0mzTWH0nChmYI4LefYplNXeFnCrNWEFXpQ9eng57WwvxeZN4-Y43RtvU9CoMqfo4SWM.zfOig2g4chipiqjUHHQlIQ/edit?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=6ab4adb9-6f00-4c4f-bfaa-143067df7f34&utm_campaign=public_api_opened_in_canva",
//           view_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTEwODU2fQ..4cy8Xi2VubWoLr3S.4ggFUxLw4hGDy9To_7iKHoYMTpXcJ_GXcyLaA3RkGtVq4RafoyboxOHk5NBdBDQNPwI9_8a4YWys-KjgK-Id0LthJMzEP6gnfHEAPNStQi75ITY.GXMR95dnUXQc5NjmbdBMkg/view?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=989984c0-8a33-458c-a0af-5abf254739be&utm_campaign=public_api_opened_in_canva",
//         },
//       },
//     },
//     {
//       platform: "facebook",
//       caption:
//         "Looking to add a sweet touch to your Christmas celebrations? Whether it’s a cozy family gathering or a festive party, our Christmas Candy Cane Piñata Cake is the perfect centerpiece! 🌟 Freshly baked with the finest ingredients, this cake will delight everyone with its hidden candy surprises and festive flair. Order now and enjoy cake delivery in London! 🎅 #cakeDeliveryLondon\n\nHave you ever tried a piñata cake before? Share your experience with us in the comments! ⬇️\n\n👉 Link to order: https://www.hummingbirdbakery.com/en/product/christmas-candy-cane-pinata-cake\n\n#FestiveDessertsUK #ChristmasBaking #HummingbirdBakery",
//       design: {
//         created_at: 1727091926,
//         id: "DAGRk4cas14",
//         title: "DAGOUrndeDo",
//         updated_at: 1727091926,
//         thumbnail: {
//           url: "https://export-download.canva.com/da936bde-0307-4f4b-b95b-8464bca914fa/0/0001-3816116323854247774.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240922T233423Z&X-Amz-Expires=50796&X-Amz-Signature=0aadd83d239fd8b6cf643b8835b0319aa90a90d621920c8573a94a6032560ca0&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2023%20Sep%202024%2013%3A40%3A59%20GMT",
//         },
//         url: "https://www.canva.com/design/DAGRk4cas14/edit?ui=eyJFIjp7IkE_IjoiYiIsImMiOiJEQUdPVXJuZGVEbyJ9fQ",
//         urls: {
//           edit_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTI3MzczfQ..qiz9f51gbY7t2XcJ.9CZ7j8LSM6mBabD_dH1OE-EnOwiupVcfwao2jX9X2l8BlZc4vcdzCLn_kzJxYOgDruem5S79SLIfsdped0OxWmknJeTzNghnC7Bfxckr6T1zkJU.Fb9YfqVkA9AlZhUazAuM4w/edit?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=148bffc2-a9d1-438a-9a35-45352b4d454c&utm_campaign=public_api_opened_in_canva",
//           view_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTI3MzczfQ..ZvGIMgI0FoD3aAgi.tFgeMjLto6DBi_CcEJfQUs-a4QCGcOzEPIlzJaFcniWR6zG5xjf5_cZx3MjWlWuX7bEhbtlYMLt9xXd6RiLaavD70c5RHUZPDrf2qLiPQDQgRHU.VCE5X688YduiE9SXxvEM6Q/view?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=33a150a1-b289-4731-bc33-5de7f8dde70e&utm_campaign=public_api_opened_in_canva",
//         },
//       },
//     },
//     {
//       platform: "linkedIn",
//       caption:
//         "🎉 Celebrate the season with our festive desserts in the UK! As we mark our 20th anniversary, what better way to spread joy than with a slice of Christmas magic from The Hummingbird Bakery? Our iconic Christmas Candy Cane Piñata Cake is not just a treat; it's an experience perfect for making your holidays extra special. Whether it's a cozy family gathering or a grand corporate event, our freshly baked, preservative-free cakes delivered right to your door in London are sure to impress. 🎁✨\n\nDon't let this festive season pass without indulging in the best. Explore our collection and let us sweeten your celebrations! 🍰\n\nLearn more and order now: https://www.hummingbirdbakery.com/en/product/christmas-candy-cane-pinata-cake\n\n#ChristmasJoy #FestiveDessertsUK #CakeDeliveryLondon #HolidayTreats #HummingbirdBakery",
//       design: {
//         created_at: 1727091911,
//         id: "DAGRk95PHiE",
//         title: "DAGOOJLbmOs",
//         updated_at: 1727091911,
//         thumbnail: {
//           url: "https://export-download.canva.com/60f4bce1-d465-4110-b20f-8647f8012d0b/0/0001-1115082445160468578.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240922T172452Z&X-Amz-Expires=72312&X-Amz-Signature=bcac5e9e2a3175e830c0a78cea614c7e06541de6ec1843d4aeb1b648eebdc80d&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2023%20Sep%202024%2013%3A30%3A04%20GMT",
//         },
//         url: "https://www.canva.com/design/DAGRk95PHiE/edit?ui=eyJFIjp7IkE_IjoiYiIsImMiOiJEQUdPT0pMYm1PcyJ9fQ",
//         urls: {
//           edit_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTEzNjcyfQ..c-tOdBfUBSrIFdBw.7YdZ2jgJX5K9yCGHk_2vdkxO6uKIKmHkyl5lVu67T-UBlX4fKGzAVgmvQFNhuhXrqd5QoRfw47trpzMhuDH6LQcAMiVIpW0ByYB_H7JCdShQNa0.EhOihCjooOfRzksP0BUp7A/edit?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=3527f970-a25f-4d45-9bc5-0e32675e346e&utm_campaign=public_api_opened_in_canva",
//           view_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTEzNjczfQ..2iFhGx9kU5Q3s2Qg.EKlzCoVjlm6_AGffsfh4gEoLRlWZ5NXkNOlij0fjUMy8IGJI7bEYXJncOrhY_grq-ABso1blaR5b_Lz3OzT0zfZSVoW446Jr33dLtGdhJR_MbH4.gsG67buM1nleUtw3y8b4jg/view?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=96128815-f010-4503-967c-a307aea072c7&utm_campaign=public_api_opened_in_canva",
//         },
//       },
//     },
//     {
//       platform: "whatsapp",
//       caption:
//         "🎄 Ready for festive treats? Unwrap the joy with our Christmas cakes! From candy cane piñata cakes to other delights, our freshly baked wonders await you. Indulge in the best ‘festive desserts UK’ are raving about! 🍰 Order now for cake delivery in London. Explore our selections and add a sweet touch to your celebrations. 🎅🍭\n\nDiscover more at: https://www.hummingbirdbakery.com/en/product/christmas-candy-cane-pinata-cake\n\n#FestiveDessertsUK #CakeDeliveryLondon #ChristmasCakes #HolidayBaking #TheHummingbirdBakery",
//       design: {
//         created_at: 1727091905,
//         id: "DAGRk5TjkFo",
//         title: "DAGOUNB1tNg",
//         updated_at: 1727091905,
//         thumbnail: {
//           url: "https://export-download.canva.com/59dd38a2-23f5-4edc-ab04-85e3314426dd/0/0001-6269452217504999191.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240923%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240923T090522Z&X-Amz-Expires=16642&X-Amz-Signature=c435756c390c2f86d80b2f333540c867e3f6bbe417485a30e61b3917df3a0c7a&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2023%20Sep%202024%2013%3A42%3A44%20GMT",
//         },
//         url: "https://www.canva.com/design/DAGRk5TjkFo/edit?ui=eyJFIjp7IkE_IjoiYiIsImMiOiJEQUdPVU5CMXROZyJ9fQ",
//         urls: {
//           edit_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTA2ODgzfQ..6UMC7Sm7t9EP9vfm.QFLcZo12zaMQmqcPbZu0HK6aaYBMyyilsOlAARlefG9QpOLmjN-2vdsy7mBFgx4ZSny7prO1LqSeUmHHejJlx0rJHZo_Edb9Ioz9yrv25GNMCEM._Zm8bRmuRrwLBAWDfxc7sw/edit?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=8db70e9a-7a8e-4b9e-846a-1381461a7768&utm_campaign=public_api_opened_in_canva",
//           view_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTA2ODgzfQ..29Vcy5CsnbAJyxsL.m31vr-zp_lSDnpFnp6pUMq1_10cx6hLEd93CMtRDPT4s7ow0-oylXi92mqUTrJrfI95t1pkelqB_bEkcXFHyeElBL8AP0bpBogVv6NzQSxPlQC8.F8rEufcE14zAvb51k-uWmg/view?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=c61720d3-cdad-43d6-9990-d616d2e7628b&utm_campaign=public_api_opened_in_canva",
//         },
//       },
//     },
//     {
//       platform: "twitter-x",
//       caption:
//         "🎄 Delight in the magic of Christmas with our festive desserts UK! From rich, decorated cakes to delightful cupcakes and cookies, we have something for every celebration. Order your Christmas cake🍰 today and enjoy fresh, high-quality treats right at your door!✨ 🍬 Ready to make your holiday extra special? 🎁 Check out our Christmas Candy Cane Pinata Cake for an unforgettable festive experience! 🎅🏻 LINK IN BIO #CakeDeliveryLondon #HummingbirdBakery #ChristmasCakes #DessertLovers #HolidayBaking",
//       design: {
//         created_at: 1727091914,
//         id: "DAGRk6ptnAo",
//         title: "DAGOSzxHOYs",
//         updated_at: 1727091914,
//         thumbnail: {
//           url: "https://export-download.canva.com/8fb43705-6673-48c2-b288-259f5b8e3472/0/0001-6904459766930106888.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240922%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240922T124903Z&X-Amz-Expires=89398&X-Amz-Signature=e9cc758c45bc94d6c68212c4c7342b6364d3ef15fd4fc495337aad1e2371e1d3&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2023%20Sep%202024%2013%3A39%3A01%20GMT",
//         },
//         url: "https://www.canva.com/design/DAGRk6ptnAo/edit?ui=eyJFIjp7IkE_IjoiYiIsImMiOiJEQUdPU3p4SE9ZcyJ9fQ",
//         urls: {
//           edit_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTE1OTMzfQ..nz7fB4BSTFT15Win.FiuqG0qRrdZYt-QvA7RPEKBv_8OrsB91x2xn9b8Jcyqv1HLpE9ozHYWC6cBr5qzDDSYe8CRh_CQuIy91MtbJgshhp2helcDMhNOtUJlAvWMUfQg.6jAAGe0gZXd_eNgSySC1HQ/edit?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=e20d7dff-cee1-4232-a76c-f7b504bcfb6a&utm_campaign=public_api_opened_in_canva",
//           view_url:
//             "https://www.canva.com/api/design/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiZXhwaXJ5IjoxNzI5NjgzOTE1OTMzfQ.._tb8N1Z3vZQzhVuM.abOXt4TS1UQyujTf4592uwvyXHekRzFmxfffsUSJioexfjIHhb8FQsIfMZ5MjqQm_lcBwdykauzVcKbxKtu_kS80U9bzFQvrnDtaM_q3oFdcfCg.v2fya2nTGQuFk8RbUt95GA/view?utm_source=OC-AZFCWsLcw8Yl&utm_medium=referral&utm_term=ac8f90c8-9946-4c85-b21d-d7360632f5bc&utm_campaign=public_api_opened_in_canva",
//         },
//       },
//     },
//   ],
//   theme: "Celebrate With Our Christmas Cakes",
//   primary_keyword: "festive desserts uk",
// };
