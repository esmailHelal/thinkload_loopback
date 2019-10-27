"use strict";

module.exports = function(Book) {
  Book.validatesUniquenessOf("phonebook");
  Book.validatesLengthOf("name", { min: 3, message: { min: "too weak" } });
  Book.findname = function(value, cb) {
    Book.find(
      {
        where: {
          name: {
            eq: value
          }
        }
      },
      cb
    );
  };
  Book.remoteMethod("findname", {
    accepts: {
      arg: "name",
      type: "string"
    },
    returns: {
      arg: "findname",
      type: "string"
    },
    http: {
      path: "/findname",
      verb: "get"
    }
  });
};
