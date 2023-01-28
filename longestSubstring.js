

function longestCommonSubstring(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    result = 0;
    let end = 0;

    let dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if(str1[i-1] == str2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1

                if(dp[i][j]>result){
                    result = dp[i][j];
                    end = i-1;
                }
            }
        }
    }


    if(result==0){
        console.log("")
    }else{
        console.log(str1.substr(end-result))
    }

}


longestCommonSubstring("abcdxyz", "xyzabc")