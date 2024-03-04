var ParkingLot = /** @class */ (function () {
    function ParkingLot(totalSpots, motorcycleSpots, compactCarSpots, regularCarSpots, largeSpots) {
        this.totalSpots = totalSpots;
        this.remainingSpots = totalSpots;
        this.motorcycleSpots = motorcycleSpots;
        this.compactCarSpots = compactCarSpots;
        this.regularCarSpots = regularCarSpots;
        this.largeSpots = largeSpots;
        this.vanSpots = largeSpots; // Each van takes up 3 regular spots
    }
    ParkingLot.prototype.parkVehicle = function (type) {
        if (this.remainingSpots === 0) {
            console.log("Parking lot is full");
            return;
        }
        if (type === "motorcycle") {
            if (this.motorcycleSpots > 0) {
                this.motorcycleSpots--;
                this.remainingSpots--;
                console.log("Motorcycle parked");
            }
            else {
                console.log("No motorcycle spots available");
            }
        }
        else if (type === "compact") {
            if (this.compactCarSpots > 0) {
                this.compactCarSpots--;
                this.remainingSpots--;
                console.log("Compact car parked");
            }
            else if (this.regularCarSpots > 0) {
                this.regularCarSpots--;
                this.remainingSpots--;
                console.log("Regular car parked");
            }
            else {
                console.log("No car spots available");
            }
        }
        else if (type === "van") {
            if (this.largeSpots >= 3) {
                this.largeSpots -= 3;
                this.remainingSpots -= 3;
                console.log("Van parked");
            }
            else {
                console.log("No space for van");
            }
        }
    };
    ParkingLot.prototype.logRemainingSpots = function () {
        console.log("Remaining spots: ".concat(this.remainingSpots));
    };
    ParkingLot.prototype.logTotalSpotsAvailable = function () {
        console.log("Total spots available: ".concat(this.totalSpots));
    };
    ParkingLot.prototype.logIsFull = function () {
        console.log("Is parking lot full?", this.remainingSpots === 0);
    };
    ParkingLot.prototype.logIsEmpty = function () {
        console.log("Is parking lot empty?", this.remainingSpots === this.totalSpots);
    };
    ParkingLot.prototype.logMotorcycleSpotsFull = function () {
        console.log("Are motorcycle spots full?", this.motorcycleSpots === 0);
    };
    ParkingLot.prototype.logVansOccupiedSpots = function () {
        console.log("Number of spots occupied by vans:", (this.totalSpots - this.remainingSpots) / 3);
    };
    return ParkingLot;
}());
// Example usage
var parkingLot = new ParkingLot(50, 20, 10, 10, 10);
parkingLot.parkVehicle("motorcycle");
parkingLot.parkVehicle("compact");
parkingLot.parkVehicle("van");
parkingLot.logRemainingSpots();
parkingLot.logTotalSpotsAvailable();
parkingLot.logIsFull();
parkingLot.logIsEmpty();
parkingLot.logMotorcycleSpotsFull();
parkingLot.logVansOccupiedSpots();
