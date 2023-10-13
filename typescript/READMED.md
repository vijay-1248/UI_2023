Introduction to typescript 
----------------------------

=> Features of typescript
    
    - it is strongly typed 
    - it is strictly typed
    - it is an OOP language
    - it can directly interact with hardware.
    - less memory 
    - faster 
    - light weight
    - it is used to build large scale application.

note :

    - browser can't understand typescript.
    - typescript is translated in javascript.

# Typescript architecture

![image](https://github.com/vijay-1248/UI_2023/assets/58870634/90c154ea-52a3-4124-b5cc-acbb0d20d6ee)

 # Core compiler 

     - core.ts: it verifies the keywords. 
     - program.ts: it verifies program structure.
     - parser.ts: it is responsible for converting one type to another.
     - cheker.ts: it is resposible for handling input.
     - Scanner.ts: it is responsible for handling input.
     - Emmitter.ts: it is responsible for handling output.
     
# standalone compiler [tsc.ts]

    it is transcompiles typescript program into javascript

# Language service [service.ts]

    - it provides pre-defined functions and verious required for typescript.
    - service is a pre-defiend business logic

# ts server [server.ts]

    - Hoisting.
    - Request and response.
    - TypeScript programs are hosted compile and manged on server.

# vs shim [shim.ts]

    - it makes the typescript program cross platform
    - Typescript program ==> compiler ==> js code ==> shim ==> managed code.
    - managed code is suitable for all os service.

# Manage language service 

    - it is the service suitable for all os 
    - it is cross platform 
    - plateform nutral


















     
