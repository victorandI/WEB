from models import Session, Administrator, Passenger, RentalService, Car

def test():
    session = Session()

    admin1 = Administrator(idAdministrator = 2, FirstName = "li", LastName = "Soun", phone = "+380978925784")
    passeng1 = Passenger (idPassenger = 2, FirstName = "Noah", LastName = "Nikolas", phone = "+380970920783", documentNum = "12345078910", address = "Sint street")


    session.add(admin1)

    session.add(passeng1)


    session.commit()

    session.close()