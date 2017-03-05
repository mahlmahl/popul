function Dna(genes){
	this.genes = [];
	if(Array.isArray(genes) && genes.length){
		this.genes = genes;
	}else if(Number.isInteger(genes)){
		for(var i = 0; i < genes; i++){
			this.genes.push(this.random());
		}
	}
}

Dna.prototype.random = function(){
	return Math.round(Math.random() * 1000) / 100;
}

function Creature(genes){
	this.fitness = 0;
	this.genome = new Dna(genes || 100);
	
	for(var i = 0; i < 100; i++){
		this.fitness += this.genome.genes[i];
	}
}