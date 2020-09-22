
$(document).ready(function(){
//  $('#load_data').click(function(){
   $.ajax({
   url:"/data/week1.csv",
   dataType:"text",
   success:function(data)
   {
    var leaderboard_data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table black rounded table-hover">';
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
  $("#load_data").hide();

// $('#load_data').click(function(){
//   $('#leaderboard_table').addClass('slide');
//   // $("#load_data").css("visibility", "hidden");
//   $("#load_data").hide();
//   // $("#logo").css("visibility", "hidden");
//   $('.logo').hide();
//  });
 
});