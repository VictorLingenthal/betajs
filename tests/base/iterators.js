test("test array iterator", function() {
	var iter = new BetaJS.Iterators.ArrayIterator(["a", "b", "c"]);
	var s = "";
	while (iter.hasNext())
		s += iter.next();
	ok(s == "abc");
});

test("test mapped iterator", function() {
	var base = new BetaJS.Iterators.ArrayIterator([2, 4, 6]);
	var iter = new BetaJS.Iterators.MappedIterator(base, function (x) { return 2 * x + 1; });
	var s = 0;
	while (iter.hasNext())
		s += iter.next();
	ok(s == 27);
});


test("test filtered iterator", function() {
	var base = new BetaJS.Iterators.ArrayIterator([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	var iter = new BetaJS.Iterators.FilteredIterator(base, function (x) { return x % 2 == 0; });
	var s = "";
	while (iter.hasNext())
		s += iter.next();
	ok(s == "2468");
});
