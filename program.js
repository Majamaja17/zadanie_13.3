console.log(process.versions);
console.log(process.env);
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        switch (instruction) {
		    case (instruction === '/exit')
		        process.stdout.write('Quitting app!\n');
		        process.exit();

		     case process.stderr.write('Wrong instruction!');
		}       
    }
});