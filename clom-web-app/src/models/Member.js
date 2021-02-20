export default {
    email: String | Boolean,
    photoURL: String,
    name: String,
    surname: String,
    bio: String,
    contact: {
        phone: String,
        geopoint: {
            latitude: Number,
            longitude: Number,
        },
    },
};