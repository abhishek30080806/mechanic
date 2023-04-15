import express from 'express';
import bodyParser from 'body-parser';
import customerRouter from './routes/customer.route.js'
import mongoose from 'mongoose';
// import shopkeeperRouter from './routes/shopkeeper.route.js';
import bookingRouter from './routes/booking.route.js';
// import mechanicRouter from './routes/mechanic.route.js'
// import shopRouter from './routes/shop.route.js';
// import dropDownRouter from './routes/dropDown.route.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongourl = "mongodb+srv://coderhub:ddEzvZ6iPe4pKJrF@cluster0.nalrul7.mongodb.net/mr_mechanic?retryWrites=true&w=majority";

mongoose.connect(mongourl)
    .then(result => {
        app.use(bodyParser.json());
        // app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use("/customer", customerRouter);
        // app.use("/shopkeeper",shopkeeperRouter);
        app.use("/booking",bookingRouter);
        // app.use("/mechanic",mechanicRouter);
        // app.use("/shop",shopRouter);
        // app.use("/dropDown",dropDownRouter);

        app.listen(3010, () => {
            console.log("server start.......");
        });
    })
    .catch(err => {
        console.log(err);
    });