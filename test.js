let array = [
    'Kyrgyz',             'Russian',           'Norwegian',
    'Amharic',            'Arabic',            'French',
    'English',            'French',            'Haitian Creole',
    'English',            'Fijian',            'Fiji Hindi',
    'English',            'Arabic',            'Chinese',
    'English',            'Malay',             'Tamil',
    'English',            'Manx',              'French',
    'Portuguese',         'English',           'Sotho',
    'French',             'Ukrainian',         'Korean',
    'Arabic',             'English',           'Italian',
    'Latin',              'French',            'English',
    'Nauru',              'Arabic',            'English',
    'English',            'Swahili',           'French',
    'Russian',            'Tajik',             'English',
    'Azerbaijani',        'Russian',           'Arabic',
    'Portuguese',         'English',           'Japanese',
    'Swedish',            'Spanish',           'English',
    'French',             'Portuguese',        'Spanish',
    'French',             'Kirundi',           'Romanian',
    'Estonian',           'Norwegian Nynorsk', 'Norwegian Bokmål',
    'Sami',               'English',           'French',
    'English',            'Guaraní',           'Spanish',
    'Afrikaans',          'English',           'Southern Ndebele',
    'Northern Sotho',     'Southern Sotho',    'Swazi',
    'Tswana',             'Tsonga',            'Venda',
    'Xhosa',              'Zulu',              'English',
    'Niuean',             'French',            'Swiss German',
    'Italian',            'Romansh',           'Arabic',
    'Hebrew',             'Slovene',           'Vietnamese',
    'Arabic',             'French',            'Comorian',
    'English',            'French',            'Dutch']
const occurrences = array.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  console.log(occurrences)