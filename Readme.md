ik heb 4 Models 
    Airsoftgun
    client --> client heeft een 1 op veel relatie met airsoft dus 1 klant kan meerdere airsoft hebben.
    Group
    ClientGroup --> is eigelijk de bridge table voor de veel op veel relatie clients <--> Groups
    
elk model heeft zijn eigen controller met alle CRUD actions.

in de airsoft controller kan je 
        paging 
        sorten --> op brand, name, id
        search --> op type, brand
        
ik ga met mijn airsoft controller via een service naar angular daar n kan je zoeken op id door via op details te drukken.
je kan ook deleten maar post en put is mij niet gelukt.

ik heb mijn applicatie voorzien van Google OAuth in mijn login component.
het beveiligen van mijn Api is niet helemaal gelukt 
    ik krijg mijn idToken van google maar zit met het probleem van de issuer dat er geen "http://" voor staat.
    ik heb het Autorize atribuut in mijn airsoft controller gezet bij het zoeken op Id.
    ik heb bij het get request in de header een velt Authentication bij gevoegt,
    waar dan de idToken in sta maar werkt helaas niet door dat ik de error krijg "invalid token".
    --> als u wilt zoeken op Id zou u eerst het Authorize atribuut in commentaar moeten zetten!!
    
ik heb een 3th party api aan geroepen het heeft niet veel te maken met mijn api zelf maar het werkt wel.

het deployen naar de cloud heb ik ook geprobeert maar kreeg telkens een error die ik niet opgelost kreeg.