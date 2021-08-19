// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
   
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '06tbubwyf2fu', // required
        accessToken: 'i_bHwOw9KoN49nlR9P45bAEN6tf9Awsdv2r32qQzJ7Y', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
     

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      
    }

  ]
}
