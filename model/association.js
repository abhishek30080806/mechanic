import sequalize from "./dbconfig.js";
import Booking from "./booking.model.js";
import City from "./city.model.js";
import Pincode from "./pincode.model.js";
import Mechanic from "./mechanic.model.js";
import Shop from "./shop.model.js";
import Shopkeeper from "./shopkeeper.model.js";
import State from "./state.model.js";
import Customer from "./customer.model.js";



State.hasMany(City,{
    foreignKey:"stateId",
});
City.belongsTo(State,{
    foreignKey:"id",targetKey:"id"
});
City.hasMany(Pincode,{
    foreignKey:"cityName"
});
Pincode.belongsTo(City,{
    foreignKey:"cityName",targetKey:"cityName"
});
// Customer.hasMany(Booking,{
//     foreignKey:"customerId"
// });
// Booking.belongsTo(Customer,{
//     foreignKey:"id",targetKey:"id"
// });
// Customer.hasMany(Booking,{
//     foreignKey:"customerId",
// });
// Booking.belongsTo(Customer,{
//     foreignKey:"id",targetKey:"id"
// });

// Shop.hasMany(Booking,{
//     foreignKey:"shopId"
// });

// Booking.belongsTo(Shop,{
//     foreignKey:"id",targetKey:"id"
// })

// Mechanic.hasMany(Booking,{
//     foreignKey:"mechanicId"
// })

// Booking.belongsTo(Mechanic,{
//     foreignKey:"id",targetKey:"id"
// })



export {City,Pincode,Customer,Shop,State,Shopkeeper,Mechanic,Booking};