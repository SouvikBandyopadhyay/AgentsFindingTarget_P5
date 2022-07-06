


class Agent{
    constructor(len){
        this.x=20;
        this.y=20;
        this.speed=5;
        this.path=[];
        this.makePath(len);
    }
    findFitness=function(){
        let d=dist(this.x,this.y,targetX,targetY);
        if(d<10){
            d=10;
        }
        return (10/d);
    }
    makePath=function(len){
        while(len>0){
            len--;
            this.path.push(int(random(4)));
        }
    }
    show=function(){
        ellipse(this.x,this.y,5,5);
    }
    move=function(i){
            switch(this.path[i]){
                case 0:
                    if(this.x<windowWidth-10){
                    this.x=this.x+this.speed;
                    }
                    break;
                case 1:
                    if(this.x>10){
                    this.x=this.x-this.speed;
                    }
                    break;
                case 2:
                    if(this.y<windowHeight-10){
                    this.y=this.y+this.speed;
                    }
                    break;
                case 3:
                    if(this.y>10){
                    this.y=this.y-this.speed;
                    }
                    break;
            }
        this.show();
    }

    fucking=function(her){
        let choice=int(random(4));
        let babyPath=[];
        switch(choice){
            case 0:
                babyPath=this.doggy(her);
                break;
            case 1:
                babyPath=this.gWhiz(her);
                break;
            case 2:
                babyPath=this.Upstanding(her);
                break;
            default:
                babyPath=this.cowGirl(her);
                break;
        }
        let newadds=[];
        for(let k=0;k<int(nFactorMatingPool/200);k++){
            newadds[k]=int(random(4));
        }
        babyPath=babyPath.concat(newadds);
        let baby=new Agent(0);
        baby.path=babyPath;

        return baby;
    }
    doggy=function(b){
        let mid=int(this.path.length/2);
        let babypath=this.path.slice(0,mid).concat(b.path.slice(mid,this.path.length));
        return babypath
    }
    gWhiz=function(b){
        let babypath=[];
        for(let i=0;i<this.path.length;i++){
            if(i%2==0){
                babypath[i]=this.path[i];
            }
            else{
                babypath[i]=b.path[i];                
            }
        }
        return babypath;
    }
    Upstanding=function(b){
        let mid=int(random(5,this.path.length-5));
        let babypath=this.path.slice(0,mid).concat(b.path.slice(mid,this.path.length));
        return babypath;
    }
    cowGirl=function(b){
        let babypath=[];
        let n=int(random(2,6));
        let flag=true;
        for(let i=0;i<this.path.length;i++){
            if(i%n==0){
                flag=!flag;
            }
            if(flag){
                babypath[i]=this.path[i];
            }
            else{
                babypath[i]=b.path[i];                
            }
        }
        return babypath;
    }
}