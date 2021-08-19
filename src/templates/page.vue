<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
module.exports = {
 
data() {
        return {
            product: {
                name: '',
                description: {
                    markdown: ''
                },
                images: [{
                    url: ''
                }]
            }
        
        }
    },
    created(){
        this.product = this.$page.allContentfulPages
        console.log('Product here', this.product)
    }
}  



</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>


<page-query>

query GetPage($title: String!) {

 
  allContentfulPages(filter:{title:{eq:$title}}){
      edges{
          node{
             pageTitle
                id
          }
      }
   
  
}

}
</page-query>