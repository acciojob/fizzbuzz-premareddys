let i=1;
while(i<=20){
	alert(i);
	i++;
}
if(i%3==0){
	console.log("Fizz \n");
}
else if(i%5==0){
	console.log("Buzz \n");
}
else if(i%3==0 && i%5==0){
	console.log("FizzBuzz \n");
}
else{
	console.log(i);
}
