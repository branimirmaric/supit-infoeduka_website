const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

var url = 'http://www.fulek.com/VUA/SUPIT/GetNastavniPlan';

// Pretraži url i filtriraj ga
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
      <div class="container text-left">
        <h6>${match.label}</h6>
      </div>    
    `
      )
      .join('');

    // console.log(html);
    // matchList.innerHtml = html;
    $('#match-list').append(html);
    // $("#match-list").append("<p>Branimir</p>");
  }
};

search.addEventListener('input', () => searchSubjects(search.value));
