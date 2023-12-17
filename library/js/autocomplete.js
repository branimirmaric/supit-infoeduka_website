$(function () {
  var url = 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan';
  var url2 = 'http://www.fulek.com/VUA/supit/GetKolegij/';

  // var full_url2 = document.URL; // Get current url
  // var url_array = full_url2.split('/'); // Split the string into an array with / as separator
  // var last_segment = url_array[url_array.length-1]; // Get the last part of the array (-1) (treba od url uzeti value)
  // alert(last_segment); // alert last segment

  $('#search').autocomplete({
    source: url,
  });

  const matchList = document.getElementById('match-list');

  const searchSubjects = async (searchText) => {
    const res = await fetch(url);
    const subjects = await res.json();

    // Get matches to current text input
    let matches = subjects.filter((subject) => {
      const regex = new RegExp(`^${searchText}`, 'gi'); //global, case sensitive
      return subject.label.match(regex);
    });

    // Jednom kada upisem 'S' pa kada obrišem, želim dobiti prazan array
    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = '';
    }

    outputHtml(matches);
  };

  // Show results in HTML
  const outputHtml = (matches) => {
    if (matches.length > 0) {
      const html = matches
        .map(
          (match) => `
            <tr id="demo">
              <td>${match.label}</td>
              <td class="count-me"></td>
              <td class="count-me"></td>
              <td></td>          
              <td></td>          
              <td></td>
              <td><button type="button" class="btn" style="background: #c61160; color: white" onclick='removeOption()'>Obriši</button></td>
            </tr>
        `
        )
        .join('');
        // matchList.innerHtml = html;
        $('#match-list').append(html);
        console.log(html);
    }
  };
  // const outputHtml = (matches) => {
  //   if (matches.length > 0) {
  //     const html = matches
  //       .map(
  //         (match) => `
  //         <tr id="demo">
  //           <td>${match.kolegij}</td>
  //           <td>${match.ects}</td>
  //           <td>${match.sati}</td>
  //           <td>${match.predavanja}</td>
  //           <td>${match.vjezbe}</td>
  //           <td>${match.tip}</td>
  //           <td><button type="button" class="btn" style="background: #c61160; color: white" onclick='removeOption()'>Obriši</button></td>
  //         </tr>
  //     `
  //       )
  //       .join('');

  //     $('#match-list').append(html);
  //   }
  // };

  search.addEventListener('input', () => searchSubjects(search.value));
});
