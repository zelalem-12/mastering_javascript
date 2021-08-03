/*
1. Excution context
2. Scope chain
3. JavaScript Internals 
4. Hoisting 
5. closure 

JavaScript runtime vs Browser API 
Web APIs is the place the async operations(fetch requests, promises and timers) with thier 
callbacks are waitint to complete. 
when the async operation gets completed its will be enqued to the task/callback queue and when the 
call stack gets empty the same callback will be dequeued by the event loop. 
Then the callback gets excuted in the callstack 

E
Callback || Event  Queue
    job Queue stores fullfilled promises' callbacks 
    Task Queue ||  stores timed out setTimeout callbacks

 resolved promises are enqueued to the job Queue while timers are enqueued the task Queue   
** Event Loop Priorities dequeueing jobs over tasks


Finaly:
    Why an immediately resolved promise processed faster than an immediate timer?

    Reason: It is  because of the priorities of the event loop dequeueing jobs over task. 
    thenable callbacks are called first 


1. Execution context (EC)  =>   Is defined as the environment in which the javscript code is being excuted .  
    Environment  means the value of this, variables, objects, and functions the javascript code has access 
    to at a particular time. 


    Type of Excution Context in Javascript

    a. Global Excution Context
        All global codes(code not side a function or an object excuted here in this conrext)
        There is always one global excution context  in javascript
        since javascript is single threa
    b.  Functional Excution Context
        This function excution context created when a function finds a function call. 
        Each function has its own excution context. There will be more functional excutio context
        ALl global Excution context has acccess to all the codes og the global excutimn context
        if the script is excuted in strict mood the value of this is undefined  in functional excutio context
        else the value of this is a window object in browser and gloabl in node 
        
        
    c. Eval 
        excution context inside a val function 


Execution context stack (ECS): 
    Excution context stack is a data structure, last in first out data structure, to store all the excution stacks 
     created during the life cycle of the script




*/
