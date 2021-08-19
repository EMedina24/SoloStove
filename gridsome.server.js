// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
 

  api.createPages(({ graphql,createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const contentfulPages =  graphql(`
    {
      allContentfulPages{
        edges{
          node{
            id
            pageTitle
          }
        }
      }
    }
  `).then((result)=>{

  result.data.allContentfulPages.edges.forEach(edge=>{
    createPage({
      path: `/${edge.node.pageTitle}`,
      component: './src/templates/page.vue',
      context: {
        title: edge.node.pageTitle,
      },
    });

  })

  });
 


  const Products =  graphql(`
  {
    allContentfulProducts{
      edges{
        node{
          label
          title
          description
        }
      }
    }
  }
`).then((result)=>{

result.data.allContentfulProducts.edges.forEach(edge=>{
  createPage({
    path: `/products/${edge.node.title}`,
    component: './src/templates/product.vue',
    context: {
      ptitle: edge.node.title,
    },
  });

})

});




return Promise.all([ contentfulPages, Products]);




  })
}



