const Project = require('../models/project.js');
const Client = require('../models/client.js');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLEnumType, //this is used to make fields required
} = require('graphql');