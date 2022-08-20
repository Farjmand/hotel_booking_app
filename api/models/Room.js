import mongoose from 'mongoose';


const RoomSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
     
    },
    price: {
        type: Number, 
        required: true,
       
    },
    maxPeople: {
        type: String, 
        required: true,
       
    },
    desc: {
        type: String, 
    
    },
    roomNumbers: [{number: Number, unavailableDates: [{type: Date }]}],

},
    {
        timestamps: true
    },
)

export default mongoose.model("Room", RoomSchema )