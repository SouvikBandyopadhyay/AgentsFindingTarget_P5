
drawTarget=function(){
    fill(20,220,20);
    ellipse(currx,curry,20,20);
}
makePopulation=function(){
    for(let i=0;i<1000;i++){
        popu[i]=new Agent(lenOfPath);
      }
}
makeMove=function(){
        for(let i=0;i<popu.length;i++){
          popu[i].move(index);
        }

}
makeMatingPool=function(){
    matingpool=[];
    let maxx=0;
    for(let i=0;i<popu.length;i++){
        let fitness=popu[i].findFitness();
        let possib=Array(int(fitness*nFactorMatingPool)).fill(i);
        matingpool=matingpool.concat(possib);
        maxx=max(maxx,fitness);
    }
    if(matingpool.length<10){
        nFactorMatingPool=nFactorMatingPool*10;
        makeMatingPool();
    }
    if(matingpool.length>100000){
        nFactorMatingPool=nFactorMatingPool/10;
        makeMatingPool();
    }
    console.log(maxx+" "+matingpool.length+" "+targetX+" "+targetY);
}
makeBabies=function(){
    for(let i=0;i<popu.length;i++){
        let parent1=matingpool[int(random(matingpool.length))];
        let parent2=matingpool[int(random(matingpool.length))];
        while(parent1==parent2){
            parent2=matingpool[int(random(matingpool.length))];
        }
        popu[i]=popu[parent1].fucking(popu[parent2]);
    }
    console.log(popu);
}
