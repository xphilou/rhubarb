for (var i = 1; i < 101; i ++)	{
		var Fizz = (i % 3 == 0);
		var Buzz = (i % 5 == 0);
		if (Fizz)	{
			if (Buzz) 	{
			print("FizzBuzz");
			} else {
			print("Fizz")};
		} else if (Buzz) 	{
			print ("Buzz");
		} else	{
			print (i);
		}
}

