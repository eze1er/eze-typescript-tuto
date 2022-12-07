"use strict";
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 4] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 5] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 6] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.AISLE;
