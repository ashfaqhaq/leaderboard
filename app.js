
(function(){
  console.log('eceas');
  var currentFileName='week3';
  var current_week='Week 3';

  loadData(currentFileName,current_week);
  const button = document.getElementById("group-btn").querySelectorAll('.btn');
  const btnComments = button.length;
  for (var i = 0; i < btnComments; i++) {
    button[i].addEventListener('click', showWeek);
  }
  // console.log(button);
 const search_input = document.getElementById("search_field_input");

  const search=document.getElementById('search');

  search_input.addEventListener('keyup',search_table);
  
  function showWeek(event) {
    console.log('button is clicked');
    var fired_button = $(this).val();
    
    this.classList.toggle("active")
    
    var text=this.textContent;
    loadData(fired_button,text);
}
})();
// e.onchange =
 
  
 
 
   
//  $('#load_data').click(function(){
   function loadData(value,description){
    // var e = document.getElementById("week");
    // var value = e.options[e.selectedIndex].value;
    // var text = e.options[e.selectedIndex].text;
    console.log("executed");

   $.ajax({
   url:"/data/"+value+".csv" ,
   dataType:"text",
   success:function(data)
   {
    //  if description?
    var content= description|| current_week;
    var leaderboard_data = data.split(/\r?\n|\r/);
    var table_data = '<h1 class="d-flex justify-content-center">'+content+'</h1> <br><table class="table black rounded table-hover">';
    console.log(leaderboard_data);
    
    for(var count = 0; count<leaderboard_data.length; count++)
    {
     var cell_data = leaderboard_data[count].split(",");
     if(count==1){
     table_data += '<tr class="top">';
     }
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th class="bg-warning">'+cell_data[cell_count]+'</th>';
      }
      
      else
      {
        if(cell_count==0 && count==1){
          table_data += '<td class="name top">'+cell_data[cell_count]+'</td>';
          } 
        else if(cell_count==0 && !(count==1)){
          table_data += '<td class="name">'+cell_data[cell_count]+'</td>';

        }
        else if(cell_count==1){
        table_data += '<td><img src="/team/'+cell_data[cell_count]+'.png" style="width:64px;height:64px;" </td>';
     }
       else{
       table_data += '<td>'+cell_data[cell_count]+'</td>';
       }
      }
      
      
    
     }
     table_data += '</tr>';
    }
    table_data += '</table>';
   
    $('#leaderboard_table').html(table_data);
   }
  //  $('.logo').hide();
  });
//  });
// $('.logo').hide();
//   $('.logo').hide();
  // $("#load_data").hide();

// $('#load_data').click(function(){
//   $('#leaderboard_table').addClass('slide');
//   // $("#load_data").css("visibility", "hidden");
//   $("#load_data").hide();
//   // $("#logo").css("visibility", "hidden");
//   $('.logo').hide();
//  });
}




function search_table(){
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("search_field_input");
  filter = input.value.toUpperCase();
  table = document.getElementById("leaderboard_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td") ; 
    for(j=0 ; j<td.length ; j++)
    {
      let tdata = td[j] ;
      if (tdata) {
        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break ; 
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
}


