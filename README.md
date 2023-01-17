# csi4103-lab2
Sebastien Kock, 300137051
January 17th, 2023

## Exercise 0.4

Below is the Mermaid sequence diagram representing the operations when adding a new note to the multi-page version of the website https://studies.cs.helsinki.fi/exampleapp/notes.

```mermaid
sequenceDiagram
    participant Client
    participant Server
    
    Client->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate Server
    Server-->>Client: HTML document
    deactivate Server
    
    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Client: the css file
    deactivate Server
    
    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate Server
    Server-->>Client: the JavaScript file
    deactivate Server
    
    Note right of Client: The Client starts executing the JavaScript code that fetches the JSON from the Server
    
    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Client: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate Server    

    Note right of Client: The Client executes the callback function that renders the notes 

    Client->>Server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate Server
    Server-->>Client: the .ico file
    deactivate Server
```

## Exercise 0.5

This section contains the Mermaid sequence diagram for the single-page representation of the notes app (found at https://studies.cs.helsinki.fi/exampleapp/spa.)

```mermaid
sequenceDiagram
    participant Client
    participant Server

    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Client: The HTML document
    deactivate Server
    
    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Client: The CSS file
    deactivate Server
    
    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Client: The JavaScript file
    deactivate Server
    
    Note right of Client: The Client starts executing the JavaScript code that fetches the JSON from the Server
    
    Client->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server-->>Client: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate Server

    Note right of Client: The Client executes the callback function that renders the notes 

    Client->>Server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate Server
    Server-->>Client: the .ico file
    deactivate Server
```