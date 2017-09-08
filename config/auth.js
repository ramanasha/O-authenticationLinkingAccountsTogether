// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '126359834667031', // your App ID
        'clientSecret'  : '4a45dec6752816e5eb34e6c81153ae12', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'iJheCxf6J2W2SX1ZUnnBu7HID',
        'consumerSecret'    : 'T6QrG2gQxIFUC1mPV17cnyWF1C4UxqHC7wIsahJgGeOnVCvRNx',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '892952557377-3sgjqdm5mlaakaj2okt89sp20fn18si2.apps.googleusercontent.com',
        'clientSecret'  : 'D8nr5wvVUm07_mvDWgD93CSp',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
