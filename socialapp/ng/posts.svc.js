

angular.module('app')
.service( 'PostsSvc' , function($http) { 

   this.fetch = function() {
   	    console.log(' /api/posts being called  ')
        return $http.get('/api/posts');
  }

   this.create = function(post) {
       return  $http.post('/api/posts',post);
   }


})