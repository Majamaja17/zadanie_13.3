console.log(process.versions);
console.log(process.env);
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    switch (input !== null) {
        var instruction = input.toString().trim();

        case (instruction === '/exit')
            process.stdout.write('Quitting app!\n');
            process.exit();
            
        case process.stderr.write('Wrong instruction!');
       
    }
});