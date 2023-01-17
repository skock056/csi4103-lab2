# csi4103-lab2

```mermaid
sequenceDiagram
    participant Client
    participant Server
    
    Client->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Server
    Server-->>Client: Reload the page with new note
    deactivate Server

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