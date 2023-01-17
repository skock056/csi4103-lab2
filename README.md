# csi4103-lab2
Sebastien Kock, 300137051
January 17th, 2023

## Exercise 0.4

Below is the Mermaid sequence diagram representing the operations when adding a new note to the multi-page version of the website https://studies.cs.helsinki.fi/exampleapp/notes. Upon adding the new note to the app, a copy of the current state of the app is essentially created, but with the new note added. Once the new note has been added to the list, the page reloads. This sequence of events produces the following diagram:

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
    Server-->>Client: HTML
    deactivate Server
```

## Exercise 0.5

This section contains the Mermaid sequence diagram for the single-page representation of the notes app (found at https://studies.cs.helsinki.fi/exampleapp/spa).

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
    Server-->>Client: HTML
    deactivate Server
```

## Exercise 0.6

Unlike the sequence diagram for the multi-page version of the app, upon adding a new note to the single-page version of the app, the page does not refresh. Instead, the new entry gets added directly to the JSON file and is then displayed, producing the following diagram:

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
    Server-->>Client: HTML
    deactivate Server

    Client->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate Server
    Server-->>Client: {"message":"note created"}
    deactivate Server
```