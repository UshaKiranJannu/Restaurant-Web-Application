const { connect } = require("http2");

db = connect("localhost:27017/sample_restaurants");

db.getCollectionNames();