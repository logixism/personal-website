const chars: { [cyrillic: string]: string } = {
	а: 'a',
	б: 'b',
	в: 'v',
	г: 'h',
	ґ: 'g',
	д: 'd',
	е: 'e',
	є: 'je',
	ж: 'ž',
	з: 'z',
	и: 'y',
	і: 'i',
	ї: 'ji',
	й: 'j',
	к: 'k',
	л: 'l',
	м: 'm',
	н: 'n',
	о: 'o',
	п: 'p',
	р: 'r',
	с: 's',
	т: 't',
	у: 'u',
	ф: 'f',
	х: 'ch',
	ц: 'c',
	ч: 'č',
	ш: 'š',
	щ: 'šč',
	ь: "'",
	ю: 'ju',
	я: 'ja'
};

export function transliterate(word: string) {
	return word
		.split('')
		.map(function (char: string) {
			return chars[char] || char;
		})
		.join('');
}
