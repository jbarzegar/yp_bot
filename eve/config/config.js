const config = {
  MONGODB: {
    URL: process.env.MONGO_URL || 'mongodb://localhost/test'
  },
  secret: 'nwqg$4z#vfi5q*cz^r#l$6o94hl9bgn!l2%$ww-nrfgpxv)=*2' || process.env.JEN_SECRET
};

module.exports = config;
