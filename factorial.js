function fact(num)
{
    let i,f=1;
    for(i=1;i<=num;i++)
    {
        f*=i;
    }
    // console.log("factorial of  "+num+"  is : "+f);
    console.log(`factorial of ${num} is : ${f}`);
}
fact(3);