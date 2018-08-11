//setting and swapping//
console.log("setting and swapping");
console.log("--------------------");
myNumber=42;
myName="dojo"; 
console.log("before sawpping");
console.log("***************");
console.log("myNumber="+myNumber);
console.log("myName="+myName);

var temp=myNumber;
myNumber=myName;
myName=temp;
console.log("after swapping");
console.log("***************");
console.log("myNumber="+myNumber);
console.log("myName="+myName);


//print -52 to 1066
console.log("--------------------");
console.log("Print -52 to 1066");
console.log("--------------------");
for(i=-52;i<=1066;i++)
{
    console.log(i);
}
//Dont worry,be happy//
console.log("-----------------------");
console.log("Dont worry, be happy");
console.log("-----------------------");
function beCheerful()
{
    console.log("good morning");
}
for(i=0;i<98;i++)
{
    beCheerful()
}

//print multiples of 3,but not all//
console.log("--------------------");
console.log("Print  multiples of 3,but not all");
console.log("--------------------");

for(i=-300;i<=0;i++)
{
    if((i==-3)||(i==-6))
    {
        continue;
    }
    if(i%3==0)
    {
    console.log(i);
    }
}

///print 2000 to 5280//
console.log("----------------------------------");
console.log("Print  integers from 2000 to 5280");
console.log("----------------------------------");
var x=2000;
while(x<=5280)
{
    console.log(x);
     x++;
}

//You say its your birthday//
console.log("----------------------------------");
console.log("You say its your birthday ");
console.log("----------------------------------");
var month=1;
var date=15;
if((month==1)&&(date==15))
{
    console.log("how did you know");
}

else
{
    console.log("Just another day");
}
//print from 512 to 4096//
console.log("----------------------------------");
console.log("Print from 512 to 4096");
console.log("----------------------------------");
count=0;
for(i=512;i<=4096;i++)
{
    if(i%5==0)
    {
        console.log(i);
        count++;
    }
}
console.log(count);
 //counting dojo way//
 console.log("------------------");
 console.log("Counting dojo way");
 console.log("------------------");
 for(i=1;i<=100;i++)
 {
     console.log(i);
 }
 for(i=1;i<=100;i++)
 {
     if(i%5==0)
     {
         console.log("coding");
     }
     if(i%10==0)
     {
         console.log("dojo");
     }
 }

 //countdown by fours//
console.log("-------------------");
console.log("Countdown by fours");
console.log("-------------------");
var i=1;
while(i>=1)
{  
   console.log(i);
   i=1-4;
}
//multiples of 6 upto 60000//
console.log("-------------------------");
console.log("multiples of 6 upto 60000");
console.log("--------------------------");


for(i=6;i<=60000;i=i+6)
{
    if(i%6==0)
    {
        console.log(i);
        
    }
}

//first plus length//
console.log("----------------");
console.log("first plus length");
console.log("----------------");
array=["dojo",13,15,17,19,20];
console.log(array[0]+array.length);
array1=[false,13,15,17,19];
console.log(array1[0]+array1.length);

//values greater than second//
console.log("--------------------------");
console.log("values greater than second");
console.log("--------------------------");
z=[1,3,5,7,9,13];
count=0;
temp=z[1];

for(i=0;i<=z.length-1;i++)
{
   
    if(temp<z[i])
    {
     console.log(z[i]);
     count++;       
    }
}
console.log(count);


//fit the first value//
console.log("--------------------");
console.log("fit the first value");
console.log("--------------------");
x=[10,2,4,5,1,3];
array11(x);
function array11(x)
{
    if(x[0]>x.length)
    {
        console.log("Too Big");
    }
    else if(x[0]<x.length)
        {
            console.log("Too Small");
        }
        else
        {
            console.log("Just Right!");
        }
}

    //print low,return high//
console.log("---------------------");
console.log("print low,return high");
console.log("---------------------");
x=[3,6,9,10,12];
console.log(a(x));
function a(x)
{
    console.log(x[0]);
    return x[4];
}

//add seven to most//
console.log("------------------");
console.log("add seven to most");
console.log("------------------");

x=[1,2,3,4,5,6];y=[];
for(i=0;i<x.length;i++)
{
    if(x[i]==1)
    {
        y.push(x[i]);
        continue;
    }
    x[i]=x[i]+7;
    y.push(x[i]);
}
    console.log(y);

//reverse array//
console.log("--------------");
console.log("reverse array");
console.log("--------------");
x=[3,1,6,4,2];
console.log(reverse(x));

function reverse(x)
{
   y=[];
    for(i=x.length-1;i>=0;i--)
    {
        y.push(x[i]);
    }
    return y;
}

//print one,return another//
console.log("------------------------");
console.log("print one,return another");
console.log("------------------------");
x=[1,3,5,8,10];
console.log(a(x));
function a(x)
{
    console.log(x[4]);
    return x[0];
}


//count positives//
console.log("---------------");
console.log("count positives");
console.log("----------------");



x=[-1,1,1,1];
count=0;
console.log(countPositives(x));
function countPositives(x)
{
    for(i=0;i<x.length;i++)
    {
       if(x[i]==1)
       {
        x[i]=1;
        count++;
       }
    }
    x[3]=count;
    return x;
}
 
/double vision//
console.log("-------------");
console.log("double vision");
console.log("-------------");


x=[1,2,3];
console.log(double(x));
function double(x)
{
    for(i=0;i<x.length;i++)
    {
        x[i]=x[i]*2;
    }
    return x;
}

//outlook negative
console.log("----------------");
console.log("outlook negative");
console.log("----------------");
x=[1,-3,5];
for(i=0;i<x.length;i++)
{
    if(x[i]==-3)
    {
        continue;
    }
    x[i]=0-x[i];
}
console.log(x);

//always hungry//
console.log("-------------");
console.log("always hungry");
console.log("-------------");
x=["Mat","Eat","Sat","Food","Ate","Food"];
count=0;
for(i=0;i<x.length;i++)
{
    if(x[i]=="Food")
    {
        console.log("yummy");
        count++;
    }
}if(count==0)
{
    console.log("I'm hungry");
}

//scale the array//
console.log("---------------");
console.log("scale the array");
console.log("---------------");
a=[1,5,3,8,10];
num=2;b=[];
for(i=0;i<a.length;i++)
{
    a[i]=a[i]*num;
    b.push(a[i]);
}
console.log(b);

//final countdown//
console.log("---------------");
console.log("final countdown");
console.log("----------------");
param1=3;
param2=5;
param3=17;
param4=9;
for(i=5;i<=17;i++)
{
    if(i%3===0)
    {
        if(i==9)
        {
            continue;
        }
        console.log(i);
    }
}

//whoa that suckers huge
console.log("----------------------");
console.log("whoa that suckers huge");
console.log("----------------------");
var sum=0;
for(var i=-3;i<=3;i++)
{

    if(i%2!==0)
    {
        sum=sum+i;
    }
}
console.log(sum);

//increment the seconds//
console.log("----------------------");
console.log("increment the seconds");
console.log("----------------------");
x=[1,3,5,7,11,13];
for(i=0;i<x.length;i++)
{

    if(i%2==0)
    {
      x[i]=x[i]+1;
    }

}
console.log(x);

//biggie size//
console.log("------------");
console.log("biggie size");
console.log("------------");
x=[-1,3,5,-5];
console.log(makeItBig(x));
function makeItBig(x)
{
    x[1]="big";
    x[2]="big";

    return x;
}
//reverse array//
console.log("--------------");
console.log("reverse array");
console.log("--------------");
x=[3,1,6,4,2];
console.log(reverse(x));

function reverse(x)
{
   y=[];
    for(i=x.length-1;i>=0;i--)
    {
        y.push(x[i]);
    }
    return y;
}

//first plus length//
console.log("----------------");
console.log("first plus length");
console.log("----------------");
array=["dojo",13,15,17,19,20];
console.log(array[0]+array.length);
array1=[false,13,15,17,19];
console.log(array1[0]+array1.length);

//flexible countdown//
console.log("------------------");
console.log("flexible countdown");
console.log("------------------");
var lowNum=2;
var highNum=9;
var mult=3;
for(var i=highNum;i>=lowNum;i--)
{
    if(i%3==0)
    {
        console.log(i);
    }
}
