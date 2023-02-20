import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    contactnum: Number,
    email: String,
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model("Contacts", ContactSchema);