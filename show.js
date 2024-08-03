function find(find,n) {
    if (find=="even") {
        for (let i = 2; i <=n; i+=2) {
            console.log(i);
            
        }
    } else if(find=="odd") {
         for (let i = 1; i <= n; i += 2) {
           console.log(i);
         }
    }
}
find("odd", 10);
