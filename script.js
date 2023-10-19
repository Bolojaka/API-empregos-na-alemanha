$(document).ready(function(){
   $.get("https://www.arbeitnow.com/api/job-board-api", function(retorno, status){
   retorno.data.forEach(function(element){
    
     /*console.log(element.title);
     console.log(element.company_name);
     console.log(element.url);
*/
      $('#list-job').append('<a href="'+element.url+'" class="list-group-item list-group-item-action"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">'+element.title+'</h5><small class="text-body-secondary">'+element.tags+'</small> </div><p class="mb-1">'+element.description+'</p></a>');

      
   });
  });
});

