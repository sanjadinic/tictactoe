  $(document).ready(function() {
      var cells;


      function refresh() {
          $("#playground").empty();
          var table = $("<table>")
          var moves = [];
          var tr;
          $.each(cells, function(i) {
              if (!(i % 3)) {
                  tr = $("<tr>");
              };
              var td = $("<td>");
              td.attr("id", "cell_" + i);
              td.html(cells[i]);
              td.click(function() {
                  $("#result").text("You've clicked on cell number " + $(this).attr("id").split("_")[1] + ".");
                  if (cells[$(this).attr("id")]) {
                      return;
                  }

                  if (moves.length % 2 == 0) {
                      $("#" + $(this).attr("id")).attr("class", "x");
                      moves.push("x");
                      cells[$(this).attr("id")] = "x";
                  } else {
                      $("#" + $(this).attr("id")).attr("class", "o");
                      moves.push("o");
                      cells[$(this).attr("id")] = "o";
                  }
              })
              table.append(tr.append(td));
          });
          $("#playground").append(table);
      }

      $("#start").click(function() {
          cells = ["", "", "", "", "", "", "", "", ""];
          refresh();
      })

  })