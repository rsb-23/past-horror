const base_year = 2024;

function getDate(mm_dd) {
  dt = new Date(base_year + '-' + mm_dd);
  dt.setHours(0, 0, 0, 0);
  return dt;
}

function showBirdInfo(bdate) {
  // date range in mm_dd format
  var birds = {
    Robin: ['1-21', '2-17'],
    Goldfinch: ['2-18', '3-17'],
    Hawk: ['3-18', '4-14'],
    Albatross: ['4-15', '5-12'],
    Dove: ['5-13', '6-9'],
    Eagle: ['6-10', '7-7'],
    Nightingale: ['7-8', '8-4'],
    Kingfisher: ['8-5', '9-1'],
    Swan: ['9-2', '9-29'],
    Woodpecker: ['9-30', '10-27'],
    Custrail: ['10-28', '11-24'],
    Raven: ['11-25', '12-23'],
    Heron: ['12-24', '12-31'],
    'Heron ': ['1-1', '1-20'],
  };

  var bird = Object.keys(birds).find(x => bdate >= getDate(birds[x][0]) && bdate <= getDate(birds[x][1]));
  bird = bird.trimEnd();

  document.getElementById('bird').innerHTML = 'Spirit Bird : ' + bird;
  document.getElementById('bird_detail').innerHTML = BIRDS[bird];
}
function showTreeInfo(bdate) {
  // date range in mm_dd format
  var tree_range = {
    Fir: ['1-1', '1-11'],
    Elm: ['1-12', '1-24'],
    Cypress: ['1-25', '2-3'],
    Poplar: ['2-4', '2-8'],
    Cedar: ['2-9', '2-18'],
    Pine: ['2-19', '2-29'],
    'Weeping Willow': ['3-1', '3-10'],
    Lime: ['3-11', '3-20'],
    Oak: ['3-21', '3-21'],
    Hazelnut: ['3-22', '3-31'],
    Rowan: ['4-1', '4-10'],
    Maple: ['4-11', '4-20'],
    Walnut: ['4-21', '4-30'],
    'Poplar  ': ['5-1', '5-14'],
    Chestnut: ['5-15', '5-24'],
    Ash: ['5-25', '6-3'],
    Hornbeam: ['6-4', '6-13'],
    Fig: ['6-14', '6-23'],
    Birch: ['6-24', '6-24'],
    Apple: ['6-25', '7-4'],
    'Fir ': ['7-5', '7-14'],
    'Elm ': ['7-15', '7-25'],
    'Cypress ': ['7-26', '8-4'],
    'Poplar ': ['8-5', '8-13'],
    'Cedar ': ['8-14', '8-23'],
    'Pine ': ['8-24', '9-2'],
    'Weeping Willow ': ['9-3', '9-12'],
    'Lime ': ['9-13', '9-22'],
    Olive: ['9-23', '9-23'],
    'Hazelnut ': ['9-24', '10-3'],
    'Rowan ': ['10-4', '10-13'],
    'Maple ': ['10-14', '10-23'],
    'Walnut ': ['10-24', '11-11'],
    'Chestnut ': ['11-12', '11-21'],
    'Ash ': ['11-22', '12-1'],
    'Hornbeam ': ['12-2', '12-11'],
    'Fig ': ['12-12', '12-21'],
    Beech: ['12-22', '12-22'],
    'Apple ': ['12-23', '12-31'],
  };

  var tree = Object.keys(tree_range).find(
    x => bdate >= getDate(tree_range[x][0]) && bdate <= getDate(tree_range[x][1])
  );
  tree = tree.trimEnd();

  var trait = '<font color=' + TREE_TRAITS[tree][0] + '>' + TREE_TRAITS[tree][1] + '</font>';
  document.getElementById('tree').innerHTML = 'Spirit Tree : ' + tree + ', which symbolizes <b>' + trait + '</b>';
  document.getElementById('tree_detail').innerHTML = TREES[tree];
}
function showZodiacInfo(bdate) {
  // date range in mm format
  var signs = {
    Capricorn: [12, 1],
    Aquarius: [1, 2],
    Pisces: [2, 3],
    Aries: [3, 4],
    Taurus: [4, 5],
    Gemini: [5, 6],
    Cancer: [6, 7],
    Leo: [7, 8],
    Virgo: [8, 9],
    Libra: [9, 10],
    Scorpio: [10, 11],
    Sagittarius: [11, 12],
  };

  var sign = Object.keys(signs).find(
    x => bdate >= getDate(signs[x][0] + '-' + 21) && bdate <= getDate(signs[x][1] + '-' + 20)
  );
  if (sign == null) {
    sign = 'Capricorn';
  }

  document.getElementById('sun_sign').innerHTML = 'SunSign : ' + sign;
  document.getElementById('sun_sign_detail').innerHTML = SUNSIGNS[sign];
}
function showAstroData() {
  var dob = new Date(document.getElementById('dob').value);
  dob.setFullYear(base_year);
  dob.setHours(0, 0, 0, 0);

  showZodiacInfo(dob);
  showBirdInfo(dob);
  showTreeInfo(dob);
}

function showDatePicker() {
  const dateInput = document.getElementById('dob');
  dateInput.removeAttribute('readonly');
  dateInput.showPicker();
  dateInput.setAttribute('readonly', true);
}

function syncDobFields() {
  const dateInput = document.getElementById('dob');
  document.getElementById('dob_display').value = new Date(dateInput.value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
syncDobFields();
