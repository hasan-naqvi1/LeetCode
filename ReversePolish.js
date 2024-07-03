
    evalRPN(tokens) {
        let stack = []
        for (const c of tokens){
            if(!isNaN(c)){
                stack.push(Number(c))
            }
            else{
            const a = stack.pop()
            const b =  stack.pop()
            let result = 0;

            switch(c){
                case '+':
                result = a+b;
                break;
                case '-':
                result = b-a;
                break;
                case '*':
                result = a*b;
                break;
                case '/':
                result = Math.trunc(b/a);
                break;

                default: return null
            }
            stack.push(result)}
        }
    return stack.pop()
    }
