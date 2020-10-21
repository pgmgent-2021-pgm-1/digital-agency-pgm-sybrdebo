(() => {
  const projects = [{
    title: 'Marsman',
    synopsis: 'Opdracht: \'stel je voor dat een reis naar de planeet Mars even gewoon zou zijn als een intercontinentale vlucht op aarde. Hoe zou je deze reis dan promoten?\'',
    thumbnailUrl: 'https://dl.airtable.com/.attachments/e3981d036e17ee706dc5b7300fd28bb2/8dc57d28/case_marsman.jpg',
    assets: [{
      title: 'Marsman - image 001',
      type: 'image',
      sourceUrl: 'https://dl.airtable.com/.attachments/369afece911d883733040c0cca6f6d2c/dc320a3d/1.logo.jpg',
    },
    {
      title: 'Marsman - image 002',
      type: 'image',
      sourceUrl: 'https://dl.airtable.com/.attachments/784e6ce137c810dbecdae60fcebf0eed/6f61161f/3.mascotte.jpg',
    },
    {
      title: 'Marsman - image 003',
      type: 'image',
      sourceUrl: 'https://dl.airtable.com/.attachments/aceb6459b412436099992c2d0908991d/186c5299/4.poster.jpg',
    },
    ],
    likes: Math.floor(Math.random() * 10001),
    views: Math.floor(Math.random() * 10001),
    createAd: 1586563200000,
    modifiedAd: Date.now(),
  },
  {
    title: 'Skive',
    synopsis: 'Skive is een platform waar muziekfanaten hun favoriete muziek kunnen delen',
    thumbnailUrl: 'https://dl.airtable.com/.attachments/701dd616bd7a4a4298b077b9c79ffe56/15aeeb50/Schermafbeelding2020-05-16om09.47.11.png',
    assets: [{
      title: 'Skive - image 001',
      type: 'image',
      sourceUrl: 'https://dl.airtable.com/.attachments/24b31d875c54dabf3e1c0db2ba01f2ae/5e55d2c8/Schermafbeelding2020-05-16om09.49.28.png',
    },
    {
      title: 'Skive - image 002',
      type: 'image',
      sourceUrl: 'https://dl.airtable.com/.attachments/2887017db73fe88028b75fb8d34d8477/ec1ab497/Schermafbeelding2020-05-16om09.49.37.png',
    },
    {
      title: 'Skive - image 003',
      type: 'image',
      sourceUrl: 'https://dl.airtable.com/.attachments/d857cdf9fbf25459b39e20a5e0d24005/7f53aa6b/Schermafbeelding2020-05-16om09.49.48.png',
    },
    ],
    likes: Math.floor(Math.random() * 10001),
    views: Math.floor(Math.random() * 10001),
    createAd: 1592956800000,
    modifiedAd: Date.now(),
  },
  ];
  const app = {
    initialize () {
      // Log result
      console.log(`==============================================================================================
|                                           PORTFOLIO                                        |
==============================================================================================    
${this.getStringForProjects()}`);
    },
    getStringForProjects () {
      // This will generate every post
      let tempStr = '';
      projects.forEach((project, index) => {
        tempStr += `Project ${index + 1}: \t ${project.title}
==============================================================================================
Synopsis: \t ${project.synopsis}
Thumpnail: \t ${project.thumbnailUrl}
likes: \t\t ${project.likes}
Views: \t\t ${project.views}
Created at: \t ${new Date(project.createAd).toISOString()}
Modified at: \t ${new Date(project.modifiedAd).toISOString()} 
----------------------------------------------------------------------------------------------
Assets
----------------------------------------------------------------------------------------------
${this.getStringForAssets(project.assets)}
==============================================================================================
`;
      });
      return tempStr;
    },
    getStringForAssets (assets) {
      // This will generate every asset
      return `${assets.map((asset, index) => `Asset ${index + 1}: \t ${asset.title} (${asset.type}) \n \t\t ${asset.sourceUrl} ${index < assets.length - 1 ? '\n' : ''}`).join('')}`;
    },
  };
  app.initialize();
})();
