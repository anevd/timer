function print(from, to) {
	let i = from;
	let timerId = setInterval(function () {
		console.log(i);
		if (i == to) {
			clearInterval(timerId);
		}
		i++;
	}, 2000);
}
print(1, 10);
