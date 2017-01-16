# HW-SHELL
A plugin shell for UI

## Goals
### web-shell
A shell to manage views
- Service workers to manage offline cache
- Every app needs to have a manifest.json / memoized functions? 
- borrow from browser’s plugin architecture
- Central notification center
- SSE vs WebSockets vs Long polling
- Central service provider
### Global State
- Shell State
    - readonly public => can be subscribed to > for changes
    - private
    - private to app
        - can be subscribed to > for changes
        - can be updated using methods implemented by register
### Views
- rendered inside shadow dom
    - isolated dom and styles
- can subscribe to router updates
    - route params
    - query params
    - subscribe to global state => immutable
    -  manage their own state
- implement methods
    - default
        - constructor
    - lifecycle hooks
        - will load
        - did load
    - interaction hooks
        - route changed
        - state changed
        - params changed (part of state ?)
        - add notification (return notification id) => promise vs observable
        - show popup => promise vs observable
    - application hooks
        - will install
        - did install
        - will uninstall
        - did uninstall
    - 

    ## Conflicts
    > Promises vs Observables
    
    > JS vs HTML as entry point

