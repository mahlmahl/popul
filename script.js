var popul = new Population();
var b = null;
var a = [];

for(var i = 0; i < 100; i++){
	b = new Creature();
	//if(Math.random() < 0.0001) b.fitness = undefined;
	//if(Math.random() < 0.0001) b.genome = undefined;
	a.push(b);
}

popul.setIndividuals(a);
console.log(popul);

var n = 0;

while (n < 1000){

	var children = popul.selection();

	a = [];

	for(var i = 0; i < children.length; i++){
		b = new Creature(children[i]);
		a.push(b);
	}

	popul.setIndividuals(a);
	popul.mutation();
	if(n % 100 == 0) console.log(popul);

	n++;
}