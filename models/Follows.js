const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Model representation of the database stored Follows entity
 */
const followsSchema = new Schema({
	followee: {
 		type: Schema.Types.ObjectId,
 		ref: "User",
    	required: true
	},
	follower: {
 		type: Schema.Types.ObjectId,
 		ref: "User",
    	required: true
	}
});

followsSchema.index({ follower: 1 });

module.exports =  mongoose.model('Follows', followsSchema);